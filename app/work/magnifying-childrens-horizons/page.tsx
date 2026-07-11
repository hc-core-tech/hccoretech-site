'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../../components/SharedLayout'

/**
 * /work/magnifying-childrens-horizons case study.
 * Two-website build for MCH (education programme) + Tolu's author companion.
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
            }}>In build · staging live</span>
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
            A values-led children&apos;s education programme and its founder&apos;s
            author companion, built with a forest-and-sunlight brand system,
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
            borderRadius: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
          }}>
            <Fact label="Client"    value="Tolu" />
            <Fact label="Sector"    value="Education · Children's books" />
            <Fact label="Location"  value="Canada" />
            <Fact label="Duration"  value="2025 to present" />
            <Fact label="Services"  value="Brand · Web · SEO" />
          </div>
        </Reveal>
      </section>

      {/* The brief */}
      <Section eyebrow="The brief">
        <p style={paragraphStyle(true)}>
          Tolu founded Magnifying Children&apos;s Horizons to run Guiding
          Children with Nature, a values-led programme that helps families
          raise curious, grounded children through outdoor exploration and
          story. She is also a published author, with two books to her name:
          The Face in the Mountain and The Festival Shoes.
        </p>
        <p style={paragraphStyle()}>
          She needed two websites, tied together but not identical. One for
          the programme, one for her author work. Both had to feel like the
          values the programme teaches.
        </p>
        <p style={paragraphStyle()}>
          She initially wanted AI-generated imagery on the website. I pushed
          back. Parents choosing an educator for their child need to trust
          that what they are seeing is real. Even with her years of experience
          behind the programme, synthetic nature and generated children would
          have undermined the very message the programme carries. She trusted
          me on it.
        </p>
        <p style={paragraphStyle()}>
          Beyond the imagery decision, discoverability was essential. Parents
          finding MCH would mostly arrive through search, not paid ads, so SEO
          was in the brief from day one.
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
          Two websites, cross-linked.
        </p>

        <SubSection title="magnifyingchildrenshorizons.com">
          The programme website. Guiding Children with Nature laid out in
          scannable, warm copy. Parents can read the programme overview, meet
          the founder, read the philosophy, and enrol their family in one flow.
        </SubSection>

        <SubSection title="tolu.magnifyingchildrenshorizons.com">
          The author companion. Tolu&apos;s story, her books, and Drumlo&apos;s
          Journey: the free printable memory game she designed as a lead magnet
          for young readers, which walks them through the events and lessons of
          the book. Cross-linked back to MCH so a parent discovering the books
          can find the programme, and a parent discovering the programme can
          find the books.
        </SubSection>

        <p style={paragraphStyle()}>
          Both websites built on the same brand system for coherence, but with
          distinct tonal choices. MCH leans warmly instructive. The author website
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
            body="Programme website. Multi-page, cross-linked with the author companion. Deployed to Hostinger, mapped to the client's own domain."
          />
          <Deliverable
            label="tolu.magnifyingchildrenshorizons.com"
            body="Author companion website. Subdomain of MCH, shares the brand system, distinct in voice."
          />
          <Deliverable
            label="SEO configuration"
            body="Metadata, structured data, semantic HTML, sitemap, Open Graph tags. Tuned for organic discovery through search and parent-facing social."
          />
          <Deliverable
            label="Drumlo's Journey lead magnet"
            body="Free printable memory game designed by Tolu as a lead magnet for young readers. Walks them through the events and lessons of the book."
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

      {/* Outcomes */}
      <Section eyebrow="Outcomes">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          <Deliverable
            label="Full brand system co-created"
            body="Palette, typography, voice, and page-by-page copy shaped session by session with Tolu."
          />
          <Deliverable
            label="Real photography only, no AI imagery"
            body="A design judgment call the audience deserves. Every visual sourced or directed."
          />
          <Deliverable
            label="Two websites cross-linked"
            body="Programme site plus author companion, one brand system, distinct voices."
          />
          <Deliverable
            label="Drumlo's Journey as free printable lead magnet"
            body="Takes young readers through the events and lessons of the book."
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
            }}>In Tolu&apos;s words</div>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '12px',
            }}>&ldquo;Hilary took a project I barely described and turned it into a brand system, website, and launch plan inside a month.</p>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '12px',
            }}>Seeing my ideas made visible was better than I had imagined. The process was like pouring my soul into a painting, except Hilary channelled me and helped what I envisioned come out in a way everyone could connect with.</p>
            <p style={{
              fontFamily: FONTS.serif, fontSize: '19px',
              lineHeight: 1.55, color: T.platinum,
              letterSpacing: '-0.005em',
              marginBottom: '20px',
            }}>The rigour she brings is more than most paid agencies deliver.&rdquo;</p>
            <div style={{
              fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText,
              letterSpacing: '0.02em',
            }}>Tolu  ·  Founder, Magnifying Children&apos;s Horizons</div>
          </div>
        </Reveal>
      </section>

      {/* See it live */}
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
              }}>See it on staging</div>
              <div style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '22px', color: T.platinum,
                letterSpacing: '-0.01em',
              }}>The programme site and the author companion</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a data-btn="secondary" href="https://pink-cheetah-352887.hostingersite.com" target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 20px',
                background: 'transparent', border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>staging · MCH <ExternalLink size={13} /></a>
              <a data-btn="secondary" href="https://peachpuff-buffalo-882219.hostingersite.com" target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 20px',
                background: 'transparent', border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>staging · Tolu author <ExternalLink size={13} /></a>
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