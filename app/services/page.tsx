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
    tagline: 'Founder-led websites that grow your clientele.',
    whoFor: [
      "Discovery is the part most agencies skip and most freelancers skim. I begin with it.",
      "We start with a working session: you bring your business, your clientele, and your instincts, and I bring the questions you would never think to ask yourself. How do you show your website viewers that you have what they are looking for? Do they recognise you as the right person for what they need? What are the next steps you want them to take?",
      "That conversation becomes the brief. The brief becomes the writing for every page of the site. The writing shapes the design. The design becomes the site itself.",
      "By the time you approve staging, we will have decided on every meaningful decision.",
      "One month of hands-on support after launch is included. Beyond that, I stay reachable. If I ever spot something that could work harder for you, I will bring it forward.",
    ],
    deliverables: [
      'A brand direction covering colour, typography, and tone of voice',
      'A structured site map that shows how visitors move through the pages of the website, and the writing for each of those pages',
      'A full design, built to responsive and accessibility standards',
      'SEO configuration: metadata, structured data, semantic HTML, sitemap, and Open Graph tags for search and social sharing',
      'Contact forms, booking flows, or checkout, wired to your preferred provider',
      'Analytics setup so you can see what pages and CTAs are actually working',
      'Deployed on your own hosting (WordPress, Next.js, Astro, or whatever you already use)',
      'A written handover kit so you or your team can edit the site yourself after launch',
      'One month of light post-launch support included',
    ],
    timeline: '2 to 10 weeks depending on tier',
    investment: 'From €1,400 landing page to €16,500 brand and website build. Maintenance from €250/mo.',
    flow: [
      { step: 'Discovery', body: 'We meet on one or two calls to understand your business, your audience, and what you need the website to do for you. I write everything up as a brief and share it with you before we go further.' },
      { step: 'Direction', body: 'I present the brand direction, wireframes for each page, and an outline of the writing for every page of the site. You review and approve this before any design or code work begins.' },
      { step: 'Build', body: 'I design and build the site as one continuous effort, not two separate phases. Every week I send you a progress update with a live staging link you can click through and comment on.' },
      { step: 'Launch', body: 'On launch day I migrate everything to your hosting, walk through a launch checklist with you, and hand over the edit instructions. You get 30 days of light support included after go-live.' },
    ],
    example: "A recent example is Seraph Zorg. I built the full brand system, wrote every page with the founder, deployed the WordPress front-end, and set up CoreDesk to run the back office. The site launched in May 2026 and produced its first client booking within three days.",
  },
  {
    num: '02',
    Icon: Brain,
    title: 'AI Engineering',
    tagline: 'AI systems that survive live production.',
    whoFor: [
      "Most AI engagements produce two things: a slide deck of what the model will do, and code that quietly fails once real users show up.",
      "Every project I run starts with an architecture proposal, an evaluation plan, and a written scoping document. That document fixes the price, the timeline, and the specific outcomes we agree count as finished.",
      "Then the build happens against real data on your infrastructure with governance mapped from the first architecture sketch. Multi-agent systems get orchestration and evaluation harnesses. Simpler assistants get simpler designs. Neither gets a proof-of-concept that dies in production.",
      "You leave the engagement with a working system your team can actually run, a runbook they can follow, and documentation the next auditor will accept.",
    ],
    deliverables: [
      'A written solution design and architecture proposal, reviewed with you before code begins',
      'The built system itself: RAG pipelines, multi-agent orchestration, or a custom assistant, depending on scope',
      'Integrations with the tools you already use (Slack, Microsoft 365, Google, Notion, or others)',
      'Backend written in Python/FastAPI, frontend in Next.js when the project needs one',
      'Deployment to your Azure, GCP, AWS, or Hetzner infrastructure',
      'Governance documentation aligned to the EU AI Act and ISO/IEC 42001',
      'A written runbook and handover session so your team owns the system after go-live',
    ],
    timeline: '4 to 14 weeks depending on scope',
    investment: 'From €2,500 for integrations to €18,000 for a multi-agent system. CoreDesk workspace setup €3,500. Custom agent €5,500. RAG pipeline €6,500.',
    flow: [
      { step: 'Discovery', body: 'Working sessions with your team to map the workflow, the data available, and the constraints we need to design around. I write everything up as a scoping document with a fixed price and timeline, and share it with you before any commitment.' },
      { step: 'Design', body: 'I write up the solution architecture, model choices, evaluation plan, and deployment target. We review it together and you approve before I start coding.' },
      { step: 'Build', body: 'I deliver in two-week milestones. From the second milestone, you have a working version of the software in a private preview environment where real people from your team can use it and give feedback. Each milestone refines the system further based on what they find.' },
      { step: 'Handover', body: 'I deploy the system to your infrastructure, train your team on how to run it, and hand over the runbook and full documentation. If you want ongoing support after that, an ongoing retainer is available.' },
    ],
    example: "A recent example: a nine-agent content production system for enterprise clients. Custom agents, RAG pipelines, and multi-agent orchestration, all deployed to the client's own infrastructure with full governance documentation.",
  },
  {
    num: '03',
    Icon: Shield,
    title: 'AI Governance',
    tagline: 'Frameworks that answer "how do you know?" with more than a slide.',
    whoFor: [
      "Compliance work usually stops at the report. I do not.",
      "I work alongside your product team, not around them. We list the AI systems you actually have, and the ones you plan to build. We map each one to the frameworks that apply to your market.",
      "You leave with the artifacts your enterprise buyer, auditor, or board review will need, and the internal literacy to maintain them.",
      "Because a compliance programme only your consultant understands is a compliance programme that dies on their calendar.",
    ],
    deliverables: [
      'A written inventory of every AI system you have or plan to build, with a risk classification for each',
      'A control catalogue mapped to whichever framework applies to your market',
      'Written policies covering model use, evaluation, and incident response',
      'Audit-ready documentation packs: system cards, DPIA, and technical documentation',
      'A monitoring plan and vendor due-diligence templates you can reuse',
      'A training session for the team who will own the compliance programme after handover',
    ],
    timeline: '2 to 12 weeks depending on tier',
    investment: 'From €2,800 for governance intake and report, to €28,000 for an enterprise compliance audit. Monthly compliance monitor from €850/mo.',
    flow: [
      { step: 'Scope', body: 'We agree on the frameworks that apply to you, which AI systems are in scope, and which risks are actually material. I then write this up as a scoping document you sign before the assessment begins.' },
      { step: 'Assessment', body: 'I run a gap analysis of how your AI governance currently stands against the requirements of the chosen framework. I then produce a written report with a prioritised list of remediations, ordered by risk and effort.' },
      { step: 'Documentation', body: 'I draft the policies, the control catalogue, and the audit-ready packs. Every draft is reviewed with you before it is finalised.' },
      { step: 'Handover', body: 'I run a training session for the team owning the programme going forward, and hand over the final documentation. From that point, you own and run the programme yourself, with optional check-ins if you want them.' },
    ],
    example: "A recent example: governance engagements for AI vendors scaling into regulated procurement (healthcare, finance, public sector), aligned to EU AI Act, NIST AI RMF, ISO/IEC 42001, GDPR, and OECD AI.",
  },
  {
    num: '04',
    Icon: LayoutDashboard,
    title: 'CoreDesk Platform',
    tagline: 'The AI workspace, built around a real practitioner.',
    whoFor: [
      "A quick tour, because 'AI back office' is just words until you see what one actually does for you.",
      "You log in, and CoreDesk has already done most of the work:",
      "The invoice for last week's engagement is drafted and waiting for your approval. The prep notes for your ten o'clock meeting are ready in the meeting card. The receipt from Wednesday has been matched against the right invoice.",
      "You review, adjust if you want to, and approve. The agent takes it from there.",
      "Nothing has slipped, because CoreDesk did not wait for anything to slip.",
      "Your job is oversight and judgment. The workspace handles the 80 percent that does not need you, and hands you the 20 percent that does.",
      "Every module was built with a real founder's daily work in mind before I opened it to anyone else.",
    ],
    deliverables: [
      'Invoicing, proposals, and receipts, with support for multiple business entities and multiple currencies',
      'A full CRM with pipeline and deal management',
      'Meetings module: pre-meeting prep, live notes, and action-item tracking, supported by AI agents',
      'A governance dashboard for every AI system you use in the workspace',
      'A multi-language interface: Dutch, English, French, Russian, Spanish, and Portuguese',
      'An onboarding session and direct engineer access for the life of your subscription',
    ],
    timeline: 'Onboarding 1 to 2 weeks. Ongoing subscription.',
    investment: 'Starter €250/mo, Basis €450/mo, Pro €950/mo. Enterprise pricing on request. Founding pricing available for select clients.',
    flow: [
      { step: 'Discovery call', body: 'We meet on a mutual-fit call to understand your practice, your day-to-day, and what you need CoreDesk to hold for you. I am selective about who I take on so every user gets the direct attention the product promises.' },
      { step: 'Setup', body: "I provision your workspace, apply your brand, and bring in the invoices, clients, and receipts you already have from wherever they live now, so you are not starting with an empty workspace." },
      { step: 'Onboarding', body: 'We meet for a working session that walks you through the daily flow: invoicing, meetings, the CRM, and how the agents behave. The session is recorded so you can revisit it any time.' },
      { step: 'Ongoing', body: 'You have direct engineer access for questions, feature requests, and iterations. Not a ticket queue routing you to a stranger. A direct line to me, no middleman.' },
    ],
    example: 'A recent example: JS Zorg en Advies | Seraph Zorg. Founding client since May 2026, running their full back office on CoreDesk every day.',
  },
  {
    num: '05',
    Icon: MessageSquare,
    title: 'Advisory & Technical Review',
    tagline: 'Clarity from someone who has actually built and shipped.',
    whoFor: [
      "Every advisory engagement produces a written brief before it produces an opinion.",
      "We agree on the questions to answer. I do the review: working sessions with your team, vendor conversations, or a code walkthrough, whatever the scope calls for. Then I write it up.",
      "You get a document with recommendations, the reasoning behind each of them, and the risks I want you to know about. At least one follow-up call is included so you can push back before you act on any of it.",
      "Executives and stakeholders leave with clarity, not just a summary of the meeting.",
    ],
    deliverables: [
      'A written scoping brief agreed with you before any work starts',
      'Working sessions with your team or with the vendors you are considering',
      'A written deliverable: recommendations, risks flagged, and next steps you can take',
      'At least one follow-up call to discuss the report, more if the scope requires it',
    ],
    timeline: 'One hour for a short focused review; up to three weeks for larger fixed-scope engagements.',
    investment: '€225/hr AI strategy or technical review. €275/hr governance consultation. €325/hr combined AI plus governance advisory. Fixed-scope engagements quoted individually.',
    flow: [
      { step: 'Brief', body: 'We have a conversation to define the clear questions the engagement needs to answer, and the scope of the work. I write it up as a brief and we both sign it before I start.' },
      { step: 'Review', body: 'I run whatever the scope calls for: working sessions with your team, a code review, vendor interviews, or a combination of all three. Everything is documented as I go.' },
      { step: 'Report', body: 'I produce a written deliverable with the recommendations, the reasoning behind each of them, and the risks I want you to be aware of. The report is yours to keep and reference.' },
      { step: 'Follow-up', body: 'At least one follow-up call is included so you can push back, ask questions, and stress-test the recommendations before you act on any of them. More calls if the scope requires them.' },
    ],
    example: 'A recent example: vendor due-diligence and AI strategy reviews for founders and boards before they commit to a hire, a purchase, or a build.',
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

        <div style={{
          fontFamily: FONTS.ui, fontSize: '18px', lineHeight: 1.65,
          color: T.softText, maxWidth: '640px',
        }}>
          <p style={{ marginBottom: '10px' }}>The mechanics behind each engagement.</p>
          <p style={{ marginBottom: '10px' }}>Below you will find what each service actually delivers, what it costs, and what to expect from the first call to the final handover.</p>
          <p style={{ marginBottom: '0' }}>Tap the dropdown under any service to open its full breakdown.</p>
        </div>
      </section>

      {/* Services list */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>
        <Reveal>
          <div style={{
            marginTop: '48px',
            marginBottom: '16px',
            padding: '20px 24px',
            background: `${T.gold}0A`,
            border: `1px solid ${T.gold}33`,
            borderLeft: `3px solid ${T.gold}`,
            borderRadius: '10px',
          }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: T.gold, marginBottom: '8px',
            }}>A note on the numbers</div>
            <p style={{
              fontFamily: FONTS.serif, fontStyle: 'italic',
              fontSize: '15px', lineHeight: 1.6, color: T.softText,
              margin: 0,
            }}>
              The prices below reflect typical scopes for each service. Every project is quoted individually after a discovery call, and larger enterprise engagements are sized independently.
            </p>
          </div>
        </Reveal>
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
              <div>
                {s.whoFor.map((para, k) => (
                  <p key={k} style={{
                    fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.7,
                    color: T.softText,
                    marginBottom: k === s.whoFor.length - 1 ? '0' : '12px',
                  }}>{para}</p>
                ))}
              </div>
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