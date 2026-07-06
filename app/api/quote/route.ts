/**
 * app/api/quote/route.ts
 *
 * Handles quote form submissions from the homepage.
 * Sends two emails via Resend:
 *   1. Notification to Hilary (hc@hccoretech.com) with the full brief
 *   2. Confirmation to the submitter, warm and personal
 *
 * Protects against:
 *   . Bot spam via honeypot field (silent drop, appears successful)
 *   . Abuse via in-memory rate limiting (5 submissions per IP per hour)
 *   . Missing/invalid data via server-side validation
 */

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5

type QuoteBody = {
  name?: string
  email?: string
  company?: string
  services?: string[]
  brief?: string
  budget?: string
  timeline?: string
  website?: string
}

export async function POST(req: Request) {
  try {
    const body: QuoteBody = await req.json()

    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
    const now = Date.now()
    const entry = rateLimit.get(ip)
    if (entry && now < entry.resetAt) {
      if (entry.count >= MAX_PER_WINDOW) {
        return NextResponse.json(
          { error: 'Too many submissions. Please try again in an hour, or email hc@hccoretech.com directly.' },
          { status: 429 },
        )
      }
      entry.count++
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    }

    const name    = (body.name    || '').trim()
    const email   = (body.email   || '').trim()
    const brief   = (body.brief   || '').trim()
    const company = (body.company || '').trim()
    const budget  = (body.budget  || '').trim()
    const timeline = (body.timeline || '').trim()
    const services = Array.isArray(body.services) ? body.services : []

    if (!name || !email || !brief) {
      return NextResponse.json(
        { error: 'Name, email, and project brief are all required.' },
        { status: 400 },
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'That email address does not look right. Please double-check.' },
        { status: 400 },
      )
    }
    if (brief.length < 20) {
      return NextResponse.json(
        { error: 'Please share a bit more about your project (at least 20 characters).' },
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: 'HC Core Tech Quotes <quotes@hccoretech.com>',
      to: 'hc@hccoretech.com',
      replyTo: email,
      subject: `New quote request from ${name}${company ? ` (${company})` : ''}`,
      html: notificationEmail({ name, email, company, services, budget, timeline, brief }),
    })

    await resend.emails.send({
      from: 'Hilary Azimoh <hc@hccoretech.com>',
      to: email,
      subject: "Thanks for reaching out, I'll respond within 48 hours",
      html: confirmationEmail({ name, brief }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please try again in a moment, or email hc@hccoretech.com directly.' },
      { status: 500 },
    )
  }
}

// ---------------------------------------------------------------
// Interlocked HCCT monogram as an embedded base64 PNG.
// This is the most reliable way to display custom typography in email
// . Gmail, Outlook, Apple Mail, and every other client render <img>
// tags identically. The PNG is 97x39, generated at 4x resolution for
// retina sharpness.
// ---------------------------------------------------------------

const HCCT_MONOGRAM_B64 = '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'

function hcctMonogramHtml(): string {
  return `<img src="data:image/png;base64,${HCCT_MONOGRAM_B64}" width="97" height="39" alt="HC Core Tech" style="display:block;border:0;outline:none;text-decoration:none;">`
}

type NotificationParams = {
  name: string; email: string; company: string;
  services: string[]; budget: string; timeline: string; brief: string;
}

function notificationEmail(p: NotificationParams): string {
  const row = (label: string, value: string) => value ? `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #22264A;vertical-align:top;width:140px;">
        <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#8A7038;">${label}</div>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #22264A;vertical-align:top;">
        <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#E2E2E6;line-height:1.5;">${escapeHtml(value)}</div>
      </td>
    </tr>` : ''

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New quote request</title></head>
<body style="margin:0;padding:0;background:#0C0E1E;font-family:'Inter',Arial,sans-serif;">
  <table cellpadding="0" cellspacing="0" width="100%" style="background:#0C0E1E;padding:40px 20px;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background:#14172E;border:1px solid #22264A;border-radius:8px;padding:32px;">
        <tr><td>
          <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#D4A85E;margin-bottom:12px;">New quote request</div>
          <h1 style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;font-size:28px;color:#E2E2E6;margin:0 0 24px;letter-spacing:-0.01em;">
            From ${escapeHtml(p.name)}
          </h1>

          <table cellpadding="0" cellspacing="0" width="100%">
            ${row('Name',     p.name)}
            ${row('Email',    p.email)}
            ${row('Company',  p.company)}
            ${row('Services', p.services.join(', '))}
            ${row('Budget',   p.budget)}
            ${row('Timeline', p.timeline)}
          </table>

          <div style="margin-top:24px;padding:20px;background:#0C0E1E;border:1px solid #22264A;border-radius:6px;">
            <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#8A7038;margin-bottom:12px;">Project brief</div>
            <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#E2E2E6;line-height:1.7;white-space:pre-wrap;">${escapeHtml(p.brief)}</div>
          </div>

          <div style="margin-top:32px;padding-top:20px;border-top:1px solid #22264A;font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.14em;color:#6B7280;">
            Reply directly to this email to respond to ${escapeHtml(p.name)}.
          </div>
        </td></tr>
      </table>

      <div style="max-width:600px;margin:24px auto 0;text-align:center;font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.22em;color:#6B7280;">
        HC CORE TECH . AMSTERDAM, NL
      </div>
    </td></tr>
  </table>
</body>
</html>`
}

type ConfirmationParams = {
  name: string; brief: string;
}

function confirmationEmail(p: ConfirmationParams): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Thanks for reaching out</title></head>
<body style="margin:0;padding:0;background:#0C0E1E;font-family:'Inter',Arial,sans-serif;">
  <table cellpadding="0" cellspacing="0" width="100%" style="background:#0C0E1E;padding:40px 20px;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background:#14172E;border:1px solid #22264A;border-radius:8px;padding:40px 32px;">
        <tr><td>
          <div style="margin-bottom:32px;">
            ${hcctMonogramHtml()}
            <div style="width:60px;height:1px;background:#8A7038;margin-top:14px;"></div>
          </div>

          <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#E2E2E6;line-height:1.4;margin-bottom:20px;">
            Hi ${escapeHtml(p.name)},
          </div>

          <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#9CA3AF;line-height:1.75;margin-bottom:18px;">
            Thanks for reaching out. I've received your brief and I read every
            message myself, so this has landed with the right person.
          </div>

          <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#9CA3AF;line-height:1.75;margin-bottom:18px;">
            I'll respond within 48 hours with either a written scoping document,
            a couple of clarifying questions, or an honest note if we're not
            the right fit.
          </div>

          <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#9CA3AF;line-height:1.75;margin-bottom:32px;">
            If you'd rather talk before that, feel free to book a discovery call
            at
            <a href="https://calendly.com/hc-hccoretech/30min" style="color:#D4A85E;text-decoration:none;border-bottom:1px solid #8A7038;">calendly.com/hc-hccoretech/30min</a>.
          </div>

          <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:17px;color:#E2E2E6;margin-bottom:6px;">
            Warmly,
          </div>
          <div style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#E2E2E6;">
            Hilary Azimoh
          </div>
          <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8A7038;margin-top:6px;">
            Founder . HC Core Tech
          </div>

          <div style="margin-top:40px;padding-top:24px;border-top:1px solid #22264A;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#6B7280;line-height:1.6;">
            <a href="https://hccoretech.com" style="color:#9CA3AF;text-decoration:none;">hccoretech.com</a>
            &nbsp;.&nbsp;
            <a href="mailto:hc@hccoretech.com" style="color:#9CA3AF;text-decoration:none;">hc@hccoretech.com</a>
            &nbsp;.&nbsp;
            Amsterdam, NL
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}