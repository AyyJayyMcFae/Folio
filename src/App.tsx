import { useState, useEffect, useRef } from "react";

const ACCENT = "#8b7fea";
const ACCENT_LIGHT = "#a99ff0";

const projects = [
  {
    id: "genki",
    name: "Genki",
    type: "Streetwear Brand",
    url: "https://weargenki.vercel.app",
    description: "Full e-commerce storefront for an independent streetwear label. Editorial layout, lookbook, product system, wishlist, and community drop culture baked in.",
    vibe: "Clean. Editorial. Streetwear-cool.",
    palette: ["#0a0a0a", "#f5f0e8", "#c8ff00"],
    accent: "#c8ff00",
    image: "https://res.cloudinary.com/dzhvdoifb/image/upload/v1762066135/WtBAmJy_nidtmq.webp",
    tags: ["E-commerce", "Brand Identity", "Editorial"],
  },
  {
    id: "ironcrypt",
    name: "The Iron Crypt",
    type: "Gym / Community",
    url: "https://www.theironcrypt.com",
    description: "Site for Corpus Christi's only goth gym and the only strongman facility in the city. Community-first, heavy, local. Built to match the culture, not just the service.",
    vibe: "Dark. Heavy. Community-rooted.",
    palette: ["#0d0d0d", "#e8e8e8", "#8b0000"],
    accent: "#cc2222",
    image: "https://res.cloudinary.com/dzhvdoifb/image/upload/v1769291254/593295691_122152204736695687_5697479084198756290_n_jimzw2.jpg",
    tags: ["Local Business", "Community", "Brand Voice"],
  },
  {
    id: "coffeemugg",
    name: "The Coffee Mugg",
    type: "Café",
    url: "#",
    description: "Warm, inviting site for a local café. Rich dark palette with gold accents and serif typography — built to feel like the shop smells.",
    vibe: "Warm. Inviting. Lived-in.",
    palette: ["#150c01", "#f8f8f2", "#facc15"],
    accent: "#facc15",
    image: "https://scontent-hou1-1.xx.fbcdn.net/v/t51.82787-15/621105097_18309634543253961_8682417640756488365_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=iHwXL1EGAEgQ7kNvwEEQr7x&_nc_oc=AdkojZl5TGhzVYvbLz8tcbYHX1Kf7dPEatEfgNpcdH1ZhIgzK8pdg0tJUqdgWc8OpyZF9_AQcbPc1Pq0laJsBwaF&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=BohvxWsXefJdQjwcnCXx8g&_nc_ss=8&oh=00_AfzgJyCl2MLOeglTLZ_g9c3IVHbfcGSH3fx5xWbTHnVkng&oe=69B65FC1",
    tags: ["Local Business", "Hospitality", "Atmosphere"],
  },
];

const NAV_LINKS = ["Work", "About", "Contact"];

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section) => {
    const refs = { Work: workRef, About: aboutRef, Contact: contactRef };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      fontFamily: "'DM Serif Display', Georgia, serif",
      background: "#0e0e0e",
      color: "#f0ece4",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: ${ACCENT}; color: #fff; }

        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f0ece4;
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
          padding: 0;
        }
        .nav-link:hover { opacity: 1; }

        .hero-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${ACCENT_LIGHT};
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.6s ease;
        }
        .hero-tag.visible { opacity: 1; transform: translateY(0); }

        .hero-headline {
          font-size: clamp(3.5rem, 10vw, 9rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s ease 0.15s;
        }
        .hero-headline.visible { opacity: 1; transform: translateY(0); }

        .hero-sub {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.75rem, 1.5vw, 0.9rem);
          line-height: 1.7;
          color: #a09a90;
          max-width: 420px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s ease 0.3s;
        }
        .hero-sub.visible { opacity: 1; transform: translateY(0); }

        .scroll-line {
          opacity: 0;
          transition: opacity 0.6s ease 0.6s;
        }
        .scroll-line.visible { opacity: 1; }

        .card {
          border: 1px solid #222;
          border-radius: 2px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s ease;
          position: relative;
        }
        .card:hover { transform: translateY(-4px); }

        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.4s ease, transform 0.5s ease;
          opacity: 0.08;
          transform: scale(1.02);
        }
        .card:hover .card-bg {
          opacity: 0.18;
          transform: scale(1.06);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(14,14,14,0.5) 0%, rgba(14,14,14,0.85) 60%, rgba(14,14,14,0.97) 100%);
          pointer-events: none;
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        .tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
          border: 1px solid #333;
          color: #888;
        }

        .visit-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 20px;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 2rem;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: ${ACCENT};
          margin-bottom: 2.5rem;
        }

        .contact-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: #f0ece4;
          text-decoration: none;
          border-bottom: 1px solid #333;
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .contact-link:hover { border-color: ${ACCENT}; color: ${ACCENT_LIGHT}; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes bg-drift {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-52%) translateX(-8px); }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(14,14,14,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          AyyJayyMcFae
          <span style={{ color: ACCENT, marginLeft: "4px", animation: "pulse-dot 2s infinite" }}>●</span>
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem 5rem", position: "relative" }}>
        <div style={{ maxWidth: "1200px", position: "relative", zIndex: 1 }}>
          <p className={`hero-tag ${visible ? "visible" : ""}`} style={{ marginBottom: "1.5rem" }}>
            Graphic / Web Designer
          </p>
          <h1 className={`hero-headline ${visible ? "visible" : ""}`}>
            AJ<br />
            <em style={{ color: ACCENT }}>McFae</em>
          </h1>
          <p className={`hero-sub ${visible ? "visible" : ""}`} style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            I build websites that fit the brand — not the other way around. Every project gets its own aesthetic, its own voice, its own feel.
          </p>
          <div className={`scroll-line ${visible ? "visible" : ""}`} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "60px", height: "1px", background: "#333" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>
              Scroll to work
            </span>
          </div>
        </div>

        <div style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(12rem, 25vw, 22rem)",
          background: `linear-gradient(135deg, #1a1730 0%, #0e0e0e 60%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          userSelect: "none",
          lineHeight: 1,
          pointerEvents: "none",
          animation: "bg-drift 8s ease-in-out infinite",
        }}>
          ✦
        </div>
      </section>

      {/* WORK */}
      <section ref={workRef} style={{ padding: "6rem 2.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p className="section-label">Selected Work</p>
        <div className="divider" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5px", background: "#1e1e1e" }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="card"
              style={{ background: "#0e0e0e", borderColor: active === p.id ? p.accent : "#1e1e1e" }}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Photo background */}
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              {/* Gradient overlay */}
              <div className="card-overlay" />

              {/* Palette strip */}
              <div style={{ display: "flex", height: "4px", position: "relative", zIndex: 1 }}>
                {p.palette.map((c, ci) => (
                  <div key={ci} style={{ flex: 1, background: c }} />
                ))}
              </div>

              <div className="card-content" style={{ padding: "2rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: "0.4rem" }}>
                    0{i + 1}
                  </p>
                  <h2 style={{ fontSize: "1.9rem", lineHeight: 1, letterSpacing: "-0.01em" }}>{p.name}</h2>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: p.accent, marginTop: "0.3rem" }}>{p.type}</p>
                </div>

                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", lineHeight: 1.7, color: "#888", marginBottom: "1.5rem" }}>
                  {p.description}
                </p>

                <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#c0bbb2", marginBottom: "1.5rem" }}>
                  "{p.vibe}"
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {p.url !== "#" ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                    style={{ borderColor: p.accent, color: p.accent }}
                    onClick={e => e.stopPropagation()}
                  >
                    Visit Site →
                  </a>
                ) : (
                  <span className="visit-btn" style={{ borderColor: "#333", color: "#555", cursor: "default" }}>
                    File on request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} style={{ padding: "6rem 2.5rem", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="section-label">About</p>
          <div className="divider" />
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            I build for the brand,<br /><em style={{ color: ACCENT }}>not the template.</em>
          </h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", lineHeight: 1.9, color: "#888", marginBottom: "1.5rem" }}>
            I'm AJ McFae — a graphic and web designer who takes the brief seriously. A horror gym doesn't need the same site as a coffee shop. A streetwear label doesn't need the same energy as either of them.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", lineHeight: 1.9, color: "#888" }}>
            Every project I take on gets a fresh set of eyes and a tailored aesthetic. I work across design, copy direction, build, and deploy — and stay hands-on the whole way through.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} style={{ padding: "6rem 2.5rem", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="section-label">Contact</p>
          <div className="divider" />
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>
            Got a project?<br /><em style={{ color: ACCENT }}>Let's talk.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <a href="mailto:AyyJayyMcFae@gmail.com" className="contact-link">AyyJayyMcFae@gmail.com</a>
            <a href="tel:3612320412" className="contact-link">Tel: (361) 232-0412</a>
            <a href="https://instagram.com/weargenki" target="_blank" rel="noopener noreferrer" className="contact-link">@WearGenki on IG</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "2rem 2.5rem", borderTop: "1px solid #1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#444" }}>
          © 2026 AyyJayyMcFae
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#444" }}>
          AJ McFae — Graphic / Web Design
        </span>
      </footer>
    </div>
  );
}