
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Lightbulb,
  ShieldCheck,
  Target,
  Sparkles,
  Layers3,
  Check,
} from "lucide-react";

const values = [
  {
    icon: Target,
    number: "01",
    title: "Our Mission",
    description:
      "To help businesses grow through reliable, scalable, and thoughtfully designed digital solutions.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Our Vision",
    description:
      "To become a trusted technology partner for businesses building a smarter digital future.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Our Values",
    description:
      "We believe in transparency, quality, continuous learning, and long-term client relationships.",
  },
];

const principles = [
  "User-focused design",
  "Scalable architecture",
  "Responsive experiences",
  "Maintainable code",
];

export default function AboutPage() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-about-reveal]")
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("about-is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(
              "about-is-visible"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    // Hide reveal elements only after JavaScript and the observer are ready.
    document.documentElement.classList.add("about-reveal-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove(
        "about-reveal-ready"
      );
    };
  }, []);

  return (
    <main
      className="about-page relative min-h-screen overflow-hidden"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* HERO */}
      <section className="about-hero relative isolate overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="about-orb about-orb-one pointer-events-none absolute -right-32 -top-40 -z-10 h-[380px] w-[380px] rounded-full blur-[100px] sm:h-[480px] sm:w-[480px]"
          style={{ background: "rgba(13,148,136,0.18)" }}
        />

        <div
          aria-hidden="true"
          className="about-orb about-orb-two pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[320px] w-[320px] rounded-full blur-[100px] sm:h-[420px] sm:w-[420px]"
          style={{ background: "rgba(16,43,70,0.12)" }}
        />

        <div
          className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-12 lg:py-32"
        >
          <div data-about-reveal className="about-reveal">
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs"
              style={{
                borderColor: "rgba(13,148,136,0.3)",
                background: "rgba(13,148,136,0.08)",
                color: "#0D9488",
              }}
            >
              <Sparkles size={14} />
              About Ashu Technologies
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              We turn ambitious ideas into{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #0D9488 5%, #2DD4BF 55%, var(--foreground) 110%)",
                }}
              >
                digital experiences.
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-8 sm:mt-7 sm:text-lg"
              style={{ color: "var(--muted-foreground)" }}
            >
              We build modern websites and software experiences that help
              businesses work smarter, connect with customers, and grow
              with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9">
              <Link
                href="/contact"
                className="about-primary-button group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white"
              >
                Let&apos;s work together
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="about-secondary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold"
              >
                Explore services
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>
            </div>

            <div
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium sm:text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <span className="inline-flex items-center gap-2">
                <Check size={15} color="#0D9488" />
                Thoughtful design
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={15} color="#0D9488" />
                Modern technology
              </span>
            </div>
          </div>

          {/* BRAND PANEL */}
          <div
            data-about-reveal
            className="about-reveal about-reveal-delay-2 relative mx-auto w-full max-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,148,136,0.22), rgba(16,43,70,0.12))",
              }}
            />

            <div
              className="about-brand-card relative overflow-hidden rounded-[1.75rem] border p-6 sm:p-9"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "0 24px 80px rgba(16,43,70,0.10)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                style={{ background: "rgba(13,148,136,0.16)" }}
              />

              <div className="relative">
                <div
                  className="about-icon-box flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{
                    background: "#0D9488",
                    boxShadow: "0 8px 24px rgba(13,148,136,0.22)",
                  }}
                >
                  <Code2 size={27} />
                </div>

                <p
                  className="mt-8 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: "#0D9488" }}
                >
                  Our approach
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Built for what&apos;s next.
                </h2>

                <p
                  className="mt-4 text-sm leading-7 sm:text-base"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Clean architecture, responsive interfaces, performance,
                  and maintainability guide the way we approach every
                  project.
                </p>

                <div
                  className="my-7 h-px"
                  style={{ background: "var(--border)" }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(13,148,136,0.10)",
                      color: "#0D9488",
                    }}
                  >
                    <Layers3 size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Modern technology
                    </p>
                    <p
                      className="mt-1 text-xs leading-5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Meaningful solutions. Lasting value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="about-floating-note absolute -bottom-5 -left-3 hidden rounded-2xl border px-5 py-4 sm:block"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "0 14px 36px rgba(16,43,70,0.12)",
              }}
            >
              <p className="text-sm font-extrabold">
                Ideas into impact
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                Designed with purpose
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="about-scroll-line mx-auto h-10 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,148,136,0.65), transparent)",
          }}
        />
      </section>

      {/* WHO WE ARE */}
      <section className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div data-about-reveal className="about-reveal">
          <p
            className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: "#0D9488" }}
          >
            Who we are
          </p>

          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Technology with purpose. Design with intention.
          </h2>

          <p
            className="mt-6 text-sm leading-8 sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            Ashu Technologies is a software company focused on building
            practical, user-friendly, and scalable digital products. We
            combine thoughtful design with modern web technologies to
            create solutions around real business needs.
          </p>

          <p
            className="mt-4 text-sm leading-8 sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            From business websites to custom web applications, our goal is
            to make technology more useful, accessible, and impactful.
          </p>

          <Link
            href="/services"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-bold"
            style={{ color: "#0D9488" }}
          >
            Discover what we do
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div
          data-about-reveal
          className="about-reveal about-reveal-delay-2 relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] blur-2xl"
            style={{ background: "rgba(13,148,136,0.07)" }}
          />

          <div
            className="about-commitment-card relative overflow-hidden rounded-3xl border p-6 sm:p-9 lg:p-10"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              boxShadow: "0 18px 60px rgba(16,43,70,0.06)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "rgba(13,148,136,0.12)" }}
            />

            <div className="relative">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(13,148,136,0.10)",
                    color: "#0D9488",
                  }}
                >
                  <ShieldCheck size={24} />
                </div>

                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Our commitment
                </span>
              </div>

              <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                Practical solutions. Thoughtful execution.
              </h3>

              <p
                className="mt-4 text-sm leading-7 sm:text-base"
                style={{ color: "var(--muted-foreground)" }}
              >
                We focus on building digital experiences that are easy to
                use, reliable, and designed to support real-world business
                goals.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {principles.map((item, index) => (
                  <div
                    key={item}
                    className="about-principle flex items-center gap-3 rounded-xl border p-3 text-sm font-medium"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--background)",
                      animationDelay: `${index * 80}ms`,
                    }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(13,148,136,0.11)",
                        color: "#0D9488",
                      }}
                    >
                      <Check size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND VALUES */}
      <section
        className="relative overflow-hidden border-y px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full blur-[100px]"
          style={{ background: "rgba(13,148,136,0.08)" }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 lg:flex-row lg:items-end">
            <div data-about-reveal className="about-reveal">
              <p
                className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]"
                style={{ color: "#0D9488" }}
              >
                What guides us
              </p>

              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                The principles behind our work.
              </h2>
            </div>

            <p
              data-about-reveal
              className="about-reveal about-reveal-delay-2 max-w-lg text-sm leading-7 sm:text-base lg:max-w-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Strong partnerships begin with clear principles and a shared
              commitment to quality.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  data-about-reveal
                  className={`about-reveal about-value-card group relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${
                    index === 1 ? "about-reveal-delay-1" : ""
                  } ${index === 2 ? "about-reveal-delay-2" : ""}`}
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--background)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="about-card-glow pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl"
                    style={{ background: "rgba(13,148,136,0.17)" }}
                  />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <div
                        className="about-value-icon flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          background: "rgba(13,148,136,0.10)",
                          color: "#0D9488",
                        }}
                      >
                        <Icon size={23} />
                      </div>

                      <span
                        className="text-sm font-black tracking-widest"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {value.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold">
                      {value.title}
                    </h3>

                    <p
                      className="mt-4 text-sm leading-7"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {value.description}
                    </p>

                    <div
                      className="about-value-line mt-7 h-1 w-10 rounded-full"
                      style={{ background: "#0D9488" }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-64 max-w-3xl rounded-full blur-[100px]"
          style={{ background: "rgba(13,148,136,0.12)" }}
        />

        <div
          data-about-reveal
          className="about-reveal relative mx-auto max-w-5xl overflow-hidden rounded-3xl border px-6 py-12 text-center sm:px-12 sm:py-16 lg:py-20"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            boxShadow: "0 20px 70px rgba(16,43,70,0.06)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl"
            style={{ background: "rgba(13,148,136,0.14)" }}
          />

          <div className="relative">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(13,148,136,0.10)",
                color: "#0D9488",
              }}
            >
              <Sparkles size={23} />
            </div>

            <p
              className="mt-6 text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: "#0D9488" }}
            >
              Let&apos;s build something meaningful
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Have an idea in mind?
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--muted-foreground)" }}
            >
              Let&apos;s discuss how the right technology can bring your
              next project to life.
            </p>

            <Link
              href="/contact"
              className="about-primary-button group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white"
            >
              Start a conversation
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE ANIMATIONS */}
      <style jsx global>{`
        .about-page {
          isolation: isolate;
        }

        .about-page .border-b,
        .about-page .border-y {
          border-color: var(--border);
        }

        /* Content stays visible by default. JavaScript enables reveal mode
           only after the observer has been initialized successfully. */
        .about-page [data-about-reveal] {
          opacity: 1;
          transform: none;
        }

        html.about-reveal-ready
          .about-page
          [data-about-reveal]:not(.about-is-visible) {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
        }

        .about-page .about-reveal {
          transition:
            opacity 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .about-page .about-reveal.about-is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .about-page .about-reveal-delay-1 {
          transition-delay: 100ms;
        }

        .about-page .about-reveal-delay-2 {
          transition-delay: 180ms;
        }

        .about-page .about-primary-button {
          background: #0d9488;
          box-shadow: 0 10px 28px rgba(13, 148, 136, 0.2);
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease;
        }

        .about-page .about-primary-button:hover {
          background: #0f8278;
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(13, 148, 136, 0.26);
        }

        .about-page .about-secondary-button {
          transition:
            border-color 250ms ease,
            background 250ms ease,
            transform 250ms ease;
        }

        .about-page .about-secondary-button:hover {
          border-color: #0d9488;
          background: rgba(13, 148, 136, 0.06);
          transform: translateY(-2px);
        }

        .about-page .about-brand-card {
          transition:
            transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 400ms ease;
        }

        .about-page .about-brand-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 90px rgba(16, 43, 70, 0.14);
        }

        .about-page .about-icon-box {
          animation: about-icon-float 5s ease-in-out infinite;
        }

        .about-page .about-floating-note {
          animation: about-note-float 6s ease-in-out infinite;
        }

        .about-page .about-principle {
          transition:
            border-color 250ms ease,
            transform 250ms ease,
            background 250ms ease;
        }

        .about-page .about-principle:hover {
          border-color: rgba(13, 148, 136, 0.45);
          transform: translateY(-2px);
        }

        .about-page .about-value-card {
          transition:
            transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 300ms ease,
            box-shadow 350ms ease;
        }

        .about-page .about-card-glow {
          opacity: 0;
          transition: opacity 350ms ease;
        }

        .about-page .about-value-card:hover {
          transform: translateY(-7px);
          border-color: rgba(13, 148, 136, 0.48);
          box-shadow: 0 20px 45px rgba(16, 43, 70, 0.09);
        }

        .about-page .about-value-card:hover .about-card-glow {
          opacity: 1;
        }

        .about-page .about-value-icon {
          transition:
            transform 300ms ease,
            background 300ms ease,
            color 300ms ease;
        }

        .about-page .about-value-card:hover .about-value-icon {
          transform: rotate(-5deg) scale(1.06);
          background: #0d9488 !important;
          color: white !important;
        }

        .about-page .about-value-line {
          transition: width 350ms ease;
        }

        .about-page .about-value-card:hover .about-value-line {
          width: 76px;
        }

        .about-page .about-scroll-line {
          animation: about-scroll-pulse 2.5s ease-in-out infinite;
        }

        .about-page a:focus-visible {
          outline: 2px solid #0d9488;
          outline-offset: 4px;
        }

        @keyframes about-icon-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes about-note-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes about-scroll-pulse {
          0%,
          100% {
            opacity: 0.45;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 639px) {
          .about-page .about-reveal-delay-1,
          .about-page .about-reveal-delay-2 {
            transition-delay: 0ms;
          }

          .about-page .about-brand-card:hover,
          .about-page .about-value-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }

          html.about-reveal-ready
            .about-page
            [data-about-reveal]:not(.about-is-visible) {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
