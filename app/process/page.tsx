'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SharedLayout, { T, FONTS, Reveal } from '../components/SharedLayout'

const PROCESS = [
  {
    num: '01',
    title: 'Scope in writing',
    lead: 'Every engagement starts with a versioned scoping document.',
    body: [
      'Nothing is negotiated in chat threads or on calls that later get forgotten. Before code is written, we agree on the scope in writing: what is in, what is out, what it costs, what the timeline is, what the milestones are.',
      'The document is versioned. If we later decide to change scope, we amend it and both agree. That is the record we come back to when memory disagrees.',
    ],
    outputs: [
      'Written scoping document (Word / PDF)',
      'Fixed price for fixed scope, or clear rate for open scope',
      'Milestone schedule with review points',
      'Explicitly out-of-scope list',
    ],
  },
  {
    num: '02',
    title: 'Direct engineer access',
    lead: 'You talk to the engineer building your work.',
    body: [
      'There is no project manager between you and the code. When you have a question, you ask me directly. When I have a question, I ask you directly. The turnaround is measured in hours, not days.',
      'Slack, email, or scheduled review calls, whichever works for your team. I hold two weekly office hours slots for active engagements so you always have a predictable time to get eyes on your project.',
    ],
    outputs: [
      'Shared Slack channel or email thread',
      'Weekly status update in writing',
      'Two 30-minute office hours slots per week per engagement',
      'On-demand response for blockers',
    ],
  },
  {
    num: '03',
    title: 'Versioned artifacts',
    lead: 'Every major deliverable is a versioned document.',
    body: [
      'Copy, brand context, technical plans, handover documents. Everything gets a versioned file. Not slides that get lost in a chat, not markdown scattered across a repo. Real documents you can print, hand to your team, or read a year from now.',
      'This matters because engagements end. When ours ends, you should have a complete record of what was built, why it was built that way, and how to keep working with it.',
    ],
    outputs: [
      'Versioned Word/PDF documents for every major deliverable',
      'Brand context document (colors, typography, voice)',
      'Technical plan and architecture document',
      'Handover document at project close',
    ],
  },
  {
    num: '04',
    title: 'Clean walk-away',
    lead: 'You own everything. Support is a choice, not an inheritance.',
    body: [
      'Every custom build ships to your infrastructure. Every credential, every account, every domain is registered in your name. Every repository sits under your GitHub organisation, not mine.',
      'When our engagement ends, you should be able to keep working with any competent engineer. Post-launch support is a retainer you can choose to take. It is never a lock-in you inherit.',
    ],
    outputs: [
      'All code in your repositories',
      'All credentials, accounts, and domains in your name',
      'Handover checklist with everything you need to keep running',
      'Optional support retainer (never automatic)',
    ],
  },
]

export default function ProcessPage() {
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
          <span>Process</span>
        </div>

        <h1 style={{
          fontFamily: FONTS.serif, fontWeight: 400,
          fontSize: 'clamp(44px, 6vw, 84px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          color: T.platinum, marginBottom: '28px',
        }}>
          Four principles.
          <br />
          <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
            No exceptions.
          </span>
        </h1>

        <p style={{
          fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
          color: T.softText, maxWidth: '640px',
        }}>
          The way I run engagements does not change based on the client, the project
          size, or the price. These four principles are how you get consistent
          delivery from a one-person practice.
        </p>
      </section>

      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>
        {PROCESS.map((p, i) => (
          <section key={p.num} style={{
            padding: '64px 0',
            borderTop: i === 0 ? 'none' : `1px solid ${T.hairline}`,
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'minmax(80px, 100px) 1fr',
              gap: '32px', marginBottom: '28px',
            }}>
              <div style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '38px', color: T.gold, fontWeight: 500,
                letterSpacing: '0.02em',
              }}>{p.num}</div>
              <div>
                <h2 style={{
                  fontFamily: FONTS.serif, fontWeight: 500,
                  fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.1,
                  letterSpacing: '-0.015em', color: T.platinum,
                  marginBottom: '14px',
                }}>{p.title}</h2>
                <p style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '20px', lineHeight: 1.4,
                  color: T.gold,
                }}>{p.lead}</p>
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'minmax(80px, 100px) 1fr',
              gap: '32px',
            }}>
              <div />
              <div>
                {p.body.map((par, j) => (
                  <p key={j} style={{
                    fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
                    color: T.softText, marginBottom: '18px',
                  }}>{par}</p>
                ))}

                <div data-card="true" style={{
                  marginTop: '24px', padding: '20px 22px',
                  background: T.deep, border: `1px solid ${T.midnight}`,
                  borderRadius: '6px',
                }}>
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: '10px',
                    letterSpacing: '0.22em', color: T.gold,
                    textTransform: 'uppercase', marginBottom: '14px',
                  }}>What you actually get</div>
                  {p.outputs.map(o => (
                    <div key={o} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      padding: '4px 0',
                      fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.55,
                      color: T.platinum,
                    }}>
                      <span style={{ color: T.gold, flexShrink: 0, paddingTop: '2px' }}>·</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section style={{
        padding: '80px 32px', marginTop: '40px',
        background: T.deep, borderTop: `1px solid ${T.hairline}`,
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.28em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '24px',
          }}>Ready to start</div>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(30px, 3.6vw, 44px)',
            lineHeight: 1.15, letterSpacing: '-0.015em',
            color: T.platinum, marginBottom: '28px',
          }}>
            Ready to see this <span style={{ fontStyle: 'italic', color: T.gold }}>in practice?</span>
          </h2>
          <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link data-btn="primary" href="/#quote" style={{
              padding: '14px 26px',
              background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>Request a quote <ArrowRight size={14} /></Link>
            <a href="https://calendly.com/hc-hccoretech/30min" data-btn="secondary" style={{
              padding: '14px 26px',
              background: 'transparent', border: `1px solid ${T.midnight}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
            }}>Book a call</a>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}