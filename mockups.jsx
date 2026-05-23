/* global React */
// ─────────────────────────────────────────────────────────────────────────
// SECTION 7 — SELECTED WORK
// Cinematic, fullscreen, vertically-stacked case studies w/ parallax mockup
// ─────────────────────────────────────────────────────────────────────────

const WORK = [
  {
    n: '/01',
    name: 'HALO',
    kind: 'B2B SaaS — Productivity OS',
    year: '2025',
    tags: ['Messaging', 'Hero', 'Conversion Flow'],
    headline: 'Quiet software for loud minds.',
    sub: 'A landing page that opens with a feeling, not a feature list. Trust built before scroll #2.',
    metric: '+148%',
    metricLabel: 'qualified signups',
    palette: { bg: '#0b1011', fg: '#e8f4f1', accent: 'oklch(0.86 0.16 180)' },
    type: 'editorial'
  },
  {
    n: '/02',
    name: 'AXIS · CAPITAL',
    kind: 'Fintech — Wealth Onboarding',
    year: '2025',
    tags: ['Trust', 'Funnel', 'Proof'],
    headline: 'Capital that moves at your pace.',
    sub: 'Replaced a 6-step form with a story. Each section answered the next objection.',
    metric: '−63%',
    metricLabel: 'time-to-first-deposit',
    palette: { bg: '#0e1216', fg: '#f4f6f9', accent: 'oklch(0.92 0.20 145)' },
    type: 'corporate'
  },
  {
    n: '/03',
    name: 'NIGHTCALL',
    kind: 'AI Studio — Generative Audio',
    year: '2026',
    tags: ['Brand', 'Immersive', 'Launch'],
    headline: 'Sound, summoned.',
    sub: 'A poster of a page. Brand mood as the first conversion lever.',
    metric: '4.2×',
    metricLabel: 'demo conversion lift',
    palette: { bg: '#0a0d12', fg: '#f1ecf8', accent: 'oklch(0.78 0.20 340)' },
    type: 'cinematic'
  },
  {
    n: '/04',
    name: 'SOLO KIT',
    kind: 'Creator Product — Launch Toolkit',
    year: '2024',
    tags: ['Copy', 'Offer', 'Pricing'],
    headline: 'Ship your launch on a Sunday.',
    sub: 'Re-wrote the offer, then the page wrote itself. Friction got cut, not the value.',
    metric: '+39%',
    metricLabel: 'checkout completion',
    palette: { bg: '#10100c', fg: '#f5f1e8', accent: 'oklch(0.86 0.16 80)' },
    type: 'product'
  }
];

function Work() {
  // dust particles — denser, more deterministic distribution
  const dust = React.useMemo(() => Array.from({ length: 90 }).map((_, i) => ({
    x: (i * 47 + 13) % 100,
    y: (i * 29 + (i * i * 7) % 100) % 100,
    d: 1.5 + ((i * 11) % 4) * 0.7,
    o: 0.1 + (i % 7) * 0.04,
    dur: 4 + (i % 8),
    delay: (i * 0.17) % 5
  })), []);

  // 6 spotlights distributed across the full section height
  const spotlights = [
    { top:  '4%', left: '12%', size: 28, opacity: 0.06, dur: 30, delay:  0, dir: 1 },
    { top: '22%', left: '68%', size: 32, opacity: 0.055, dur: 38, delay: -8, dir: -1 },
    { top: '40%', left: '20%', size: 26, opacity: 0.05,  dur: 34, delay: -16, dir: 1 },
    { top: '56%', left: '74%', size: 30, opacity: 0.055, dur: 42, delay: -4, dir: -1 },
    { top: '74%', left: '22%', size: 28, opacity: 0.05,  dur: 36, delay: -22, dir: 1 },
    { top: '88%', left: '64%', size: 24, opacity: 0.055, dur: 32, delay: -12, dir: -1 }
  ];

  return (
    <section id="work" className="pad-y-xl" style={{
      position: 'relative',
      borderTop: '1px solid var(--line-soft)',
      overflow: 'clip'
    }}>
      {/* spotlight + dust keyframes (scoped to this section) */}
      <style>{`
        @keyframes work-spot-drift {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(var(--sx, 4vw), var(--sy, -3vh)); }
        }
        @keyframes work-spot-drift-rev {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(var(--sx, -4vw), var(--sy, 3vh)); }
        }
        @keyframes work-dust-pulse {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: var(--o, 0.2); }
          50%      { transform: translate3d(0, -12px, 0); opacity: calc(var(--o, 0.2) * 1.6); }
        }
      `}</style>

      {/* AMBIENT BG: scattered spotlights + drifting dust */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* 6 scattered spotlights, each subtly breathing in place */}
        {spotlights.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', top: s.top, left: s.left,
            width: `${s.size}vw`, height: `${s.size}vw`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(94,234,212,${s.opacity}), transparent 65%)`,
            borderRadius: '50%',
            filter: 'blur(38px)',
            '--sx': `${(i % 2 === 0 ? 4 : -4)}vw`,
            '--sy': `${(i % 3 === 0 ? -3 : 3)}vh`,
            animation: `${s.dir > 0 ? 'work-spot-drift' : 'work-spot-drift-rev'} ${s.dur}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`
          }}></div>
        ))}

        {/* 90 dust particles — denser scatter */}
        {dust.map((p, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.d, height: p.d, borderRadius: '50%',
            background: 'var(--teal)',
            boxShadow: `0 0 ${Math.max(4, p.d * 2)}px var(--teal)`,
            '--o': p.o,
            opacity: p.o,
            animation: `work-dust-pulse ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`
          }}></span>
        ))}
      </div>

      <div className="container" style={{ marginBottom: 'clamp(100px, 12vw, 160px)', position: 'relative', zIndex: 1 }}>
        {/* TOP META ROW: eyebrow LEFT · counter RIGHT */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 24,
          marginBottom: 32
        }}>
          <div className="eyebrow" data-reveal>
            07 — Selected Work
          </div>
        </div>


        {/* MANIFESTO: 4 words stacked huge — the brand promise */}
        <div>
          {['Clear', 'Stronger', 'Intentional', 'Focused'].map((word, i) => (
            <div key={word} data-reveal style={{
              '--rd': `${120 + i * 120}ms`,
              fontFamily: 'var(--f-display)', fontWeight: 400,
              fontSize: 'clamp(48px, 9.5vw, 132px)',
              lineHeight: 1, letterSpacing: '-0.05em',
              color: 'var(--fg)'
            }}>
              {word}<span className="serif" style={{ color: 'var(--teal)' }}>.</span>
            </div>
          ))}
        </div>

        {/* hairline + specifics caption */}
        <div data-reveal style={{
          '--rd': '640ms',
          marginTop: 'clamp(56px, 7vw, 96px)'
        }}>
          <div style={{
            width: '100%', height: 1,
            background: 'linear-gradient(to right, var(--teal), transparent 70%)',
            opacity: 0.5,
            marginBottom: 24
          }}></div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '.22em', color: 'var(--fg-faint)',
            textTransform: 'uppercase',
            display: 'flex', flexWrap: 'wrap', gap: 18
          }}>
            <span>messaging</span>
            <span style={{ color: 'var(--line)' }}>·</span>
            <span>trust</span>
            <span style={{ color: 'var(--line)' }}>·</span>
            <span>flow</span>
            <span style={{ color: 'var(--line)' }}>·</span>
            <span>action</span>
          </div>
        </div>

        {/* scroll cue — enter the gallery */}
        <div data-reveal style={{
          '--rd': '780ms',
          marginTop: 'clamp(72px, 9vw, 120px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14
        }}>
          <span className="mono" style={{
            fontSize: 11, letterSpacing: '.22em',
            color: 'var(--fg-faint)', textTransform: 'uppercase'
          }}>↓ enter gallery</span>
          <div style={{
            width: 1, height: 44,
            background: 'linear-gradient(to bottom, var(--teal), transparent)'
          }}></div>
        </div>
      </div>

      {/* CASE STUDIES — sticky pin: mockup persists left, copy scrolls right */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <LayoutSticky />
      </div>

    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────
// Stylized mockups — render as little fake landing-page frames
// ─────────────────────────────────────────────────────────────────────────
function CaseMockup({ type, palette, name, headline }) {
  const wrapRef = React.useRef(null);
  const innerRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);

  // shared transform state (refs, not React state — avoids re-render storm during scroll)
  const tiltRef     = React.useRef({ x: 0, y: 0 });
  const parallaxRef = React.useRef(0);
  const blurRef     = React.useRef(0);
  const rafRef      = React.useRef(null);

  // apply current transform/filter directly to DOM (no React re-render)
  const applyTransform = React.useCallback(() => {
    rafRef.current = null;
    const el = innerRef.current;
    if (!el) return;
    const { x, y } = tiltRef.current;
    el.style.transform = `rotateX(${x}deg) rotateY(${y}deg) translateY(${parallaxRef.current}px)`;
    el.style.filter = blurRef.current > 0.05 ? `blur(${blurRef.current.toFixed(2)}px)` : 'none';
  }, []);

  const schedule = React.useCallback(() => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(applyTransform);
  }, [applyTransform]);

  // SCROLL PARALLAX + MOTION BLUR (now ref-based, no React re-render)
  React.useEffect(() => {
    let lastY = window.scrollY, lastT = Date.now();
    let blurTimer = null;
    const onScroll = () => {
      if (!wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + r.height / 2);
      parallaxRef.current = Math.max(-60, Math.min(60, progress * -30));

      const now = Date.now();
      const dy = Math.abs(window.scrollY - lastY);
      const dt = now - lastT;
      lastY = window.scrollY; lastT = now;
      if (dt > 0) {
        const v = dy / dt;
        blurRef.current = Math.min(v * 0.45, 3);
      }
      clearTimeout(blurTimer);
      blurTimer = setTimeout(() => { blurRef.current = 0; schedule(); }, 120);

      schedule();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(blurTimer);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [schedule]);

  // MOUSE TILT — also ref-based + rAF-scheduled
  const onMove = (e) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    tiltRef.current = { x: dy * -3.2, y: dx * 3.2 };
    schedule();
  };
  const onEnter = () => setHover(true);
  const onLeave = () => {
    setHover(false);
    tiltRef.current = { x: 0, y: 0 };
    schedule();
  };

  return (
    <div
      ref={wrapRef}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 1600,
        width: '100%',
        cursor: 'default'
      }}>
      <div ref={innerRef} style={{
        position: 'relative',
        aspectRatio: '16 / 10',
        width: '100%',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid var(--line)',
        background: palette.bg,
        color: palette.fg,
        boxShadow: hover
          ? '0 70px 160px -40px rgba(0,0,0,0.85), 0 0 0 1px rgba(94,234,212,0.18), 0 0 120px -30px rgba(94,234,212,0.32), 0 30px 60px -20px rgba(0,0,0,0.5)'
          : '0 40px 100px -30px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04), 0 20px 50px -20px rgba(0,0,0,0.4)',
        transition: 'box-shadow 320ms ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform, filter'
      }}>
        {/* browser chrome — closer layer (translateZ positive) */}
        <div style={{
          position: 'relative',
          height: 32, borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 14,
          background: 'rgba(255,255,255,0.03)',
          transform: 'translateZ(24px)'
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }}></span>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }}></span>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }}></span>
          </div>
          <div style={{
            flex: 1, height: 16, borderRadius: 4,
            background: 'rgba(255,255,255,0.04)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--f-mono)', fontSize: 9,
            color: 'rgba(255,255,255,0.5)', letterSpacing: '.08em'
          }}>
            {name.toLowerCase().replace(/[\s·]+/g, '')}.com
          </div>
        </div>

        {/* contents — middle layer (default depth) */}
        <div style={{
          position: 'absolute', top: 32, left: 0, right: 0, bottom: 0,
          transform: 'translateZ(6px)'
        }}>
          {type === 'editorial'  && <MockEditorial palette={palette} name={name} headline={headline} />}
          {type === 'corporate'  && <MockCorporate palette={palette} name={name} headline={headline} />}
          {type === 'cinematic'  && <MockCinematic palette={palette} name={name} headline={headline} />}
          {type === 'product'    && <MockProduct palette={palette} name={name} headline={headline} />}
        </div>

        {/* sheen overlay (no view-live label) — closest layer */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: hover
            ? 'linear-gradient(135deg, rgba(94,234,212,0.08), transparent 50%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.04), transparent 30%)',
          transition: 'background 320ms ease',
          transform: 'translateZ(40px)'
        }}></div>
      </div>
    </div>
  );
}

function NavRow({ name, palette }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 22px', borderBottom: '1px solid rgba(255,255,255,0.04)'
    }}>
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: '-0.01em',
        display: 'flex', alignItems: 'center', gap: 6
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: '50%',
          background: palette.accent, display: 'inline-block'
        }}></span>
        {name}
      </div>
      <div style={{
        display: 'flex', gap: 14,
        fontFamily: 'var(--f-mono)', fontSize: 8.5,
        color: 'rgba(255,255,255,0.5)', letterSpacing: '.1em'
      }}>
        <span>PRODUCT</span><span>PRICING</span><span>LOGIN</span>
      </div>
      <div style={{
        padding: '5px 10px', borderRadius: 4,
        background: palette.accent, color: palette.bg,
        fontFamily: 'var(--f-mono)', fontSize: 8.5, letterSpacing: '.08em'
      }}>START →</div>
    </div>
  );
}

function MockEditorial({ palette, name, headline }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NavRow name={name} palette={palette} />
      <div style={{ flex: 1, padding: '36px 30px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        <div style={{ alignSelf: 'end' }}>
          <div style={{
            fontFamily: 'var(--f-mono)', fontSize: 9,
            color: palette.accent, letterSpacing: '.18em', marginBottom: 12
          }}>— A PRACTICE FOR FOCUS</div>
          <div style={{
            fontFamily: 'var(--f-display)', fontWeight: 400,
            fontSize: 'clamp(22px, 3.2vw, 40px)',
            lineHeight: 0.95, letterSpacing: '-0.035em'
          }}>{headline}</div>
          <div style={{
            marginTop: 18, fontSize: 11, lineHeight: 1.5,
            color: 'rgba(255,255,255,0.55)', maxWidth: '34ch'
          }}>An operating system that lowers the volume of your day. One task at a time, with intention.</div>
          <div style={{
            marginTop: 22, display: 'flex', gap: 10, alignItems: 'center'
          }}>
            <div style={{
              padding: '8px 14px', borderRadius: 999, background: palette.accent,
              color: palette.bg, fontFamily: 'var(--f-mono)',
              fontSize: 9, letterSpacing: '.14em'
            }}>BEGIN →</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>or see how it works</div>
          </div>
        </div>
        <div style={{
          border: `1px solid ${palette.accent}40`,
          background: `linear-gradient(180deg, ${palette.accent}10, transparent)`,
          borderRadius: 8, padding: 18,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: palette.accent, letterSpacing: '.18em' }}>NOW · 09:14</div>
          <div>
            <div style={{ fontSize: 14, letterSpacing: '-0.01em', marginBottom: 6 }}>Draft proposal</div>
            <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '0 30% 0 0', background: palette.accent }}></div>
            </div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>70% · DEEP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockCorporate({ palette, name, headline }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NavRow name={name} palette={palette} />
      <div style={{ flex: 1, padding: '28px 30px', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 9, color: palette.accent,
          letterSpacing: '.18em', marginBottom: 14
        }}>↳ TRUSTED CAPITAL · EST. 2018</div>
        <div style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(22px, 3vw, 38px)',
          lineHeight: 1, letterSpacing: '-0.035em', maxWidth: '14ch', marginBottom: 14
        }}>{headline}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', maxWidth: '40ch', lineHeight: 1.5 }}>
          Liquidity, structure, and reporting in one ledger. Audited quarterly. Move when your strategy says move.
        </div>
        <div style={{ flex: 1 }} />
        {/* fake chart */}
        <div style={{
          border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8,
          padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20
        }}>
          {[
            ['AUM',       '$1.42B', '+12.4% YoY'],
            ['Sharpe',    '1.86',    'rolling 3y'],
            ['Drawdown',  '−4.1%',   'all-time']
          ].map(([k, v, d]) => (
            <div key={k}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: 'rgba(255,255,255,0.45)', letterSpacing: '.16em' }}>{k.toUpperCase()}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 20, color: palette.accent, marginTop: 4 }}>{v}</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockCinematic({ palette, name, headline }) {
  return (
    <div style={{
      position: 'relative', height: '100%',
      background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${palette.accent}33, transparent 65%), ${palette.bg}`,
      overflow: 'hidden'
    }}>
      {/* aurora rings */}
      {[0,1,2,3].map(i => (
        <div key={i} style={{
          position: 'absolute', left: '50%', top: '55%',
          width: 80 + i*90, height: 80 + i*90,
          border: `1px solid ${palette.accent}${20 - i*4}`,
          borderRadius: '50%', transform: 'translate(-50%,-50%)'
        }}></div>
      ))}
      {/* corner brand */}
      <div style={{
        position: 'absolute', top: 16, left: 22,
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--f-display)', fontSize: 12
      }}>
        <span style={{
          width: 6, height: 6, background: palette.accent,
          boxShadow: `0 0 10px ${palette.accent}`
        }}></span>
        {name}
      </div>
      <div style={{
        position: 'absolute', top: 16, right: 22,
        fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '.16em',
        color: 'rgba(255,255,255,0.55)'
      }}>EP / 04 — ▶</div>

      {/* centered title */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 14, padding: 20
      }}>
        <div style={{
          fontFamily: 'var(--f-display)', fontWeight: 400,
          fontSize: 'clamp(28px, 4vw, 52px)',
          letterSpacing: '-0.04em', textAlign: 'center', lineHeight: 0.95,
          textShadow: `0 0 24px ${palette.accent}66`
        }}>{headline}</div>
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 9.5, letterSpacing: '.22em',
          color: 'rgba(255,255,255,0.55)'
        }}>AN AI STUDIO FOR ORIGINAL SOUND</div>
        <div style={{
          marginTop: 10, padding: '8px 16px',
          border: `1px solid ${palette.accent}`, borderRadius: 999,
          fontFamily: 'var(--f-mono)', fontSize: 9, color: palette.accent,
          letterSpacing: '.18em', boxShadow: `0 0 18px ${palette.accent}55`
        }}>BEGIN A SESSION →</div>
      </div>

      {/* bottom waveform */}
      <div style={{
        position: 'absolute', bottom: 14, left: 22, right: 22,
        display: 'flex', alignItems: 'center', gap: 2
      }}>
        {Array.from({ length: 60 }).map((_, i) => {
          const h = 2 + ((Math.sin(i * 0.6) + 1) * 6 + (i % 3));
          return <span key={i} style={{
            display: 'inline-block', width: 2, height: h,
            background: i < 24 ? palette.accent : 'rgba(255,255,255,0.18)',
            borderRadius: 1
          }}></span>;
        })}
      </div>
    </div>
  );
}

function MockProduct({ palette, name, headline }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NavRow name={name} palette={palette} />
      <div style={{ flex: 1, padding: '28px 30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 8px', borderRadius: 999,
            background: `${palette.accent}1f`, color: palette.accent,
            fontFamily: 'var(--f-mono)', fontSize: 8.5, letterSpacing: '.14em', marginBottom: 16
          }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: palette.accent }}></span>
            LIVE — 248 BUILDERS THIS WEEK
          </div>
          <div style={{
            fontFamily: 'var(--f-display)', fontSize: 'clamp(22px, 3vw, 36px)',
            lineHeight: 0.95, letterSpacing: '-0.035em', marginBottom: 14
          }}>{headline}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, maxWidth: '34ch', marginBottom: 18 }}>
            Page template, copy framework, CTA library and the launch sequence. Everything you need by lunch.
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{
              padding: '8px 14px', borderRadius: 999, background: palette.accent,
              color: palette.bg, fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '.14em'
            }}>GET THE KIT · $48</span>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>or preview the system →</span>
          </div>
        </div>
        {/* product card */}
        <div style={{
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8,
          padding: 14, background: 'rgba(255,255,255,0.02)',
          display: 'flex', flexDirection: 'column', gap: 8
        }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: 'rgba(255,255,255,0.45)', letterSpacing: '.16em' }}>INCLUDED</div>
          {['Hero framework × 4', 'Offer/copy worksheets', 'CTA library × 28', 'Launch email sequence'].map(x => (
            <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
              <span style={{ width: 8, height: 1, background: palette.accent, display: 'inline-block' }}></span>
              {x}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: 'rgba(255,255,255,0.45)', letterSpacing: '.16em', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8 }}>
            ★ 4.93 · 380 BUILDERS SHIPPED
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// LAYOUT · STICKY PIN — mockup sticks, copy scrolls past, swaps active case
// ─────────────────────────────────────────────────────────────────────────
function LayoutSticky() {
  const [active, setActive] = React.useState(0);
  const copyRefs = React.useRef([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let best = null, bestRatio = 0;
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio > bestRatio) {
          bestRatio = e.intersectionRatio;
          best = e.target;
        }
      });
      if (best) {
        const idx = copyRefs.current.indexOf(best);
        if (idx >= 0) setActive(idx);
      }
    }, { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: '-35% 0px -35% 0px' });

    copyRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const w = WORK[active];

  return (
    <div className="container">
      <div className="rgrid" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 'clamp(40px, 5vw, 80px)',
        alignItems: 'stretch'
      }}>
        {/* LEFT — sticky mockup (desktop only; mobile CSS turns this static & hides it) */}
        <div data-sticky-mockup style={{
          position: 'sticky',
          top: 100,
          height: 'fit-content'
        }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 18,
            marginBottom: 24
          }}>
            <span className="mono" style={{
              fontSize: 'clamp(36px, 4vw, 64px)',
              color: 'var(--teal)',
              lineHeight: 1, letterSpacing: '.02em',
              textShadow: '0 0 24px rgba(94,234,212,0.25)',
              transition: 'all 320ms ease'
            }}>{w.n}</span>
            <div>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--fg-dim)',
                letterSpacing: '.22em', textTransform: 'uppercase'
              }}>{w.kind}</div>
              <div className="mono" style={{
                fontSize: 10, color: 'var(--fg-faint)',
                letterSpacing: '.18em', marginTop: 4
              }}>{w.year}</div>
            </div>
          </div>
          <CaseMockup
            key={w.name}
            type={w.type} palette={w.palette}
            name={w.name} headline={w.headline}
          />
        </div>

        {/* RIGHT — scrolling copy blocks (each carries its own inline mockup for mobile) */}
        <div>
          {WORK.map((c, i) => (
            <div key={c.name}
              ref={el => copyRefs.current[i] = el}
              data-sticky-copy
              style={{
                minHeight: '80vh',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center',
                paddingBlock: 40,
                opacity: active === i ? 1 : 0.35,
                transition: 'opacity 400ms ease'
              }}>
              {/* mobile chapter card — big /XX marker, hidden on desktop */}
              <div data-sticky-mobile-marker style={{ display: 'none', marginBottom: 28 }}>
                <div style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 'clamp(56px, 16vw, 88px)',
                  color: 'var(--teal)',
                  lineHeight: 1,
                  letterSpacing: '.02em',
                  textShadow: '0 0 24px rgba(94,234,212,0.22)',
                  marginBottom: 14
                }}>{c.n}</div>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--fg-dim)',
                  letterSpacing: '.22em', textTransform: 'uppercase',
                  marginBottom: 4
                }}>{c.kind}</div>
                <div className="mono" style={{
                  fontSize: 10, color: 'var(--fg-faint)',
                  letterSpacing: '.18em'
                }}>{c.year} · {String(i+1).padStart(2,'0')} / {String(WORK.length).padStart(2,'0')}</div>
              </div>

              {/* inline mockup for mobile (hidden on desktop) */}
              <div data-sticky-mobile-mockup style={{ display: 'none', marginBottom: 24 }}>
                <CaseMockup
                  type={c.type} palette={c.palette}
                  name={c.name} headline={c.headline}
                />
              </div>

              {/* desktop small marker — hidden on mobile (chapter card replaces) */}
              <div className="mono" data-sticky-small-marker style={{
                fontSize: 11, color: 'var(--teal)',
                letterSpacing: '.22em', marginBottom: 18
              }}>{c.n} · {String(i+1).padStart(2,'0')} / {String(WORK.length).padStart(2,'0')}</div>
              <div style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 18
              }}>{c.name}</div>
              <p style={{
                fontSize: 'clamp(17px, 1.3vw, 20px)',
                lineHeight: 1.55, color: 'var(--fg-dim)',
                margin: '0 0 30px', maxWidth: '38ch'
              }}>{c.sub}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {c.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
