
"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    number: "01",
    title: "Meaningful Work",
    description:
      "Work on practical digital products and solve problems that matter to real users.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Continuous Learning",
    description:
      "Explore modern technologies, improve your skills, and keep growing as a developer.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Collaborative Culture",
    description:
      "Value thoughtful communication, teamwork, and sharing knowledge with others.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Modern Technology",
    description:
      "Build with modern web tools and focus on maintainable, quality-driven solutions.",
  },
];

const roles = [
  {
    title: "Frontend Developer",
    category: "Frontend Engineering",
    description:
      "Help create responsive, accessible, and polished user interfaces with modern frontend technologies.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Developer",
    category: "Backend Engineering",
    description:
      "Contribute to API design, application logic, database architecture, and reliable backend systems.",
    skills: ["Node.js", "REST APIs", "Databases", "Security"],
  },
  {
    title: "UI/UX Designer",
    category: "Product Design",
    description:
      "Turn product requirements into clear user flows, wireframes, and intuitive digital experiences.",
    skills: ["UI Design", "UX Research", "Prototyping"],
  },
];

const principles = [
  "Curiosity over assumptions",
  "Quality over shortcuts",
  "Collaboration over silos",
];

export default function CareersPage() {
  useEffect(() => {
    const root = document.documentElement;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      "[data-career-reveal]"
    );

    if (!elements.length) return;

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
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    root.classList.add("careers-reveal-ready");

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("careers-reveal-ready");
    };
  }, []);

  return (
    <main className="careers-page min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <style jsx global>{`
        .careers-page [data-career-reveal] {
          opacity: 1;
          transform: none;
        }

        html.careers-reveal-ready
          .careers-page
          [data-career-reveal]:not(.is-visible) {
          opacity: 0;
          transform: translate3d(0, 25px, 0);
        }

        html.careers-reveal-ready
          .careers-page
          [data-career-reveal] {
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .careers-page .career-card {
          will-change: transform;
        }

        .careers-page .career-card:hover {
          box-shadow:
            0 24px 55px -32px rgba(13, 148, 136, 0.3),
            0 12px 30px -24px rgba(0, 0, 0, 0.2);
        }

        .careers-page .career-grid-pattern {
          background-image:
            linear-gradient(
              rgba(13, 148, 136, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(13, 148, 136, 0.055) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 95%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .careers-page [data-career-reveal],
          .careers-page .career-card,
          .careers-page .career-card * {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          html.careers-reveal-ready
            .careers-page
            [data-career-reveal]:not(.is-visible) {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative isolate border-b border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 80% 15%, rgba(13,148,136,0.16), transparent 42%), radial-gradient(ellipse at 5% 95%, rgba(16,43,70,0.12), transparent 42%)",
          }}
        />

        <div
          aria-hidden="true"
          className="career-grid-pattern pointer-events-none absolute inset-0 -z-10 opacity-70"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <div>
            <div
              data-career-reveal
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9488]"
            >
              <Sparkles size={15} />
              Careers at ASHU Technologies
            </div>

            <h1
              data-career-reveal
              style={{ transitionDelay: "70ms" }}
              className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
            >
              Build what&apos;s next.{" "}
              <span className="bg-gradient-to-r from-[#0D9488] to-[#36C7B5] bg-clip-text text-transparent">
                Grow with us.
              </span>
            </h1>

            <p
              data-career-reveal
              style={{ transitionDelay: "140ms" }}
              className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg"
            >
              Great technology comes from curiosity, collaboration, and a
              commitment to continuous improvement. Discover the values and
              skills that shape our future opportunities.
            </p>

            <div
              data-career-reveal
              style={{ transitionDelay: "210ms" }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0D9488] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0D9488]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B8278] hover:shadow-xl hover:shadow-[#0D9488]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:px-7 sm:py-4"
              >
                Introduce yourself
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/50 hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] sm:px-7 sm:py-4"
              >
                Explore opportunities
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div
              data-career-reveal
              style={{ transitionDelay: "280ms" }}
              className="mt-6 flex items-start gap-2 text-sm leading-6 text-[var(--muted-foreground)]"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#0D9488]"
              />
              <p>
                No open positions are currently advertised on this page.
              </p>
            </div>
          </div>

          {/* Career highlight */}
          <div
            data-career-reveal
            style={{ transitionDelay: "140ms" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#0D9488]/20 via-transparent to-[#102B46]/20 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-9">
              <div
                aria-hidden="true"
                className="career-grid-pattern pointer-events-none absolute inset-0 opacity-40"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-[#0D9488]">
                    <Users size={27} />
                  </div>

                  <span className="rounded-full border border-[#0D9488]/20 bg-[#0D9488]/10 px-3 py-1.5 text-xs font-semibold text-[#0D9488]">
                    Our approach
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
                  Better together.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  We value people who are curious, thoughtful, and excited to
                  create useful digital experiences. Skills grow through
                  practice, feedback, and collaboration.
                </p>

                <div className="mt-8 space-y-3">
                  {principles.map((value, index) => (
                    <div
                      key={value}
                      className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3.5 transition duration-300 hover:border-[#0D9488]/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0D9488]/10 text-[#0D9488]">
                        <CheckCircle2 size={17} />
                      </span>
                      <span className="text-sm font-medium">{value}</span>
                      <span className="ml-auto text-xs text-[var(--muted-foreground)]">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#0D9488]/15 bg-[#0D9488]/5 p-4">
                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    Interested in working together?
                  </p>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    Start a conversation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture and benefits */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div data-career-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
              Our culture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Good work starts with good principles.
            </h2>
          </div>

          <p
            data-career-reveal
            style={{ transitionDelay: "100ms" }}
            className="max-w-2xl leading-8 text-[var(--muted-foreground)] md:justify-self-end"
          >
            We aim to create an environment where people can contribute
            ideas, learn from challenges, and take pride in the quality of
            their work.
          </p>
        </div>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                data-career-reveal
                style={{ transitionDelay: `${(index % 4) * 90}ms` }}
                className="career-card group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0D9488]/40"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0D9488]/5 blur-2xl transition duration-500 group-hover:bg-[#0D9488]/15"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-[#0D9488] transition duration-300 group-hover:rotate-3 group-hover:bg-[#0D9488] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[var(--muted-foreground)] opacity-60">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="relative mt-6 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="relative mt-3 flex-1 text-sm leading-7 text-[var(--muted-foreground)]">
                  {benefit.description}
                </p>

                <div className="relative mt-6 h-1 w-10 rounded-full bg-[#0D9488]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0D9488]" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Future opportunities */}
      <section
        id="opportunities"
        className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div data-career-reveal className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
              Areas of interest
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Where you could contribute.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted-foreground)]">
              Explore the types of roles that may be relevant to future
              opportunities. These are areas of interest, not currently
              available vacancies.
            </p>
          </div>

          <div className="space-y-5">
            {roles.map((role, index) => (
              <article
                key={role.title}
                data-career-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className="career-card group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 transition duration-300 hover:border-[#0D9488]/40 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex min-w-0 gap-4 sm:gap-5">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-sm font-bold text-[#0D9488] sm:flex">
                      0{index + 1}
                    </div>

                    <div className="min-w-0 max-w-3xl">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0D9488]/20 bg-[#0D9488]/5 px-3 py-1.5 text-xs font-semibold text-[#0D9488]">
                        <Users size={14} />
                        Future opportunity
                      </div>

                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                        {role.category}
                      </p>

                      <h3 className="text-xl font-bold sm:text-2xl">
                        {role.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {role.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:border-[#0D9488]/40 hover:text-[#0D9488]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition duration-300 hover:border-[#0D9488] hover:bg-[#0D9488] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    Get in touch
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden border-t border-[var(--border)] px-5 py-20 sm:px-6 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(13,148,136,0.13), transparent 55%)",
          }}
        />

        <div
          data-career-reveal
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D9488]/20 bg-[#0D9488]/10 text-[#0D9488] transition duration-500 hover:rotate-6 hover:scale-105">
            <HeartHandshake size={26} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
            Let&apos;s connect
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Don&apos;t see your role?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted-foreground)]">
            Tell us about your skills, interests, and the kind of work you
            want to do. Introduce yourself and start a conversation about
            potential future opportunities.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0D9488] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0D9488]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B8278] hover:shadow-xl hover:shadow-[#0D9488]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Contact our team
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
