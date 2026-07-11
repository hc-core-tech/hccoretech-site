'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../../components/SharedLayout'

/**
 * /work/seraph-zorg case study.
 * JS Zorg en Advies | Seraph Zorg — founding CoreDesk customer,
 * full brand + two websites + ongoing platform.
 */

export default function SeraphZorgCaseStudy() {
  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{ padding: '80px 32px 48px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.24em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
            <Link href="/work" style={{ color: T.muted, textDecoration: 'none' }}>Work</Link>
            <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
            <span>Seraph Zorg</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 12px', marginBottom: '20px',
            background: 'rgba(74, 222, 128, 0.08)',
            border: '1px solid rgba(74, 222, 128, 0.28)',
            borderRadius: '3px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
            <span style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.22em', color: '#4ADE80',
              textTransform: 'uppercase',
            }}>Live . founding customer</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '20px',
          }}>
            JS Zorg en Advies
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              | Seraph Zorg
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: 'clamp(19px, 2vw, 24px)', lineHeight: 1.5,
            color: T.softText, maxWidth: '740px',
            letterSpacing: '-0.005em',
          }}>
            A trauma-sensitive, culturally aware Dutch care practice supporting
            people and families through recovery, delivered with a brand and back
            office that match the seriousness of the work.
          </p>
        </Reveal>
      </section>

      {/* Quick facts strip */}
      <section style={{ padding: '32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div data-card="true" style={{
            padding: '28px 24px',
            background: T.deep,
            border: `1px solid ${T.midnight}`,
            borderRadius: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
          }}>
            <Fact label="Client"    value="Jiska" />
            <Fact label="Sector"    value="Care · Advisory" />
            <Fact label="Location"  value="Diemen, NL" />
            <Fact label="Duration"  value="2025 to present" />
            <Fact label="Services"  value="Brand · Web · CoreDesk" />
          </div>
        </Reveal>
      </section>

      {/* The brief */}
      <Section eyebrow="The brief">
        <p style={paragraphStyle(true)}>
          Jiska founded JS Zorg en Advies to support people, families, and
          organizations working through recovery across the Dutch sociaal
          domein. A defining part of her work is with families affected by the
          toeslagenaffaire, the childcare benefits scandal that upended
          thousands of Dutch households.
        </p>
        <p style={paragraphStyle()}>
          Under the Seraph Zorg handelsnaam, she needed a professional web
          presence that felt as careful, trauma-sensitive, and culturally aware
          as her practice itself.
        </p>
        <p style={paragraphStyle()}>
          The requirements were clear. A brand system that could carry both the
          seriousness of the work and the warmth of the person doing it. Two
          websites, one for the practice, one for the founder. A back office that
          let her spend time with her clients instead of chasing invoices and
          proposal templates.
        </p>
        <p style={paragraphStyle()}>
          What she did not need: an agency retainer, a strategy deck, or six
          months of committee design.
        </p>
      </Section>

      {/* The approach */}
      <Section eyebrow="The approach">
        <p style={paragraphStyle(true)}>
          Brand direction started with colour: mustard gold as the base, warm
          neutrals as the surround. A modern serif for the display marks, a
          clean sans for body. Every choice tested against one question: does
          this feel considered enough for the people the practice serves?
        </p>

        <p style={paragraphStyle()}>
          Two websites, one voice.
        </p>

        <SubSection title="seraphzorg.com">
          Carries the practice. Who the work is for, what happens in a session,
          how families can reach out. Written in Dutch, with English available.
          Discreet inquiry form, no dark patterns, no urgency tactics.
        </SubSection>

        <SubSection title="jiska.seraphzorg.com">
          Carries the founder. Her training, her story, her values. Cross-linked
          with the practice website so a visitor arriving through either door finds
          the whole picture.
        </SubSection>

        <p style={paragraphStyle()}>
          Both websites deployed on eWolve (Dutch hosting), mapped to her own
          domains, tuned for Dutch and English search performance. Analytics wired to a private
          dashboard so Jiska sees traffic without exposing visitor data to a
          third party.
        </p>

        <p style={paragraphStyle()}>
          Alongside the websites, JS Zorg en Advies became the founding customer of
          CoreDesk, my AI back office platform for independent practitioners.
          Invoicing in EUR, quotes rendered as branded PDFs, meeting notes with
          AI-assisted preparation, and a governance dashboard for the AI features.
          Basis plan, grandfathered at founding-customer pricing.
        </p>
      </Section>

      {/* What shipped */}
      <Section eyebrow="What shipped">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          <Deliverable
            label="Brand system"
            body="Colour, typography, voice. Documented in a versioned brand book she can hand to any future collaborator."
          />
          <Deliverable
            label="seraphzorg.com"
            body="Multi-page practice website. Dutch and English. Custom design, deployed to her eWolve hosting account, mapped to her own domain."
          />
          <Deliverable
            label="jiska.seraphzorg.com"
            body="Founder portfolio subdomain. Cross-linked with the practice website, shares the brand system."
          />
          <Deliverable
            label="CoreDesk workspace"
            body="Basis plan. Invoicing, proposals, receipts, CRM, meeting agent, governance dashboard. Founding-customer pricing locked."
          />
          <Deliverable
            label="Ongoing engineer contact"
            body="Direct access for questions, feature requests, and iterations. Not a ticket queue routing you to a stranger. You reach me, and I handle it."
          />
          <Deliverable
            label="Handover documents"
            body="Written brand book, technical handover, and CoreDesk workspace guide. Nothing lives only in chat."
          />
        </div>
      </Section>

      {/* Outcomes */}
      <Section eyebrow="Outcomes">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          <Deliverable
            label="Delivered on time"
            body="Fixed price, no scope disputes, no invoice surprises."
          />
          <Deliverable
            label="First client through the website"
            body="Three days after launch, May 2026."
          />
          <Deliverable
            label="Two websites + one back-office platform"
            body="Delivered under one engagement, one accountable engineer."
          />
          <Deliverable
            label="Founding CoreDesk customer"
            body="Runs the practice daily since launch."
          />
        </div>
      </Section>

      {/* In her words */}
      <section style={{ padding: '48px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            padding: '40px 32px',
            background: T.deep,
            border: `1px solid ${T.midnight}`,
            borderLeft: `3px solid ${T.gold}`,
            borderRadius: '12px',
          }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.22em', color: T.gold,
              textTransform: 'uppercase', marginBottom: '20px',
            }}>In Jiska's words</div>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '12px',
            }}>&ldquo;Hilary is remarkably careful, reliable, and substantively strong.</p>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '12px',
            }}>She thinks with me, delivers quality work, and honors her commitments.</p>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '20px',
            }}>For my practice, where vulnerable clients and sensitive data are at stake, that is no small thing. I choose my collaborators with care, and Hilary is someone I trust.&rdquo;</p>
            <div style={{
              fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText,
              letterSpacing: '0.02em',
            }}>Jiska  ·  Founder, JS Zorg en Advies | Seraph Zorg</div>
          </div>
        </Reveal>
      </section>

      {/* Visit */}
      <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            padding: '32px',
            background: T.deep,
            border: `1px solid ${T.midnight}`,
            borderRadius: '12px',
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'space-between', alignItems: 'center',
            gap: '20px',
          }}>
            <div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '8px',
              }}>See it live</div>
              <div style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '22px', color: T.platinum,
                letterSpacing: '-0.01em',
              }}>The practice website and the founder portfolio</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a data-btn="secondary" href="https://seraphzorg.com" target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 20px',
                background: 'transparent', border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>seraphzorg.com <ExternalLink size={13} /></a>
              <a data-btn="secondary" href="https://jiska.seraphzorg.com" target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 20px',
                background: 'transparent', border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>jiska.seraphzorg.com <ExternalLink size={13} /></a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '80px 32px', marginTop: '40px',
        background: T.deep, borderTop: `1px solid ${T.hairline}`,
      }}>
        <Reveal>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '11px',
              letterSpacing: '0.28em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '24px',
            }}>Your project</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.15, letterSpacing: '-0.015em',
              color: T.platinum, marginBottom: '20px',
            }}>
              Whatever the shape, I&apos;d like to <span style={{ fontStyle: 'italic', color: T.gold }}>hear from you.</span>
            </h2>
            <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
              <Link data-btn="primary" href="/#quote" style={{
                padding: '14px 26px',
                background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
              }}>Request a quote <ArrowRight size={14} /></Link>
              <a data-btn="secondary" href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 26px',
                background: 'transparent', border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
              }}>Book a call</a>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link href="/work" style={{
                fontFamily: FONTS.mono, fontSize: '11px',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: T.softText, textDecoration: 'none',
              }}>← back to all case studies</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SharedLayout>
  )
}

/* ------------------------------------------------------------- */
/* Shared subcomponents used by case study pages                  */
/* ------------------------------------------------------------- */

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
      <Reveal>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(160px, 220px) 1fr',
          gap: '48px', paddingBottom: '48px',
          borderBottom: `1px solid ${T.hairline}`,
        }}>
          <div>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>{eyebrow}</div>
            <div style={{ width: '30px', height: '1px', background: T.gold }} />
          </div>
          <div>{children}</div>
        </div>
      </Reveal>
    </section>
  )
}

function paragraphStyle(first: boolean = false): React.CSSProperties {
  return {
    fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
    color: first ? T.platinum : T.softText,
    marginBottom: '18px',
  }
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ margin: '20px 0 24px' }}>
      <div style={{
        fontFamily: FONTS.serif, fontStyle: 'italic',
        fontSize: '20px', color: T.gold, marginBottom: '10px',
        letterSpacing: '-0.005em',
      }}>{title}</div>
      <p style={{
        fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
        color: T.softText, marginBottom: '0',
      }}>{children}</p>
    </div>
  )
}

function Deliverable({ label, body }: { label: string; body: string }) {
  return (
    <div data-card="true" style={{
      padding: '22px 20px',
      background: T.deep,
      border: `1px solid ${T.midnight}`,
      borderRadius: '12px',
      height: '100%',
    }}>
      <div style={{
        fontFamily: FONTS.serif, fontStyle: 'italic',
        fontSize: '18px', color: T.platinum,
        letterSpacing: '-0.005em', marginBottom: '10px',
      }}>{label}</div>
      <div style={{
        fontFamily: FONTS.ui, fontSize: '13.5px', lineHeight: 1.6,
        color: T.softText,
      }}>{body}</div>
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.22em', color: T.goldDeep,
        textTransform: 'uppercase', marginBottom: '6px',
      }}>{label}</div>
      <div style={{
        fontFamily: FONTS.ui, fontSize: '13.5px', lineHeight: 1.5,
        color: T.platinum,
      }}>{value}</div>
    </div>
  )
}