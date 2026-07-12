'use client'

import Link from 'next/link'
import { ArrowRight, FileText, Users, Calendar, Bot, ShieldCheck, Globe, Check, Minus, Mail, Sparkles, ShieldAlert, Receipt } from 'lucide-react'
import SharedLayout, { T, FONTS, CALENDLY, Reveal } from '../components/SharedLayout'

/**
 * /coredesk page. Full product story for CoreDesk platform.
 */

const CAPABILITIES = [
  {
    Icon: FileText,
    title: 'Invoicing, proposals, receipts',
    body: 'Invoices, proposals, and receipts, all sent from one workspace, all in your brand. Send invoices in any currency, with live exchange rates tracked for your records. Multi-issuer support if you operate under more than one entity. Receipts prompted from your side, never auto-generated behind your back.',
  },
  {
    Icon: Users,
    title: 'CRM with real pipeline',
    body: 'Full deal pipeline, contact person tracking, and clean CRM integration with invoicing and receipts. Generate an invoice or proposal in one click from a deal, prefilled with the client contact and line items you have already agreed.',
  },
  {
    Icon: Calendar,
    title: 'Meetings with AI prep',
    body: 'Pre-meeting brief generated automatically. Notes captured during, action items extracted after. Push notifications ahead of every meeting. Integrated with Google Meet and Microsoft Teams for licensed workspaces.',
  },
  {
    Icon: Bot,
    title: 'AI agents you can defend',
    body: 'Four built-in agents: Email, Invoice, Content, and a Governance Auditor. Each one has a live governance score, framework mapping, and audit trail. Human-in-the-loop where it matters (email, content). Fully explainable.',
  },
  {
    Icon: ShieldCheck,
    title: 'Governance dashboard, built in',
    body: 'PASS, WEAK, and FAIL controls per agent. Workspace-wide summary. Right-slide drawer for detailed review. This is what turns a chatbot into a system you can defend to an auditor or a board.',
  },
  {
    Icon: Globe,
    title: 'Six languages, one workspace',
    body: 'NL, EN, FR, RU, ES, PT. Not just a UI toggle. Invoicing localised, proposals localised, notifications localised. So you can serve clients in their language without duplicating your back office.',
  },
]

const FOR_LIST = [
  'Independent practitioners running a small book of clients',
  "ZZP'ers (Dutch sole proprietors) needing more than a spreadsheet",
  'Care practices, consultancies, coaches, boutique agencies',
  'Founder-led practices with a small team supporting the work',
  'Anyone tired of stitching invoicing, CRM, and meetings together',
]

const NOT_FOR_LIST = [
  'Large enterprises with dedicated procurement and IT teams (a custom build is often the better route)',
  'Teams needing turnkey vendor SLAs and lift-and-shift compliance',
  'Setups that need full self-service without engineer contact',
  'Timelines that require me to onboard more clients than I can give real attention to',
]

const ONBOARDING = [
  { step: 'Discovery call', body: 'A 30-minute call to see if CoreDesk is right for your practice. I would rather we find that out together than either of us guess.' },
  { step: 'Setup',          body: 'Your workspace is set up in your brand, configured and ready to receive your work. If you want your existing invoices, receipts, or clients migrated in from wherever they live now, we can make it happen.' },
  { step: 'Onboarding',     body: 'A working session (recorded) walking through daily flow: invoicing, meetings, CRM, agents. You leave using the platform.' },
  { step: 'Ongoing',        body: 'Direct engineer contact for questions, feature requests, and iterations. Not a ticket queue routing you to a stranger. One click reaches me directly.' },
]

export default function CoreDeskPage() {
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
            <span>CoreDesk</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '6px 12px', marginBottom: '20px',
            background: `${T.gold}12`, border: `1px solid ${T.gold}44`,
            borderRadius: '4px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#4ADE80',
            }} />
            <span style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.22em', color: T.gold,
              textTransform: 'uppercase',
            }}>Live · by invitation only</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(44px, 6vw, 84px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '28px',
          }}>
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>CoreDesk.</span>
            <br />
            A back office that runs itself,
            <br />
            for founders who still do the work.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
            color: T.softText, maxWidth: '680px',
          }}>
            Invoicing, CRM, meetings, agents, and governance in one workspace.
            Every feature earned its place by solving a real problem a founder
            was already having, not because a roadmap said it should exist.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div style={{
            marginTop: '40px', display: 'inline-flex', gap: '12px', flexWrap: 'wrap',
          }}>
            <a data-btn="primary" href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 26px',
              background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>Request access <ArrowRight size={14} /></a>
            <Link href="/#quote" data-btn="secondary" style={{
              padding: '14px 26px',
              background: 'transparent', border: `1px solid ${T.midnight}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em', textDecoration: 'none',
            }}>Send a brief</Link>
          </div>
        </Reveal>
      </section>

      {/* What CoreDesk is */}
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
              }}>What CoreDesk is</div>
              <div style={{ width: '30px', height: '1px', background: T.gold }} />
            </div>
            <div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.platinum, marginBottom: '20px',
              }}>
                CoreDesk is an AI workspace for founders who are hands-on in
                the work of their own business, the ones running client
                relationships themselves, sending their own invoices, and
                holding every thread. It handles the daily operational load
                (invoicing, proposals, receipts, CRM, meetings) while giving
                you AI agents and a governance dashboard that lets you
                actually defend how your business uses AI.
              </p>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.75,
                color: T.softText,
              }}>
                CoreDesk began as a tool for assessing AI governance across
                businesses. Working with Jiska (JS Zorg en Advies | Seraph
                Zorg, the founding client) on her workspace made a
                different gap clear: no back office was built around how a
                hands-on founder actually runs their day. The platform grew
                from there. Every workspace since is shaped to the founder
                using it, because the tools you need depend on how you
                actually work.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Core capabilities */}
      <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>Core capabilities</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '720px',
            }}>
              The operational stack your practice runs on.
              <br />
              <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>Six functions. One workspace. All connected.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 80}>
              <div data-card="true" style={{
                padding: '28px 26px',
                background: T.deep,
                border: `1px solid ${T.midnight}`,
                borderRadius: '12px',
                height: '100%',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px',
                  background: `${T.gold}12`, border: `1px solid ${T.gold}44`,
                  borderRadius: '6px', color: T.gold,
                  marginBottom: '20px',
                }}>
                  <cap.Icon size={20} />
                </div>
                <h3 style={{
                  fontFamily: FONTS.serif, fontWeight: 500,
                  fontSize: '22px', lineHeight: 1.15,
                  color: T.platinum, marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}>{cap.title}</h3>
                <p style={{
                  fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.65,
                  color: T.softText,
                }}>{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Four agents */}
      <section style={{ padding: '48px 32px 24px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>Four built-in agents</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '620px',
            }}>
              Native to the workspace. <span style={{ fontStyle: 'italic', color: T.gold }}>Not an afterthought.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {[
            { Icon: Mail,         name: 'Email Agent',        role: 'Drafts your replies, translates when a client writes in another language, and flags what needs your attention. Nothing goes out until you click send.' },
            { Icon: Receipt,      name: 'Invoice Agent',      role: 'Watches the finance side for invoices, receipts, and follow-ups you might have missed. Aware of multiple currencies and multiple issuer identities.' },
            { Icon: Sparkles,     name: 'Content Agent',      role: 'Drafts LinkedIn, Instagram, and Facebook posts in your voice. You review, edit, and post from your own accounts.' },
            { Icon: ShieldAlert,  name: 'Governance Auditor', role: 'Scores your AI use out of 100, maps every score to real frameworks (EU AI Act, NIST, ISO 42001, GDPR, OECD AI), and drafts the policies you would otherwise pay a consultant to write.' },
          ].map((a, i) => (
            <Reveal key={a.name} delay={i * 70}>
              <div data-card="true" style={{
                padding: '22px 20px',
                background: T.deep,
                border: `1px solid ${T.midnight}`,
                borderRadius: '6px',
                height: '100%',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px',
                  background: `${T.gold}12`, border: `1px solid ${T.gold}44`,
                  borderRadius: '6px', color: T.gold,
                  marginBottom: '14px',
                }}>
                  <a.Icon size={16} />
                </div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '19px', color: T.platinum,
                  letterSpacing: '-0.005em', marginBottom: '8px',
                }}>{a.name}</div>
                <div style={{
                  fontFamily: FONTS.ui, fontSize: '12.5px', lineHeight: 1.55,
                  color: T.softText,
                }}>{a.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ICP */}
      <section style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>Who joins</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '720px',
            }}>
              A small book of clients,
              <span style={{ fontStyle: 'italic', color: T.gold }}> by invitation.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
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
                }}>Built for</span>
              </div>
              {FOR_LIST.map(it => (
                <div key={it} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '8px 0',
                  fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.55,
                  color: T.platinum,
                }}>
                  <Check size={14} color="#4ADE80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
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
                }}>Best to discuss first</span>
              </div>
              {NOT_FOR_LIST.map(it => (
                <div key={it} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '8px 0',
                  fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.55,
                  color: T.softText,
                }}>
                  <Minus size={14} color={T.gold} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{it}</span>
                </div>
              ))}
              <div style={{
                marginTop: '18px',
                paddingTop: '18px',
                borderTop: `1px solid ${T.hairline}`,
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '13.5px', lineHeight: 1.6,
                color: T.gold,
              }}>
                Even if CoreDesk isn&apos;t the right fit, my web development,
                AI engineering, AI governance, and advisory services are
                available as separate engagements.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Onboarding */}
      <section style={{ padding: '48px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>How joining works</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '620px',
            }}>Four steps from call to running your practice on CoreDesk.</h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {ONBOARDING.map((step, i) => (
            <Reveal key={step.step} delay={i * 90}>
              <div data-card="true" style={{
                padding: '20px 22px',
                background: T.deep,
                border: `1px solid ${T.midnight}`,
                borderRadius: '6px',
                height: '100%',
              }}>
                <div style={{
                  fontFamily: FONTS.mono, fontSize: '9px',
                  letterSpacing: '0.22em', color: T.gold,
                  textTransform: 'uppercase', marginBottom: '10px',
                }}>Step {i + 1}</div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '20px', color: T.platinum,
                  letterSpacing: '-0.01em', marginBottom: '10px',
                }}>{step.step}</div>
                <div style={{
                  fontFamily: FONTS.ui, fontSize: '13px', lineHeight: 1.6,
                  color: T.softText,
                }}>{step.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      <section style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '10px',
            }}>Pricing</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.1, letterSpacing: '-0.015em',
              color: T.platinum, maxWidth: '620px',
            }}>
              Four tiers. <span style={{ fontStyle: 'italic', color: T.gold }}>Every price up front.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {[
            { name: 'Starter',    price: '€250',  unit: '/mo', forWho: 'For when you are just starting to systemize.',           features: ['1 AI agent', 'Governance essentials', '~150 interactions/mo', 'Dutch or English', 'Email support'] },
            { name: 'Basis',      price: '€450',  unit: '/mo', forWho: 'For steady client work with a real admin load.',        features: ['3 AI agents', 'Full governance module', '~600 interactions/mo', 'Multilingual', 'Priority support'] },
            { name: 'Pro',        price: '€950',  unit: '/mo', forWho: 'For growing volume without losing the details.',        features: ['All agents', 'Advanced governance', '~2,000 interactions/mo', 'Voice tuned to your brand', 'Monthly review call'] },
            { name: 'Enterprise', price: 'Custom', unit: '',   forWho: 'For regulated fields where governance matters.',        features: ['Custom volume', 'White-label option', 'Custom agent development', 'SLA', 'Quarterly compliance audit'] },
          ].map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div style={{
                padding: '28px 22px',
                background: T.deep,
                border: `1px solid ${tier.name === 'Basis' ? T.gold + '66' : T.midnight}`,
                borderRadius: '12px',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                position: 'relative',
              }}>
                {tier.name === 'Basis' && (
                  <div style={{
                    position: 'absolute', top: '-10px', right: '18px',
                    padding: '3px 10px', background: T.gold, color: T.obsidian,
                    fontFamily: FONTS.mono, fontSize: '9px',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    borderRadius: '3px', fontWeight: 500,
                  }}>Most chosen</div>
                )}
                <div style={{
                  fontFamily: FONTS.mono, fontSize: '10px',
                  letterSpacing: '0.24em', color: T.goldDeep,
                  textTransform: 'uppercase', marginBottom: '12px',
                }}>{tier.name}</div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '34px', color: T.platinum,
                  letterSpacing: '-0.02em', lineHeight: 1,
                  marginBottom: '4px',
                }}>{tier.price}
                  <span style={{
                    fontFamily: FONTS.ui, fontStyle: 'normal',
                    fontSize: '13px', color: T.softText,
                    marginLeft: '4px',
                  }}>{tier.unit}</span>
                </div>
                <div style={{
                  fontFamily: FONTS.ui, fontSize: '12.5px', lineHeight: 1.5,
                  color: T.softText, fontStyle: 'italic',
                  marginTop: '10px', marginBottom: '4px',
                }}>{tier.forWho}</div>
                <div style={{
                  width: '30px', height: '1px', background: T.gold,
                  margin: '16px 0 14px',
                }} />
                {tier.features.map(f => (
                  <div key={f} style={{
                    padding: '5px 0',
                    fontFamily: FONTS.ui, fontSize: '13px', lineHeight: 1.5,
                    color: T.softText,
                    display: 'flex', alignItems: 'flex-start', gap: '8px',
                  }}>
                    <span style={{ color: T.gold, flexShrink: 0 }}>·</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p style={{
            marginTop: '32px',
            fontFamily: FONTS.ui, fontSize: '13.5px', lineHeight: 1.6,
            color: T.muted, textAlign: 'center' as const,
          }}>
            Founding pricing available for select clients who join in the current
            window. Annual billing available with a discount for those who prefer
            it. Custom deployments (your own infrastructure, private tenant)
            available for enterprise engagements.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 32px', marginTop: '40px',
        background: T.deep, borderTop: `1px solid ${T.hairline}`,
      }}>
        <Reveal>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '11px',
              letterSpacing: '0.28em', color: T.goldDeep,
              textTransform: 'uppercase', marginBottom: '24px',
            }}>Access is by invitation</div>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              lineHeight: 1.15, letterSpacing: '-0.015em',
              color: T.platinum, marginBottom: '24px',
            }}>
              Ready to see if <span style={{ fontStyle: 'italic', color: T.gold }}>CoreDesk fits?</span>
            </h2>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '15.5px', lineHeight: 1.6,
              color: T.softText, marginBottom: '32px',
            }}>
              Book a 30-minute call. If it is a fit, we set up your workspace and
              onboard you the same month.
            </p>
            <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a data-btn="primary" href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
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
              }}>Send a brief</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SharedLayout>
  )
}