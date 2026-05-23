/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

// ─────────────────────────────────────────────────────────────────────────
// Scroll reveal: tag any element with data-reveal, gets .in when in viewport
// ─────────────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.in)');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ─────────────────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [t, setT] = useState(new Date());
  const progressRef = useRef(null);
  useEffect(() => {
    let raf = null;
    const update = () => {
      raf = null;
      setScrolled(window.scrollY > 80);
      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? window.scrollY / max : 0;
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    const id = setInterval(() => setT(new Date()), 1000 * 30);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(id);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const time = t.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const links = [
    ['Work',     '#work'],
    ['Approach', '#approach'],
    ['About',    '#about'],
    ['Contact',  '#contact'],
  ];
  return (
    <React.Fragment>
      <nav className={"nav " + (scrolled ? 'scrolled' : '')}>
        <div className="nav-brand">
          <span className="dot"></span>
          <span>Ayen</span>
          <span style={{ color: 'var(--fg-faint)', marginLeft: 8, fontSize: 13 }}>
            / Landing&nbsp;Pages
          </span>
        </div>
        <div className="nav-links">
          {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </div>
        <div className="nav-meta">
          <span style={{ color: 'var(--teal)' }}>●</span>
          <span>Available · 2026</span>
          <span style={{ opacity: .6 }}>{time} GMT+8</span>
        </div>
        <button
          aria-label="Toggle menu"
          className={"burger " + (open ? 'open' : '')}
          onClick={() => setOpen((v) => !v)}>
          <span></span><span></span>
        </button>

        {/* scroll-progress bar pinned to the nav bottom edge */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0, bottom: 0,
          height: 2,
          background: 'rgba(94,234,212,0.12)',
          pointerEvents: 'none'
        }}>
          <div ref={progressRef} style={{
            height: '100%',
            background: 'linear-gradient(to right, var(--teal), rgba(94,234,212,0.8))',
            boxShadow: '0 0 8px var(--teal)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            willChange: 'transform'
          }}></div>
        </div>
      </nav>

      <div className={"mobile-menu " + (open ? 'open' : '')}>
        <nav>
          {links.map(([l, h], i) => (
            <a key={l} href={h} onClick={() => setOpen(false)}>
              <span>{l}</span>
              <span className="idx">/ {String(i+1).padStart(2,'0')}</span>
            </a>
          ))}
        </nav>
        <div className="mm-foot">
          <span className="pill">Available · 2026</span>
          <span style={{ opacity: .6 }}>{time} GMT+8 — Singapore</span>
          <span style={{ opacity: .6 }}>hello@ayen.studio</span>
        </div>
      </div>
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Progress rail (right side)
// ─────────────────────────────────────────────────────────────────────────
function ProgressRail() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  const sections = [
    'Hero', 'Problem', 'Leak', 'Diagnosis', 'Belief',
    'System', 'Work', 'About', 'Contact'
  ];
  return (
    <div className="progress-rail" style={{
      position: 'fixed', right: 22, top: '50%', transform: 'translateY(-50%)',
      zIndex: 60, display: 'flex', flexDirection: 'column', gap: 14,
      pointerEvents: 'none'
    }}>
      {sections.map((s, i) => {
        const seg = i / (sections.length - 1);
        const active = Math.abs(p - seg) < 1 / (sections.length * 2);
        return (
          <div key={s} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            justifyContent: 'flex-end',
            opacity: active ? 1 : .35,
            transition: 'opacity 300ms'
          }}>
            <span className="mono" style={{
              fontSize: 10, letterSpacing: '.18em',
              textTransform: 'uppercase', color: 'var(--fg-dim)',
              opacity: active ? 1 : 0,
              transition: 'opacity 240ms'
            }}>{String(i+1).padStart(2,'0')} · {s}</span>
            <span style={{
              width: active ? 22 : 12, height: 1,
              background: active ? 'var(--teal)' : 'var(--line)',
              transition: 'width 240ms, background 240ms',
              boxShadow: active ? '0 0 8px var(--teal)' : 'none'
            }}></span>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line-soft)',
      padding: '36px 56px 28px',
      color: 'var(--fg-dim)'
    }}>
      <style>{`
        .footer-social-wrap {
          display: inline-flex; flex-direction: column;
          align-items: center; gap: 6px;
          text-decoration: none;
        }
        .footer-social-label {
          font-family: var(--f-mono);
          font-size: 9.5px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--fg-faint);
          transition: color 240ms ease;
        }
        .footer-social-wrap:hover .footer-social-label { color: var(--teal); }
        .footer-social {
          position: relative;
          width: 38px; height: 38px;
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--fg-faint);
          clip-path: polygon(9px 0, calc(100% - 9px) 0, 100% 9px, 100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px), 0 9px);
          background:
            linear-gradient(135deg, rgba(94,234,212,0.03), rgba(94,234,212,0)) padding-box,
            linear-gradient(135deg, rgba(94,234,212,0.28), rgba(94,234,212,0.05)) border-box;
          border: 1px solid transparent;
          transition: color 240ms ease, background 240ms ease, transform 240ms ease, box-shadow 240ms ease;
        }
        .footer-social svg { width: 16px; height: 16px; display: block; }
        .footer-social:hover {
          color: var(--teal);
          transform: translateY(-1px);
          background:
            linear-gradient(135deg, rgba(94,234,212,0.10), rgba(94,234,212,0.02)) padding-box,
            linear-gradient(135deg, var(--teal), rgba(94,234,212,0.25)) border-box;
          box-shadow: 0 0 16px -4px rgba(94,234,212,0.4);
        }
      `}</style>

      {/* top row: brand + social */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap', marginBottom: 28
      }}>
        <div className="nav-brand" style={{ fontSize: 18 }}>
          <span className="dot"></span>
          <span>Ayen</span>
        </div>

        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <a className="footer-social-wrap" href="mailto:ayenchongdesign.studio@gmail.com" aria-label="Email">
            <span className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                <rect x="3" y="5" width="18" height="14"/>
                <polyline points="3 7 12 13 21 7"/>
              </svg>
            </span>
            <span className="footer-social-label">Gmail</span>
          </a>
          <a className="footer-social-wrap" href="https://www.instagram.com/ayenchong.exe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                <rect x="3" y="3" width="18" height="18" rx="0"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
              </svg>
            </span>
            <span className="footer-social-label">Instagram</span>
          </a>
          <a className="footer-social-wrap" href="https://www.facebook.com/ayenchong.design/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <span className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                <path d="M15 4h-3a3 3 0 0 0-3 3v3H6v4h3v6h4v-6h3l1-4h-4V7a1 1 0 0 1 1-1h3V4z"/>
              </svg>
            </span>
            <span className="footer-social-label">Facebook</span>
          </a>
        </div>
      </div>

      {/* hairline divider */}
      <div style={{ height: 1, background: 'var(--line-soft)', marginBottom: 18 }}></div>

      {/* bottom row: copyright + tagline */}
      <div className="mono" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
        fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
        color: 'var(--fg-faint)'
      }}>
        <div>© 2026 Ayen Chong · All rights reserved</div>
        <div>Attention → Action</div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// BackToTop — floating button bottom-right, appears after 1 viewport scroll
// ─────────────────────────────────────────────────────────────────────────
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let raf = null;
    const update = () => {
      raf = null;
      setShow(window.scrollY > window.innerHeight);
    };
    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 24, right: 24,
        zIndex: 90,
        width: 48, height: 48,
        borderRadius: '50%',
        background: 'rgba(13,18,22,0.7)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--teal)',
        color: 'var(--teal)',
        fontFamily: 'var(--f-mono)',
        fontSize: 16, lineHeight: 1,
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 280ms ease, transform 320ms cubic-bezier(.2,.7,.1,1)',
        boxShadow: '0 0 24px -4px rgba(94,234,212,0.5), inset 0 0 0 1px rgba(94,234,212,0.15)'
      }}>↑</button>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// OperatorCursor — cinematic teal crosshair + corner brackets
//   replaces the native pointer on mouse devices
// ─────────────────────────────────────────────────────────────────────────
function OperatorCursor() {
  const dotRef    = useRef(null);
  const frameRef  = useRef(null);
  const labelRef  = useRef(null);
  const [hover, setHover]   = useState(false);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  // touch-only devices: no cursor (CSS already keeps native pointer untouched there)
  const isTouch = typeof window !== 'undefined' &&
    window.matchMedia && !window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (isTouch) return;

    let raf = null;
    const onMove = (e) => {
      const x = e.clientX, y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (dotRef.current)   dotRef.current.style.transform   = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        if (frameRef.current) frameRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        if (labelRef.current) labelRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        raf = null;
      });
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      const interactive = t.closest('a, button, [role="button"], .btn, [data-cursor-hover]');
      setHover(!!interactive);
    };
    const onDown  = () => setActive(true);
    const onUp    = () => setActive(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup',   onUp,   { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  if (isTouch) return null;

  const frameSize = hover ? 56 : 32;
  const bracketLen = 7;

  return (
    <React.Fragment>
      {/* center dot — exact pixel-perfect cursor position */}
      <div ref={dotRef} style={{
        position: 'fixed', left: 0, top: 0,
        width: active ? 4 : 6, height: active ? 4 : 6,
        borderRadius: '50%',
        background: 'var(--teal)',
        boxShadow: '0 0 8px var(--teal), 0 0 16px rgba(94,234,212,0.6)',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: hidden ? 0 : 1,
        transition: 'width 180ms ease, height 180ms ease, opacity 200ms',
        willChange: 'transform'
      }} />

      {/* viewfinder frame — crosshair + 4 corner brackets */}
      <div ref={frameRef} style={{
        position: 'fixed', left: 0, top: 0,
        width: frameSize, height: frameSize,
        pointerEvents: 'none',
        zIndex: 99998,
        opacity: hidden ? 0 : (hover ? 1 : 0.55),
        transition: 'width 260ms cubic-bezier(.2,.7,.1,1), height 260ms cubic-bezier(.2,.7,.1,1), opacity 220ms',
        willChange: 'transform'
      }}>
        {/* crosshair: horizontal + vertical hairlines (skip center for the dot) */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: '50%',
          height: 1, background: 'var(--teal)',
          transform: 'translateY(-50%)',
          opacity: 0.5
        }} />
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: '50%',
          width: 1, background: 'var(--teal)',
          transform: 'translateX(-50%)',
          opacity: 0.5
        }} />

        {/* 4 corner brackets */}
        <div style={{ position: 'absolute', top: 0, left: 0,
          width: bracketLen, height: bracketLen,
          borderTop: '1px solid var(--teal)', borderLeft: '1px solid var(--teal)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0,
          width: bracketLen, height: bracketLen,
          borderTop: '1px solid var(--teal)', borderRight: '1px solid var(--teal)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0,
          width: bracketLen, height: bracketLen,
          borderBottom: '1px solid var(--teal)', borderLeft: '1px solid var(--teal)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0,
          width: bracketLen, height: bracketLen,
          borderBottom: '1px solid var(--teal)', borderRight: '1px solid var(--teal)' }} />
      </div>

      {/* FOCUS label appears under crosshair when over interactive element */}
      <div ref={labelRef} style={{
        position: 'fixed', left: 0, top: 0,
        marginTop: 44, marginLeft: -32,
        width: 64, textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: hover && !hidden ? 1 : 0,
        transition: 'opacity 220ms',
        fontFamily: 'var(--f-mono)',
        fontSize: 9.5, color: 'var(--teal)',
        letterSpacing: '.28em', textTransform: 'uppercase',
        textShadow: '0 0 6px rgba(94,234,212,0.6)',
        willChange: 'transform'
      }}>
        Focus
      </div>
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  // WeChat (X5 webview) blocks <video autoplay> even when muted.
  // Force play on first touch / click, and listen for WeChat's
  // WeixinJSBridgeReady event which fires when the in-app browser is ready.
  useEffect(() => {
    const playAll = () => {
      document.querySelectorAll('video').forEach((v) => {
        const p = v.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      });
    };

    // try immediately (works in normal browsers)
    playAll();

    // WeChat-specific bridge ready event
    const onBridgeReady = () => playAll();
    if (typeof window.WeixinJSBridge !== 'undefined') {
      playAll();
    } else {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }

    // any user interaction unlocks autoplay on most mobile browsers
    const onceOpts = { once: true, passive: true };
    document.addEventListener('touchstart', playAll, onceOpts);
    document.addEventListener('touchend',   playAll, onceOpts);
    document.addEventListener('click',      playAll, onceOpts);

    return () => {
      document.removeEventListener('WeixinJSBridgeReady', onBridgeReady);
      document.removeEventListener('touchstart', playAll);
      document.removeEventListener('touchend',   playAll);
      document.removeEventListener('click',      playAll);
    };
  }, []);

  // apply tweak side-effects
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--teal',
      t.accent === 'green' ? 'oklch(0.92 0.20 145)' :
      t.accent === 'amber' ? 'oklch(0.86 0.16 80)'  :
      t.accent === 'magenta' ? 'oklch(0.78 0.20 340)' :
      'oklch(0.86 0.16 180)'
    );
    document.querySelector('.grain').style.display = t.grainOn ? 'block' : 'none';
    document.querySelector('.scanlines').style.display = t.scanlinesOn ? 'block' : 'none';
  }, [t.accent, t.grainOn, t.scanlinesOn]);

  return (
    <React.Fragment>
      <OperatorCursor />
      <BackToTop />
      <Nav />
      <ProgressRail />

      <main>
        <Hero       videoOn={t.videoOn} />
        <Problem    />
        <Leak       />
        <Diagnosis  />
        <Belief     />
        <System     />
        <Work       />
        <About      />
        <Contact    />
      </main>

      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Atmosphere" />
        <TweakRadio  label="Accent" value={t.accent}
                     options={['teal','green','amber','magenta']}
                     onChange={(v) => setTweak('accent', v)} />
        <TweakToggle label="Hero video"     value={t.videoOn}
                     onChange={(v) => setTweak('videoOn', v)} />
        <TweakToggle label="Film grain"     value={t.grainOn}
                     onChange={(v) => setTweak('grainOn', v)} />
        <TweakToggle label="Scanlines"      value={t.scanlinesOn}
                     onChange={(v) => setTweak('scanlinesOn', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
