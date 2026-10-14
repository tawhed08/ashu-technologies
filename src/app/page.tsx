
"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Web Development",
    description:
      "Responsive, high-performance websites designed to make your business stand out and turn ideas into experiences.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Software Solutions",
    description:
      "Purpose-built digital tools, dashboards, and business applications that simplify complex workflows.",
    tags: ["Full Stack", "APIs", "Automation"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces, intuitive journeys, and visual systems that make every interaction feel effortless.",
    tags: ["Interface Design", "Prototyping", "Design Systems"],
  },
  {
    number: "04",
    icon: Cpu,
    title: "Digital Innovation",
    description:
      "Modern technology and practical engineering brought together to help digital products evolve.",
    tags: ["Integration", "Performance", "Scalability"],
  },
];

const projects = [
  {
    number: "01",
    title: "E-Membership",
    category: "Business Platform",
    description:
      "A membership management experience with plans, payments, certificates, and administration.",
    tags: ["Next.js", "Express", "MongoDB"],
    href: "/projects",
    visual: "membership",
    color: "#14B8A6",
  },
  {
    number: "02",
    title: "Inventory Management",
    category: "Business Software",
    description:
      "A structured approach to inventory, products, categories, and order workflows.",
    tags: ["React", "TypeScript", "Dashboard"],
    href: "/projects",
    visual: "inventory",
    color: "#818CF8",
  },
  {
    number: "03",
    title: "Spider Clock",
    category: "Interactive Web App",
    description:
      "A distinctive clock experience featuring alarms, timers, stopwatch, and world clocks.",
    tags: ["Next.js", "PWA", "Interactive UI"],
    href: "https://spider-clock-lac.vercel.app/",
    visual: "clock",
    color: "#2DD4BF",
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose before pixels",
    description:
      "We start by understanding the real problem, the people using the product, and the outcome that matters.",
  },
  {
    number: "02",
    title: "Details make the difference",
    description:
      "From visual hierarchy to responsive behavior, every detail contributes to a better digital experience.",
  },
  {
    number: "03",
    title: "Engineering for tomorrow",
    description:
      "Maintainable code, thoughtful architecture, and performance-conscious decisions support future growth.",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-label-number">{number}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of a digital workspace">
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />

      <div className="visual-glow visual-glow-one" />
      <div className="visual-glow visual-glow-two" />

      <div className="floating-chip floating-chip-top">
        <span className="chip-icon chip-icon-teal">
          <Zap size={15} />
        </span>
        <span>
          <strong>Built with purpose</strong>
          <small>Thoughtful engineering</small>
        </span>
      </div>

      <div className="workspace-window">
        <div className="workspace-titlebar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="workspace-address">
            <ShieldCheck size={12} />
            ashu.studio / workspace
          </span>

          <span className="workspace-menu">•••</span>
        </div>

        <div className="workspace-content">
          <aside className="workspace-sidebar">
            <div className="sidebar-logo">
              <span className="sidebar-logo-mark">
                <Layers3 size={14} />
              </span>
            </div>

            <span className="sidebar-item sidebar-item-active">
              <MonitorSmartphone size={15} />
            </span>
            <span className="sidebar-item">
              <Code2 size={15} />
            </span>
            <span className="sidebar-item">
              <Layers3 size={15} />
            </span>
            <span className="sidebar-item">
              <Terminal size={15} />
            </span>

            <span className="sidebar-bottom">
              <span />
            </span>
          </aside>

          <div className="workspace-main">
            <div className="workspace-heading">
              <div>
                <span className="eyebrow">DIGITAL WORKSPACE</span>
                <h3>Ideas into reality.</h3>
                <p>A little creativity. A lot of intention.</p>
              </div>

              <span className="workspace-avatar">
                <Sparkles size={18} />
              </span>
            </div>

            <div className="workspace-feature">
              <div className="feature-topline">
                <span className="feature-status">
                  <span />
                  DESIGN SYSTEM
                </span>
                <span className="feature-index">01 / 04</span>
              </div>

              <div className="feature-graphic">
                <div className="graphic-ring graphic-ring-one" />
                <div className="graphic-ring graphic-ring-two" />
                <div className="graphic-core">
                  <Layers3 size={34} />
                </div>
                <span className="graphic-node graphic-node-one" />
                <span className="graphic-node graphic-node-two" />
                <span className="graphic-node graphic-node-three" />
              </div>

              <div className="feature-caption">
                <div>
                  <strong>Digital by design.</strong>
                  <span>Made to feel different.</span>
                </div>
                <span className="feature-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </div>

            <div className="workspace-mini-grid">
              <div className="mini-panel">
                <span className="mini-panel-icon">
                  <Braces size={15} />
                </span>
                <span>
                  <strong>Clean code</strong>
                  <small>Built to maintain</small>
                </span>
                <Check size={14} className="mini-check" />
              </div>

              <div className="mini-panel">
                <span className="mini-panel-icon mini-panel-icon-purple">
                  <MousePointer2 size={15} />
                </span>
                <span>
                  <strong>Better UX</strong>
                  <small>Designed for people</small>
                </span>
                <Check size={14} className="mini-check" />
              </div>
            </div>
          </div>
        </div>

        <div className="workspace-footer">
          <span>
            <span className="footer-live-dot" />
            Creative mode active
          </span>
          <span>DESIGN · DEVELOP · DELIVER</span>
        </div>
      </div>

      <div className="floating-chip floating-chip-bottom">
        <span className="chip-icon chip-icon-purple">
          <Code2 size={16} />
        </span>
        <span>
          <strong>Design meets code</strong>
          <small>One connected vision</small>
        </span>
        <span className="chip-arrow">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="visual-coordinate visual-coordinate-left">
        <span>23° 48′ N</span>
        <span>CREATIVE THINKING</span>
      </div>

      <div className="visual-coordinate visual-coordinate-right">
        <span>ASHU / 001</span>
      </div>
    </div>
  );
}

function ProjectVisual({
  visual,
  color,
}: {
  visual: string;
  color: string;
}) {
  if (visual === "clock") {
    return (
      <div className="project-art project-art-clock">
        <div className="clock-glow" />
        <div className="clock-face">
          <span className="clock-tick clock-tick-1" />
          <span className="clock-tick clock-tick-2" />
          <span className="clock-tick clock-tick-3" />
          <span className="clock-tick clock-tick-4" />
          <span className="clock-hand clock-hand-hour" />
          <span className="clock-hand clock-hand-minute" />
          <span className="clock-center" />
        </div>
        <div className="clock-code">
          <span>01</span>
          <span>02</span>
          <span>03</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-art project-art-${visual}`}>
      <div className="project-mock-window">
        <div className="mock-window-header">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="mock-header-line" />
        </div>

        <div className="mock-window-body">
          <div className="mock-side">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="mock-dashboard">
            <div className="mock-dashboard-heading">
              <div>
                <span />
                <strong />
              </div>
              <span className="mock-heading-badge" />
            </div>

            <div className="mock-stat-row">
              <div><span /><strong /></div>
              <div><span /><strong /></div>
              <div><span /><strong /></div>
            </div>

            <div className="mock-chart">
              <div className="mock-chart-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-chart-bars">
                {[35, 52, 42, 74, 58, 88, 66, 100, 76, 92].map(
                  (height, index) => (
                    <span
                      key={index}
                      style={{
                        height: `${height}%`,
                        backgroundColor: color,
                        opacity: 0.38 + index * 0.055,
                      }}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="mock-bottom-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <span className="project-art-orb" style={{ backgroundColor: color }} />
      <span className="project-art-spark">
        <Sparkles size={21} />
      </span>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="ashu-home">
      <style jsx global>{`
        .ashu-home {
          --home-ink: #0f172a;
          --home-muted: #64748b;
          --home-teal: #0d9488;
          --home-teal-bright: #14b8a6;
          --home-line: var(--border, #e2e8f0);
          --home-surface: var(--surface, #ffffff);
          --home-background: var(--background, #f8fafc);
          --home-foreground: var(--foreground, #0f172a);
          --home-muted-text: var(--muted-foreground, #64748b);
          --home-soft: #e6fffb;
          --home-radius: 28px;
          width: 100%;
          overflow: clip;
          background: var(--home-background);
          color: var(--home-foreground);
        }

        .ashu-home *,
        .ashu-home *::before,
        .ashu-home *::after {
          box-sizing: border-box;
        }

        .ashu-home a {
          -webkit-tap-highlight-color: transparent;
        }

        .ashu-home a:focus-visible {
          outline: 3px solid #14b8a6;
          outline-offset: 5px;
        }

        .ashu-container {
          width: min(100% - 40px, 1200px);
          margin-inline: auto;
        }

        .ashu-section {
          position: relative;
          padding-block: 108px;
        }

        .ashu-section-border {
          border-top: 1px solid var(--home-line);
          border-bottom: 1px solid var(--home-line);
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          color: var(--home-muted-text);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .section-label-number {
          color: var(--home-teal);
          font-variant-numeric: tabular-nums;
        }

        .section-label-line {
          width: 30px;
          height: 1px;
          background: var(--home-teal);
          opacity: 0.65;
        }

        .ashu-display {
          font-size: clamp(45px, 6.2vw, 82px);
          font-weight: 650;
          line-height: 0.99;
          letter-spacing: -0.075em;
        }

        .ashu-heading {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 650;
          line-height: 1.05;
          letter-spacing: -0.065em;
        }

        .ashu-accent-text {
          color: var(--home-teal);
        }

        .ashu-muted {
          color: var(--home-muted-text);
        }

        .ashu-primary-button,
        .ashu-secondary-button,
        .ashu-text-link {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease,
            border-color 250ms ease;
        }

        .ashu-primary-button {
          padding: 0 23px;
          border: 1px solid #0f172a;
          background: #0f172a;
          color: #ffffff !important;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
        }

        .ashu-primary-button:hover {
          transform: translateY(-3px);
          background: #1e293b;
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.2);
        }

        .ashu-secondary-button {
          padding: 0 22px;
          border: 1px solid var(--home-line);
          background: var(--home-surface);
          color: var(--home-foreground) !important;
        }

        .ashu-secondary-button:hover {
          transform: translateY(-3px);
          border-color: var(--home-teal);
        }

        .ashu-text-link {
          min-height: 36px;
          color: var(--home-foreground) !important;
        }

        .ashu-text-link svg,
        .project-link svg {
          transition: transform 250ms ease;
        }

        .ashu-text-link:hover svg,
        .project-link:hover svg {
          transform: translate(3px, -3px);
        }

        
/* Keep content visible unless reveal animation is initialized */
.ashu-reveal {
  opacity: 1;
  transform: none;
  transition:
    opacity 850ms cubic-bezier(0.2, 0.7, 0.2, 1),
    transform 850ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

/* Animate only elements observed by IntersectionObserver */
.ashu-reveal[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
}

.ashu-reveal[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

        .ashu-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ashu-delay-1 { transition-delay: 100ms; }
        .ashu-delay-2 { transition-delay: 200ms; }
        .ashu-delay-3 { transition-delay: 300ms; }

        /* Hero */
        .ashu-hero {
          position: relative;
          isolation: isolate;
          padding-top: 48px;
        }

        .ashu-hero::before {
          position: absolute;
          z-index: -1;
          top: -100px;
          right: -100px;
          width: min(70vw, 750px);
          height: min(70vw, 750px);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(20, 184, 166, 0.105),
            rgba(20, 184, 166, 0.035) 42%,
            transparent 70%
          );
          content: "";
          pointer-events: none;
        }

        .ashu-hero::after {
          position: absolute;
          z-index: -1;
          inset: 0;
          background-image: radial-gradient(
            rgba(100, 116, 139, 0.23) 0.8px,
            transparent 0.8px
          );
          background-size: 27px 27px;
          opacity: 0.17;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
          content: "";
          pointer-events: none;
        }

        .ashu-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          align-items: center;
          gap: 30px;
          min-height: 690px;
          padding-block: 55px 75px;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 13px;
          border: 1px solid var(--home-line);
          border-radius: 999px;
          background: var(--home-surface);
          color: var(--home-muted-text);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.075em;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.035);
        }

        .hero-pill-dot {
          position: relative;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--home-teal);
        }

        .hero-pill-dot::after {
          position: absolute;
          inset: -4px;
          border: 1px solid var(--home-teal);
          border-radius: 50%;
          animation: ashu-pulse 2.2s ease-out infinite;
          content: "";
        }

        .hero-description {
          max-width: 520px;
          margin-top: 26px;
          color: var(--home-muted-text);
          font-size: 15px;
          line-height: 1.95;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-trust-line {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
          align-items: center;
          margin-top: 42px;
          padding-top: 20px;
          border-top: 1px solid var(--home-line);
          color: var(--home-muted-text);
          font-size: 11px;
        }

        .hero-trust-line span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .hero-trust-line svg {
          color: var(--home-teal);
        }

        /* Animated hero workspace */
        .hero-visual {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 500px;
          align-items: center;
          justify-content: center;
          perspective: 1100px;
        }

        .visual-orbit {
          position: absolute;
          width: 420px;
          height: 420px;
          max-width: 90%;
          border: 1px solid rgba(13, 148, 136, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .visual-orbit-one {
          animation: ashu-orbit 26s linear infinite;
        }

        .visual-orbit-two {
          width: 340px;
          height: 340px;
          border-style: dashed;
          border-color: rgba(129, 140, 248, 0.17);
          animation: ashu-orbit 35s linear infinite reverse;
        }

        .visual-glow {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }

        .visual-glow-one {
          top: 12%;
          right: 4%;
          background: rgba(20, 184, 166, 0.19);
        }

        .visual-glow-two {
          bottom: 8%;
          left: 6%;
          background: rgba(129, 140, 248, 0.15);
        }

        .workspace-window {
          position: relative;
          z-index: 2;
          width: min(100%, 455px);
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.27);
          border-radius: 23px;
          background: var(--home-surface);
          box-shadow:
            0 45px 100px rgba(15, 23, 42, 0.14),
            0 10px 35px rgba(15, 23, 42, 0.06);
          animation: ashu-float 7s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .workspace-titlebar {
          display: flex;
          height: 46px;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-inline: 14px;
          border-bottom: 1px solid var(--home-line);
          background: var(--home-surface);
        }

        .window-dots {
          display: flex;
          gap: 5px;
          flex-shrink: 0;
        }

        .window-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .window-dots span:first-child { background: #fb7185; }
        .window-dots span:nth-child(2) { background: #fbbf24; }
        .window-dots span:nth-child(3) { background: #34d399; }

        .workspace-address {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--home-muted-text);
          font-size: 9px;
        }

        .workspace-address svg { color: var(--home-teal); }

        .workspace-menu {
          color: var(--home-muted-text);
          letter-spacing: 2px;
        }

        .workspace-content {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          min-height: 360px;
        }

        .workspace-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
          padding: 14px 6px;
          border-right: 1px solid var(--home-line);
          background: color-mix(in srgb, var(--home-surface) 88%, #94a3b8 12%);
        }

        .sidebar-logo {
          display: grid;
          width: 29px;
          height: 29px;
          place-items: center;
          margin-bottom: 8px;
          border-radius: 9px;
          background: #0d9488;
          color: #ffffff;
        }

        .sidebar-logo-mark { display: flex; }

        .sidebar-item {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          border-radius: 8px;
          color: var(--home-muted-text);
        }

        .sidebar-item-active {
          background: rgba(13, 148, 136, 0.12);
          color: #0d9488;
        }

        .sidebar-bottom {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          margin-top: auto;
        }

        .sidebar-bottom span {
          width: 17px;
          height: 17px;
          border: 1px solid var(--home-line);
          border-radius: 50%;
        }

        .workspace-main {
          min-width: 0;
          padding: 20px 18px 17px;
        }

        .workspace-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .eyebrow {
          color: var(--home-teal);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.13em;
        }

        .workspace-heading h3 {
          margin-top: 6px;
          font-size: 19px;
          font-weight: 750;
          letter-spacing: -0.055em;
        }

        .workspace-heading p {
          margin-top: 5px;
          color: var(--home-muted-text);
          font-size: 9px;
        }

        .workspace-avatar {
          display: grid;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(13, 148, 136, 0.17);
          border-radius: 13px;
          background: rgba(13, 148, 136, 0.09);
          color: #0d9488;
        }

        .workspace-feature {
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid var(--home-line);
          border-radius: 15px;
          background: var(--home-background);
        }

        .feature-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 13px 13px 0;
        }

        .feature-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--home-muted-text);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.11em;
        }

        .feature-status > span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--home-teal);
        }

        .feature-index {
          color: var(--home-muted-text);
          font-size: 8px;
        }

        .feature-graphic {
          position: relative;
          display: grid;
          height: 160px;
          place-items: center;
          overflow: hidden;
        }

        .feature-graphic::before {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 22px 22px;
          content: "";
          mask-image: radial-gradient(ellipse, black 10%, transparent 76%);
        }

        .graphic-ring {
          position: absolute;
          width: 132px;
          height: 132px;
          border: 1px solid rgba(13, 148, 136, 0.4);
          border-radius: 50%;
        }

        .graphic-ring-one {
          animation: ashu-orbit 18s linear infinite;
        }

        .graphic-ring-two {
          width: 94px;
          height: 94px;
          border-color: rgba(129, 140, 248, 0.5);
          border-style: dashed;
          animation: ashu-orbit 14s linear infinite reverse;
        }

        .graphic-core {
          position: relative;
          z-index: 2;
          display: grid;
          width: 61px;
          height: 61px;
          place-items: center;
          border: 1px solid rgba(20, 184, 166, 0.4);
          border-radius: 20px;
          background: linear-gradient(145deg, #0d9488, #115e59);
          color: #ffffff;
          box-shadow: 0 0 45px rgba(13, 148, 136, 0.32);
          animation: ashu-core-pulse 4s ease-in-out infinite;
        }

        .graphic-node {
          position: absolute;
          z-index: 3;
          width: 10px;
          height: 10px;
          border: 2px solid var(--home-surface);
          border-radius: 50%;
          background: #14b8a6;
          box-shadow: 0 0 12px rgba(20, 184, 166, 0.5);
        }

        .graphic-node-one { top: 25%; left: 34%; }
        .graphic-node-two { right: 28%; bottom: 29%; background: #818cf8; }
        .graphic-node-three { top: 32%; right: 30%; width: 6px; height: 6px; }

        .feature-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 13px;
          border-top: 1px solid var(--home-line);
        }

        .feature-caption strong,
        .feature-caption span:not(.feature-arrow) {
          display: block;
        }

        .feature-caption strong { font-size: 10px; }
        .feature-caption div > span {
          margin-top: 4px;
          color: var(--home-muted-text);
          font-size: 8px;
        }

        .feature-arrow {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          border: 1px solid var(--home-line);
          border-radius: 10px;
          color: var(--home-teal);
        }

        .workspace-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 10px;
        }

        .mini-panel {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 7px;
          padding: 9px 7px;
          border: 1px solid var(--home-line);
          border-radius: 11px;
        }

        .mini-panel-icon {
          display: grid;
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 8px;
          background: rgba(13, 148, 136, 0.1);
          color: var(--home-teal);
        }

        .mini-panel-icon-purple {
          background: rgba(129, 140, 248, 0.12);
          color: #818cf8;
        }

        .mini-panel > span:nth-child(2) { min-width: 0; }

        .mini-panel strong,
        .mini-panel small {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mini-panel strong { font-size: 8px; }
        .mini-panel small {
          margin-top: 3px;
          color: var(--home-muted-text);
          font-size: 7px;
        }

        .mini-check {
          flex-shrink: 0;
          margin-left: auto;
          color: var(--home-teal);
        }

        .workspace-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 15px;
          border-top: 1px solid var(--home-line);
          color: var(--home-muted-text);
          font-size: 7px;
          letter-spacing: 0.04em;
        }

        .workspace-footer > span:first-child {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 9px rgba(16, 185, 129, 0.5);
        }

        .floating-chip {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 13px;
          border: 1px solid var(--home-line);
          border-radius: 15px;
          background: var(--home-surface);
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.11);
        }

        .floating-chip-top {
          top: 7%;
          right: -3%;
          animation: ashu-float 6s ease-in-out infinite;
        }

        .floating-chip-bottom {
          bottom: 8%;
          left: -5%;
          animation: ashu-float 7s ease-in-out infinite reverse;
        }

        .chip-icon {
          display: grid;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 11px;
        }

        .chip-icon-teal {
          background: rgba(13, 148, 136, 0.12);
          color: #0d9488;
        }

        .chip-icon-purple {
          background: rgba(129, 140, 248, 0.13);
          color: #818cf8;
        }

        .floating-chip strong,
        .floating-chip small {
          display: block;
          white-space: nowrap;
        }

        .floating-chip strong { font-size: 10px; }
        .floating-chip small {
          margin-top: 4px;
          color: var(--home-muted-text);
          font-size: 8px;
        }

        .chip-arrow {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          margin-left: 5px;
          border: 1px solid var(--home-line);
          border-radius: 8px;
          color: var(--home-teal);
        }

        .visual-coordinate {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: var(--home-muted-text);
          font-size: 7px;
          letter-spacing: 0.12em;
          opacity: 0.8;
        }

        .visual-coordinate-left {
          bottom: 4%;
          left: 4%;
        }

        .visual-coordinate-right {
          top: 4%;
          left: 5%;
        }

        /* Intro strip */
        .hero-bottom-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding-block: 21px;
          border-top: 1px solid var(--home-line);
          border-bottom: 1px solid var(--home-line);
        }

        .hero-bottom-strip > span {
          color: var(--home-muted-text);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-bottom-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 12px 25px;
        }

        .hero-bottom-items span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--home-muted-text);
          font-size: 11px;
        }

        .hero-bottom-items svg { color: var(--home-teal); }

        /* About */
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 80px;
        }

        .about-lead {
          max-width: 690px;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 500;
          line-height: 1.48;
          letter-spacing: -0.045em;
        }

        .about-description {
          max-width: 680px;
          margin-top: 22px;
          color: var(--home-muted-text);
          font-size: 14px;
          line-height: 2;
        }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin-top: 65px;
        }

        .principle-card {
          position: relative;
          overflow: hidden;
          padding: 26px;
          border: 1px solid var(--home-line);
          border-radius: 19px;
          background: var(--home-surface);
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .principle-card:hover {
          transform: translateY(-6px);
          border-color: rgba(13, 148, 136, 0.45);
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.055);
        }

        .principle-number {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--home-muted-text);
          font-size: 10px;
        }

        .principle-number svg { color: var(--home-teal); }

        .principle-card h3 {
          margin-top: 33px;
          font-size: 16px;
          font-weight: 750;
          letter-spacing: -0.035em;
        }

        .principle-card p {
          margin-top: 11px;
          color: var(--home-muted-text);
          font-size: 12px;
          line-height: 1.9;
        }

        /* Services */
        .services-section {
          background:
            radial-gradient(
              ellipse at 95% 0%,
              rgba(20, 184, 166, 0.07),
              transparent 38%
            ),
            color-mix(in srgb, var(--home-background) 88%, #94a3b8 12%);
        }

        .section-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
        }

        .section-heading-description {
          max-width: 370px;
          color: var(--home-muted-text);
          font-size: 13px;
          line-height: 1.9;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 52px;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          padding: 29px;
          border: 1px solid var(--home-line);
          border-radius: 21px;
          background: var(--home-surface);
          transition:
            transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .service-card::before {
          position: absolute;
          top: 0;
          left: 28px;
          width: 45px;
          height: 2px;
          background: var(--home-teal);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 350ms ease;
          content: "";
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(13, 148, 136, 0.4);
          box-shadow: 0 22px 50px rgba(15, 23, 42, 0.065);
        }

        .service-card:hover::before { transform: scaleX(1); }

        .service-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-icon {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border: 1px solid rgba(13, 148, 136, 0.17);
          border-radius: 15px;
          background: rgba(13, 148, 136, 0.08);
          color: var(--home-teal);
          transition:
            transform 300ms ease,
            background 300ms ease;
        }

        .service-card:hover .service-icon {
          transform: rotate(-7deg) scale(1.06);
          background: rgba(13, 148, 136, 0.13);
        }

        .service-number {
          color: var(--home-muted-text);
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .service-card h3 {
          margin-top: 26px;
          font-size: 21px;
          font-weight: 750;
          letter-spacing: -0.045em;
        }

        .service-card > p {
          max-width: 470px;
          margin-top: 11px;
          color: var(--home-muted-text);
          font-size: 13px;
          line-height: 1.9;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 21px;
        }

        .service-tags span {
          padding: 7px 10px;
          border: 1px solid var(--home-line);
          border-radius: 999px;
          color: var(--home-muted-text);
          font-size: 9px;
          font-weight: 650;
        }

        .service-card-bottom {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          color: var(--home-teal);
        }

        /* Projects */
        .projects-heading {
          margin-bottom: 45px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .project-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--home-line);
          border-radius: 22px;
          background: var(--home-surface);
          transition:
            transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 350ms ease,
            border-color 300ms ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: rgba(13, 148, 136, 0.38);
          box-shadow: 0 25px 55px rgba(15, 23, 42, 0.085);
        }

        .project-art {
          position: relative;
          display: flex;
          aspect-ratio: 1.2 / 0.92;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: color-mix(in srgb, var(--home-background) 84%, #cbd5e1 16%);
        }

        .project-art::before {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(100, 116, 139, 0.22) 0.8px,
            transparent 0.8px
          );
          background-size: 19px 19px;
          opacity: 0.42;
          content: "";
        }

        .project-art::after {
          position: absolute;
          top: -80px;
          right: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.09);
          filter: blur(50px);
          content: "";
        }

        .project-mock-window {
          position: relative;
          z-index: 1;
          width: 78%;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.32);
          border-radius: 12px;
          background: var(--home-surface);
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          transform: rotate(-3deg);
          transition: transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .project-card:hover .project-mock-window {
          transform: rotate(0deg) scale(1.045);
        }

        .mock-window-header {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px;
          border-bottom: 1px solid var(--home-line);
        }

        .mock-window-header .window-dots span {
          width: 5px;
          height: 5px;
        }

        .mock-header-line {
          width: 36%;
          height: 4px;
          border-radius: 4px;
          background: var(--home-line);
        }

        .mock-window-body {
          display: grid;
          grid-template-columns: 25px 1fr;
          min-height: 135px;
        }

        .mock-side {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 12px 7px;
          border-right: 1px solid var(--home-line);
        }

        .mock-side span {
          width: 11px;
          height: 4px;
          border-radius: 3px;
          background: var(--home-line);
        }

        .mock-side span:first-child {
          background: #0d9488;
        }

        .mock-dashboard { padding: 12px 11px; }

        .mock-dashboard-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mock-dashboard-heading div > span,
        .mock-dashboard-heading div > strong {
          display: block;
          border-radius: 4px;
        }

        .mock-dashboard-heading div > span {
          width: 45px;
          height: 4px;
          background: var(--home-line);
        }

        .mock-dashboard-heading div > strong {
          width: 65px;
          height: 7px;
          margin-top: 5px;
          background: color-mix(in srgb, var(--home-foreground) 80%, transparent);
        }

        .mock-heading-badge {
          width: 25px;
          height: 12px;
          border-radius: 4px;
          background: rgba(13, 148, 136, 0.17);
        }

        .mock-stat-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 5px;
          margin-top: 12px;
        }

        .mock-stat-row > div {
          padding: 7px 5px;
          border: 1px solid var(--home-line);
          border-radius: 5px;
        }

        .mock-stat-row span,
        .mock-stat-row strong {
          display: block;
          height: 4px;
          border-radius: 4px;
          background: var(--home-line);
        }

        .mock-stat-row strong {
          width: 65%;
          height: 7px;
          margin-top: 6px;
          background: #0d9488;
        }

        .mock-chart {
          position: relative;
          height: 46px;
          margin-top: 9px;
          border: 1px solid var(--home-line);
          border-radius: 5px;
          overflow: hidden;
        }

        .mock-chart-lines {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .mock-chart-lines span {
          width: 100%;
          border-top: 1px solid var(--home-line);
        }

        .mock-chart-bars {
          position: absolute;
          inset: 7px 8px 0;
          display: flex;
          align-items: flex-end;
          gap: 4px;
        }

        .mock-chart-bars span {
          flex: 1;
          border-radius: 2px 2px 0 0;
          animation: ashu-bars 1.2s ease-out both;
        }

        .mock-bottom-lines {
          display: flex;
          gap: 6px;
          margin-top: 9px;
        }

        .mock-bottom-lines span {
          height: 4px;
          flex: 1;
          border-radius: 4px;
          background: var(--home-line);
        }

        .project-art-orb {
          position: absolute;
          right: 8%;
          bottom: 12%;
          width: 38px;
          height: 38px;
          border: 7px solid var(--home-surface);
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
          animation: ashu-float 5s ease-in-out infinite;
        }

        .project-art-spark {
          position: absolute;
          top: 14%;
          left: 9%;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid var(--home-line);
          border-radius: 12px;
          background: var(--home-surface);
          color: var(--home-teal);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
          animation: ashu-float 6s ease-in-out infinite reverse;
        }

        .project-art-clock {
          background:
            radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.12), transparent 50%),
            #07111b;
        }

        .project-art-clock::before {
          background-image: radial-gradient(rgba(45, 212, 191, 0.27) 0.8px, transparent 0.8px);
          opacity: 0.5;
        }

        .clock-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(45, 212, 191, 0.18);
          filter: blur(45px);
        }

        .clock-face {
          position: relative;
          z-index: 1;
          width: 145px;
          height: 145px;
          border: 1px solid rgba(45, 212, 191, 0.45);
          border-radius: 50%;
          background: rgba(3, 15, 23, 0.75);
          box-shadow:
            0 0 0 10px rgba(45, 212, 191, 0.035),
            0 0 40px rgba(45, 212, 191, 0.13),
            inset 0 0 28px rgba(45, 212, 191, 0.08);
          animation: ashu-clock-glow 4s ease-in-out infinite;
        }

        .clock-tick {
          position: absolute;
          top: 9px;
          left: calc(50% - 1px);
          width: 2px;
          height: 8px;
          border-radius: 2px;
          background: #5eead4;
          transform-origin: 1px 63px;
        }

        .clock-tick-2 { transform: rotate(90deg); }
        .clock-tick-3 { transform: rotate(180deg); }
        .clock-tick-4 { transform: rotate(270deg); }

        .clock-hand {
          position: absolute;
          bottom: 50%;
          left: calc(50% - 1px);
          width: 2px;
          border-radius: 5px;
          background: #99f6e4;
          transform-origin: bottom center;
        }

        .clock-hand-hour {
          height: 36px;
          transform: rotate(42deg);
        }

        .clock-hand-minute {
          height: 48px;
          transform: rotate(145deg);
          animation: ashu-clock-hand 24s linear infinite;
        }

        .clock-center {
          position: absolute;
          top: calc(50% - 4px);
          left: calc(50% - 4px);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2dd4bf;
          box-shadow: 0 0 14px #2dd4bf;
        }

        .clock-code {
          position: absolute;
          right: 10%;
          bottom: 14%;
          display: flex;
          gap: 8px;
          color: #5eead4;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .project-card-content { padding: 21px; }

        .project-category {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--home-muted-text);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .project-category-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--home-teal);
        }

        .project-card h3 {
          margin-top: 13px;
          font-size: 21px;
          font-weight: 750;
          letter-spacing: -0.045em;
        }

        .project-card-content > p {
          min-height: 68px;
          margin-top: 10px;
          color: var(--home-muted-text);
          font-size: 12px;
          line-height: 1.9;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 15px;
        }

        .project-tags span {
          padding: 6px 8px;
          border-radius: 6px;
          background: color-mix(in srgb, var(--home-background) 80%, #94a3b8 20%);
          color: var(--home-muted-text);
          font-size: 9px;
        }

        .project-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--home-line);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--home-foreground) !important;
          font-size: 11px;
          font-weight: 750;
          text-decoration: none;
        }

        .project-link svg { color: var(--home-teal); }

        .project-index {
          color: var(--home-muted-text);
          font-size: 9px;
          font-variant-numeric: tabular-nums;
        }

        /* Process */
        .process-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 75px;
          align-items: start;
        }

        .process-intro {
          position: sticky;
          top: 110px;
        }

        .process-intro p {
          max-width: 410px;
          margin-top: 20px;
          color: var(--home-muted-text);
          font-size: 13px;
          line-height: 1.95;
        }

        .process-list {
          border-top: 1px solid var(--home-line);
        }

        .process-item {
          display: grid;
          grid-template-columns: 50px 1fr 30px;
          align-items: start;
          gap: 15px;
          padding: 27px 0;
          border-bottom: 1px solid var(--home-line);
          transition: padding 250ms ease;
        }

        .process-item:hover { padding-inline: 7px; }

        .process-item-number {
          padding-top: 4px;
          color: var(--home-teal);
          font-size: 11px;
          font-weight: 800;
        }

        .process-item h3 {
          font-size: 18px;
          font-weight: 750;
          letter-spacing: -0.04em;
        }

        .process-item p {
          margin-top: 8px;
          color: var(--home-muted-text);
          font-size: 12px;
          line-height: 1.9;
        }

        .process-item > svg {
          margin-top: 4px;
          color: var(--home-muted-text);
          transition: color 250ms ease, transform 250ms ease;
        }

        .process-item:hover > svg {
          color: var(--home-teal);
          transform: translate(3px, -3px);
        }

        /* Final CTA */
        .cta-section { padding-top: 35px; }

        .cta-panel {
          position: relative;
          overflow: hidden;
          padding: clamp(32px, 6vw, 75px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 29px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(20, 184, 166, 0.2), transparent 43%),
            radial-gradient(ellipse at 0% 100%, rgba(129, 140, 248, 0.13), transparent 40%),
            #0f172a;
          color: #ffffff;
        }

        .cta-panel::before {
          position: absolute;
          top: -120px;
          right: -70px;
          width: 320px;
          height: 320px;
          border: 1px solid rgba(94, 234, 212, 0.2);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(94, 234, 212, 0.025),
            0 0 0 70px rgba(94, 234, 212, 0.018);
          content: "";
          animation: ashu-orbit 40s linear infinite;
          pointer-events: none;
        }

        .cta-panel-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
        }

        .cta-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #99f6e4;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .cta-title {
          max-width: 740px;
          margin-top: 24px;
          font-size: clamp(37px, 5.5vw, 68px);
          font-weight: 650;
          line-height: 1.02;
          letter-spacing: -0.065em;
        }

        .cta-description {
          max-width: 550px;
          margin-top: 19px;
          color: #cbd5e1;
          font-size: 13px;
          line-height: 1.9;
        }

        .cta-button {
          display: inline-flex;
          min-height: 54px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 22px;
          border: 1px solid #99f6e4;
          border-radius: 999px;
          background: #99f6e4;
          color: #0f172a !important;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          background: #ccfbf1;
          box-shadow: 0 15px 35px rgba(45, 212, 191, 0.2);
        }

        /* Small bottom detail */
        .home-endnote {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding-block: 25px;
          color: var(--home-muted-text);
          font-size: 10px;
        }

        .home-endnote span:last-child {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .home-endnote svg { color: var(--home-teal); }

        /* Animation */
        @keyframes ashu-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ashu-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ashu-pulse {
          0% { transform: scale(0.7); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        @keyframes ashu-core-pulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(13, 148, 136, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 55px rgba(13, 148, 136, 0.42);
            transform: scale(1.04);
          }
        }

        @keyframes ashu-clock-hand {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ashu-clock-glow {
          0%, 100% { box-shadow: 0 0 0 10px rgba(45, 212, 191, 0.035), 0 0 30px rgba(45, 212, 191, 0.09); }
          50% { box-shadow: 0 0 0 15px rgba(45, 212, 191, 0.045), 0 0 48px rgba(45, 212, 191, 0.2); }
        }

        @keyframes ashu-bars {
          from { transform: scaleY(0.1); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }

        /* Responsive */
        @media (min-width: 1500px) {
          .ashu-hero-grid { min-height: 750px; }
        }

        @media (max-width: 1050px) {
          .ashu-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
            gap: 10px;
          }

          .hero-visual { min-height: 460px; }

          .floating-chip-top { right: -1%; }
          .floating-chip-bottom { left: -1%; }

          .about-grid { gap: 45px; }
          .process-layout { gap: 45px; }
          .project-card-content { padding: 17px; }
        }

        @media (max-width: 820px) {
          .ashu-section { padding-block: 80px; }

          .ashu-hero { padding-top: 25px; }

          .ashu-hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 15px;
            padding-block: 60px 50px;
          }

          .hero-copy { max-width: 720px; }

          .hero-visual {
            width: min(100%, 590px);
            min-height: 510px;
            margin-inline: auto;
          }

          .workspace-window { width: min(100%, 455px); }

          .about-grid,
          .process-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .process-intro { position: static; }

          .principle-grid { gap: 10px; margin-top: 45px; }

          .principle-card { padding: 20px; }

          .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .project-card:last-child { grid-column: 1 / -1; }

          .project-card:last-child .project-art { aspect-ratio: 2.1 / 0.8; }

          .cta-panel-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .ashu-container { width: min(100% - 32px, 1200px); }

          .ashu-section { padding-block: 67px; }

          .ashu-display {
            font-size: clamp(43px, 12vw, 61px);
          }

          .ashu-heading {
            font-size: clamp(34px, 9vw, 45px);
          }

          .hero-description {
            margin-top: 20px;
            font-size: 13px;
            line-height: 1.9;
          }

          .hero-actions { gap: 9px; margin-top: 26px; }

          .ashu-primary-button,
          .ashu-secondary-button {
            min-height: 49px;
            padding-inline: 17px;
            font-size: 11px;
          }

          .hero-trust-line {
            gap: 10px 13px;
            margin-top: 30px;
          }

          .hero-trust-line span { font-size: 9px; }

          .hero-visual {
            min-height: 425px;
            margin-top: 8px;
          }

          .workspace-window { border-radius: 17px; }

          .workspace-content {
            grid-template-columns: 38px minmax(0, 1fr);
            min-height: 320px;
          }

          .workspace-main { padding: 15px 11px 12px; }

          .workspace-heading h3 { font-size: 16px; }
          .workspace-heading p { font-size: 8px; }

          .workspace-avatar {
            width: 32px;
            height: 32px;
          }

          .feature-graphic { height: 125px; }

          .graphic-ring { width: 112px; height: 112px; }
          .graphic-ring-two { width: 80px; height: 80px; }

          .clock-tick {
            transform-origin: 1px 48px;
          }

          .floating-chip {
            gap: 7px;
            padding: 8px;
            border-radius: 12px;
          }

          .floating-chip-top { top: 2%; right: 0; }
          .floating-chip-bottom { bottom: 2%; left: 0; }

          .chip-icon { width: 29px; height: 29px; }
          .floating-chip strong { font-size: 9px; }
          .floating-chip small { font-size: 7px; }

          .visual-coordinate { font-size: 6px; }
          .visual-coordinate-left { bottom: -1%; left: 0; }
          .visual-coordinate-right { top: -1%; left: 0; }

          .hero-bottom-strip {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .hero-bottom-items { justify-content: flex-start; gap: 12px 17px; }

          .about-lead { font-size: 23px; }

          .principle-grid { grid-template-columns: 1fr; }

          .principle-card { padding: 22px; }

          .principle-card h3 { margin-top: 23px; }

          .section-heading-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .service-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 35px; }

          .service-card { padding: 23px; }

          .service-card h3 { font-size: 19px; }

          .project-grid { grid-template-columns: 1fr; gap: 15px; }

          .project-card:last-child { grid-column: auto; }

          .project-card:last-child .project-art { aspect-ratio: 1.2 / 0.92; }

          .project-card-content { padding: 21px; }

          .project-card-content > p { min-height: auto; }

          .process-item {
            grid-template-columns: 33px 1fr 20px;
            gap: 10px;
            padding-block: 22px;
          }

          .process-item h3 { font-size: 16px; }

          .cta-section { padding-top: 10px; }

          .cta-panel {
            padding: 29px 22px;
            border-radius: 22px;
          }

          .cta-title { font-size: 39px; }

          .cta-description { font-size: 12px; }

          .home-endnote {
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ashu-home *,
          .ashu-home *::before,
          .ashu-home *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .ashu-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ashu-hero">
        <div className="ashu-container ashu-hero-grid">
          <div className="hero-copy ashu-reveal">
            <div className="hero-pill">
              <span className="hero-pill-dot" />
              INDEPENDENT DIGITAL INNOVATION STUDIO
            </div>

            <h1 className="ashu-display" style={{ marginTop: 29 }}>
              We build
              <br />
              what comes
              <br />
              <span className="ashu-accent-text">next.</span>
            </h1>

            <p className="hero-description">
              We transform ambitious ideas into thoughtfully designed
              websites, powerful software, and digital experiences that help
              businesses move forward.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="ashu-primary-button">
                Explore our work
                <ArrowUpRight size={17} />
              </Link>

              <Link href="/contact" className="ashu-secondary-button">
                Let&apos;s talk
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-trust-line">
              <span><Check size={14} /> Thoughtful design</span>
              <span><Check size={14} /> Clean engineering</span>
              <span><Check size={14} /> Future-ready thinking</span>
            </div>
          </div>

          <div className="ashu-reveal ashu-delay-2">
            <HeroVisual />
          </div>
        </div>

        <div className="ashu-container hero-bottom-strip">
          <span>Our digital approach</span>

          <div className="hero-bottom-items">
            <span><Palette size={14} /> Design with intent</span>
            <span><Code2 size={14} /> Engineer with care</span>
            <span><Zap size={14} /> Deliver with purpose</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ashu-section" id="about">
        <div className="ashu-container">
          <div className="about-grid">
            <div className="ashu-reveal">
              <SectionLabel number="01">Who we are</SectionLabel>

              <h2 className="ashu-heading">
                Technology should make
                <span className="ashu-accent-text"> life better.</span>
              </h2>

              <Link
                href="/about"
                className="ashu-text-link"
                style={{ marginTop: 27 }}
              >
                Discover ASHU
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="ashu-reveal ashu-delay-1">
              <p className="about-lead">
                We bring creative thinking and modern engineering together to
                turn complex challenges into clear, useful digital products.
              </p>

              <p className="about-description">
                ASHU Technologies is a digital technology brand focused on
                useful software, thoughtful interfaces, and dependable
                experiences. We believe great products start with
                understanding people, choosing the right technology, and
                caring about every detail along the way.
              </p>
            </div>
          </div>

          <div className="principle-grid">
            {principles.map((item, index) => (
              <article
                key={item.number}
                className={`principle-card ashu-reveal ashu-delay-${index + 1}`}
                data-reveal
              >
                <div className="principle-number">
                  <span>/{item.number}</span>
                  <ArrowUpRight size={16} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ashu-section ashu-section-border services-section" id="services">
        <div className="ashu-container">
          <div className="section-heading-row ashu-reveal" data-reveal>
            <div>
              <SectionLabel number="02">What we do</SectionLabel>

              <h2 className="ashu-heading">
                Smart solutions.
                <br />
                <span className="ashu-accent-text">Meaningful impact.</span>
              </h2>
            </div>

            <p className="section-heading-description">
              From the first sketch to the finished product, we connect
              design, development, and technology around a clear purpose.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className={`service-card ashu-reveal ashu-delay-${(index % 3) + 1}`}
                  data-reveal
                >
                  <div className="service-topline">
                    <span className="service-icon">
                      <Icon size={22} />
                    </span>
                    <span className="service-number">SERVICE / {service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="service-card-bottom">
                    <ArrowUpRight size={19} />
                  </div>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link href="/services" className="ashu-text-link">
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="ashu-section" id="projects">
        <div className="ashu-container">
          <div className="section-heading-row projects-heading ashu-reveal" data-reveal>
            <div>
              <SectionLabel number="03">Selected work</SectionLabel>

              <h2 className="ashu-heading">
                Ideas, made
                <span className="ashu-accent-text"> tangible.</span>
              </h2>
            </div>

            <div>
              <p className="section-heading-description">
                A selection of digital projects exploring business tools,
                interactive experiences, and modern web applications.
              </p>

              <Link
                href="/projects"
                className="ashu-text-link"
                style={{ marginTop: 13 }}
              >
                View project portfolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`project-card ashu-reveal ashu-delay-${index + 1}`}
                data-reveal
              >
                <ProjectVisual
                  visual={project.visual}
                  color={project.color}
                />

                <div className="project-card-content">
                  <div className="project-category">
                    <span
                      className="project-category-dot"
                      style={{ backgroundColor: project.color }}
                    />
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-card-bottom">
                    {project.href.startsWith("http") ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        View live project
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <Link href={project.href} className="project-link">
                        Explore project
                        <ArrowUpRight size={15} />
                      </Link>
                    )}

                    <span className="project-index">/{project.number}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="ashu-section ashu-section-border">
        <div className="ashu-container process-layout">
          <div className="process-intro ashu-reveal" data-reveal>
            <SectionLabel number="04">How we work</SectionLabel>

            <h2 className="ashu-heading">
              A better way
              <br />
              to <span className="ashu-accent-text">build.</span>
            </h2>

            <p>
              Good results come from clear thinking, open communication, and
              deliberate execution. Every step has a purpose.
            </p>

            <Link
              href="/about"
              className="ashu-text-link"
              style={{ marginTop: 22 }}
            >
              Learn about our approach
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="process-list">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Define the challenge, clarify the goals, and understand the people who will use the solution.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Shape the experience, explore the right direction, and establish a clear visual and technical foundation.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "Turn the plan into a responsive, accessible, and maintainable digital product.",
              },
              {
                number: "04",
                title: "Refine",
                description:
                  "Review the details, test important interactions, and improve the experience before delivery.",
              },
            ].map((item, index) => (
              <article
                key={item.number}
                className={`process-item ashu-reveal ashu-delay-${index + 1}`}
                data-reveal
              >
                <span className="process-item-number">{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ChevronRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ashu-section cta-section" id="contact">
        <div className="ashu-container">
          <div className="cta-panel ashu-reveal" data-reveal>
            <div className="cta-panel-inner">
              <div>
                <div className="cta-label">
                  <Sparkles size={15} />
                  HAVE SOMETHING IN MIND?
                </div>

                <h2 className="cta-title">
                  Let&apos;s make your
                  <br />
                  next idea <span style={{ color: "#5eead4" }}>real.</span>
                </h2>

                <p className="cta-description">
                  Tell us what you are imagining, what you want to improve, or
                  what you want to build. Every meaningful digital product
                  starts with a conversation.
                </p>
              </div>

              <Link href="/contact" className="cta-button">
                Start a conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="home-endnote">
            <span>ASHU TECHNOLOGIES · DIGITAL, WITH PURPOSE.</span>
            <span>
              Thoughtfully designed
              <ArrowDownRight size={14} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
