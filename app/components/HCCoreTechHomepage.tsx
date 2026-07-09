'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect, useRef } from 'react';
import {
  Brain, Shield, Globe, MessageSquare, ArrowRight, ArrowUpRight, Mail, Menu, X,
  ExternalLink, Quote, CheckCircle2, Send, Check, Minus,
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════
// DESIGN TOKENS: dark obsidian, champagne gold, sapphire
// ══════════════════════════════════════════════════════════════
const T = {
  obsidian:  '#1E223C',
  deep:      '#262A4A',
  midnight:  '#30345C',
  hairline:  '#161832',
  platinum:  '#E2E2E6',
  softText:  '#9CA3AF',
  muted:     '#6B7280',
  sapphire:  '#818CF8',
  gold:      '#D4A85E',
  goldSoft:  '#EBC580',
  goldDeep:  '#8A7038',
  ok:        '#4ADE80',
  warn:      '#FBBF24',
  danger:    '#F87171',
};

const FONTS = {
  serif:    "var(--font-serif), 'Cormorant Garamond', 'Cormorant', Georgia, serif",
  wordmark: "var(--font-serif), 'Cormorant Garamond', Georgia, serif",
  ui:       "var(--font-sans), 'Inter', system-ui, -apple-system, sans-serif",
  mono:     "var(--font-mono), 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
};

// Softer radii. Buttons/CTAs are tactile (6px), cards architectural (4px)
const R = {
  card:   '4px',
  input:  '4px',
  button: '6px',
  pill:   '4px',
  tag:    '3px',
};

// ══════════════════════════════════════════════════════════════
// HOOKS
// ══════════════════════════════════════════════════════════════
function useReveal(threshold: number = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold, rootMargin: '0px 0px -100px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Animate a number from 0 → target once `visible` becomes true.
// Ease-out cubic. Returns current interpolated value each frame.
function useAnimateOnView(target: number, visible: boolean, duration: number = 1400): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);
  return value;
}

function Reveal({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function useIsMobile(bp: number = 1200) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth <= bp);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [bp]);
  return m;
}

// ══════════════════════════════════════════════════════════════
// HCCT MONOGRAM
// ══════════════════════════════════════════════════════════════
function HCCTMonogram({ size = 32, variant = 'compact', animated = false, hoverTurn = false }: { size?: number; variant?: 'compact' | 'mark' | 'full'; animated?: boolean; hoverTurn?: boolean }) {
  // Rule width tuned narrower for the tighter interlocked mark
  const ruleWidth = size * 3.6;

  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
    }}>
      {(animated || hoverTurn) && (
        <style>{`
          @keyframes hcct-mirrored-c-turn {
            from { transform: scaleX(-1) rotateY(0deg); }
            to   { transform: scaleX(-1) rotateY(360deg); }
          }
          .hcct-hover-turn:hover .hcct-mirrored-c-target {
            animation: hcct-mirrored-c-turn 1.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @media (prefers-reduced-motion: reduce) {
            .hcct-mirrored-c-turn,
            .hcct-hover-turn:hover .hcct-mirrored-c-target { animation: none !important; }
          }
        `}</style>
      )}
      {/* Interlocking mark: H + C + mirrored-C + T. The scaleX(-1) on the
          middle C creates the vesica shape between the two Cs. Two motion
          modes available: `animated` runs a continuous 12s turn on the
          mirrored C (used in the footer); `hoverTurn` runs a single 1.6s
          turn each time the mark is hovered (used in the nav). Because
          scaleX(-1) and rotateY(180deg) cancel, the mirrored C briefly
          appears as a normal C mid-turn — the mark reveals itself. */}
      <div
        className={hoverTurn ? 'hcct-hover-turn' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'baseline',
          fontFamily: FONTS.serif,
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: `${size}px`,
          color: T.gold,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          perspective: (animated || hoverTurn) ? '600px' : 'none',
        }}
      >
        <span>H</span>
        <span style={{ marginLeft: '-0.04em' }}>C</span>
        <span
          className={hoverTurn ? 'hcct-mirrored-c-target' : (animated ? 'hcct-mirrored-c-turn' : undefined)}
          style={{
            display: 'inline-block',
            transform: 'scaleX(-1)',
            marginLeft: '-0.38em',
            transformOrigin: 'center center',
            transformStyle: (animated || hoverTurn) ? 'preserve-3d' : undefined,
            animation: animated ? 'hcct-mirrored-c-turn 12s linear infinite' : undefined,
          }}
        >C</span>
        <span style={{ marginLeft: '-0.14em' }}>T</span>
      </div>

      {(variant === 'mark' || variant === 'full') && (
        <div style={{
          width: `${ruleWidth}px`,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${T.gold}9C, transparent)`,
          marginTop: `${size * 0.28}px`,
          marginBottom: variant === 'full' ? `${size * 0.2}px` : 0,
        }} />
      )}

      {variant === 'full' && (
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: `${Math.max(8, size * 0.28)}px`,
          color: T.goldDeep,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          textIndent: '0.35em',
        }}>
          HC · Core · Tech
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// AMBIENT BACKGROUND
// ══════════════════════════════════════════════════════════════
function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxEl = canvasEl.getContext('2d');
    if (!ctxEl) return;
    // Local aliases so TypeScript keeps the non-null narrowing across
    // the resize/frame closures below.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxEl;
    let raf: number = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;
    const count = W() < 900 ? 32 : 55;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.2 + 0.5,
    }));
    const LINK_DIST = W() < 900 ? 110 : 150;

    function frame() {
      ctx.clearRect(0, 0, W(), H());
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.fillStyle = 'rgba(212, 168, 94, 0.42)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W()) p.vx *= -1;
        if (p.y < 0 || p.y > H()) p.vy *= -1;
      }
      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

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
  );
}

// ══════════════════════════════════════════════════════════════
// SHARED
// ══════════════════════════════════════════════════════════════
function Eyebrow({ children, color = T.sapphire }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{
      fontFamily: FONTS.mono,
      fontSize: '11px', letterSpacing: '0.22em',
      color, textTransform: 'uppercase', fontWeight: 500,
      display: 'inline-flex', alignItems: 'center', gap: '12px',
    }}>
      <span style={{ width: '24px', height: '1px', background: color, opacity: 0.5 }} />
      {children}
    </div>
  );
}

function Container({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      maxWidth: '1240px', margin: '0 auto',
      padding: '0 32px', ...style,
    }}>{children}</div>
  );
}

function StatusPill({ status }: { status: 'live' | 'in-build' }) {
  const isLive = status === 'live';
  const color = isLive ? T.ok : T.warn;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: FONTS.mono, fontSize: '10px',
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color, fontWeight: 500,
      padding: '4px 10px',
      border: `1px solid ${color}55`,
      background: `${color}0F`,
      borderRadius: R.pill,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }}>
      <span data-pulse="true" style={{
        width: '6px', height: '6px', borderRadius: '50%',
        background: color, boxShadow: `0 0 6px ${color}`,
        flexShrink: 0,
      }} />
      <span style={{ whiteSpace: 'nowrap' }}>{isLive ? 'Live' : 'In build'}</span>
    </span>
  );
}

// ══════════════════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════════════════
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // page-scroll progress: y / (fullHeight - viewport)
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
      setScrollPct(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Services', href: '/services' },
    { label: 'CoreDesk', href: '/coredesk' },
    { label: 'Work',     href: '/work' },
    { label: 'Process',  href: '/process' },
    { label: 'Reviews',  href: '/#reviews' },
    { label: 'About',    href: '/about' },
    { label: 'FAQ',      href: '/faq' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '14px 20px' : '20px 32px',
        background: scrolled ? 'rgba(30, 34, 60, 0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.hairline}` : '1px solid transparent',
        transition: 'all 260ms ease',
      }}>
        <div style={{
          maxWidth: '1240px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="/#top" style={{
            display: 'flex', alignItems: 'center', gap: '18px',
          }}>
            <HCCTMonogram size={isMobile ? 20 : 24} variant="compact" animated />
            {!isMobile && (
              <span style={{
                paddingLeft: '18px',
                borderLeft: `1px solid ${T.hairline}`,
                fontFamily: FONTS.wordmark,
                fontSize: '15px', fontWeight: 500,
                letterSpacing: '0.06em',
                color: T.platinum,
                textTransform: 'uppercase',
              }}>
                HC Core Tech
              </span>
            )}
          </a>

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              {items.map(item => (
                <a key={item.label} href={item.href}
                  style={{
                    fontFamily: FONTS.ui, fontSize: '13px',
                    color: T.softText, fontWeight: 500,
                    letterSpacing: '0.02em',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = T.platinum}
                  onMouseLeave={e => e.currentTarget.style.color = T.softText}
                >{item.label}</a>
              ))}
              <a href="https://calendly.com/hc-hccoretech/30min" style={{
                fontFamily: FONTS.ui, fontSize: '12px', fontWeight: 500,
                padding: '10px 18px',
                border: `1px solid ${T.midnight}`,
                background: 'transparent',
                color: T.platinum, borderRadius: R.button,
                transition: 'all 260ms ease',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.color = T.gold; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.midnight; e.currentTarget.style.color = T.platinum; }}
              >Book a call</a>
              <a data-btn="primary" href="/#quote" style={{
                fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                padding: '11px 22px',
                border: `1px solid ${T.goldDeep}`,
                background: T.goldDeep,
                color: T.platinum, borderRadius: R.button,
                transition: 'all 260ms ease',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.color = T.obsidian; }}
              onMouseLeave={e => { e.currentTarget.style.background = T.goldDeep; e.currentTarget.style.borderColor = T.goldDeep; e.currentTarget.style.color = T.platinum; }}
              >Request a quote <ArrowUpRight size={13} /></a>
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

      {/* Scroll progress bar . sits at the very top of the page, above the nav */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `${T.hairline}80`,
        zIndex: 101,
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
          background: 'rgba(30, 34, 60, 0.98)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${T.hairline}`,
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {items.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              onMouseEnter={e => { e.currentTarget.style.color = T.gold }}
              onMouseLeave={e => { e.currentTarget.style.color = T.platinum }}
              style={{
                fontFamily: FONTS.ui, fontSize: '15px', fontWeight: 500,
                color: T.platinum, padding: '12px 0',
                borderBottom: `1px solid ${T.hairline}`,
                transition: 'color 200ms ease',
              }}>{item.label}</a>
          ))}
          <a href="https://calendly.com/hc-hccoretech/30min"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '14px',
              fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
              padding: '13px 20px', textAlign: 'center',
              border: `1px solid ${T.midnight}`, color: T.platinum,
              borderRadius: R.button, letterSpacing: '0.04em',
              textDecoration: 'none',
            }}>Book a call</a>
          <a data-btn="primary" href="/#quote" onClick={() => setOpen(false)} style={{
            marginTop: '8px',
            fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
            padding: '13px 20px', textAlign: 'center',
            border: `1px solid ${T.goldDeep}`, background: T.goldDeep,
            color: T.platinum, borderRadius: R.button, letterSpacing: '0.04em',
            textDecoration: 'none',
          }}>Request a quote →</a>
        </div>
      )}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// HERO
// ══════════════════════════════════════════════════════════════
function Hero() {
  const isMobile = useIsMobile();
  const isNarrow = useIsMobile(640);
  const [cursorOn, setCursorOn] = useState(true);
  const [typedRows, setTypedRows] = useState(0);
  const { ref: operatorRef, visible: operatorVisible } = useReveal();

  const operatorRows: [string, string][] = [
    ['name',       'Hilary Azimoh'],
    ['role',       'Founder · Sole Engineer'],
    ['location',   'Amsterdam, NL'],
    ['stack',      'Python · TypeScript · Postgres'],
    ['frameworks', 'EU AI Act · ISO/IEC 42001'],
    ['building',   'CoreDesk v1'],
    ['status',     'Booking Q4 2026'],
  ];

  useEffect(() => {
    const i = setInterval(() => setCursorOn(v => !v), 550);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (!operatorVisible) return;
    if (typedRows >= operatorRows.length) return;
    const t = setTimeout(() => setTypedRows(n => n + 1), typedRows === 0 ? 600 : 260);
    return () => clearTimeout(t);
  }, [typedRows, operatorRows.length, operatorVisible]);

  const typingDone = typedRows >= operatorRows.length;

  return (
    <section id="top" style={{
      position: 'relative',
      minHeight: isMobile ? 'auto' : '92vh',
      paddingTop: isMobile ? '120px' : '160px',
      paddingBottom: isMobile ? '80px' : '120px',
    }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
          gap: isMobile ? '40px' : '80px',
          alignItems: 'center',
        }}>
          <div>
            <Reveal delay={100}>
              <h1 style={{
                fontFamily: FONTS.serif,
                fontSize: isMobile ? '46px' : 'clamp(56px, 6.4vw, 92px)',
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                color: T.platinum,
                marginTop: '28px',
                marginBottom: '32px',
              }}>
                Production AI.<br />
                Real governance.<br />
                <span style={{
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: T.gold,
                }}>Websites that ship.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{
                fontFamily: FONTS.ui,
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: 1.6, color: T.softText,
                maxWidth: '540px', marginBottom: '32px',
              }}>
                Engineering-grade AI, mapped to EU frameworks, delivered by
                one accountable engineer-founder. No agency layer. No handoffs.
                No hidden subcontractors.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '11px',
                letterSpacing: '0.14em', color: T.muted,
                marginBottom: '36px',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
              }}>
                <span data-pulse="true" style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: T.ok, boxShadow: `0 0 8px ${T.ok}`,
                }} />
                <span style={{ color: T.platinum }}>3 of 4 seats open</span>
                <span style={{ color: T.hairline }}>·</span>
                <span>Booking Q4 2026</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#quote" style={{
                  fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                  padding: '16px 30px',
                  background: T.goldDeep, color: T.platinum,
                  borderRadius: R.button,
                  letterSpacing: '0.04em',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  transition: 'all 260ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px -10px ${T.gold}77`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >Request a quote <ArrowRight size={15} /></a>
                <a href="#services" style={{
                  fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                  padding: '16px 30px',
                  border: `1px solid ${T.midnight}`,
                  color: T.platinum, borderRadius: R.button,
                  letterSpacing: '0.04em',
                  transition: 'border-color 260ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.midnight; }}
                >What I do</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div ref={operatorRef} style={{
              background: `${T.deep}CC`,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: `1px solid ${T.midnight}`,
              borderRadius: R.card,
              padding: '26px',
              fontFamily: FONTS.mono, fontSize: '12px',
              boxShadow: `0 30px 80px -30px ${T.gold}22`,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingBottom: '14px', borderBottom: `1px solid ${T.hairline}`,
                marginBottom: '16px',
              }}>
                <span style={{ color: T.muted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Operator</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: T.ok }}>
                  <span data-pulse="true" style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: T.ok, boxShadow: `0 0 8px ${T.ok}`,
                  }} />
                  active
                </span>
              </div>

              {operatorRows.map(([k, v], i) => {
                const visible = i < typedRows;
                const isCurrent = i === typedRows - 1;
                return (
                  <div key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    gap: '16px', padding: '7px 0',
                    borderBottom: `1px dashed ${T.hairline}`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-3px)',
                    transition: 'opacity 200ms ease, transform 200ms ease',
                  }}>
                    <span style={{ color: T.sapphire }}>{k}</span>
                    <span style={{ color: T.platinum, textAlign: 'right' }}>
                      {v}
                      {isCurrent && !typingDone && (
                        <span style={{ opacity: cursorOn ? 1 : 0, marginLeft: '3px', color: T.gold }}>▊</span>
                      )}
                    </span>
                  </div>
                );
              })}

              <div style={{
                marginTop: '14px', color: T.gold,
                opacity: typingDone ? 1 : 0,
                transform: typingDone ? 'translateY(0)' : 'translateY(-3px)',
                transition: 'opacity 300ms ease 200ms, transform 300ms ease 200ms',
              }}>
                ready<span style={{ opacity: cursorOn ? 1 : 0, marginLeft: '2px' }}>▊</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// FRAMEWORK STRIP
// ══════════════════════════════════════════════════════════════
function FrameworkStrip() {
  const isMobile = useIsMobile();
  const items = ['EU AI Act', 'NIST AI RMF', 'ISO/IEC 42001', 'GDPR', 'OECD AI'];
  return (
    <section style={{
      borderTop: `1px solid ${T.hairline}`,
      borderBottom: `1px solid ${T.hairline}`,
      padding: '28px 0',
      background: `${T.deep}E6`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}>
      <Container>
        <Reveal>
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '14px',
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.14em', color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            <span style={{ color: T.sapphire }}>Frameworks covered</span>
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'center', alignItems: 'center',
              gap: isMobile ? '12px' : '20px',
              rowGap: '10px',
            }}>
              {items.map((it, i) => (
                <span key={it} style={{ display: 'inline-flex', alignItems: 'center', gap: isMobile ? '12px' : '20px' }}>
                  <span style={{ color: T.platinum }}>{it}</span>
                  {i < items.length - 1 && <span style={{ color: T.midnight }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// SERVICES
// ══════════════════════════════════════════════════════════════
function Services() {
  const isMobile = useIsMobile();
  const items = [
    { icon: Brain, title: 'AI Engineering',
      body: 'Custom agents, RAG pipelines, multi-agent orchestration, integrations with existing tooling. Production-grade Python/FastAPI backends and Next.js frontends.' },
    { icon: Shield, title: 'AI Governance',
      body: 'Risk classification, documentation packs, monitoring, and audits. Built for SMEs and vendors scaling into enterprise. Aligned to EU AI Act, NIST AI RMF, ISO/IEC 42001, GDPR, and OECD AI.' },
    { icon: Globe, title: 'Web Development',
      body: 'Landing pages, full sites, refurbishes, premium builds, and strategic brand-and-site engagements. Mobile-responsive, SEO-configured and deployed site.' },
    { icon: MessageSquare, title: 'Advisory & Consulting',
      body: 'Hourly sessions: AI strategy, technical review, governance consultation, and combined AI + governance calls for vendor onboarding and due diligence.' },
  ];

  return (
    <section id="services" style={{ padding: isMobile ? '80px 0' : '140px 0' }}>
      <Container>
        <Reveal><Eyebrow>Services</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: isMobile ? '38px' : 'clamp(42px, 4.4vw, 62px)',
            lineHeight: 1.05, letterSpacing: '-0.015em',
            fontWeight: 400, color: T.platinum,
            marginTop: '24px', marginBottom: '20px', maxWidth: '780px',
          }}>
            Four service lines.<br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>One operator.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{
            fontFamily: FONTS.ui,
            fontSize: '16px', lineHeight: 1.6, color: T.softText,
            maxWidth: '620px', marginBottom: '60px',
          }}>
            The practice offers engineering, governance, web, and advisory services. All of it delivered
            by the same hand that scoped it. Every project quoted individually.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2px', background: T.hairline,
          border: `1px solid ${T.hairline}`,
          borderRadius: R.card,
          overflow: 'hidden',
        }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div style={{
                background: `${T.obsidian}E6`,
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                padding: isMobile ? '32px 24px' : '48px 40px',
                cursor: 'pointer', transition: 'background 260ms',
                height: '100%',
              }}
              onMouseEnter={e => e.currentTarget.style.background = T.deep}
              onMouseLeave={e => e.currentTarget.style.background = `${T.obsidian}E6`}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px',
                  background: `${T.gold}12`,
                  border: `1px solid ${T.midnight}`,
                  borderRadius: R.button, color: T.gold,
                  marginBottom: '24px',
                }}>
                  <it.icon size={20} />
                </div>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: '30px', fontWeight: 500, letterSpacing: '-0.01em',
                  color: T.platinum, marginBottom: '14px',
                }}>{it.title}</h3>
                <p style={{
                  fontFamily: FONTS.ui,
                  fontSize: '15px', lineHeight: 1.65,
                  color: T.softText, marginBottom: '24px',
                }}>{it.body}</p>
                <a href="#quote" style={{
                  fontFamily: FONTS.mono,
                  fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: T.gold, fontWeight: 500,
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'gap 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = '12px'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
                >Request a quote <ArrowRight size={12} /></a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div style={{
            marginTop: '40px',
            padding: '20px 24px',
            border: `1px solid ${T.hairline}`,
            borderRadius: R.card,
            background: `${T.deep}80`,
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.14em', color: T.muted,
            textTransform: 'uppercase',
            display: 'flex', flexWrap: 'wrap', gap: '18px 32px',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: T.sapphire }}>Typical range</span>
            <span><span style={{ color: T.platinum }}>€1,500 to €28,000</span> per project</span>
            <span style={{ color: T.hairline }}>·</span>
            <span><span style={{ color: T.platinum }}>4 to 8 weeks</span> average delivery</span>
            <span style={{ color: T.hairline }}>·</span>
            <span><span style={{ color: T.platinum }}>€250/mo</span> minimum retainer</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// COREDESK: with explicit ICP for SMEs, ZZP'ers, small practices
// ══════════════════════════════════════════════════════════════
function CoreDeskCallout() {
  const isMobile = useIsMobile();
  const isNarrow = useIsMobile(640);

  // IntersectionObserver on the mockup . fires the animations once when it scrolls in.
  const { ref: mockupRef, visible: mockupVisible } = useReveal(0.25);
  const progressPct = useAnimateOnView(87,   mockupVisible, 1500);
  const mrrVal      = useAnimateOnView(5240, mockupVisible, 1600);
  const clientsVal  = useAnimateOnView(3,    mockupVisible, 1200);
  const docsVal     = useAnimateOnView(47,   mockupVisible, 1400);
  const tasksVal    = useAnimateOnView(128,  mockupVisible, 1500);

  const forItems = [
    'Independent practitioners',
    "ZZP'ers (Dutch sole prop.)",
    'Small teams, up to ~20 people',
    'Care practices, consultancies, coaches',
  ];
  const notForItems = [
    'Large enterprises',
    'Compliance-first industries as lift-and-shift',
    'Self-service without engineer contact',
    'Teams that need managed-service SLAs',
  ];

  return (
    <section id="coredesk" style={{
      padding: isMobile ? '80px 0' : '140px 0',
      background: `${T.deep}E6`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderTop: `1px solid ${T.hairline}`,
      borderBottom: `1px solid ${T.hairline}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'start',
        }}>
          <div>
            <Reveal><Eyebrow color={T.gold}>Flagship product · by invitation</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{
                fontFamily: FONTS.serif,
                fontSize: isMobile ? '38px' : 'clamp(42px, 4.4vw, 58px)',
                lineHeight: 1.06, letterSpacing: '-0.015em',
                fontWeight: 400, color: T.platinum,
                marginTop: '24px', marginBottom: '24px',
              }}>
                <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>CoreDesk.</span> The AI workspace, built around a real practitioner.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{
                fontFamily: FONTS.ui,
                fontSize: '16px', lineHeight: 1.65, color: T.softText,
                marginBottom: '24px', maxWidth: '520px',
              }}>
                CoreDesk is a multi-tenant AI workspace for SMEs, ZZP'ers and small independent
                practices. Invoicing, proposals, meetings, agents and governance in one back office.
                Every feature was shipped against a live practitioner first.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p style={{
                fontFamily: FONTS.ui,
                fontSize: '14px', lineHeight: 1.65, color: T.muted,
                marginBottom: '32px', maxWidth: '520px',
                paddingLeft: '16px',
                borderLeft: `2px solid ${T.gold}66`,
                fontStyle: 'italic',
              }}>
                Access is by invitation, after a discovery call. I'm particular about
                who I take on, because the platform only works when every customer gets
                direct engineer attention.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="https://hccoredesk.com" style={{
                  fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                  padding: '14px 26px',
                  border: `1px solid ${T.gold}`,
                  color: T.gold, borderRadius: R.button,
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'all 260ms ease',
                  letterSpacing: '0.04em',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.color = T.obsidian; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.gold; }}
                >Visit hccoredesk.com <ArrowUpRight size={14} /></a>
                <a href="#quote" style={{
                  fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                  padding: '14px 26px',
                  border: `1px solid ${T.midnight}`,
                  color: T.platinum, borderRadius: R.button,
                  letterSpacing: '0.04em',
                  transition: 'border-color 260ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.midnight; }}
                >Request access</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div ref={mockupRef} style={{
              background: T.obsidian,
              border: `1px solid ${T.midnight}`,
              borderRadius: R.card,
              overflow: 'hidden',
              boxShadow: `0 40px 100px -30px ${T.gold}22`,
            }}>
              {/* browser chrome */}
              <div style={{
                padding: '14px 18px',
                borderBottom: `1px solid ${T.hairline}`,
                display: 'flex', alignItems: 'center', gap: '10px',
                fontFamily: FONTS.mono, fontSize: '11px', color: T.muted,
              }}>
                <span style={{ display: 'flex', gap: '6px' }}>
                  {[0,1,2].map(k => (
                    <span key={k} style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3F3F46' }} />
                  ))}
                </span>
                <span style={{ marginLeft: 'auto' }}>hccoredesk.com / admin</span>
              </div>

              {/* header */}
              <div style={{
                padding: '20px 24px 18px',
                borderBottom: `1px solid ${T.hairline}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: '12px', flexWrap: 'wrap',
              }}>
                <div>
                  <div style={{
                    fontFamily: FONTS.serif, fontSize: '22px', fontWeight: 500,
                    fontStyle: 'italic', color: T.platinum, letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}>Admin overview</div>
                  <div style={{
                    fontFamily: FONTS.ui, fontSize: '12px',
                    color: T.softText, marginTop: '4px',
                  }}>Welcome back, Hilary</div>
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: FONTS.mono, fontSize: '9px',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: T.ok,
                }}>
                  <span data-pulse="true" style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: T.ok, boxShadow: `0 0 8px ${T.ok}88`,
                  }} />
                  Live now
                </div>
              </div>

              {/* KPI cards */}
              <div style={{
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
              }}>
                {[
                  { k: 'Monthly revenue', v: `€${Math.round(mrrVal).toLocaleString('en-US')}`, u: null },
                  { k: 'Active clients',   v: `${Math.round(clientsVal)}`,                       u: 'of 4 seats' },
                  { k: 'Docs generated',   v: `${Math.round(docsVal)}`,                          u: null },
                  { k: 'Agent tasks',      v: `${Math.round(tasksVal)}`,                         u: null },
                ].map(kpi => (
                  <div key={kpi.k} style={{
                    background: T.deep,
                    border: `1px solid ${T.midnight}`,
                    borderRadius: '5px',
                    padding: '12px 14px',
                  }}>
                    <div style={{
                      fontFamily: FONTS.mono, fontSize: '9px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: T.goldDeep, marginBottom: '8px',
                    }}>{kpi.k}</div>
                    <div style={{
                      fontFamily: FONTS.serif, fontStyle: 'italic',
                      fontSize: '22px', color: T.platinum,
                      letterSpacing: '-0.015em', lineHeight: 1,
                    }}>
                      {kpi.v}
                      {kpi.u && (
                        <span style={{
                          fontFamily: FONTS.ui, fontStyle: 'normal',
                          fontSize: '10px', color: T.softText,
                          marginLeft: '5px',
                        }}>{kpi.u}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar . current client onboarding */}
              <div style={{ padding: '0 24px 20px' }}>
                <div style={{
                  background: T.deep,
                  border: `1px solid ${T.midnight}`,
                  borderRadius: '5px',
                  padding: '14px 16px',
                }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', marginBottom: '10px',
                    gap: '12px', flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: FONTS.mono, fontSize: '9.5px',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: T.softText,
                    }}>Client onboarding · JS Zorg en Advies</span>
                    <span style={{
                      fontFamily: FONTS.serif, fontStyle: 'italic',
                      fontSize: '16px', color: T.gold, letterSpacing: '-0.01em',
                    }}>{Math.round(progressPct)}%</span>
                  </div>
                  <div style={{
                    height: '4px', background: T.hairline,
                    borderRadius: '2px', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${progressPct}%`,
                      background: `linear-gradient(90deg, ${T.goldDeep}, ${T.gold}, ${T.goldSoft})`,
                      borderRadius: '2px',
                    }} />
                  </div>
                </div>
              </div>

              {/* ICP two-column */}
              <div style={{ padding: '0 24px 24px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                }}>
                  <div style={{
                    background: T.deep,
                    border: `1px solid ${T.midnight}`,
                    borderRadius: '5px',
                    padding: '14px 16px',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      marginBottom: '10px',
                    }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: T.ok,
                      }} />
                      <span style={{
                        fontFamily: FONTS.mono, fontSize: '9px',
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                        color: T.ok,
                      }}>Built for</span>
                    </div>
                    {forItems.map(it => (
                      <div key={it} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '8px',
                        padding: '4px 0',
                        fontFamily: FONTS.ui, fontSize: '11px', lineHeight: 1.4,
                        color: T.platinum,
                      }}>
                        <Check size={11} color={T.ok} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    background: T.deep,
                    border: `1px solid ${T.midnight}`,
                    borderRadius: '5px',
                    padding: '14px 16px',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      marginBottom: '10px',
                    }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: T.danger,
                      }} />
                      <span style={{
                        fontFamily: FONTS.mono, fontSize: '9px',
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                        color: T.danger,
                      }}>Not built for</span>
                    </div>
                    {notForItems.map(it => (
                      <div key={it} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '8px',
                        padding: '4px 0',
                        fontFamily: FONTS.ui, fontSize: '11px', lineHeight: 1.4,
                        color: T.softText,
                      }}>
                        <Minus size={11} color={T.danger} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  marginTop: '14px', paddingTop: '12px',
                  borderTop: `1px solid ${T.hairline}`,
                  fontFamily: FONTS.mono, fontSize: '9.5px',
                  letterSpacing: '0.14em', color: T.muted,
                  display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px',
                }}>
                  <span>NL · EN · FR · RU · ES · PT</span>
                  <span style={{ color: T.gold }}>by invitation only</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// APPROACH
// ══════════════════════════════════════════════════════════════
function Approach() {
  const isMobile = useIsMobile();
  const steps = [
    { num: '01', title: 'Scope in writing',       body: 'Every engagement starts with a versioned scoping document. Price, timeline, in-scope, and explicitly out-of-scope. Nothing negotiated in chat threads.' },
    { num: '02', title: 'Direct engineer access', body: 'You talk to the engineer building it. No account manager between you and the code. Slack, email, or scheduled review calls, whichever works.' },
    { num: '03', title: 'Versioned artifacts',    body: 'Every major deliverable is a versioned Word document: copy, brand context, technical plan, handover. Nothing important lives only in chat.' },
    { num: '04', title: 'Clean walk-away',        body: 'Every custom build deploys to your infrastructure. No vendor lock-in. Post-launch support is a retainer you choose to take, never one you inherit.' },
  ];

  return (
    <section id="about" style={{ padding: isMobile ? '80px 0' : '140px 0' }}>
      <Container>
        <Reveal><Eyebrow>How I work</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: isMobile ? '38px' : 'clamp(42px, 4.4vw, 62px)',
            lineHeight: 1.05, letterSpacing: '-0.015em',
            fontWeight: 400, color: T.platinum,
            marginTop: '24px', marginBottom: '60px', maxWidth: '780px',
          }}>
            One engineer, <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>four operating principles.</span>
          </h2>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '32px' : '48px 60px',
        }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div style={{
                display: 'flex', gap: '24px',
                paddingTop: '24px', borderTop: `1px solid ${T.hairline}`,
              }}>
                <div style={{
                  fontFamily: FONTS.serif, fontSize: '20px',
                  fontStyle: 'italic',
                  color: T.gold, fontWeight: 500,
                  flexShrink: 0, paddingTop: '2px',
                  letterSpacing: '0.02em',
                }}>{s.num}</div>
                <div>
                  <h3 style={{
                    fontFamily: FONTS.serif,
                    fontSize: '26px', fontWeight: 500, letterSpacing: '-0.01em',
                    color: T.platinum, marginBottom: '10px',
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: FONTS.ui,
                    fontSize: '15px', lineHeight: 1.65, color: T.softText,
                  }}>{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// PROJECT PREVIEWS
// ══════════════════════════════════════════════════════════════
function SeraphZorgPreview() {
  return (
    <div style={{
      background: '#F8F1E5', padding: '28px 24px', height: '220px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#8C7A45', marginBottom: '10px',
      }}>Seraph Zorg</div>
      <div style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: '22px', lineHeight: 1.15,
        color: '#3E3625', fontWeight: 500, marginBottom: '14px',
      }}>Herstel door te luisteren, te erkennen en te doen wat écht helpt.</div>
      <div style={{
        display: 'inline-block', alignSelf: 'flex-start',
        fontFamily: FONTS.ui, fontSize: '11px',
        padding: '8px 16px', background: '#CFA53D', color: '#FFFFFF',
        borderRadius: '4px', fontWeight: 500,
      }}>Neem contact op</div>
      <div style={{
        position: 'absolute', top: '10px', right: '14px',
        width: '32px', height: '32px', borderRadius: '50%',
        background: '#CFA53D22', border: '1px solid #CFA53D66',
      }} />
    </div>
  );
}

function JiskaPortfolioPreview() {
  return (
    <div style={{
      background: '#F2EBDE', padding: '28px 24px', height: '220px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#8C6E3B', marginBottom: '10px',
      }}>Jiska Doekes · portfolio</div>
      <div style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: '22px', lineHeight: 1.2, fontStyle: 'italic',
        color: '#3E3625', fontWeight: 400, marginBottom: '12px',
      }}>Ik geloof in mensen, in herstel, in wat mogelijk is.</div>
      <div style={{
        fontFamily: FONTS.ui, fontSize: '11px',
        color: '#7A6544', letterSpacing: '0.06em',
      }}>Sociaal werker · schrijver · muzikant</div>
      <div style={{
        position: 'absolute', bottom: '18px', right: '20px',
        fontFamily: FONTS.mono, fontSize: '9px',
        color: '#8C6E3B', letterSpacing: '0.1em',
      }}>01 / 04</div>
    </div>
  );
}

function MCHPreview() {
  return (
    <div style={{
      background: '#F4F1EA', padding: '28px 24px', height: '220px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#7A4A2B', marginBottom: '10px',
      }}>Magnifying Children's Horizons</div>
      <div style={{
        fontFamily: FONTS.serif,
        fontSize: '26px', lineHeight: 1.1,
        color: '#2D4A2B', fontWeight: 500,
        marginBottom: '14px', letterSpacing: '-0.01em',
      }}>
        Building character in children, <span style={{ fontStyle: 'italic', color: '#6B2C2C' }}>through the wisdom of nature.</span>
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        {['#2D4A2B', '#6B8461', '#CFA349', '#6B2C2C', '#8B6F47'].map(c => (
          <span key={c} style={{
            width: '18px', height: '18px', borderRadius: '3px', background: c,
          }} />
        ))}
      </div>
    </div>
  );
}

function ToluAuthorPreview() {
  return (
    <div style={{
      background: '#F5D9C8', padding: '28px 24px', height: '220px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: FONTS.mono, fontSize: '9px',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#8C4A2B', marginBottom: '10px',
      }}>Tolu Okudolo · author</div>
      <div style={{
        fontFamily: FONTS.serif,
        fontSize: '34px', lineHeight: 1.05,
        color: '#4A2818', fontWeight: 500, fontStyle: 'italic',
        letterSpacing: '-0.01em', marginBottom: '10px',
      }}>The Face in the Mountain</div>
      <div style={{
        fontFamily: FONTS.ui, fontSize: '11px',
        color: '#8C4A2B', letterSpacing: '0.06em',
      }}>and other stories for growing hearts</div>
      <div style={{
        position: 'absolute', top: '18px', right: '18px',
        width: '40px', height: '52px',
        background: '#4A2818', borderRadius: '2px',
        border: '2px solid #8C4A2B',
      }} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// SELECTED WORK
// ══════════════════════════════════════════════════════════════
function SelectedWork() {
  const isMobile = useIsMobile();

  const projects = [
    { Preview: SeraphZorgPreview,
      client: 'JS Zorg en Advies | Seraph Zorg',
      role: 'Dutch care practice · Netherlands',
      description: 'Business website plus the CoreDesk back-office platform the practice runs on. WordPress + Elementor front-end; multi-tenant Python/TypeScript workspace behind it. Founding CoreDesk customer.',
      outcomes: [
        { headline: 'Delivered on time', subtitle: 'Fixed price, no scope disputes' },
        { headline: '2 sites + 1 back-office platform', subtitle: 'One engagement, one accountable engineer' },
        { headline: 'Founding CoreDesk customer', subtitle: 'Runs the practice daily since launch' },
      ],
      tags: ['WordPress', 'Brand + copy', 'CoreDesk platform', 'Advisory'],
      url: 'https://seraphzorg.com', urlLabel: 'seraphzorg.com', status: 'live' as const },
    { Preview: JiskaPortfolioPreview,
      client: 'Jiska · founder portfolio',
      role: 'Personal brand · Netherlands',
      description: 'Companion portfolio site for the founder of Seraph Zorg. Video-led personal brand, faith-grounded copy, cross-linked with the business site. Warmer, more editorial than the practice site.',
      outcomes: [
        { headline: 'Video-led personal brand', subtitle: 'Hero video, editorial pages, faith-grounded copy' },
        { headline: 'Cross-linked with the practice', subtitle: 'jiska.seraphzorg.com companion domain' },
        { headline: 'Delivered alongside the practice site', subtitle: 'Same engagement, unified brand system' },
      ],
      tags: ['WordPress', 'Personal brand', 'Copy', 'Video hero'],
      url: 'https://jiska.seraphzorg.com', urlLabel: 'jiska.seraphzorg.com', status: 'live' as const },
    { Preview: MCHPreview,
      client: "Magnifying Children's Horizons",
      role: 'Values-led education brand · Canada',
      description: 'Full brand system, page-by-page copy, WordPress build, hosting setup, lead-magnet flow and email automation for the Guiding Children with Nature program. Real photography only. Site-wide ban on AI imagery.',
      outcomes: [
        { headline: 'Full brand system co-created', subtitle: 'Colour, typography, voice, page-by-page copy' },
        { headline: 'Real photography only, no AI imagery', subtitle: 'Every asset sourced or directed with the client' },
        { headline: 'Guide download + email nurture flow', subtitle: 'Lead magnet wired end to end' },
      ],
      tags: ['Brand system', 'Copy v4', 'WordPress + Astra', 'Lead-magnet flow'],
      url: 'https://pink-cheetah-352887.hostingersite.com', urlLabel: 'staging · magnifyingchildrenshorizons.com', status: 'in-build' as const },
    { Preview: ToluAuthorPreview,
      client: 'Tolu · author',
      role: "Children's book author site · Canada",
      description: 'Companion site for the author of The Face in the Mountain and The Festival Shoes. Same Hostinger plan as MCH, cross-linked, snowy-woods portrait carrying the About hero.',
      outcomes: [
        { headline: 'Author brand for two published books', subtitle: 'The Face in the Mountain, The Festival Shoes' },
        { headline: 'Snowy-woods editorial portrait hero', subtitle: 'Anchors the About page as visual signature' },
        { headline: 'Cross-linked with MCH programme', subtitle: 'Same hosting, unified operations' },
      ],
      tags: ['Author brand', 'Cross-linked with MCH'],
      url: 'https://peachpuff-buffalo-882219.hostingersite.com', urlLabel: 'staging · tolu.magnifyingchildrenshorizons.com', status: 'in-build' as const },
  ];

  return (
    <section id="work" style={{
      padding: isMobile ? '80px 0' : '140px 0',
      background: `${T.deep}E6`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderTop: `1px solid ${T.hairline}`,
      borderBottom: `1px solid ${T.hairline}`,
    }}>
      <Container>
        <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: isMobile ? '38px' : 'clamp(42px, 4.4vw, 58px)',
            lineHeight: 1.06, letterSpacing: '-0.015em',
            fontWeight: 400, color: T.platinum,
            marginTop: '24px', marginBottom: '20px', maxWidth: '780px',
          }}>
            Selected engagements.<br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>Every deliverable from one hand.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{
            fontFamily: FONTS.ui,
            fontSize: '16px', lineHeight: 1.6, color: T.softText,
            maxWidth: '620px', marginBottom: '60px',
          }}>
            Engagements with clients across borders and disciplines. Websites, brand systems, AI platforms,
            and the operations that hold small businesses together. Every project carried end to end,
            with the attention of someone who owns the outcome.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {projects.map((p, i) => {
            const { Preview } = p;
            return (
              <Reveal key={p.client} delay={i * 90}>
                <div style={{
                  background: T.obsidian,
                  border: `1px solid ${T.midnight}`,
                  borderRadius: R.card, overflow: 'hidden',
                  transition: 'transform 260ms, border-color 260ms, box-shadow 260ms',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = T.gold + '66';
                  e.currentTarget.style.boxShadow = `0 30px 60px -30px ${T.gold}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = T.midnight;
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div>
                    <div style={{
                      padding: '10px 14px',
                      borderBottom: `1px solid ${T.hairline}`,
                      display: 'flex', alignItems: 'center', gap: '10px',
                      background: T.deep,
                    }}>
                      <span style={{ display: 'flex', gap: '5px' }}>
                        {[0,1,2].map(k => (
                          <span key={k} style={{
                            width: '8px', height: '8px', borderRadius: '50%', background: '#3F3F46',
                          }} />
                        ))}
                      </span>
                      <span style={{
                        marginLeft: '8px',
                        fontFamily: FONTS.mono, fontSize: '10px',
                        color: T.muted, letterSpacing: '0.06em',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>{p.urlLabel}</span>
                    </div>
                    <Preview />
                  </div>
                  <div style={{
                    padding: isMobile ? '24px 20px' : '28px 28px',
                    display: 'flex', flexDirection: 'column', flex: 1,
                  }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', marginBottom: '14px', gap: '10px',
                    }}>
                      <div style={{
                        fontFamily: FONTS.mono, fontSize: '10px',
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                        color: T.sapphire,
                      }}>{p.role}</div>
                      <StatusPill status={p.status} />
                    </div>
                    <h3 style={{
                      fontFamily: FONTS.serif,
                      fontSize: '26px', fontWeight: 500,
                      letterSpacing: '-0.01em', color: T.platinum,
                      marginBottom: '12px',
                    }}>{p.client}</h3>
                    <p style={{
                      fontFamily: FONTS.ui,
                      fontSize: '14px', lineHeight: 1.6,
                      color: T.softText, marginBottom: '18px',
                    }}>{p.description}</p>

                    {/* Outcomes — real, defensible statements about what
                        was delivered. Uses status-aware header: "Delivered"
                        for live projects (past tense), "In scope" for
                        in-build projects (current commitment). */}
                    {p.outcomes && p.outcomes.length > 0 && (
                      <div style={{
                        marginBottom: '20px',
                        paddingTop: '18px',
                        borderTop: `1px solid ${T.hairline}`,
                      }}>
                        <div style={{
                          fontFamily: FONTS.mono, fontSize: '10px',
                          letterSpacing: '0.18em', textTransform: 'uppercase',
                          color: T.gold, marginBottom: '14px',
                          display: 'flex', alignItems: 'center', gap: '10px',
                        }}>
                          <span style={{
                            width: '18px', height: '1px', background: T.goldDeep,
                          }} />
                          {p.status === 'live' ? 'Delivered' : 'In scope'}
                        </div>
                        <ul style={{
                          listStyle: 'none', margin: 0, padding: 0,
                          display: 'flex', flexDirection: 'column', gap: '12px',
                        }}>
                          {p.outcomes.map((o, k) => (
                            <li key={k} style={{
                              display: 'grid',
                              gridTemplateColumns: 'auto 1fr',
                              gap: '10px',
                              alignItems: 'start',
                            }}>
                              <span style={{
                                color: T.gold, fontSize: '13px',
                                lineHeight: 1.4,
                                marginTop: '1px',
                              }}>›</span>
                              <div>
                                <div style={{
                                  fontFamily: FONTS.ui,
                                  fontSize: '13px', fontWeight: 500,
                                  color: T.platinum, lineHeight: 1.4,
                                }}>{o.headline}</div>
                                <div style={{
                                  fontFamily: FONTS.ui,
                                  fontSize: '12px',
                                  color: T.muted, lineHeight: 1.5,
                                  marginTop: '2px',
                                }}>{o.subtitle}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '6px',
                      marginBottom: '20px',
                    }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: FONTS.mono, fontSize: '10px',
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          padding: '4px 9px',
                          border: `1px solid ${T.hairline}`,
                          color: T.softText, borderRadius: R.tag,
                        }}>{tag}</span>
                      ))}
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                      marginTop: 'auto',
                      fontFamily: FONTS.mono, fontSize: '11px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: T.gold, fontWeight: 500,
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      transition: 'gap 200ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                    >Visit site <ExternalLink size={11} /></a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// REVIEWS
// ══════════════════════════════════════════════════════════════
function Reviews() {
  const isMobile = useIsMobile();
  const quotes = [
    { quote: "Hilary is remarkably careful, reliable, and substantively strong. She thinks with me, delivers quality, and honors her commitments. For my practice, where vulnerable clients and sensitive data are at stake, that is no small thing. I choose my collaborators with care, and Hilary is someone I trust.",
      author: 'Jiska',
      role: 'Founder, JS Zorg en Advies | Seraph Zorg', draft: false },
    { quote: "Hilary took a project I barely described and turned it into a brand system, a website, and a launch plan inside a month. The rigour she brings is more than most paid agencies deliver.",
      author: 'Tolu',
      role: "Founder, Magnifying Children's Horizons", draft: false },
  ];

  return (
    <section id="reviews" style={{ padding: isMobile ? '80px 0' : '140px 0' }}>
      <Container>
        <Reveal><Eyebrow>What clients say</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: isMobile ? '38px' : 'clamp(42px, 4.4vw, 58px)',
            lineHeight: 1.05, letterSpacing: '-0.015em',
            fontWeight: 400, color: T.platinum,
            marginTop: '24px', marginBottom: '20px', maxWidth: '780px',
          }}>
            High-touch, <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>on the record.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{
            fontFamily: FONTS.ui,
            fontSize: '16px', lineHeight: 1.6, color: T.softText,
            maxWidth: '620px', marginBottom: '60px',
          }}>
            Every engagement is a direct relationship with the engineer building it. The reviews below reflect that.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 100}>
              <div data-card="true" style={{
                background: `${T.obsidian}E6`,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: `1px solid ${T.midnight}`,
                borderRadius: R.card,
                padding: isMobile ? '32px 24px' : '44px 40px',
                position: 'relative',
                height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                {q.draft && (
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    fontFamily: FONTS.mono, fontSize: '9px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: T.warn, fontWeight: 500,
                    padding: '4px 8px',
                    border: `1px solid ${T.warn}55`,
                    background: `${T.warn}0F`,
                    borderRadius: R.pill,
                  }}>Draft · for sign-off</div>
                )}
                <Quote size={28} style={{ color: T.gold, marginBottom: '20px', opacity: 0.7 }} />
                <p style={{
                  fontFamily: FONTS.serif,
                  fontSize: isMobile ? '22px' : '26px',
                  lineHeight: 1.4, letterSpacing: '-0.005em',
                  color: T.platinum, fontWeight: 400,
                  marginBottom: '28px', flex: 1,
                }}>“{q.quote}”</p>
                <div style={{
                  paddingTop: '20px',
                  borderTop: `1px solid ${T.hairline}`,
                }}>
                  <div style={{
                    fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                    color: T.platinum, marginBottom: '4px',
                  }}>{q.author}</div>
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: '10px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: T.muted,
                  }}>{q.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// QUOTE
// ══════════════════════════════════════════════════════════════
function QuoteSection() {
  const isMobile = useIsMobile();
  const isNarrow = useIsMobile(640);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    company: string;
    services: string[];
    brief: string;
    budget: string;
    timeline: string;
  }>({
    name: '', email: '', company: '',
    services: [], brief: '', budget: '', timeline: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(''); // invisible field, bots fill this

  // Availability card row-by-row reveal, gated on in-view detection
  const { ref: availRef, visible: availVisible } = useReveal();
  const [availTypedRows, setAvailTypedRows] = useState(0);
  const availRows: [string, string][] = [
    ['seats',     '3 of 4 open'],
    ['booking',   'Q4 2026'],
    ['response',  'within 48 hours'],
    ['min scope', 'discovery call'],
  ];
  useEffect(() => {
    if (!availVisible) return;
    if (availTypedRows >= availRows.length) return;
    const t = setTimeout(() => setAvailTypedRows(n => n + 1), availTypedRows === 0 ? 400 : 220);
    return () => clearTimeout(t);
  }, [availTypedRows, availRows.length, availVisible]);

  function update(k: string, v: any) { setForm(f => ({ ...f, [k]: v })); }
  function toggleService(s: string) {
    setForm(f => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter(x => x !== s)
        : [...f.services, s],
    }));
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const services = ['AI Engineering', 'AI Governance', 'Web Development', 'Advisory'];
  const budgets = ['Under €5k', '€5k to €15k', '€15k to €30k', '€30k+', 'Not sure yet'];
  const timelines = ['This month', 'Next 1 to 3 months', 'Next 3 to 6 months', 'Flexible'];

  const inputStyle = {
    width: '100%',
    background: T.deep,
    border: `1px solid ${T.midnight}`,
    color: T.platinum,
    fontFamily: FONTS.ui,
    fontSize: '14px',
    padding: '14px 16px',
    borderRadius: R.input,
    outline: 'none',
    transition: 'border-color 260ms ease',
  };
  const labelStyle = {
    fontFamily: FONTS.mono, fontSize: '10px',
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: T.gold, marginBottom: '10px', display: 'block',
  };

  return (
    <section id="quote" style={{
      padding: isMobile ? '80px 0' : '140px 0',
      background: `${T.deep}E6`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderTop: `1px solid ${T.hairline}`,
      borderBottom: `1px solid ${T.hairline}`,
    }}>
      <Container>
        <Reveal><Eyebrow color={T.gold}>Request a quote</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: isMobile ? '40px' : 'clamp(44px, 5vw, 64px)',
            lineHeight: 1.04, letterSpacing: '-0.02em',
            fontWeight: 400, color: T.platinum,
            marginTop: '24px', marginBottom: '20px', maxWidth: '780px',
          }}>
            Every project quoted <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>individually.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{
            fontFamily: FONTS.ui,
            fontSize: '16px', lineHeight: 1.65, color: T.softText,
            maxWidth: '640px', marginBottom: '60px',
          }}>
            Most engagements fall between <span style={{ color: T.platinum }}>€1,500 and €28,000</span>,
            depending on scope. Send your project details below. I respond within 48 hours
            with a written scoping document and a fixed quote.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr',
          gap: isMobile ? '32px' : '40px',
          alignItems: 'start',
        }}>
          <Reveal delay={180}>
            <div style={{
              background: `${T.obsidian}E6`,
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: `1px solid ${T.midnight}`,
              borderRadius: R.card,
              padding: isMobile ? '28px 22px' : '44px 44px',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <CheckCircle2 size={44} color={T.ok} style={{ marginBottom: '20px' }} />
                  <h3 style={{
                    fontFamily: FONTS.serif, fontSize: '32px', fontWeight: 500,
                    color: T.platinum, marginBottom: '12px', letterSpacing: '-0.01em',
                  }}>Brief received.</h3>
                  <p style={{
                    fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.6,
                    color: T.softText, maxWidth: '400px', margin: '0 auto',
                  }}>
                    I'll respond within 48 hours with a written scoping document.
                    You'll get an email confirmation shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '18px',
                  }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input required type="text" value={form.name}
                        onChange={e => update('name', e.target.value)}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.midnight}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" value={form.email}
                        onChange={e => update('email', e.target.value)}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.midnight}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Company / role</label>
                    <input type="text" value={form.company}
                      onChange={e => update('company', e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = T.gold}
                      onBlur={e => e.target.style.borderColor = T.midnight}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>What are you looking to build?</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {services.map(s => {
                        const on = form.services.includes(s);
                        return (
                          <button type="button" key={s} onClick={() => toggleService(s)}
                            style={{
                              fontFamily: FONTS.ui, fontSize: '13px', fontWeight: 500,
                              padding: '11px 18px',
                              background: on ? `${T.gold}14` : T.deep,
                              border: `1px solid ${on ? T.gold : T.midnight}`,
                              color: on ? T.gold : T.softText,
                              borderRadius: R.button,
                              transition: 'all 260ms ease',
                              letterSpacing: '0.02em',
                            }}>{s}</button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell me about your project</label>
                    <textarea rows={4} value={form.brief}
                      onChange={e => update('brief', e.target.value)}
                      placeholder="Rough scope, key questions, timelines you're working against. As much or as little as you have."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      onFocus={e => e.target.style.borderColor = T.gold}
                      onBlur={e => e.target.style.borderColor = T.midnight}
                    />
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '18px',
                  }}>
                    <div>
                      <label style={labelStyle}>Budget range</label>
                      <select value={form.budget}
                        onChange={e => update('budget', e.target.value)}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.midnight}
                      >
                        <option value="">Select...</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Timeline</label>
                      <select value={form.timeline}
                        onChange={e => update('timeline', e.target.value)}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = T.gold}
                        onBlur={e => e.target.style.borderColor = T.midnight}
                      >
                        <option value="">Select...</option>
                        {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '8px' }}>
                    <button type="submit" disabled={submitting} style={{
                      fontFamily: FONTS.ui, fontSize: '14px', fontWeight: 500,
                      padding: '16px 30px',
                      background: submitting ? T.midnight : T.goldDeep,
                      color: T.platinum,
                      border: 'none', borderRadius: R.button,
                      letterSpacing: '0.04em',
                      display: 'inline-flex', alignItems: 'center', gap: '10px',
                      transition: 'all 260ms ease',
                      cursor: submitting ? 'wait' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!submitting) { e.currentTarget.style.boxShadow = `0 12px 40px -10px ${T.gold}77`; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    ><Send size={14} /> {submitting ? 'Sending...' : 'Send project brief'}</button>
                    <span style={{
                      fontFamily: FONTS.mono, fontSize: '11px', color: T.muted,
                      letterSpacing: '0.14em',
                    }}>Response within 48 hours</span>
                  </div>

                  {/* Honeypot: hidden from real users, bots fill it and get silently dropped */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px', height: '1px',
                      opacity: 0,
                      pointerEvents: 'none',
                    }}
                  />

                  {errorMsg && (
                    <div style={{
                      marginTop: '4px',
                      padding: '14px 18px',
                      background: 'rgba(248, 113, 113, 0.08)',
                      border: '1px solid rgba(248, 113, 113, 0.3)',
                      borderRadius: R.input,
                      fontFamily: FONTS.ui, fontSize: '13.5px',
                      color: '#FCA5A5', lineHeight: 1.5,
                    }}>
                      {errorMsg}
                    </div>
                  )}
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div ref={availRef} style={{
              background: `${T.deep}E6`,
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: `1px solid ${T.midnight}`,
              borderRadius: R.card,
              padding: '26px',
              fontFamily: FONTS.mono, fontSize: '12px',
              position: isMobile ? 'static' : 'sticky', top: '100px',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingBottom: '14px', borderBottom: `1px solid ${T.hairline}`,
                marginBottom: '16px',
              }}>
                <span style={{ color: T.muted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Availability</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: T.ok }}>
                  <span data-pulse="true" style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: T.ok, boxShadow: `0 0 8px ${T.ok}`,
                  }} />
                  taking bookings
                </span>
              </div>

              {availRows.map(([k, v], i) => {
                const visible = i < availTypedRows;
                return (
                  <div key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    gap: '16px', padding: '7px 0',
                    borderBottom: `1px dashed ${T.hairline}`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-3px)',
                    transition: 'opacity 200ms ease, transform 200ms ease',
                  }}>
                    <span style={{ color: T.sapphire }}>{k}</span>
                    <span style={{ color: T.platinum, textAlign: 'right' }}>{v}</span>
                  </div>
                );
              })}

              <div style={{
                marginTop: '20px', paddingTop: '18px',
                borderTop: `1px solid ${T.hairline}`,
                fontFamily: FONTS.ui, fontSize: '13px',
                lineHeight: 1.6, color: T.softText,
              }}>
                <div style={{
                  fontFamily: FONTS.mono, fontSize: '10px',
                  letterSpacing: '0.18em', color: T.gold,
                  textTransform: 'uppercase', marginBottom: '10px',
                }}>Why the scarcity is deliberate</div>
                I take on a maximum of <span style={{ color: T.platinum }}>4 concurrent engagements</span> to
                ensure every project gets direct engineer attention. When seats fill,
                new work joins the Q1 waitlist.
              </div>

              <div style={{
                marginTop: '20px', paddingTop: '18px',
                borderTop: `1px solid ${T.hairline}`,
                display: 'flex', flexDirection: 'column', gap: '10px',
                fontSize: '11px', color: T.muted,
              }}>
                <a href="mailto:hc@hccoretech.com" style={{
                  color: T.platinum, display: 'inline-flex',
                  alignItems: 'center', gap: '8px',
                }}>
                  <Mail size={12} color={T.gold} /> hc@hccoretech.com
                </a>
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════
function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      background: T.deep,
      borderTop: `1px solid ${T.hairline}`,
      padding: isMobile ? '64px 0 36px' : '96px 0 48px',
    }}>
      <Container>
        <div style={{
          textAlign: 'center',
          paddingBottom: isMobile ? '48px' : '72px',
          borderBottom: `1px solid ${T.hairline}`,
          marginBottom: isMobile ? '48px' : '64px',
        }}>
          <HCCTMonogram size={isMobile ? 38 : 56} variant="full" animated />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: '40px', marginBottom: '48px',
        }}>
          <div>
            <div style={{
              fontFamily: FONTS.wordmark,
              fontSize: '15px', fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: T.platinum,
              marginBottom: '16px',
            }}>HC Core Tech</div>
            <p style={{
              fontFamily: FONTS.ui, fontSize: '13px', lineHeight: 1.65,
              color: T.muted, maxWidth: '340px',
            }}>
              AI Engineering · AI Governance · Web Development.
              Independent Dutch practice, built and operated by Hilary Azimoh.
            </p>
          </div>

          {[
            { title: 'Practice', items: [
              { label: 'Services',      href: '/#services' },
              { label: 'CoreDesk',      href: '/#coredesk' },
              { label: 'Selected work', href: '/#work' },
              { label: 'Reviews',       href: '/#reviews' },
              { label: 'About',         href: '/#about' },
            ]},
            { title: 'Contact',  items: [
              { label: 'Request a quote',    href: '/#quote' },
              { label: 'hc@hccoretech.com',  href: 'mailto:hc@hccoretech.com' },
              { label: 'Amsterdam, Netherlands', href: null },
            ]},
            { title: 'Legal',    items: [
              { label: 'Terms of service',   href: '/legal#terms' },
              { label: 'Privacy policy',     href: '/legal#privacy' },
              { label: 'Data processing (DPA)', href: '/legal#dpa' },
            ]},
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: FONTS.mono, fontSize: '11px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: T.gold, marginBottom: '18px',
              }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.items.map(it => (
                  it.href ? (
                    <a key={it.label} href={it.href} style={{
                      fontFamily: FONTS.ui, fontSize: '13px',
                      color: T.softText, fontWeight: 400,
                    }}
                    >{it.label}</a>
                  ) : (
                    <span key={it.label} style={{
                      fontFamily: FONTS.ui, fontSize: '13px',
                      color: T.softText, fontWeight: 400,
                    }}>{it.label}</span>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: `1px solid ${T.hairline}`,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '12px',
          fontFamily: FONTS.mono, fontSize: '11px',
          color: T.muted, letterSpacing: '0.14em',
        }}>
          <span>© 2025 HC Core Tech · Amsterdam, Netherlands · All rights reserved</span>
          <span>BTW vrijgesteld · pending KvK registration</span>
        </div>
      </Container>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════

/* --- Card mouse tracker ---
   Adds --mouse-x / --mouse-y CSS vars to any [data-card] element
   on mouse move, powering the radial spotlight glow in globals.css. */
function CardMouseTracker() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-card]') as HTMLElement | null
      if (!target) return
      const rect = target.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      target.style.setProperty('--mouse-x', `${x}%`)
      target.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
  return null
}

export default function HCCoreTechHomepage() {
  return (
    <div style={{
      background: T.obsidian,
      color: T.platinum,
      fontFamily: FONTS.ui,
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${T.obsidian}; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        a { text-decoration: none; color: inherit; cursor: pointer; }
        button { cursor: pointer; font-family: inherit; }
        input, textarea, select { font-family: inherit; }
        select option { background: ${T.deep}; color: ${T.platinum}; }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(80px, 40px) scale(1.06); }
          66%      { transform: translate(-40px, 100px) scale(0.95); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(-90px, -70px) scale(1.08); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(-60px, 30px) scale(1.04); }
          66%      { transform: translate(60px, -60px) scale(0.96); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <AmbientBackground />
      <CardMouseTracker />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <FrameworkStrip />
        <Services />
        <CoreDeskCallout />
        <Approach />
        <SelectedWork />
        <Reviews />
        <QuoteSection />
        <Footer />
      </div>
    </div>
  );
}