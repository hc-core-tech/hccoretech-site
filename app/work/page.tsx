'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../components/SharedLayout'

/**
 * /work index page. Lists every engagement, links to the ones that have
 * dedicated case study pages, shows the NDA-restricted ones with the
 * detail we're allowed to publish.
 */

type Study = {
  slug: string | null   // null means no dedicated page (NDA / private)
  client: string
  role: string
  sector: string
  location: string
  year: string
  status: 'live' | 'in-build' | 'shipped' | 'private'
  summary: string
  services: string[]
}

const STUDIES: Study[] = [
  {
    slug: 'seraph-zorg',
    client: 'JS Zorg en Advies | Seraph Zorg',
    role: 'Founder-led Dutch care practice',
    sector: 'Care · Advisory',
    location: 'Diemen, Netherlands',
    year: '2025 to present',
    status: 'live',
    summary: 'Full brand system, two websites, and the founding CoreDesk workspace for a Dutch trauma-sensitive care practice supporting families affected by the toeslagenaffaire (the Dutch childcare-benefits scandal). First client came through the site three days after launch.',
    services: ['Brand direction', 'Web development', 'CoreDesk platform'],
  },
  {
    slug: 'magnifying-childrens-horizons',
    client: 'MCH',
    role: 'Children\'s education programme + author companion',
    sector: 'Education · Children\'s books',
    location: 'Canada',
    year: '2025 to present',
    status: 'in-build',
    summary: "Full brand system, page-by-page copy, and two-website build for a values-led children's education programme and its founder's author companion. Real photography throughout, no AI imagery. Drumlo's Journey memory game as lead magnet.",
    services: ['Brand direction', 'Web development', 'SEO'],
  },
  {
    slug: null,
    client: 'Nine-agent content production platform',
    role: 'Lead AI Development',
    sector: 'Media · Enterprise AI',
    location: 'Singapore',
    year: 'Q1 to Q2 2026',
    status: 'shipped',
    summary: 'Led AI development on a nine-agent content production platform for enterprise clients. Full pipeline from ideation through publish, with human-in-the-loop review layers. Client details under NDA.',
    services: ['AI engineering', 'Multi-agent orchestration', 'RAG pipelines'],
  },
  {
    slug: null,
    client: 'Voice4AI Governance',
    role: 'Data and AI Governance Manager',
    sector: 'AI governance · Consulting',
    location: 'Remote · United States',
    year: 'Jan 2025 to Jan 2026',
    status: 'shipped',
    summary: 'Year-long engagement building AI risk assessment frameworks aligned to EU AI Act, NIST AI RMF, and ISO/IEC 42001. Delivered controls catalogues, policy documentation, and audit-ready packs for AI vendors scaling into regulated procurement.',
    services: ['AI governance', 'Framework alignment', 'Documentation'],
  },
]

function StatusPill({ status }: { status: Study['status'] }) {
  const config = {
    'live':     { color: '#4ADE80', label: 'Live' },
    'in-build': { color: T.gold,    label: 'In build' },
    'shipped':  { color: T.softText, label: 'Shipped' },
    'private':  { color: T.softText, label: 'Private' },
  }[status]
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '4px 10px',
      background: `${config.color}12`,
      border: `1px solid ${config.color}44`,
      borderRadius: '3px',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: config.color }} />
      <span style={{
        fontFamily: FONTS.mono, fontSize: '10px',
        letterSpacing: '0.22em', color: config.color,
        textTransform: 'uppercase',
      }}>{config.label}</span>
    </div>
  )
}

export default function WorkPage() {
  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{ padding: '80px 32px 64px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.24em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
            <span>Work</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(44px, 6vw, 84px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '28px',
          }}>
            Selected engagements.
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              What shipped, and what happened next.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div style={{
            fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
            color: T.softText, maxWidth: '680px',
          }}>
            <p style={{ marginBottom: '10px' }}>A small book of client work spanning care practices, children's education, enterprise AI, and governance.</p>
            <p style={{ marginBottom: '10px' }}>Deep case studies where I can share them; honest anonymised summaries where NDAs apply.</p>
            <p style={{ marginBottom: '0' }}>Every entry here shipped. Several are still running today.</p>
          </div>
        </Reveal>
      </section>

      {/* Case studies */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px 40px' }}>
        {STUDIES.map((study, i) => (
          <Reveal key={study.client} delay={i * 60}>
            {study.slug ? (
              <Link href={`/work/${study.slug}`} style={{
                display: 'block', textDecoration: 'none',
                marginBottom: '20px',
              }}>
                <div data-card="true" style={{
                  padding: '32px 28px',
                  background: T.deep,
                  border: `1px solid ${T.midnight}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}>
                  <StudyCardContent study={study} clickable />
                </div>
              </Link>
            ) : (
              <div style={{ marginBottom: '20px' }}>
                <div data-card="true" style={{
                  padding: '32px 28px',
                  background: T.deep,
                  border: `1px solid ${T.midnight}`,
                  borderRadius: '12px',
                }}>
                  <StudyCardContent study={study} clickable={false} />
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </section>

      {/* CTA */}
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
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              lineHeight: 1.15, letterSpacing: '-0.015em',
              color: T.platinum, marginBottom: '20px',
            }}>
              Ready to be <span style={{ fontStyle: 'italic', color: T.gold }}>the next case study?</span>
            </h2>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '15.5px', lineHeight: 1.6,
              color: T.softText, marginBottom: '32px',
            }}>
              Send me a note about your project, or book a discovery call. I reply within 48 hours.
            </p>
            <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
          </div>
        </Reveal>
      </section>
    </SharedLayout>
  )
}

function StudyCardContent({ study, clickable }: { study: Study; clickable: boolean }) {
  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '20px',
        marginBottom: '18px', flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <StatusPill status={study.status} />
            {!study.slug && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 10px',
                background: `${T.softText}0F`,
                border: `1px solid ${T.hairline}`,
                borderRadius: '3px',
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.softText,
                textTransform: 'uppercase',
              }}>
                <Lock size={10} /> Under NDA
              </div>
            )}
          </div>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 500,
            fontSize: 'clamp(24px, 3vw, 32px)',
            lineHeight: 1.15, letterSpacing: '-0.01em',
            color: T.platinum, marginBottom: '6px',
          }}>{study.client}</h2>
          <div style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: '17px', color: T.gold,
          }}>{study.role}</div>
        </div>
        {clickable && (
          <div style={{
            padding: '10px',
            border: `1px solid ${T.midnight}`, borderRadius: '6px',
            color: T.gold, flexShrink: 0,
          }}>
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>

      <p style={{
        fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.7,
        color: T.softText, marginBottom: '22px',
      }}>{study.summary}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '18px',
        paddingTop: '20px', borderTop: `1px solid ${T.hairline}`,
      }}>
        <MetaItem label="Sector"   value={study.sector} />
        <MetaItem label="Location" value={study.location} />
        <MetaItem label="Duration" value={study.year} />
        <MetaItem label="Services" value={study.services.join(' · ')} />
      </div>
    </>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.22em', color: T.goldDeep,
        textTransform: 'uppercase', marginBottom: '6px',
      }}>{label}</div>
      <div style={{
        fontFamily: FONTS.ui, fontSize: '13px', lineHeight: 1.5,
        color: T.platinum,
      }}>{value}</div>
    </div>
  )
}