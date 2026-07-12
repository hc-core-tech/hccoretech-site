'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../components/SharedLayout'

const VALUES = [
  {
    num: '01',
    title: 'AI engineering, governance, and web',
    body: "I engineer AI systems, lead the governance that keeps them accountable, and build the websites where the brand meets the client. Most practices split those three across three vendors. I don't. Which means one accountable person from first brief to production.",
  },
  {
    num: '02',
    title: 'You get the engineer',
    body: 'Every question you ask goes to the person doing the work. No triage, no relay, no waiting for someone to check with the technical team. Slack, email, or a scheduled review call, whichever fits how you already work. It keeps decisions fast and the details accurate.',
  },
  {
    num: '03',
    title: 'Written deliverables, nothing lost',
    body: 'Every major deliverable is a versioned document: project plan, written content document, brand context, build handover, governance assessment. Decisions go in the doc, not the chat thread. You leave every engagement with a permanent record you can hand to your team, an auditor, or your next engineer.',
  },
  {
    num: '04',
    title: 'Tight scoping, fixed price',
    body: 'Fixed scope, fixed price, before build. Changes are quoted separately before any additional work begins. The trade is transparent: you know what you get and what it costs, and I know what I am delivering.',
  },
]

const WHO_I_WORK_WITH = [
  { fit: true,  label: 'Hands-on founders and independent practitioners' },
  { fit: true,  label: 'Dutch and EU SMEs with real operational depth' },
  { fit: true,  label: 'Small founder-led teams shipping something they care about' },
  { fit: true,  label: 'AI vendors preparing for regulated procurement in health, finance, or public sector' },
  { fit: true,  label: 'Care practices, boutique consultancies, coaches, and creatives ready for real infrastructure' },
  { fit: false, label: 'Engagements where the priority is lowest price or fastest turnaround' },
  { fit: false, label: 'Projects that need a full engineering team on-site day to day' },
  { fit: false, label: 'Setups requiring managed-service SLAs or vendor-style procurement' },
]

const CREDENTIALS = [
  { label: 'BSc (Hons) Computer Science', detail: 'Open Institute of Technology (OPIT), Malta · 2024–2026' },
  { label: 'Google Cybersecurity Professional Certificate', detail: 'Coursera' },
  { label: 'IBM AI Engineering', detail: 'Professional certificate' },
  { label: 'AWS Academy Graduate', detail: 'Cloud Foundations' },
  { label: 'Responsive Web Design', detail: 'SheCodes / freeCodeCamp' },
]

const LANGUAGES = [
  { label: 'English',  detail: 'Fluent' },
  { label: 'Dutch',    detail: 'In active development' },
  { label: 'Russian',  detail: 'Conversational' },
  { label: 'French',   detail: 'Conversational' },
]

export default function AboutPage() {
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
            <span>About</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(44px, 6vw, 84px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '28px',
          }}>
            I&apos;m Hilary Azimoh.
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              Applied AI Engineer.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.5,
            color: T.softText, maxWidth: '780px',
            letterSpacing: '-0.005em',
          }}>
            I engineer AI systems, lead the governance that keeps them
            accountable, and build the websites that carry a practice
            online. That combination, three deep service lines in one
            person, is rare in this market.
          </p>
        </Reveal>
      </section>

      {/* The short version */}
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
              }}>The short version</div>
              <div style={{ width: '30px', height: '1px', background: T.gold }} />
            </div>
            <div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.platinum, marginBottom: '18px',
              }}>
                HC Core Tech is my practice, covering AI engineering, web
                development, and AI governance. Every engagement runs
                through me, from the code to the site, the client
                conversation, and the governance report. Whether or not the
                delivery involves collaborators, the accountability and the
                engineering stay with me from first brief to production.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText, marginBottom: '18px',
              }}>
                On the engineering side, agentic backends in Python and
                FastAPI, Next.js and TypeScript frontends, RAG and
                multi-agent orchestration, and full production websites
                across WordPress, Next.js, and headless setups, matched to
                the right stack for the project.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText, marginBottom: '18px',
              }}>
                On the governance side, AI registers, audit trails,
                framework mapping, and human-in-the-loop review layers,
                built to hold up under real regulatory scrutiny.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText,
              }}>
                Alongside the AI work, I build websites end to end. Every
                build includes brand systems and design tokens,
                conversion-led writing, SEO setup, and lead-capture
                automation.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The story */}
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
              }}>The story</div>
              <div style={{ width: '30px', height: '1px', background: T.gold }} />
            </div>
            <div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.platinum, marginBottom: '18px',
              }}>
                I grew up being told I could do anything I set my mind to.
                My first pull was engineering, but given the circumstances,
                medicine seemed the wiser choice at the time. I knew I could
                thrive in any field I chose, so I went to Ukraine to study
                medicine, and I thrived. If the war hadn&apos;t happened,
                I&apos;d probably be a doctor today.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.softText, marginBottom: '18px',
              }}>
                I was in my third year when the war started, and I had to
                leave. I tried to continue medicine in Europe, but the
                curriculum did not line up. Picking up where I had left off
                meant starting from the beginning, and the application
                deadlines had already passed. On top of that, the fees were
                unbelievably high.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.softText, marginBottom: '18px',
              }}>
                With all this to weigh, a decision had to be made. How would
                I proceed? How would I actually get there? It felt like the
                closed doors would not budge. But programming had always
                been a pull, and I had been working in it alongside medical
                school. So I started learning it properly. Took courses.
                Kept going. Eventually enrolled at the Open Institute of
                Technology.
              </p>
              <p style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '19px', lineHeight: 1.6,
                color: T.gold, letterSpacing: '-0.005em',
                paddingLeft: '20px',
                borderLeft: `2px solid ${T.goldDeep}`,
                marginTop: '24px',
                marginBottom: '24px',
              }}>
                I sometimes think about the doctor I would have been if the war
                hadn&apos;t happened. But I believe everything happens for a reason.
                This life, the engineering, HC Core Tech, the way I work now, feels
                like it was mine to take. Maybe a blessing in disguise. Either way,
                I don&apos;t regret it.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.softText,
              }}>
                Since then, my approach has been simple: create a path when
                there is none. There is always a way. Failure is not a wall,
                it is a chance to reassess and try again, strategically. If
                a seat at the table you want is not offered, pull up a
                chair. And anything worth doing is worth doing well.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How I got here */}
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
              }}>How I got here</div>
              <div style={{ width: '30px', height: '1px', background: T.gold }} />
            </div>
            <div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.platinum, marginBottom: '18px',
              }}>
                HC Core Tech is my own practice, running in parallel.
                CoreDesk, the AI workspace platform I build and operate,
                sits within it. It is live in production with clients using
                it today. I run both from the Netherlands and work with
                clients internationally.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.platinum, fontWeight: 600,
                marginBottom: '14px',
              }}>
                Alongside the AI work, I build websites end to end using
                production WordPress and headless Next.js. That includes
                brand systems and design tokens, conversion-led writing,
                SEO setup, and lead-capture automation.
              </p>
              <p style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '16px', lineHeight: 1.65,
                color: T.softText, marginBottom: '24px',
                letterSpacing: '-0.005em',
              }}>
                Recent web work includes Seraph Zorg, Jiska&apos;s portfolio,
                and the two-site Magnifying Children&apos;s Horizons build in
                Canada.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText, marginBottom: '18px',
              }}>
                I trained in AI engineering with a foundation in
                cybersecurity, across Google Cybersecurity, IBM AI
                Engineering, AWS Cloud Foundations, and a BSc in Computer
                Science with the Open Institute of Technology in Malta.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText, marginBottom: '18px',
              }}>
                Before HC Core Tech, I spent a year as Data and AI
                Governance Manager at Voice4AI Governance, where I built
                risk assessment frameworks aligned to the EU AI Act, NIST
                AI RMF, and ISO/IEC 42001.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
                color: T.softText,
              }}>
                In early 2026, I led AI development on a nine-agent content
                production platform, architected end to end across intake,
                scripting, quality control, and assembly, with humans in
                the loop at every stage.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What I believe */}
      <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>What I believe</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '720px',
            }}>
              Four principles that show up in every engagement.
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {VALUES.map((v, i) => (
            <Reveal key={v.num} delay={i * 80}>
              <div data-card="true" style={{
                padding: '32px 28px',
                background: T.deep,
                border: `1px solid ${T.midnight}`,
                borderRadius: '12px',
                height: '100%',
              }}>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '22px', color: T.gold, fontWeight: 500,
                  marginBottom: '16px', letterSpacing: '0.02em',
                }}>{v.num}</div>
                <h3 style={{
                  fontFamily: FONTS.serif, fontWeight: 500,
                  fontSize: '22px', lineHeight: 1.2,
                  color: T.platinum, marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: FONTS.ui, fontSize: '14.5px', lineHeight: 1.65,
                  color: T.softText,
                }}>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Working style / personal notes */}
      <section style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
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
              }}>How I work</div>
              <div style={{ width: '30px', height: '1px', background: T.gold }} />
            </div>
            <div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
                color: T.platinum, marginBottom: '14px',
              }}>
                Direct, warm, and momentum-driven. Clear to both technical
                and non-technical readers.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
                color: T.softText, marginBottom: '14px',
              }}>
                Comfortable coordinating across distributed teams. My most
                recent engagement ran three engineers across the
                Netherlands, Eastern Europe, and South Korea, with
                leadership in Singapore.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
                color: T.softText,
              }}>
                The foundation of my work ethic is my Christian faith. It
                shapes how I show up, what I commit to, and the standard of
                excellence I hold every deliverable to.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Credentials + languages */}
      <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
        }}>
          <Reveal>
            <div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.24em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '20px',
              }}>Credentials</div>
              {CREDENTIALS.map(c => (
                <div key={c.label} style={{
                  padding: '14px 0',
                  borderTop: `1px solid ${T.hairline}`,
                }}>
                  <div style={{
                    fontFamily: FONTS.serif, fontStyle: 'italic',
                    fontSize: '18px', color: T.platinum,
                    letterSpacing: '-0.005em', marginBottom: '4px',
                  }}>{c.label}</div>
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: '10.5px',
                    letterSpacing: '0.14em', color: T.muted,
                    textTransform: 'uppercase',
                  }}>{c.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.24em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '20px',
              }}>Languages</div>
              {LANGUAGES.map(l => (
                <div key={l.label} style={{
                  padding: '14px 0',
                  borderTop: `1px solid ${T.hairline}`,
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', gap: '20px',
                }}>
                  <div style={{
                    fontFamily: FONTS.serif, fontStyle: 'italic',
                    fontSize: '18px', color: T.platinum,
                    letterSpacing: '-0.005em',
                  }}>{l.label}</div>
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: '10.5px',
                    letterSpacing: '0.14em', color: T.muted,
                    textTransform: 'uppercase',
                  }}>{l.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who I work with */}
      <section style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>Who I work with</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '720px', marginBottom: '20px',
            }}>
              A small book of clients, on purpose.
            </h2>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.6,
              color: T.softText, maxWidth: '640px',
            }}>
              Being honest about fit is faster than pretending to be a fit. Whatever the shape
              of your project, I read every message myself and reply with intentionality.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          <Reveal>
            <div data-card="true" style={{
              padding: '28px 24px',
              background: T.deep,
              border: `1px solid ${T.midnight}`,
              borderRadius: '12px',
              height: '100%',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '18px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }} />
                <span style={{
                  fontFamily: FONTS.mono, fontSize: '10px',
                  letterSpacing: '0.22em', color: '#4ADE80',
                  textTransform: 'uppercase',
                }}>Yes</span>
              </div>
              {WHO_I_WORK_WITH.filter(w => w.fit).map(w => (
                <div key={w.label} style={{
                  padding: '8px 0',
                  fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.55,
                  color: T.platinum,
                }}>{w.label}</div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div data-card="true" style={{
              padding: '28px 24px',
              background: T.deep,
              border: `1px solid ${T.midnight}`,
              borderRadius: '12px',
              height: '100%',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '18px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.gold }} />
                <span style={{
                  fontFamily: FONTS.mono, fontSize: '10px',
                  letterSpacing: '0.22em', color: T.gold,
                  textTransform: 'uppercase',
                }}>Let's talk first</span>
              </div>
              {WHO_I_WORK_WITH.filter(w => !w.fit).map(w => (
                <div key={w.label} style={{
                  padding: '8px 0',
                  fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.55,
                  color: T.softText,
                }}>{w.label}</div>
              ))}
            </div>
          </Reveal>
        </div>
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
            }}>Get in touch</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              lineHeight: 1.15, letterSpacing: '-0.015em',
              color: T.platinum, marginBottom: '20px',
            }}>
              If any of this sounds like a fit, I&apos;d like to <span style={{ fontStyle: 'italic', color: T.gold }}>hear from you.</span>
            </h2>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '15.5px', lineHeight: 1.6,
              color: T.softText, marginBottom: '32px',
            }}>
              Book a discovery call or send a written brief. I respond within 48 hours.
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
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" data-btn="secondary" style={{
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