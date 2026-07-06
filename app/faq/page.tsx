'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import SharedLayout, { T, FONTS, Reveal } from '../components/SharedLayout'

const FAQ = [
  {
    q: 'Why work with a one-person practice instead of an agency?',
    a: 'Because the person you talk to is the person doing the work. Agencies buffer your engineering team from you through account managers and project coordinators, which introduces latency and translation errors. A solo practice trades away scale for depth. If your project genuinely needs 30 engineers, an agency will serve you well. If it needs one great one who owns the outcome, this practice is built for that.',
  },
  {
    q: 'What if you get sick, take vacation, or get hit by a bus?',
    a: 'Fair question, and the honest answer is: engagements are scoped to fit around real life, not to depend on my heroic 24/7 availability. Every project is documented in versioned artifacts that another competent engineer could pick up. For CoreDesk platform clients, there is a documented runbook and code that runs without me. For active custom builds, I state my availability clearly at project start and build buffer into timelines.',
  },
  {
    q: 'How do you handle projects that need more hands than you have?',
    a: 'This is where I usually recommend we talk more before starting. I do not white-label freelancers or subcontract under my name, so if a project needs three engineers full-time for six months, I am probably not the right fit and I will be upfront about that on the discovery call. For projects that need occasional specialist input (a specific security review, a specific model evaluation), I bring in named collaborators with your explicit approval.',
  },
  {
    q: 'What does "clean walk-away" actually mean?',
    a: 'Every custom build ships to your infrastructure. Every credential is registered in your name. Every repository lives in your GitHub organisation. If we finish an engagement and never speak again, you should be able to hire any competent engineer to keep working on the codebase without needing to reach me. That is the test I hold myself to.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, gladly. I use a standard mutual NDA I can share, or I will sign yours provided it does not include punitive terms or non-competes that would prevent me working with other clients in the same broad industry.',
  },
  {
    q: 'What is CoreDesk and how is it different from the services?',
    a: 'CoreDesk is a subscription platform I built and operate: an AI-first back office for independent practitioners and small teams. It handles invoicing, proposals, CRM, meetings, agents, and governance in one workspace. Services are custom engagements I deliver to individual clients. CoreDesk is a product with a monthly price. Services are projects with a fixed scope.',
  },
  {
    q: 'Can you work with clients outside the EU?',
    a: 'Yes. Current clients are in the Netherlands and Canada. I have delivered work to Swiss clients as well. Time zones are workable as long as we can find a couple of overlap hours per week for calls. Payment in EUR, USD, GBP, or CHF.',
  },
  {
    q: 'What is your response time?',
    a: 'For new enquiries: within 48 hours by email. For active engagements: same-day response to messages during weekday working hours (Central European Time), and structured weekly written updates.',
  },
  {
    q: 'Do you offer discounts or "starter packages"?',
    a: 'The prices are the prices, but the scoping conversation is very much on the table. If a smaller project would actually solve your problem, I will scope the smaller project so we start where you actually need. I would rather deliver a great small thing than an underwater bigger one.',
  },
  {
    q: 'Where do I start if I want to work with you?',
    a: 'Two options. Either book a discovery call (30 minutes, no cost, no obligation), or send a written brief through the request-a-quote form on the homepage. Either way, I respond within 48 hours with a written next step: a scoping document, more questions, or a referral if we are not a fit.',
  },
]

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <SharedLayout>
      <section style={{ padding: '80px 32px 64px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: '11px',
          letterSpacing: '0.24em', color: T.goldDeep,
          textTransform: 'uppercase', marginBottom: '28px',
        }}>
          <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
          <span>FAQ</span>
        </div>

        <h1 style={{
          fontFamily: FONTS.serif, fontWeight: 400,
          fontSize: 'clamp(44px, 6vw, 84px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          color: T.platinum, marginBottom: '28px',
        }}>
          Frequently asked,
          <br />
          <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
            honestly answered.
          </span>
        </h1>

        <p style={{
          fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
          color: T.softText, maxWidth: '640px',
        }}>
          The questions I get most often on discovery calls, answered here so you
          have them before we speak. If yours is not on the list,
          {' '}
          <a href="mailto:hc@hccoretech.com" style={{ color: T.gold, textDecoration: 'none' }}>
            ask me directly
          </a>
          {' '}and I will answer.
        </p>
      </section>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 32px 80px' }}>
        {FAQ.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div key={i} style={{
              borderTop: `1px solid ${T.hairline}`,
              borderBottom: i === FAQ.length - 1 ? `1px solid ${T.hairline}` : 'none',
            }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: '100%', padding: '24px 0',
                  background: 'transparent', border: 'none',
                  cursor: 'pointer', textAlign: 'left' as const,
                  display: 'flex', alignItems: 'flex-start',
                  gap: '20px', color: 'inherit',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: FONTS.serif, fontWeight: 500,
                    fontSize: 'clamp(19px, 2.2vw, 24px)', lineHeight: 1.3,
                    color: T.platinum, letterSpacing: '-0.005em',
                  }}>{item.q}</div>
                </div>
                <div style={{
                  flexShrink: 0, paddingTop: '4px',
                  color: isOpen ? T.gold : T.goldDeep,
                  transition: 'color 200ms',
                }}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              {isOpen && (
                <div style={{
                  padding: '0 0 28px 0',
                  fontFamily: FONTS.ui, fontSize: '16px',
                  lineHeight: 1.7, color: T.softText,
                  maxWidth: '720px',
                }}>{item.a}</div>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <section style={{
        padding: '80px 32px', marginTop: '40px',
        background: T.deep, borderTop: `1px solid ${T.hairline}`,
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(28px, 3.4vw, 40px)',
            lineHeight: 1.15, letterSpacing: '-0.015em',
            color: T.platinum, marginBottom: '20px',
          }}>
            Still have <span style={{ fontStyle: 'italic', color: T.gold }}>questions?</span>
          </h2>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '15.5px', lineHeight: 1.6,
            color: T.softText, marginBottom: '32px',
          }}>
            Book a 30-minute call. No cost, no obligation, no sales pitch.
          </p>
          <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a data-btn="primary" href="https://calendly.com/hc-hccoretech/30min" style={{
              padding: '14px 26px',
              background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>Book a call <ArrowRight size={14} /></a>
            <Link href="/#quote" data-btn="secondary" style={{
              padding: '14px 26px',
              background: 'transparent', border: `1px solid ${T.midnight}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
            }}>Request a quote</Link>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}