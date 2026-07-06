'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../../components/SharedLayout'

/**
 * /work/magnifying-childrens-horizons case study.
 * Two-site build for MCH (education programme) + Tolu Okudolo author companion.
 */

export default function MCHCaseStudy() {
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
            <span>Magnifying Children&apos;s Horizons</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 12px', marginBottom: '20px',
            background: `${T.gold}12`,
            border: `1px solid ${T.gold}44`,
            borderRadius: '3px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.gold }} />
            <span style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.22em', color: T.gold,
              textTransform: 'uppercase',
            }}>In build . staging live</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '20px',
          }}>
            Magnifying
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              Children&apos;s Horizons.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: 'clamp(19px, 2vw, 24px)', lineHeight: 1.5,
            color: T.softText, maxWidth: '760px',
            letterSpacing: '-0.005em',
          }}>
            A values-led children&apos;s education programme and a companion author
            site for its founder, built with a forest-and-sunlight brand system,
            real photography only, no AI imagery.
          </p>
        </Reveal>
      </section>

      {/* Quick facts */}
      <section style={{ padding: '32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div data-card="true" style={{
            padding: '28px 24px',
            background: T.deep,
            border: `1px solid ${T.midnight}`,
            borderRadius: '8px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
          }}>
            <Fact label="Client"    value="Tolu Okudolo" />
            <Fact label="Sector"    value="Education . Children's books" />
            <Fact label="Location"  value="Canada" />
            <Fact label="Duration"  value="2025 to present" />
            <Fact label="Services"  value="Brand . Web . SEO" />
          </div>
        </Reveal>
      </section>

      {/* The brief */}
      <Section eyebrow="The brief">
        <p style={paragraphStyle(true)}>
          Tolu Okudolo founded Magnifying Children&apos;s Horizons to run
          Guiding Children with Nature, a values-led programme that helps
          families raise curious, grounded children through outdoor exploration
          and story. She also writes children&apos;s books under her own name,
          The Face in the Mountain and The Festival Shoes.
        </p>
        <p style={paragraphStyle()}>
          She needed two sites, tied together but not identical. One for the
          programme, one for her author work. And she had one non-negotiable
          rule: no AI-generated imagery, anywhere. Everything visual on the
          site had to come from real photography, real illustration, or real
          hand-drawn work. The brand had to feel like the values it teaches.
        </p>
        <p style={paragraphStyle()}>
          Beyond that, she needed the sites to be discoverable. Parents finding
          MCH would mostly arrive through search, not paid ads. So SEO was not
          a nice-to-have. It was in the brief from day one.
        </p>
      </Section>

      {/* The approach */}
      <Section eyebrow="The approach">
        <p style={paragraphStyle(true)}>
          Brand direction started with palette: forest green as the primary,
          sage as the secondary, warm cream as the surround, sunlight gold as
          the accent. Typography paired a warm serif for headings with a
          humanist sans for body, both chosen for gentle readability by
          parents reading on their phones with a kid on their lap.
        </p>

        <p style={paragraphStyle()}>
          Two sites, cross-linked.
        </p>

        <SubSection title="magnifyingchildrenshorizons.com">
          The programme site. Guiding Children with Nature laid out in
          scannable, warm copy. Parents can read the programme overview, meet
          the founder, read the philosophy, and enrol their family in one flow.
        </SubSection>

        <SubSection title="tolu.magnifyingchildrenshorizons.com">
          The author companion. Tolu&apos;s story, her books, and the reader
          resources that accompany them. Cross-linked back to MCH so a parent
          discovering the books can find the programme, and a parent
          discovering the programme can find the books.
        </SubSection>

        <p style={paragraphStyle()}>
          Both sites built on the same brand system for coherence, but with
          distinct tonal choices. MCH leans warmly instructive. The author site
          leans quietly literary.
        </p>

        <p style={paragraphStyle()}>
          On the SEO front, semantic HTML throughout, structured data for
          programme details and book listings, Open Graph tags tuned for the
          social contexts where children&apos;s content travels (Pinterest,
          Instagram, parenting Facebook groups). Sitemap generated and
          submitted. Google Search Console wired to a private dashboard so
          Tolu sees search performance without opening the tool herself.
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
            body="Forest and sunlight palette, dual typography system, voice guidelines for programme copy and author copy. Documented in a versioned brand book."
          />
          <Deliverable
            label="magnifyingchildrenshorizons.com"
            body="Programme site. Multi-page, cross-linked with the author companion. Deployed to Hostinger, mapped to the client's own domain."
          />
          <Deliverable
            label="tolu.magnifyingchildrenshorizons.com"
            body="Author companion site. Subdomain of MCH, shares the brand system, distinct in voice."
          />
          <Deliverable
            label="SEO configuration"
            body="Metadata, structured data, semantic HTML, sitemap, Open Graph tags. Tuned for organic discovery through search and parent-facing social."
          />
          <Deliverable
            label="Analytics dashboard"
            body="Private analytics wired so Tolu sees traffic and search performance without exposing visitor data to a third party."
          />
          <Deliverable
            label="Handover documents"
            body="Written brand book, technical handover, and content-update guide so Tolu can edit anything herself. Nothing lives only in chat."
          />
        </div>
      </Section>

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

/* --------------- shared subcomponents --------------- */

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
      borderRadius: '8px',
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