'use client'

import Link from 'next/link'
import SharedLayout, { T, FONTS } from '../components/SharedLayout'

export default function ContactPage() {
  return (
    <SharedLayout>
      <section style={{ padding: '80px 32px 120px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: '11px',
          letterSpacing: '0.24em', color: T.goldDeep,
          textTransform: 'uppercase', marginBottom: '28px',
        }}>
          <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
          <span>Contact</span>
        </div>

        <h1 style={{
          fontFamily: FONTS.serif, fontWeight: 400,
          fontSize: 'clamp(44px, 6vw, 76px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          color: T.platinum, marginBottom: '28px',
        }}>
          <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>Two ways to reach me.</span>
        </h1>

        <p style={{
          fontFamily: FONTS.ui, fontSize: '17px', lineHeight: 1.7,
          color: T.softText, maxWidth: '680px',
          marginBottom: '40px',
        }}>
          The fastest way to start a conversation is the request-a-quote form on the homepage. It lets me understand the shape of your project before we speak. If you would rather talk first, book a 30-minute discovery call. Either way, I respond within 48 hours.
        </p>

        <div style={{
          display: 'inline-block', padding: '8px 14px',
          background: `${T.gold}0A`, border: `1px dashed ${T.goldDeep}44`,
          borderRadius: '4px',
          fontFamily: FONTS.mono, fontSize: '10px',
          letterSpacing: '0.22em', color: T.goldDeep,
          textTransform: 'uppercase',
        }}>
          Page in progress
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link href="/" style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: T.gold, textDecoration: 'none',
            paddingBottom: '6px',
            borderBottom: `1px solid ${T.gold}66`,
          }}>← Back to home</Link>
        </div>
      </section>
    </SharedLayout>
  );
}