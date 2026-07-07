'use client'

/**
 * SharedLayout.tsx
 * Nav + Footer wrapper for every non-homepage page. Includes:
 *   . Fixed scroll progress bar (hairline just below nav)
 *   . Reveal component (IntersectionObserver-based fade-up on scroll)
 *   . Palette + font token exports
 */

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const T = {
  obsidian:  '#1E223C',
  deep:      '#262A4A',
  midnight:  '#30345C',
  hairline:  '#161832',
  platinum:  '#E2E2E6',
  softText:  '#9CA3AF',
  muted:     '#6B7280',
  gold:      '#D4A85E',
  goldSoft:  '#EBC580',
  goldDeep:  '#8A7038',
  sapphire:  '#818CF8',
}

const FONTS = {
  serif: "var(--font-serif), 'Cormorant Garamond', Georgia, serif",
  ui:    "var(--font-sans), 'Inter', system-ui, sans-serif",
  mono:  "var(--font-mono), 'JetBrains Mono', monospace",
}

const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'CoreDesk', href: '/coredesk' },
  { label: 'Work',     href: '/work' },
  { label: 'Process',  href: '/process' },
  { label: 'About',    href: '/about' },
  { label: 'FAQ',      href: '/faq' },
]

const CALENDLY = 'https://calendly.com/hc-hccoretech/30min'
// Bump breakpoint so nav collapses to hamburger sooner (fixes wordmark
// crowding into Services on medium widths ~900-1080px).
const MOBILE_BP = 1200

function useIsMobile(bp: number = MOBILE_BP) {
  const [m, setM] = useState(false)
  useEffect(() => {
    const check = () => setM(window.innerWidth <= bp)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [bp])
  return m
}

// Reveal: fades content up into view when it enters the viewport.
export function Reveal({ children, delay = 0, y = 20 }: { children: React.ReactNode, delay?: number, y?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function HCCTMonogram({ size = 24 }: { size?: number }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', lineHeight: 1,
      fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 500,
      fontSize: `${size}px`, color: T.gold, letterSpacing: '-0.01em',
    }}>
      <span>H</span>
      <span style={{ marginLeft: '-0.04em' }}>C</span>
      <span style={{ display: 'inline-block', transform: 'scaleX(-1)', marginLeft: '-0.38em' }}>C</span>
      <span style={{ marginLeft: '-0.14em' }}>T</span>
    </div>
  )
}

function Nav() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0
      setScrollPct(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '14px 20px' : '20px 32px',
        background: scrolled ? 'rgba(12, 14, 30, 0.85)' : 'rgba(12, 14, 30, 0.6)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? T.hairline : 'transparent'}`,
        transition: 'all 260ms ease',
      }}>
        <div style={{
          maxWidth: '1240px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '48px',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none', flexShrink: 0 }}>
            <HCCTMonogram size={isMobile ? 20 : 24} />
            {!isMobile && (
              <span style={{
                paddingLeft: '18px', borderLeft: `1px solid ${T.hairline}`,
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: '15px', fontWeight: 500,
                letterSpacing: '0.06em', color: T.platinum,
                textTransform: 'uppercase',
              }}>HC Core Tech</span>
            )}
          </Link>

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
              {NAV_ITEMS.map(item => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.color = T.gold }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.color = T.softText }}
                    style={{
                      fontFamily: FONTS.ui, fontSize: '13px',
                      color: active ? T.gold : T.softText, fontWeight: 500,
                      letterSpacing: '0.02em', textDecoration: 'none',
                      transition: 'color 200ms',
                    }}
                  >{item.label}</Link>
                )
              })}
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" data-btn="secondary" style={{
                fontFamily: FONTS.ui, fontSize: '12px', fontWeight: 500,
                padding: '10px 18px',
                border: `1px solid ${T.midnight}`,
                color: T.platinum, borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'all 260ms ease',
              }}>Book a call</a>
              <Link data-btn="primary" href="/#quote" style={{
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                padding: '11px 22px',
                border: `1px solid ${T.goldDeep}`, background: T.goldDeep,
                color: T.platinum, borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'all 260ms ease',
              }}>Request a quote <ArrowUpRight size={13} /></Link>
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              onMouseEnter={e => { e.currentTarget.style.color = T.gold }}
              onMouseLeave={e => { e.currentTarget.style.color = T.platinum }}
              style={{
                background: 'transparent', border: 'none', color: T.platinum,
                cursor: 'pointer', padding: '6px',
                transition: 'color 200ms ease',
              }}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </nav>

      {/* Scroll progress bar. Appears once you scroll past the nav-visible threshold. */}
      <div style={{
        position: 'fixed',
        top: '58px',
        left: 0,
        right: 0,
        height: '2px',
        background: `${T.hairline}80`,
        zIndex: 99,
        opacity: scrolled ? 1 : 0,
        transition: 'opacity 260ms ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          height: '100%',
          width: `${scrollPct}%`,
          background: `linear-gradient(90deg, ${T.goldDeep}, ${T.gold}, ${T.goldSoft})`,
          transition: 'width 100ms linear',
        }} />
      </div>

      {isMobile && open && (
        <div style={{
          position: 'fixed', top: '58px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(12, 14, 30, 0.98)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${T.hairline}`,
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={e => { e.currentTarget.style.color = T.gold }}
              onMouseLeave={e => { e.currentTarget.style.color = T.platinum }}
              style={{
                fontFamily: FONTS.ui, fontSize: '15px', fontWeight: 500,
                color: T.platinum, padding: '12px 0',
                borderBottom: `1px solid ${T.hairline}`,
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
            >{item.label}</Link>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" data-btn="secondary" style={{
            marginTop: '14px',
            fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
            padding: '13px 20px', textAlign: 'center' as const,
            border: `1px solid ${T.midnight}`, color: T.platinum,
            borderRadius: '6px', letterSpacing: '0.04em',
            textDecoration: 'none',
          }}>Book a call</a>
          <Link data-btn="primary" href="/#quote" style={{
            marginTop: '8px',
            fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
            padding: '13px 20px', textAlign: 'center' as const,
            border: `1px solid ${T.goldDeep}`, background: T.goldDeep,
            color: T.platinum, borderRadius: '6px', letterSpacing: '0.04em',
            textDecoration: 'none',
          }}>Request a quote</Link>
        </div>
      )}
    </>
  )
}

function Footer() {
  return (
    <footer style={{
      background: T.deep,
      borderTop: `1px solid ${T.hairline}`,
      padding: '80px 0 44px',
      marginTop: '120px',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          textAlign: 'center',
          paddingBottom: '56px',
          borderBottom: `1px solid ${T.hairline}`,
          marginBottom: '48px',
        }}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <HCCTMonogram size={40} />
            <div style={{
              width: '160px', height: '1px',
              background: `linear-gradient(90deg, transparent, ${T.gold}9C, transparent)`,
              marginTop: '14px', marginBottom: '12px',
            }} />
            <div style={{
              fontFamily: FONTS.mono, fontSize: '10px',
              letterSpacing: '0.35em', color: T.goldDeep,
              textTransform: 'uppercase', textIndent: '0.35em',
            }}>HC . Core . Tech</div>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px', marginBottom: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '11px',
              letterSpacing: '0.18em', color: T.gold,
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Practice</div>
            {[
              { label: 'Services', href: '/services' },
              { label: 'CoreDesk', href: '/coredesk' },
              { label: 'Work',     href: '/work' },
              { label: 'Process',  href: '/process' },
              { label: 'About',    href: '/about' },
              { label: 'FAQ',      href: '/faq' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
                color: T.softText, padding: '5px 0', textDecoration: 'none',
              }}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '11px',
              letterSpacing: '0.18em', color: T.gold,
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Contact</div>
            <a href="mailto:hc@hccoretech.com" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>hc@hccoretech.com</a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>Book a call</a>
            <Link href="/#quote" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>Request a quote</Link>
            <span style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0',
            }}>Amsterdam, Netherlands</span>
          </div>

          <div>
            <div style={{
              fontFamily: FONTS.mono, fontSize: '11px',
              letterSpacing: '0.18em', color: T.gold,
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Legal</div>
            <Link href="/legal#terms" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>Terms of service</Link>
            <Link href="/legal#privacy" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>Privacy policy</Link>
            <Link href="/legal#dpa" style={{
              display: 'block', fontFamily: FONTS.ui, fontSize: '13px',
              color: T.softText, padding: '5px 0', textDecoration: 'none',
            }}>Data processing (DPA)</Link>
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: `1px solid ${T.hairline}`,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '12px',
          fontFamily: FONTS.mono, fontSize: '11px',
          color: T.muted, letterSpacing: '0.14em',
        }}>
          <span>© 2025 HC Core Tech . Amsterdam, Netherlands . All rights reserved</span>
          <span>BTW vrijgesteld . pending KvK registration</span>
        </div>
      </div>
    </footer>
  )
}

// Ambient orbs: three softly drifting gradient blobs behind all content.
// Matches the homepage ambient background so pages feel like one site.
// Full canvas-particle ambient background matching the homepage.
// 55 drifting gold particles connected by sapphire hairlines when close,
// plus 3 slow-drifting gradient orbs.
function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const ctxEl = canvasEl.getContext('2d')
    if (!ctxEl) return
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = ctxEl
    let raf: number = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    function resize() {
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width  = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => window.innerWidth
    const H = () => window.innerHeight
    const count = W() < 900 ? 32 : 55
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.2 + 0.5,
    }))
    const LINK_DIST = W() < 900 ? 110 : 150

    function frame() {
      ctx.clearRect(0, 0, W(), H())
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.14
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      for (const p of particles) {
        ctx.fillStyle = 'rgba(212, 168, 94, 0.42)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W()) p.vx *= -1
        if (p.y < 0 || p.y > H()) p.vy *= -1
      }
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', top: '8%', left: '6%',
        width: '520px', height: '520px', borderRadius: '50%',
        background: `radial-gradient(circle, ${T.gold}14, transparent 70%)`,
        filter: 'blur(90px)', pointerEvents: 'none',
        animation: 'drift1 24s ease-in-out infinite',
        zIndex: 0, willChange: 'transform',
      }} />
      <div style={{
        position: 'fixed', top: '40%', right: '4%',
        width: '460px', height: '460px', borderRadius: '50%',
        background: `radial-gradient(circle, ${T.sapphire}16, transparent 70%)`,
        filter: 'blur(90px)', pointerEvents: 'none',
        animation: 'drift2 30s ease-in-out infinite',
        zIndex: 0, willChange: 'transform',
      }} />
      <div style={{
        position: 'fixed', bottom: '5%', left: '35%',
        width: '380px', height: '380px', borderRadius: '50%',
        background: `radial-gradient(circle, ${T.gold}0F, transparent 70%)`,
        filter: 'blur(90px)', pointerEvents: 'none',
        animation: 'drift3 36s ease-in-out infinite',
        zIndex: 0, willChange: 'transform',
      }} />
    </>
  )
}

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AmbientBackground />
      <div style={{
        color: T.platinum,
        minHeight: '100vh',
        fontFamily: FONTS.ui,
        position: 'relative',
        zIndex: 1,
      }}>
        <Nav />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export { T, FONTS, CALENDLY }