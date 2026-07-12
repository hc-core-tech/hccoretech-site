'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Calendar, FileText, ExternalLink } from 'lucide-react'
import SharedLayout, { T, FONTS, Reveal } from '../components/SharedLayout'

const CALENDLY = 'https://calendly.com/hc-hccoretech/30min'
const EMAIL = 'hc@hccoretech.com'

export default function ContactPage() {
  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{ padding: '80px 32px 40px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.24em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
            <span>Contact</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(44px, 6vw, 76px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '28px',
          }}>
            Two ways to reach me.
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              Both get to me directly.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
            color: T.softText, maxWidth: '680px',
            marginBottom: '20px',
          }}>
            Whether you send a written brief or book a call, it lands with me, and I reply within 48 hours with a clear next step.
          </p>
        </Reveal>
      </section>

      {/* Two primary paths */}
      <section style={{ padding: '20px 32px 40px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {/* Path 1: Discovery call */}
          <Reveal delay={100}>
            <div style={{
              padding: '32px 28px',
              background: T.deep,
              border: `1px solid ${T.midnight}`,
              borderRadius: '12px',
              height: '100%',
              display: 'flex', flexDirection: 'column',
              transition: 'border-color 260ms, transform 260ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = T.gold + '66';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = T.midnight;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${T.gold}18`, border: `1px solid ${T.gold}44`,
                marginBottom: '18px',
              }}>
                <Calendar size={18} color={T.gold} />
              </div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '10px',
              }}>Option one</div>
              <h2 style={{
                fontFamily: FONTS.serif, fontWeight: 500,
                fontSize: '26px', lineHeight: 1.15,
                letterSpacing: '-0.01em', color: T.platinum,
                marginBottom: '14px',
              }}>Book a discovery call</h2>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.65,
                color: T.softText, marginBottom: '24px', flex: 1,
              }}>
                30 minutes, no cost, no obligation, no sales pitch. We talk through what you are building, what the shape of the engagement could look like, and whether we are a fit.
              </p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px',
                background: T.goldDeep, border: `1px solid ${T.goldDeep}`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                alignSelf: 'flex-start',
                transition: 'gap 200ms, background 200ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.gap = '14px';
                e.currentTarget.style.background = T.gold;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.gap = '10px';
                e.currentTarget.style.background = T.goldDeep;
              }}
              >Book a call <ArrowRight size={14} /></a>
            </div>
          </Reveal>

          {/* Path 2: Written brief */}
          <Reveal delay={200}>
            <div style={{
              padding: '32px 28px',
              background: T.deep,
              border: `1px solid ${T.midnight}`,
              borderRadius: '12px',
              height: '100%',
              display: 'flex', flexDirection: 'column',
              transition: 'border-color 260ms, transform 260ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = T.gold + '66';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = T.midnight;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${T.gold}18`, border: `1px solid ${T.gold}44`,
                marginBottom: '18px',
              }}>
                <FileText size={18} color={T.gold} />
              </div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '10px',
              }}>Option two</div>
              <h2 style={{
                fontFamily: FONTS.serif, fontWeight: 500,
                fontSize: '26px', lineHeight: 1.15,
                letterSpacing: '-0.01em', color: T.platinum,
                marginBottom: '14px',
              }}>Send a written brief</h2>
              <p style={{
                fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.65,
                color: T.softText, marginBottom: '24px', flex: 1,
              }}>
                Tell me about your project in your own words. The form is short, but the more you share about your goals, timeline, and constraints, the sharper my first reply will be.
              </p>
              <Link href="/#quote" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px',
                background: 'transparent', border: `1px solid ${T.gold}66`,
                color: T.platinum, borderRadius: '6px',
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                alignSelf: 'flex-start',
                transition: 'gap 200ms, background 200ms, border-color 200ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.gap = '14px';
                e.currentTarget.style.background = `${T.gold}12`;
                e.currentTarget.style.borderColor = T.gold;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.gap = '10px';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = `${T.gold}66`;
              }}
              >Request a quote <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Direct email */}
      <section style={{ padding: '20px 32px 40px', maxWidth: '1080px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            padding: '24px 28px',
            background: T.deep,
            border: `1px solid ${T.midnight}`,
            borderLeft: `3px solid ${T.gold}`,
            borderRadius: '10px',
            display: 'flex', alignItems: 'center',
            gap: '18px', flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '38px', height: '38px', borderRadius: '50%',
              background: `${T.gold}18`,
              flexShrink: 0,
            }}>
              <Mail size={16} color={T.gold} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '10px',
                letterSpacing: '0.22em', color: T.goldDeep,
                textTransform: 'uppercase', marginBottom: '6px',
              }}>
                Prefer email? Reach me directly.
              </div>
              <a href={`mailto:${EMAIL}`} style={{
                fontFamily: FONTS.serif, fontSize: '20px',
                color: T.platinum, textDecoration: 'none',
                letterSpacing: '-0.005em',
              }}>
                {EMAIL}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What happens next */}
      <section style={{ padding: '40px 32px 100px', maxWidth: '900px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            paddingTop: '32px',
            borderTop: `1px solid ${T.hairline}`,
          }}>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.24em', color: T.gold,
              textTransform: 'uppercase', marginBottom: '18px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{ width: '20px', height: '1px', background: T.goldDeep }} />
              What happens next
            </div>
            <p style={{
              fontFamily: FONTS.serif, fontStyle: 'italic',
              fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.4,
              color: T.platinum, letterSpacing: '-0.005em',
              marginBottom: '20px',
            }}>
              I reply within 48 hours with a written next step.
            </p>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
              color: T.softText, marginBottom: '10px',
            }}>
              That could be a scoping document, a few clarifying questions, a suggested time for the discovery call, or an honest referral if we are not the right fit for each other.
            </p>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
              color: T.softText,
            }}>
              Either way, the reply is written, considered, and comes from me.
            </p>
          </div>
        </Reveal>
      </section>
    </SharedLayout>
  );
}