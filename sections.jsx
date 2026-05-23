/* global React */
// ─────────────────────────────────────────────────────────────────────────
// SECTION 1 — HERO   (fullscreen video, copy bottom-left)
// ─────────────────────────────────────────────────────────────────────────
function Hero({ videoOn }) {
  return (
    <section style={{
      position: 'relative', height: '100svh', minHeight: 680,
      width: '100%', overflow: 'hidden',
      background: 'var(--bg-2)'
    }}>
      {/* video bg */}
      {videoOn && (
        <video
          autoPlay muted loop playsInline preload="metadata"
          poster="assets/hero-poster.jpg"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: .55,
            filter: 'saturate(1.1) contrast(1.05) hue-rotate(-6deg)'
          }}>
          <source src="assets/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* gradient veil */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(8,12,14,.45) 0%, rgba(8,12,14,.25) 30%, rgba(8,12,14,.7) 70%, var(--bg) 100%)'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(94,234,212,0.08), transparent 60%)',
        mixBlendMode: 'screen'
      }} />

      {/* corner brackets */}
      <Brackets />

      {/* main copy bottom-left */}
      <div className="container" style={{
        position: 'absolute', bottom: '8vh', left: 0, right: 0, zIndex: 4
      }}>
        <div style={{ maxWidth: '78%' }}>
          <div className="eyebrow" data-reveal data-hero-eyebrow style={{ marginBottom: 24 }}>
            Ayen — Operator&apos;s Portfolio / 2026
          </div>
          <h1 data-reveal style={{
            margin: '0 0 28px', maxWidth: '20ch',
            fontFamily: 'var(--f-display)', fontWeight: 400,
            fontSize: 'clamp(38px, 4.4vw, 68px)',
            lineHeight: 1, letterSpacing: '-0.035em'
          }}>
            Attention<br/>
            <span className="serif" style={{ color: 'var(--teal)' }}>Means nothing</span><br/>
            without action.
          </h1>
          <p className="body-l" data-reveal style={{ '--rd': '120ms', marginBottom: 36, maxWidth: '46ch' }}>
            I design landing pages that help people look clearer,
            feel more trustworthy, and guide visitors toward action.
          </p>
          <div data-reveal style={{ '--rd': '220ms', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }} className="hero-cta-row">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s Talk <span className="arrow"></span>
            </a>
            <a className="btn btn-ghost" href="#work">
              View Work
            </a>
          </div>
          <div className="mono" data-reveal style={{
            '--rd': '340ms', marginTop: 28, fontSize: 11, letterSpacing: '.18em',
            color: 'var(--fg-faint)', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px 10px'
          }}>
            <span style={{ width: 16, height: 1, background: 'var(--line)' }}></span>
            <span style={{ whiteSpace: 'nowrap' }}>Landing Page Design</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span style={{ whiteSpace: 'nowrap' }}>Conversion Flow</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span style={{ whiteSpace: 'nowrap' }}>Funnel Strategy</span>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero-scroll-hint" style={{
        position: 'absolute', bottom: 26, left: '50%',
        transform: 'translateX(-50%)', zIndex: 4,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        color: 'var(--fg-faint)'
      }}>
        <span style={{ fontSize: 10, letterSpacing: '.22em' }}>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--teal), transparent)',
          position: 'relative'
        }}>
          <span style={{
            position: 'absolute', left: '-2px', top: 0,
            width: 5, height: 5, background: 'var(--teal)',
            borderRadius: '50%', animation: 'drift 2.2s ease-in-out infinite',
            boxShadow: '0 0 10px var(--teal)'
          }}></span>
        </div>
      </div>
    </section>
  );
}

function Brackets() {
  const c = { color: 'var(--teal)', position: 'absolute', width: 28, height: 28, zIndex: 5 };
  return (
    <React.Fragment>
      <div className="hero-corner left"  data-pos="top"    style={{ ...c, top: 88, left: 56,
        borderTop: '1px solid', borderLeft: '1px solid' }} />
      <div className="hero-corner right" data-pos="top"    style={{ ...c, top: 88, right: 56,
        borderTop: '1px solid', borderRight: '1px solid' }} />
      <div className="hero-corner left"  data-pos="bottom" style={{ ...c, bottom: 88, left: 56,
        borderBottom: '1px solid', borderLeft: '1px solid' }} />
      <div className="hero-corner right" data-pos="bottom" style={{ ...c, bottom: 88, right: 56,
        borderBottom: '1px solid', borderRight: '1px solid' }} />
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 2 — PROBLEM   (vertical storytelling, drop-off vibe)
// ─────────────────────────────────────────────────────────────────────────
function Problem() {
  const steps = [
    { l: 'People see your content',  v: 1.0  },
    { l: 'They click your link',      v: 0.72 },
    { l: 'They visit your page',      v: 0.41 },
    { l: 'They leave',                v: 0.08 }
  ];
  return (
    <section className="pad-y-xl" style={{ position: 'relative' }}>
      <div className="container">
        <div className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vw, 60px)' }}>
          02 — The Problem
        </div>

        <div className="rgrid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          columnGap: 80,
          alignItems: 'start'
        }}>
          {/* LEFT — setup → punchline → soft truth (whisper) */}
          <div>
            <h2 data-reveal style={{
              margin: 0, maxWidth: '18ch',
              fontFamily: 'var(--f-display)', fontWeight: 400,
              fontSize: 'clamp(36px, 5.4vw, 84px)',
              lineHeight: 1, letterSpacing: '-0.04em'
            }}>
              You may already have <span className="serif" style={{ color: 'var(--teal)' }}>Attention.</span>
            </h2>

            <div data-reveal data-punchline-line style={{
              '--rd': '220ms',
              marginTop: 'clamp(28px, 3vw, 40px)',
              fontFamily: 'var(--f-display)', fontWeight: 400,
              fontSize: 'clamp(26px, 2.4vw, 38px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: 'var(--fg)',
              whiteSpace: 'nowrap'
            }}>
              But attention alone <span data-punchline-second style={{
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '6px'
              }}>does not pay.</span>
            </div>

            <div className="serif" data-reveal style={{
              '--rd': '340ms',
              marginTop: 28,
              fontSize: 'clamp(17px, 1.4vw, 22px)',
              lineHeight: 1.4, color: 'var(--fg-faint)',
              maxWidth: '32ch',
              fontStyle: 'italic'
            }}>
              Not because your offer is bad.<br/>
              But because the experience <span style={{ color: 'var(--teal)' }}>feels unclear.</span>
            </div>
          </div>

          {/* RIGHT — drop-off list with progress bars + percentages */}
          <div data-reveal style={{ '--rd': '180ms', paddingTop: 18 }}>
            <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {steps.map((s, i) => (
                <li key={s.l} style={{
                  position: 'relative',
                  borderTop: '1px solid var(--line-soft)',
                  padding: '24px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  opacity: 0.25 + s.v * 0.75
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span className="mono" style={{
                      fontSize: 11, color: 'var(--fg-faint)',
                      letterSpacing: '.18em'
                    }}>0{i+1}</span>
                    <span style={{
                      fontSize: 'clamp(20px, 1.8vw, 26px)',
                      letterSpacing: '-0.02em',
                      color: i === steps.length - 1 ? 'var(--red)' : 'var(--fg)'
                    }}>
                      {s.l}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 120, height: 1,
                      background: 'var(--line-soft)',
                      position: 'relative', overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: `${s.v * 100}%`,
                        background: i === steps.length - 1
                          ? 'linear-gradient(to right, var(--red), transparent)'
                          : 'linear-gradient(to right, var(--teal), transparent)',
                        boxShadow: i === steps.length - 1
                          ? '0 0 14px var(--red)'
                          : '0 0 14px var(--teal)'
                      }}></div>
                    </div>
                    <span className="mono" style={{
                      fontSize: 11, color: 'var(--fg-faint)',
                      minWidth: 40, textAlign: 'right'
                    }}>
                      {(s.v * 100).toFixed(0)}%
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 3 — THE LEAK   (fullscreen funnel video, zero text)
// ─────────────────────────────────────────────────────────────────────────
function Leak() {
  const sectionRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  // lazy-load funnel video only when section is about to enter viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setLoadVideo(true);
          obs.disconnect();
        }
      });
    }, { rootMargin: '400px 0px' });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-funnel-section style={{
      position: 'relative', height: '100svh', minHeight: 600,
      width: '100%', overflow: 'hidden',
      background: 'var(--bg)'
    }}>
      {loadVideo && (
        <video
          autoPlay muted loop playsInline preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}>
          <source src="assets/funnel.mp4" type="video/mp4" />
        </video>
      )}

      {/* top + bottom fade for smooth transition into/out of neighbouring sections */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, var(--bg) 0%, transparent 14%, transparent 86%, var(--bg) 100%)'
      }}></div>

      {/* funnel stage labels — track the video's color decay (teal → amber → red) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2
      }}>
        {[
          { l: 'Interested', y: '39%',   c: 'var(--teal)'  },
          { l: 'Confused',   y: '59%',   c: 'var(--teal)'  },
          { l: 'Hesitant',   y: '75.5%', c: 'var(--amber)' },
          { l: 'Gone',       y: '87.5%', c: 'var(--red)'   }
        ].map((s) => (
          <div key={s.l} className="mono" data-funnel-label={s.l} style={{
            position: 'absolute',
            top: s.y, left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(11px, 1.3vw, 16px)',
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: s.c,
            textShadow: `0 0 12px ${s.c}`,
            opacity: 0.85,
            whiteSpace: 'nowrap'
          }}>{s.l}</div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 4 — DIAGNOSIS   (floating glass cards, asymmetric)
// ─────────────────────────────────────────────────────────────────────────
function Diagnosis() {
  const cards = [
    { n: '01', t: 'Unclear message',
      d: 'Visitors leave within 5 seconds because they cannot decide what the page is about.',
      tx: '+ message → ambiguous', col: 1, row: 1, span: 1 },
    { n: '02', t: 'Weak flow',
      d: 'Sections do not build on each other. Trust resets between every block.',
      tx: '+ flow → no narrative', col: 2, row: 1, span: 1 },
    { n: '03', t: 'Generic copy',
      d: 'Copy could describe any business. Nothing belongs only to you.',
      tx: '+ copy → interchangeable', col: 3, row: 1, span: 1 },
    { n: '04', t: 'Weak CTA',
      d: 'The action lacks weight, context, or a reason to choose now over later.',
      tx: '+ cta → unanchored', col: 1, row: 2, span: 2 },
    { n: '05', t: 'No follow-up path',
      d: 'A page that ends is a page that forgets you. Nothing carries the relationship forward.',
      tx: '+ retention → none', col: 3, row: 2, span: 1 }
  ];
  return (
    <section className="pad-y-xl" id="approach">
      <div className="container">
        <div className="rgrid" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60,
          alignItems: 'end', marginBottom: 80
        }}>
          <div>
            <div className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vw, 60px)' }}>04 — Diagnosis</div>
            <h2 className="display-lg" data-reveal style={{ margin: 0 }}>
              The same five symptoms,<br/>
              over <span className="serif" style={{ color: 'var(--teal)' }}>And over.</span>
            </h2>
          </div>
          <div data-reveal style={{ '--rd': '120ms', position: 'relative' }}>
            <span className="serif" aria-hidden="true" data-pullquote-mark style={{
              position: 'absolute',
              top: '-0.55em', left: '-0.18em',
              fontSize: 'clamp(72px, 7vw, 120px)',
              lineHeight: 1, color: 'var(--teal)',
              fontStyle: 'italic', pointerEvents: 'none',
              textShadow: '0 0 24px rgba(94,234,212,0.25)'
            }}>&ldquo;</span>
            <p className="body-l" style={{ margin: 0, position: 'relative' }}>
              When I audit a struggling page, the cause is rarely creative.
              It is structural. Below is the pattern I find inside ~80% of
              the work I review.
            </p>
          </div>
        </div>

        <div className="rgrid-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '1fr', gap: 18,
          minHeight: 540
        }}>
          {cards.map((c, i) => (
            <div key={c.n}
              data-reveal
              style={{
                '--rd': `${i * 80}ms`,
                gridColumn: `${c.col} / span ${c.span}`,
                gridRow: c.row
              }}
              className="diag-card">
              <DiagCard {...c} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .diag-card { height: 100%; }
      `}</style>
    </section>
  );
}

function DiagCard({ n, t, d, tx }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="glass"
      style={{
        position: 'relative', height: '100%',
        padding: 28, display: 'flex', flexDirection: 'column',
        gap: 14, overflow: 'hidden',
        borderColor: hover ? 'rgba(94,234,212,0.45)' : 'var(--glass-bd)',
        boxShadow: hover
          ? '0 0 40px -10px rgba(94,234,212,0.4), inset 0 0 30px -10px rgba(94,234,212,0.2)'
          : 'none',
        transition: 'all 360ms cubic-bezier(.2,.7,.1,1)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)'
      }}
    >
      {/* spotlight on hover */}
      {hover && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(94,234,212,0.10), transparent 60%)',
          pointerEvents: 'none'
        }}></div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: '.22em',
          color: hover ? 'var(--teal)' : 'var(--fg-faint)',
          transition: 'color 220ms'
        }}>{n}</span>
        <span className="mono" style={{
          fontSize: 10, color: 'var(--fg-faint)',
          opacity: hover ? 1 : 0.5,
          transition: 'opacity 220ms'
        }}>FLAG</span>
      </div>
      <div style={{
        fontSize: 'clamp(22px, 1.8vw, 28px)',
        letterSpacing: '-0.025em',
        lineHeight: 1.15
      }}>{t}</div>
      <p style={{
        margin: '6px 0 0', color: 'var(--fg-dim)',
        fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.55, maxWidth: '36ch'
      }}>{d}</p>
      <div style={{ flex: 1 }} />
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '.14em',
        color: hover ? 'var(--teal)' : 'var(--fg-faint)',
        borderTop: '1px solid var(--line-soft)',
        paddingTop: 14,
        transition: 'color 240ms'
      }}>{tx}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 5 — CORE BELIEF   (poster, huge type, fullscreen feel)
// ─────────────────────────────────────────────────────────────────────────
function Belief() {
  return (
    <section className="pad-y-xl" style={{
      minHeight: '100svh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 50%, var(--bg) 100%)'
    }}>
      {/* faint glow halo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(94,234,212,0.06), transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative' }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vw, 60px)' }}>05 — Core Belief</div>

        {/* setup — single statement, dim */}
        <div data-reveal style={{
          '--rd': '80ms',
          fontFamily: 'var(--f-display)', fontWeight: 400,
          fontSize: 'clamp(22px, 2.4vw, 40px)',
          lineHeight: 1.15, letterSpacing: '-0.025em',
          color: 'var(--fg-dim)',
          maxWidth: '40ch',
          marginBottom: 36
        }}>
          A landing page is not just <span className="serif" style={{ color: 'var(--fg-faint)' }}>design.</span>
        </div>

        {/* hairline divider — leads the eye to the punchline */}
        <div data-reveal style={{
          '--rd': '160ms',
          width: '100%', height: 1,
          background: 'linear-gradient(to right, var(--teal), transparent 65%)',
          opacity: 0.55,
          marginBottom: 'clamp(40px, 5vw, 72px)'
        }}></div>

        {/* punchline — huge horizontal banner, full container width */}
        <h2 data-reveal style={{
          '--rd': '240ms',
          margin: 0,
          fontFamily: 'var(--f-display)', fontWeight: 400,
          fontSize: 'clamp(56px, 10.5vw, 156px)',
          lineHeight: 1, letterSpacing: '-0.05em'
        }}>
          <span className="shimmer">Sales Conversation.</span>
        </h2>

        {/* 2-col below: left = 4 questions, right = ending */}
        <div className="rgrid" style={{
          marginTop: 'clamp(100px, 13vw, 180px)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'start'
        }}>
          {/* LEFT — 4 questions */}
          <div data-reveal style={{ '--rd': '120ms' }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '.18em',
              textTransform: 'uppercase', color: 'var(--teal)',
              marginBottom: 28
            }}>// the four questions a page must answer</div>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: 14
            }}>
              {['Who are you?', 'Can you help me?', 'Why should I trust you?', 'What should I do next?'].map((q, i) => (
                <li key={q} className="serif" style={{
                  fontSize: 'clamp(26px, 2.6vw, 40px)',
                  lineHeight: 1.15, color: 'var(--fg)',
                  letterSpacing: '-0.02em',
                  display: 'flex', alignItems: 'baseline', gap: 18
                }}>
                  <span className="mono" style={{
                    fontSize: 11, color: 'var(--teal)',
                    fontStyle: 'normal', letterSpacing: '.18em',
                    minWidth: 26
                  }}>{String(i+1).padStart(2, '0')}</span>
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — ending statement, framed as a pulled quote */}
          <div data-reveal style={{
            '--rd': '320ms',
            position: 'relative',
            paddingTop: 'clamp(48px, 5vw, 88px)'
          }}>
            {/* big teal opening quote — hangs above the statement */}
            <span className="serif" aria-hidden="true" style={{
              position: 'absolute',
              top: 0, left: '-0.1em',
              fontSize: 'clamp(96px, 10vw, 168px)',
              lineHeight: 0.8, color: 'var(--teal)',
              fontStyle: 'italic', pointerEvents: 'none',
              textShadow: '0 0 28px rgba(94,234,212,0.28)'
            }}>&ldquo;</span>

            <div style={{
              fontFamily: 'var(--f-display)', fontWeight: 400,
              fontSize: 'clamp(28px, 3.2vw, 52px)',
              lineHeight: 1.15, letterSpacing: '-0.03em',
              color: 'var(--fg)',
              maxWidth: '18ch',
              position: 'relative'
            }}>
              When things feel <span className="serif" style={{ color: 'var(--teal)' }}>Clear,</span><br/>
              people move <span className="serif" style={{ color: 'var(--teal)' }}>Faster.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 6 — WHAT I DO   (holographic system map)
// ─────────────────────────────────────────────────────────────────────────
function System() {
  const nodes = [
    { l: 'Traffic',        d: 'social, ads, search',     k: 'in'   },
    { l: 'Landing Page',   d: 'first impression',         k: 'core' },
    { l: 'Trust',          d: 'proof + transparency',     k: 'mid'  },
    { l: 'Lead',           d: 'qualified intent',         k: 'mid'  },
    { l: 'Follow Up',      d: 'sequence + nurture',       k: 'mid'  },
    { l: 'Sale',           d: 'value exchanged',          k: 'out'  }
  ];
  return (
    <section className="pad-y-xl" style={{
      position: 'relative',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--line-soft)',
      borderBottom: '1px solid var(--line-soft)',
      overflow: 'hidden'
    }}>
      {/* blueprint grid */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(rgba(94,234,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(94,234,212,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent 80%)'
      }}></div>

      <style>{`
        @keyframes travel-down-pulse {
          0%   { top: 0;                opacity: 0; }
          10%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: calc(100% - 9px); opacity: 0; }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* eyebrow — centered */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 60px)' }}>
          <div className="eyebrow" data-reveal>
            06 — What I Actually Do
          </div>
        </div>

        {/* title — centered */}
        <h2 data-reveal style={{
          '--rd': '80ms',
          margin: '0 auto 96px', maxWidth: '20ch',
          textAlign: 'center',
          fontFamily: 'var(--f-display)', fontWeight: 400,
          fontSize: 'clamp(36px, 5.4vw, 88px)',
          lineHeight: 1, letterSpacing: '-0.04em'
        }}>
          I design <span className="serif" style={{ color: 'var(--teal)' }}>The path</span> from
          <br/>Attention to Action
        </h2>

        {/* TWO-COLUMN: system map (left) + stack (right) */}
        <div className="rgrid" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr',
          gap: 80, alignItems: 'stretch'
        }}>
          {/* LEFT — vertical system map, Landing Page is the protagonist */}
          <div data-reveal style={{
            '--rd': '180ms',
            position: 'relative',
            maxWidth: 720
          }}>
            {/* central vertical line connecting all nodes */}
            <div style={{
              position: 'absolute',
              left: 116, top: 40, bottom: 40,
              width: 1,
              background: 'linear-gradient(180deg, transparent, var(--teal) 12%, var(--teal) 88%, transparent)',
              opacity: 0.45,
              boxShadow: '0 0 8px var(--teal)'
            }}></div>

            {/* traveling pulse — attention flowing from top to bottom */}
            <div style={{
              position: 'absolute',
              left: 112, top: 40, bottom: 40,
              width: 9, pointerEvents: 'none'
            }}>
              <div style={{
                position: 'absolute',
                width: 9, height: 9, borderRadius: '50%',
                background: 'var(--teal)',
                boxShadow: '0 0 16px var(--teal), 0 0 32px var(--teal)',
                animation: 'travel-down-pulse 5s ease-in-out infinite'
              }}></div>
            </div>

            {nodes.map((n, i) => <SystemRow key={n.l} {...n} i={i} total={nodes.length} />)}
          </div>

          {/* RIGHT — stack list, items distribute to match system map height */}
          <div data-reveal style={{
            '--rd': '320ms',
            display: 'flex', flexDirection: 'column'
          }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--fg-faint)', marginBottom: 18
            }}>// the stack</div>
            <ul style={{
              flex: 1,
              listStyle: 'none', padding: 0, margin: 0,
              display: 'grid', gridTemplateRows: 'repeat(5, 1fr)',
              borderTop: '1px solid var(--line-soft)'
            }}>
              {[
                ['Messaging', 'positioning, hierarchy, hook'],
                ['Structure', 'sections, sequence, rhythm'],
                ['Trust',     'proof, signals, transparency'],
                ['Action',    'CTAs, friction, momentum'],
                ['Follow-up', 'email, retargeting, retention']
              ].map(([k, v]) => (
                <li key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16,
                  borderBottom: '1px solid var(--line-soft)',
                  padding: '14px 0'
                }}>
                  <span style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', flexShrink: 0 }}>{k}</span>
                  <span className="mono" style={{
                    fontSize: 12, color: 'var(--fg-dim)',
                    textAlign: 'right',
                    minWidth: 0,
                    wordBreak: 'break-word'
                  }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* centered closing paragraph */}
        <p data-reveal style={{
          '--rd': '480ms',
          margin: 'clamp(80px, 10vw, 120px) auto 0',
          maxWidth: '58ch',
          fontSize: 'clamp(22px, 2.2vw, 34px)',
          lineHeight: 1.4, letterSpacing: '-0.02em',
          color: 'var(--fg)',
          textAlign: 'center'
        }}>
          Not just <span style={{ color: 'var(--fg-faint)' }}>how the page looks.</span><br/>
          But what people <span style={{ color: 'var(--teal)' }}>understand</span>,<br/>
          what they <span style={{ color: 'var(--teal)' }}>trust</span>, and what they <span style={{ color: 'var(--teal)' }}>do next.</span>
        </p>
      </div>
    </section>
  );
}

// kept for rollback safety — no longer rendered
function SystemNode({ l, d, k, i, total }) {
  const isCore = k === 'core';
  const isOut  = k === 'out';
  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
      flex: 1, minWidth: 0
    }}>
      <div style={{
        position: 'relative',
        width: isCore ? 64 : 44, height: isCore ? 64 : 44,
        borderRadius: '50%',
        background: isCore ? 'rgba(94,234,212,0.12)' : 'transparent',
        border: `1px solid ${isOut ? 'var(--green)' : 'var(--teal)'}`,
        boxShadow: isCore
          ? '0 0 40px -2px rgba(94,234,212,0.55), inset 0 0 16px rgba(94,234,212,0.3)'
          : `0 0 18px -4px ${isOut ? 'var(--green)' : 'var(--teal)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: isCore ? 'pulse 3s ease-in-out infinite' : 'none'
      }}>
        <span className="mono" style={{
          fontSize: isCore ? 11 : 10,
          color: isOut ? 'var(--green)' : 'var(--teal)',
          letterSpacing: '.1em'
        }}>{String(i+1).padStart(2,'0')}</span>
      </div>
      <div style={{
        fontSize: isCore ? 16 : 14,
        letterSpacing: '-0.01em',
        color: isCore ? 'var(--fg)' : 'var(--fg-dim)',
        textAlign: 'center'
      }}>{l}</div>
      <div className="mono" style={{
        fontSize: 10, color: 'var(--fg-faint)',
        letterSpacing: '.1em', textAlign: 'center',
        maxWidth: 90, lineHeight: 1.4
      }}>{d}</div>
    </div>
  );
}

function SystemRow({ l, d, k, i, total }) {
  const isCore = k === 'core';
  const isOut  = k === 'out';
  const ring   = isOut ? 'var(--green)' : 'var(--teal)';
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60px 80px 1fr',
      gap: 16,
      alignItems: 'center',
      minHeight: isCore ? 120 : 80,
      position: 'relative',
      zIndex: 2
    }}>
      {/* mono number */}
      <span className="mono" style={{
        fontSize: 11,
        color: isCore ? 'var(--teal)' : 'var(--fg-faint)',
        letterSpacing: '.18em',
        textAlign: 'right'
      }}>{String(i+1).padStart(2, '0')}</span>

      {/* circle node — Landing Page is BIG */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: isCore ? 60 : 28,
          height: isCore ? 60 : 28,
          borderRadius: '50%',
          background: isCore ? 'rgba(94,234,212,0.22)' : 'var(--bg-2)',
          border: `1px solid ${ring}`,
          boxShadow: isCore
            ? '0 0 56px var(--teal), 0 0 0 8px rgba(94,234,212,0.07), inset 0 0 22px rgba(94,234,212,0.45)'
            : `0 0 12px ${isOut ? 'var(--green)' : 'rgba(94,234,212,0.5)'}`,
          animation: isCore ? 'pulse 3s ease-in-out infinite' : 'none'
        }}></div>
      </div>

      {/* label + caption */}
      <div>
        <div style={{
          fontSize: isCore ? 'clamp(24px, 2.4vw, 34px)' : 'clamp(17px, 1.4vw, 21px)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          color: 'var(--fg)', marginBottom: 4,
          display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap'
        }}>
          {l}
          {isCore && (
            <span className="mono" style={{
              fontSize: 10, color: 'var(--teal)',
              letterSpacing: '.18em', textTransform: 'uppercase'
            }}>// core</span>
          )}
        </div>
        <div className="mono" style={{
          fontSize: 11,
          color: isCore ? 'var(--fg-dim)' : 'var(--fg-faint)',
          letterSpacing: '.14em'
        }}>{d}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 8 — ABOUT   (editorial)
// ─────────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="pad-y-xl" id="about">
      <div className="container">
        <div className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vw, 60px)' }}>08 — About</div>

        <div className="rgrid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: 80, alignItems: 'stretch'
        }}>
          {/* portrait — labels & corners are baked into the image itself */}
          <div data-reveal>
            <div style={{
              aspectRatio: '2 / 3', width: '100%',
              position: 'relative', overflow: 'hidden',
              background: 'var(--bg-2)',
              borderRadius: 2,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px -30px rgba(0,0,0,0.7)'
            }}>
              <img
                src="assets/portrait.jpg"
                alt="Ayen — portrait"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* cinematic teal scan sweep — kept as subtle overlay */}
              <div style={{
                position: 'absolute', left: 0, right: 0,
                height: 60, top: '-60px',
                background: 'linear-gradient(to bottom, transparent, rgba(94,234,212,0.12), transparent)',
                animation: 'scan 5s linear infinite',
                pointerEvents: 'none',
                mixBlendMode: 'screen'
              }}></div>
            </div>
          </div>

          {/* body — flex column so photo can fill remaining space and bottom-align with left portrait */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h2 className="display-lg" data-reveal style={{ margin: '0 0 32px', maxWidth: '20ch' }}>
              I design pages that help people <span className="serif" style={{ color: 'var(--teal)' }}>Understand.</span>
            </h2>

            <div data-reveal style={{ '--rd': '120ms' }}>
              <p style={{
                fontSize: 'clamp(18px, 1.4vw, 22px)',
                lineHeight: 1.55, color: 'var(--fg-dim)',
                maxWidth: '50ch', margin: '0 0 16px'
              }}>
                I study how businesses get attention,
                build trust, and guide people toward action.
              </p>
              <p style={{
                fontSize: 'clamp(18px, 1.4vw, 22px)',
                lineHeight: 1.55, color: 'var(--fg-dim)',
                maxWidth: '50ch', margin: '0 0 16px'
              }}>
                That is how I approach landing pages.
              </p>
              <p style={{
                fontSize: 'clamp(20px, 1.6vw, 26px)',
                lineHeight: 1.4, color: 'var(--fg)',
                maxWidth: '40ch', margin: '0 0 28px',
                letterSpacing: '-0.015em'
              }}>
                Not just <span style={{ color: 'var(--fg-faint)' }}>visually.</span>{' '}
                <span className="serif" style={{ color: 'var(--teal)' }}>Strategically.</span>
              </p>
            </div>

            {/* second portrait — fills remaining space, bottom-aligns with left portrait */}
            <div data-reveal data-about-photo style={{
              '--rd': '260ms',
              flex: 1,
              minHeight: 200,
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              background: 'transparent',
              borderRadius: 2
            }}>
              <img
                src="assets/about-photo.png"
                alt="Ayen — second portrait"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              {/* subtle teal scan overlay (matches the main portrait) */}
              <div style={{
                position: 'absolute', left: 0, right: 0,
                height: 60, top: '-60px',
                background: 'linear-gradient(to bottom, transparent, rgba(94,234,212,0.10), transparent)',
                animation: 'scan 6s linear infinite',
                pointerEvents: 'none',
                mixBlendMode: 'screen'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECTION 9 — CONTACT / FINAL CTA   (ambient glow, huge negative space)
// ─────────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="pad-y-xl" style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* ambient glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(94,234,212,0.10), transparent 65%)'
      }}></div>

      {/* dust particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 16 }).map((_, i) => {
          const x = (i * 53 + 17) % 100;
          const y = (i * 71 + 23) % 100;
          const d = 2 + ((i * 13) % 4);
          return (
            <span key={i} style={{
              position: 'absolute', left: `${x}%`, top: `${y}%`,
              width: d, height: d, borderRadius: '50%',
              background: 'var(--teal)',
              boxShadow: '0 0 8px var(--teal)',
              opacity: 0.25 + (i % 5) * 0.1,
              animation: `drift ${4 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.18}s`
            }}></span>
          );
        })}
      </div>

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="eyebrow" data-reveal style={{
          marginBottom: 'clamp(32px, 5vw, 60px)', justifyContent: 'center', display: 'inline-flex'
        }}>09 — From here, action</div>

        <h2 data-reveal style={{
          margin: '0 auto', maxWidth: '18ch',
          textAlign: 'center',
          fontFamily: 'var(--f-display)', fontWeight: 400,
          fontSize: 'clamp(60px, 8.8vw, 148px)',
          lineHeight: 0.92, letterSpacing: '-0.045em'
        }}>
          Clarity changes <br/>how people <span className="serif" style={{ color: 'var(--teal)' }}>Respond.</span>
        </h2>

        <div data-reveal style={{ '--rd': '180ms', marginTop: 80 }}>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap',
            fontSize: 'clamp(26px, 2vw, 32px)', color: 'var(--fg-dim)'
          }}>
            <li>Clear <span className="serif" style={{ color: 'var(--teal)' }}>Message.</span></li>
            <li>Clear <span className="serif" style={{ color: 'var(--teal)' }}>Trust.</span></li>
            <li>Clear <span className="serif" style={{ color: 'var(--teal)' }}>Direction.</span></li>
          </ul>
        </div>

        <p className="serif" data-reveal style={{
          '--rd': '320ms',
          marginTop: 80,
          fontSize: 'clamp(24px, 2.4vw, 38px)',
          color: 'var(--fg-dim)', letterSpacing: '-0.01em'
        }}>
          That is what good pages do.
        </p>

        <div data-reveal style={{
          '--rd': '460ms',
          marginTop: 80,
          display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', alignItems: 'center'
        }}>
          <a className="btn btn-primary" href="mailto:ayenchongdesign.studio@gmail.com">
            Let&apos;s Build Yours <span className="arrow"></span>
          </a>
          <a className="btn btn-ghost" href="#">Book a 30-min call</a>
        </div>

        <div data-reveal style={{
          '--rd': '600ms',
          marginTop: 80,
          fontFamily: 'var(--f-mono)', fontSize: 12,
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--fg-faint)'
        }}>
          ▌ From attention &nbsp;→&nbsp; to action
        </div>
      </div>
    </section>
  );
}
