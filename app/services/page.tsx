'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Globe, Brain, Shield, MessageSquare, LayoutDashboard, ChevronDown } from 'lucide-react'
import SharedLayout, { T, FONTS, Reveal } from '../components/SharedLayout'

/**
 * /services page. Deep service descriptions with what you get, timing, and price.
 */

const SERVICES = [
  {
    num: '01',
    Icon: Globe,
    title: 'Websites',
    tagline: 'Founder-led websites that turn visitors into clients.',
    whoFor: "Most agencies build what you tell them. Most freelancers ship whatever the template says. Neither has time to sit with you and figure out what your website should actually be saying. That is the part I do first. What do you want your visitor to know? What should they feel? What makes them choose you and not someone else? Founders are often too close to see this clearly, so I sit in your audience's shoes with you until we get it right. Then I build the website to say it: brand system, page-by-page copy, mobile-responsive build, handover kit so it stays yours.",
    deliverables: [
      'Brand direction: colour, typography, voice',
      'Information architecture and page-by-page copy',
      'Full design, built to responsive and accessibility standards',
      'SEO configuration: metadata, structured data, semantic HTML, sitemap, and Open Graph tags',
      'Conversion-focused CTAs and analytics setup so you can see what is working',
      'Deployed on your infrastructure (WordPress, Next.js, Astro, or your stack)',
      'Post-launch handover kit with edit instructions',
      'One month of light post-launch support',
    ],
    timeline: '2 to 10 weeks depending on tier',
    investment: 'From €1,400 landing page to €16,500 brand and website build. Maintenance from €250/mo.',
    flow: [
      { step: 'Discovery', body: 'One or two calls to understand the practice, the audience, and what the website needs to do. Written brief follows.' },
      { step: 'Direction', body: 'Brand direction, wireframes, and copy outline. You approve before build begins.' },
      { step: 'Build', body: 'Design and development in one motion. Weekly progress updates with a live staging link.' },
      { step: 'Launch', body: 'Migration to your hosting, launch checklist, handover, and 30 days of light support included.' },
    ],
    example: "Magnifying Children's Horizons: full brand system, page-by-page copy, WordPress build, and lead-magnet flow for a values-led children's education programme in Canada.",
  },
  {
    num: '02',
    Icon: Brain,
    title: 'AI engineering',
    tagline: 'Custom AI systems built to be shipped, not demoed.',
    whoFor: "You have a workflow that costs your team hours every week, or a pilot that impressed a demo audience but falls over the second real users touch it. Sometimes the system does not exist yet, and you need someone to design it from scratch, including the frameworks that let multiple agents work together. You need someone who understands both the model math and the production runbook, and who can hand your team a system they actually own after go-live.",
    deliverables: [
      'Solution design and architecture proposal',
      'RAG pipelines, multi-agent orchestration, or custom assistants',
      'Integrations with existing tooling (Slack, Microsoft 365, Google, Notion, etc.)',
      'Backend in Python/FastAPI, frontend in Next.js when needed',
      'Deployment to your Azure / GCP / AWS / Hetzner infrastructure',
      'Governance documentation aligned to EU AI Act and ISO/IEC 42001',
      'Runbook and handover so your team owns the system',
    ],
    timeline: '4 to 14 weeks depending on scope',
    investment: 'From €2,500 for integrations to €18,000 for a multi-agent system. CoreDesk workspace setup €3,500. Custom agent €5,500. RAG pipeline €6,500.',
    flow: [
      { step: 'Discovery', body: 'Working sessions with your team to map the workflow, the data, and the constraints. Written scoping document with fixed price and timeline.' },
      { step: 'Design', body: 'Solution architecture, model choices, evaluation plan, and deployment target. Written and reviewed with you before code begins.' },
      { step: 'Build', body: 'Iterative delivery in two-week milestones. Working software from week two, refined against real user feedback.' },
      { step: 'Handover', body: 'Deploy to your infrastructure, train your team, hand over runbook and documentation. Optional retainer for post-launch support.' },
    ],
    example: 'In early 2026 I led AI development on a nine-agent content production system for enterprise clients, delivered on time. Custom agents, RAG pipelines, and multi-agent workflows deployed to client infrastructure with full governance documentation.',
  },
  {
    num: '03',
    Icon: Shield,
    title: 'AI governance',
    tagline: 'Frameworks that answer "how do you know?" with more than a slide.',
    whoFor: "Your enterprise buyer just asked for your AI documentation and the room went quiet. Or the EU AI Act deadline is coming and no one on your team is sure what applies to you. This service exists so your next procurement call, board update, or auditor visit goes well because you did the work before it was demanded.",
    deliverables: [
      'AI system inventory and risk classification',
      'Control catalogue mapped to your chosen framework',
      'Written policies: model use, evaluation, incident response',
      'Audit-ready documentation packs (system cards, DPIA, technical documentation)',
      'Monitoring plan and vendor due-diligence templates',
      'Training session for the team owning ongoing compliance',
    ],
    timeline: '2 to 12 weeks depending on tier',
    investment: 'From €2,800 for governance intake and report, to €28,000 for enterprise compliance audit. Monthly compliance monitor from €850/mo.',
    flow: [
      { step: 'Scope', body: 'Which frameworks apply, which AI systems you have or plan, which risks are actually material.' },
      { step: 'Assessment', body: 'Gap analysis against the chosen framework. Written report with prioritised remediation.' },
      { step: 'Documentation', body: 'Draft the policies, control catalogue, and audit-ready packs. Reviewed with you.' },
      { step: 'Handover', body: 'Training session and final documentation. You own the running programme.' },
    ],
    example: 'Governance packages for AI vendors scaling into regulated procurement (healthcare, finance, public sector).',
  },
  {
    num: '04',
    Icon: LayoutDashboard,
    title: 'CoreDesk platform',
    tagline: 'The AI-first back office for independent practitioners and SMEs.',
    whoFor: "You run a small practice. Some evenings, after the client work is done, you sit down to send invoices, chase receipts, prep for tomorrow's meetings, and check what got automated. CoreDesk is what I built so my clients (and myself) get those hours back. Every module was tested against a real practitioner in production first, then generalised.",
    deliverables: [
      'Invoicing, proposals, receipts (multi-issuer, multi-currency)',
      'CRM with pipeline and deal management',
      'Meetings: prep, notes, action items with AI agents',
      'Governance dashboard for AI systems in use',
      'Multi-language support: NL, EN, FR, RU, ES, PT',
      'Onboarding session and ongoing engineer contact',
    ],
    timeline: 'Onboarding 1 to 2 weeks. Ongoing subscription.',
    investment: 'Starter €250/mo, Basis €450/mo, Pro €950/mo. Enterprise pricing on request. Founding pricing available for select customers.',
    flow: [
      { step: 'Discovery call', body: 'Mutual fit call. Not everyone is a fit, that is deliberate.' },
      { step: 'Setup', body: 'Workspace provisioned, brand set, first month of data migrated and verified.' },
      { step: 'Onboarding', body: 'Working session to walk through daily flow: invoicing, meetings, CRM. Recording provided.' },
      { step: 'Ongoing', body: 'Direct engineer access for questions, feature requests, and iterations. Not a support ticket queue.' },
    ],
    example: 'JS Zorg en Advies | Seraph Zorg is the founding customer, running their full back office on CoreDesk.',
  },
  {
    num: '05',
    Icon: MessageSquare,
    title: 'Advisory & technical review',
    tagline: 'An outside read that pays for itself in one meeting.',
    whoFor: "You have a decision to make and you would rather not make it alone. Maybe it is a vendor you are about to sign with, a hire your team is split on, or an AI strategy the board keeps postponing. One hour with someone who has actually built and shipped these systems can save a project. That is what this is.",
    deliverables: [
      'Written scoping brief with clear questions to answer',
      'Working sessions with your team or vendor',
      'Written deliverable: recommendation, risks, and next steps',
      'One follow-up call to discuss the report',
    ],
    timeline: '1 hour to 3 weeks depending on scope',
    investment: '€225/hr AI strategy or technical review. €275/hr governance consultation. €325/hr combined AI plus governance advisory. Fixed-scope engagements quoted individually.',
    flow: [
      { step: 'Brief', body: 'Written brief agreed with you before work starts. Clear questions, clear scope.' },
      { step: 'Review', body: 'Working sessions, code review, vendor interviews. Whatever the scope requires.' },
      { step: 'Report', body: 'Written deliverable with recommendation and reasoning. You keep the report.' },
      { step: 'Follow-up', body: 'One follow-up call to discuss the report and answer questions.' },
    ],
    example: 'Vendor due-diligence and AI strategy reviews for founders and boards pre-commit.',
  },
]

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (num: string) => setExpanded(prev => ({ ...prev, [num]: !prev[num] }));

  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{ padding: '80px 32px 64px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: '11px',
          letterSpacing: '0.24em', color: T.goldDeep,
          textTransform: 'uppercase', marginBottom: '28px',
        }}>
          <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
          <span>Services</span>
        </div>

        <h1 style={{
          fontFamily: FONTS.serif, fontWeight: 400,
          fontSize: 'clamp(44px, 6vw, 84px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          color: T.platinum, marginBottom: '28px',
        }}>
          Five services.
          <br />
          <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
            One accountable engineer.
          </span>
        </h1>

        <p style={{
          fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
          color: T.softText, maxWidth: '640px',
        }}>
          Every engagement is scoped, priced, and delivered by the same hand. No agency
          layer, no handoffs, no hidden subcontractors. Below is what I actually do,
          what it costs, and what an engagement looks like.
        </p>
      </section>

      {/* Services list */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>
        {SERVICES.map((s, i) => {
          const isExpanded = !!expanded[s.num];
          return (
          <Reveal key={s.num}>
            <section
              id={s.title.toLowerCase().replace(/\W+/g, '-')}
              style={{
                padding: '80px 0',
                borderTop: i === 0 ? 'none' : `1px solid ${T.hairline}`,
              }}
            >
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '24px',
              alignItems: 'start',
              marginBottom: '32px',
            }}>
              <div style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '28px', color: T.gold, fontWeight: 500,
                letterSpacing: '0.02em', paddingTop: '4px',
              }}>{s.num}</div>
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '6px 12px 6px 8px', marginBottom: '14px',
                  background: `${T.gold}12`, border: `1px solid ${T.gold}44`,
                  borderRadius: '4px',
                }}>
                  <s.Icon size={14} color={T.gold} />
                  <span style={{
                    fontFamily: FONTS.mono, fontSize: '10px',
                    letterSpacing: '0.2em', color: T.gold,
                    textTransform: 'uppercase',
                  }}>Service</span>
                </div>
                <h2 style={{
                  fontFamily: FONTS.serif, fontWeight: 500,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: 1.05, letterSpacing: '-0.015em',
                  color: T.platinum, marginBottom: '12px',
                }}>{s.title}</h2>
                <p style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '20px', lineHeight: 1.4,
                  color: T.gold, marginBottom: '0',
                }}>{s.tagline}</p>
              </div>
            </div>

            {/* Expand toggle — pulsing chevron centered below the header.
                When collapsed, the icon does a slow heartbeat (lub-dub) to
                draw the eye. When expanded, it stops pulsing and rotates
                180 degrees. Hover pauses the beat and warms the icon. */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              marginTop: '18px', marginBottom: '4px',
            }}>
              <style>{`
                @keyframes service-heartbeat {
                  0%   { transform: scale(1);    }
                  14%  { transform: scale(1.18); }
                  28%  { transform: scale(1);    }
                  42%  { transform: scale(1.12); }
                  70%  { transform: scale(1);    }
                  100% { transform: scale(1);    }
                }
                .service-toggle {
                  width: 40px; height: 40px;
                  border-radius: 50%;
                  background: transparent;
                  border: 1px solid ${T.gold}55;
                  color: ${T.gold};
                  display: inline-flex; align-items: center; justify-content: center;
                  cursor: pointer;
                  transition: background 220ms ease, border-color 220ms ease, transform 220ms ease;
                  animation: service-heartbeat 1.6s ease-in-out infinite;
                  will-change: transform;
                }
                .service-toggle.expanded {
                  animation: none;
                  background: ${T.gold}18;
                  border-color: ${T.gold};
                }
                .service-toggle:hover {
                  animation-play-state: paused;
                  background: ${T.gold}22;
                  border-color: ${T.gold};
                }
                .service-toggle .chev {
                  transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1);
                }
                .service-toggle.expanded .chev {
                  transform: rotate(180deg);
                }
                @media (prefers-reduced-motion: reduce) {
                  .service-toggle { animation: none !important; }
                }
              `}</style>
              <button
                onClick={() => toggle(s.num)}
                aria-expanded={isExpanded}
                aria-controls={`${s.num}-details`}
                aria-label={isExpanded ? `Hide ${s.title} details` : `Show ${s.title} details`}
                className={`service-toggle ${isExpanded ? 'expanded' : ''}`}
              >
                <ChevronDown size={16} className="chev" />
              </button>
            </div>

            {/* Expandable details */}
            {isExpanded && (
              <div
                id={`${s.num}-details`}
                style={{
                  animation: 'service-expand 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
              <style>{`
                @keyframes service-expand {
                  from { opacity: 0; transform: translateY(-8px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
              `}</style>

            {/* Who for */}
            <div style={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 200px) 1fr',
              gap: '32px',
              padding: '24px 0',
              borderTop: `1px solid ${T.hairline}`,
            }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase',
              }}>Who this is for</div>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.7,
                color: T.softText,
              }}>{s.whoFor}</p>
            </div>

            {/* Deliverables */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 200px) 1fr',
              gap: '32px',
              padding: '24px 0',
              borderTop: `1px solid ${T.hairline}`,
            }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase',
              }}>What you get</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.deliverables.map(d => (
                  <li key={d} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '6px 0',
                    fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.6,
                    color: T.platinum,
                  }}>
                    <span style={{
                      color: T.gold, flexShrink: 0, paddingTop: '2px',
                      fontFamily: FONTS.mono, fontSize: '10px',
                    }}>·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline + Investment */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 200px) 1fr 1fr',
              gap: '32px',
              padding: '24px 0',
              borderTop: `1px solid ${T.hairline}`,
            }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase',
              }}>Typical shape</div>
              <div>
                <div style={{
                  fontFamily: FONTS.mono, fontSize: '9px',
                  letterSpacing: '0.2em', color: T.muted,
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>Timeline</div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '20px', color: T.platinum,
                  letterSpacing: '-0.01em',
                }}>{s.timeline}</div>
              </div>
              <div>
                <div style={{
                  fontFamily: FONTS.mono, fontSize: '9px',
                  letterSpacing: '0.2em', color: T.muted,
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>Investment</div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: '20px', color: T.platinum,
                  letterSpacing: '-0.01em',
                }}>{s.investment}</div>
              </div>
            </div>

            {/* Engagement flow */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 200px) 1fr',
              gap: '32px',
              padding: '24px 0',
              borderTop: `1px solid ${T.hairline}`,
            }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase',
              }}>Engagement flow</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
              }}>
                {s.flow.map((f, idx) => (
                  <div key={f.step} data-card="true" style={{
                    padding: '16px 18px',
                    background: T.deep,
                    border: `1px solid ${T.midnight}`,
                    borderRadius: '6px',
                  }}>
                    <div style={{
                      fontFamily: FONTS.mono, fontSize: '9px',
                      letterSpacing: '0.22em', color: T.gold,
                      textTransform: 'uppercase', marginBottom: '10px',
                    }}>Step {idx + 1}</div>
                    <div style={{
                      fontFamily: FONTS.serif, fontStyle: 'italic',
                      fontSize: '18px', color: T.platinum,
                      letterSpacing: '-0.01em', marginBottom: '8px',
                    }}>{f.step}</div>
                    <div style={{
                      fontFamily: FONTS.ui, fontSize: '12.5px',
                      lineHeight: 1.5, color: T.softText,
                    }}>{f.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent work */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 200px) 1fr',
              gap: '32px',
              padding: '24px 0',
              borderTop: `1px solid ${T.hairline}`,
            }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase',
              }}>Recent work</div>
              <p style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '17px', lineHeight: 1.5,
                color: T.softText,
              }}>{s.example}</p>
            </div>
              </div>
            )}
            </section>
          </Reveal>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section style={{
        padding: '80px 32px', marginTop: '40px',
        background: T.deep,
        borderTop: `1px solid ${T.hairline}`,
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.28em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '24px',
          }}>Ready to talk?</div>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.1, letterSpacing: '-0.015em',
            color: T.platinum, marginBottom: '20px',
          }}>
            Every project quoted <span style={{ fontStyle: 'italic', color: T.gold }}>individually.</span>
          </h2>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.6,
            color: T.softText, maxWidth: '580px', margin: '0 auto 36px',
          }}>
            Send a brief through the form or book a discovery call. I respond within
            48 hours with a written scoping document and fixed quote.
          </p>
          <div style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link data-btn="primary" href="/#quote" style={{
              padding: '14px 26px',
              background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>Request a quote <ArrowRight size={14} /></Link>
            <a href="https://calendly.com/hc-hccoretech/30min" data-btn="secondary" style={{
              padding: '14px 26px',
              background: 'transparent', border: `1px solid ${T.midnight}`,
              color: T.platinum, borderRadius: '6px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}>Book a call</a>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}