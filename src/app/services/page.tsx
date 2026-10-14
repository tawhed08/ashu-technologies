
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDownRight,
  Code2,
  Database,
  Globe,
  Layers3,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive business websites designed to communicate your brand and turn visitors into customers.",
    tags: ["Business Websites", "Landing Pages", "SEO-Friendly"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom web applications built around your workflow, business requirements, and long-term goals.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    description:
      "Clean, data-focused dashboards that help teams manage users, monitor activity, and make better decisions.",
    tags: ["Analytics", "Admin Systems", "Management"],
  },
  {
    number: "04",
    icon: Database,
    title: "Backend & API Development",
    description:
      "Structured backend systems and APIs designed to connect your application with its data and services.",
    tags: ["REST APIs", "Node.js", "Databases"],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Responsive UI Development",
    description:
      "Accessible, polished interfaces that adapt smoothly to mobile phones, tablets, laptops, and desktops.",
    tags: ["Responsive Design", "Accessibility", "UI"],
  },
  {
    number: "06",
    icon: Layers3,
    title: "UI/UX & Product Design",
    description:
      "Thoughtful digital experiences focused on usability, clear navigation, consistent design, and user needs.",
    tags: ["Wireframes", "Prototypes", "Design Systems"],
  },
  {
    number: "07",
    icon: Workflow,
    title: "Business Automation",
    description:
      "Practical digital workflows that reduce repetitive tasks and make everyday business operations more efficient.",
    tags: ["Workflow Design", "Integrations", "Efficiency"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your goals, audience, and requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "We map out the experience and define the solution.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the product with care and regular feedback.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We test the work and prepare it for launch.",
  },
];

const expertise = [
  "Modern web experiences",
  "Reliable application architecture",
  "Responsive user interfaces",
  "Business-focused solutions",
];

export default function ServicesPage() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-service-reveal]"
      )
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("service-is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    document.documentElement.classList.add(
      "services-reveal-ready"
    );

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove(
        "services-reveal-ready"
      );
    };
  }, []);

  return (
    <main
      className="services-page relative min-h-screen overflow-hidden"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="services-orb pointer-events-none absolute -right-40 -top-40 -z-10 h-[340px] w-[340px] rounded-full blur-[100px] sm:h-[460px] sm:w-[460px]"
          style={{ background: "rgba(13,148,136,0.17)" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-[300px] w-[300px] rounded-full blur-[100px] sm:h-[360px] sm:w-[360px]"
          style={{ background: "rgba(16,43,70,0.12)" }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-32">
          <div data-service-reveal className="service-reveal">
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs"
              style={{
                borderColor: "rgba(13,148,136,0.28)",
                background: "rgba(13,148,136,0.08)",
                color: "#0D9488",
              }}
            >
              <Sparkles size={14} />
              What We Do
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Technology services for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #0D9488 5%, #2DD4BF 55%, var(--foreground) 110%)",
                }}
              >
                ambitious ideas.
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-8 sm:mt-7 sm:text-lg"
              style={{ color: "var(--muted-foreground)" }}
            >
              From your first business website to a custom digital
              platform, we help transform business needs into useful
              digital solutions.
            </p>

            <Link
              href="/contact"
              className="service-primary-button group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white sm:mt-9"
            >
              Discuss your project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <div
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium sm:text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} color="#0D9488" />
                Thoughtful design
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} color="#0D9488" />
                Modern technology
              </span>
            </div>
          </div>

          {/* EXPERTISE PANEL */}
          <div
            data-service-reveal
            className="service-reveal service-delay-2 relative mx-auto w-full max-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,148,136,0.20), rgba(16,43,70,0.10))",
              }}
            />

            <div
              className="service-overview-card relative overflow-hidden rounded-3xl border p-6 sm:p-9"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "0 24px 80px rgba(16,43,70,0.10)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl"
                style={{ background: "rgba(13,148,136,0.14)" }}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: "#0D9488" }}
                    >
                      Our expertise
                    </p>
                    <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                      Digital, done thoughtfully.
                    </h2>
                  </div>

                  <div
                    className="service-layer-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{
                      background: "#0D9488",
                      boxShadow: "0 8px 24px rgba(13,148,136,0.2)",
                    }}
                  >
                    <Layers3 size={23} />
                  </div>
                </div>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  From design to development, we focus on practical
                  solutions tailored to real business needs.
                </p>

                <div className="mt-7 space-y-4">
                  {expertise.map((item, index) => (
                    <div
                      key={item}
                      className="service-expertise-item flex items-center gap-3"
                      style={{
                        animationDelay: `${index * 90}ms`,
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0"
                        style={{ color: "#0D9488" }}
                      />
                      <span className="text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 h-px"
                  style={{ background: "var(--border)" }}
                />

                <p
                  className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Thoughtful design · Modern technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 lg:flex-row lg:items-end">
          <div data-service-reveal className="service-reveal">
            <p
              className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: "#0D9488" }}
            >
              Our expertise
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Solutions built around you.
            </h2>
          </div>

          <p
            data-service-reveal
            className="service-reveal service-delay-1 max-w-lg text-sm leading-7 sm:text-base lg:max-w-md"
            style={{ color: "var(--muted-foreground)" }}
          >
            Every project is different. We focus on choosing the right
            tools and approach for the problem you need to solve.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                data-service-reveal
                className={`service-reveal service-card group relative flex flex-col overflow-hidden rounded-2xl border p-6 sm:p-8 ${
                  index % 3 === 1 ? "service-delay-1" : ""
                } ${index % 3 === 2 ? "service-delay-2" : ""}`}
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="service-card-glow pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
                  style={{ background: "rgba(13,148,136,0.18)" }}
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className="service-card-icon flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(13,148,136,0.10)",
                      color: "#0D9488",
                    }}
                  >
                    <Icon size={23} />
                  </div>

                  <span
                    className="text-xs font-extrabold tracking-[0.2em]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold leading-snug">
                  {service.title}
                </h3>

                <p
                  className="relative mt-4 flex-1 text-sm leading-7"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--muted-foreground)",
                        background: "var(--background)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="service-card-line relative mt-7 h-1 w-10 rounded-full"
                  style={{ background: "#0D9488" }}
                />
              </article>
            );
          })}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section
        className="relative overflow-hidden border-y px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-10 h-72 w-72 rounded-full blur-[100px]"
          style={{ background: "rgba(13,148,136,0.08)" }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div data-service-reveal className="service-reveal mb-12 max-w-2xl sm:mb-14">
            <p
              className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: "#0D9488" }}
            >
              How we work
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A clear path from idea to launch.
            </h2>

            <p
              className="mt-5 text-sm leading-7 sm:text-base"
              style={{ color: "var(--muted-foreground)" }}
            >
              A straightforward process helps keep every project focused,
              collaborative, and moving in the right direction.
            </p>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-6 hidden h-px lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(13,148,136,0.4), transparent)",
              }}
            />

            {process.map((step, index) => (
              <article
                key={step.number}
                data-service-reveal
                className={`service-reveal service-process-card group relative rounded-2xl border p-6 ${
                  index === 1 ? "service-delay-1" : ""
                } ${index >= 2 ? "service-delay-2" : ""}`}
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <div className="relative flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black"
                    style={{
                      background: "rgba(13,148,136,0.10)",
                      color: "#0D9488",
                    }}
                  >
                    {step.number}
                  </span>

                  <ArrowDownRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    style={{ color: "var(--muted-foreground)" }}
                  />
                </div>

                <h3 className="mt-7 text-xl font-extrabold">
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {step.description}
                </p>

                <div
                  className="service-process-line mt-6 h-px w-full"
                  style={{ background: "var(--border)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-64 max-w-3xl rounded-full blur-[100px]"
          style={{ background: "rgba(13,148,136,0.12)" }}
        />

        <div
          data-service-reveal
          className="service-reveal relative mx-auto max-w-5xl overflow-hidden rounded-3xl border px-6 py-12 text-center sm:px-12 sm:py-16 lg:py-20"
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
              className="mt-6 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#0D9488" }}
            >
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--muted-foreground)" }}
            >
              Tell us what you have in mind. Together, we can explore the
              right solution for your business.
            </p>

            <Link
              href="/contact"
              className="service-primary-button group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white"
            >
              Contact our team
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ANIMATION STYLES */}
      <style jsx global>{`
        .services-page {
          isolation: isolate;
        }

        .services-page .border-b,
        .services-page .border-y {
          border-color: var(--border);
        }

        /* Keep all content visible unless the observer is ready. */
        .services-page [data-service-reveal] {
          opacity: 1;
          transform: none;
        }

        html.services-reveal-ready
          .services-page
          [data-service-reveal]:not(.service-is-visible) {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
        }

        .services-page .service-reveal {
          transition:
            opacity 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .services-page .service-reveal.service-is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .services-page .service-delay-1 {
          transition-delay: 100ms;
        }

        .services-page .service-delay-2 {
          transition-delay: 180ms;
        }

        .services-page .service-primary-button {
          background: #0d9488;
          box-shadow: 0 10px 28px rgba(13, 148, 136, 0.2);
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease;
        }

        .services-page .service-primary-button:hover {
          background: #0f8278;
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(13, 148, 136, 0.26);
        }

        .services-page .service-overview-card {
          transition:
            transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 400ms ease;
        }

        .services-page .service-overview-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 90px rgba(16, 43, 70, 0.14);
        }

        .services-page .service-layer-icon {
          animation: services-icon-float 5s ease-in-out infinite;
        }

        .services-page .service-expertise-item {
          animation: services-item-enter 500ms both;
        }

        .services-page .service-card {
          transition:
            transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 300ms ease,
            box-shadow 350ms ease;
        }

        .services-page .service-card-glow {
          opacity: 0;
          transition: opacity 350ms ease;
        }

        .services-page .service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(13, 148, 136, 0.48);
          box-shadow: 0 20px 45px rgba(16, 43, 70, 0.09);
        }

        .services-page .service-card:hover .service-card-glow {
          opacity: 1;
        }

        .services-page .service-card-icon {
          transition:
            transform 300ms ease,
            background 300ms ease,
            color 300ms ease;
        }

        .services-page .service-card:hover .service-card-icon {
          transform: rotate(-5deg) scale(1.07);
          background: #0d9488 !important;
          color: white !important;
        }

        .services-page .service-card-line {
          transition: width 350ms ease;
        }

        .services-page .service-card:hover .service-card-line {
          width: 68px;
        }

        .services-page .service-process-card {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .services-page .service-process-card:hover {
          transform: translateY(-5px);
          border-color: rgba(13, 148, 136, 0.45);
          box-shadow: 0 14px 35px rgba(16, 43, 70, 0.07);
        }

        .services-page .service-process-line {
          transition:
            background 300ms ease,
            transform 300ms ease;
          transform-origin: left;
        }

        .services-page .service-process-card:hover .service-process-line {
          background: rgba(13, 148, 136, 0.55);
          transform: scaleX(1);
        }

        .services-page a:focus-visible {
          outline: 2px solid #0d9488;
          outline-offset: 4px;
        }

        @keyframes services-icon-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes services-item-enter {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 639px) {
          .services-page .service-delay-1,
          .services-page .service-delay-2 {
            transition-delay: 0ms;
          }

          .services-page .service-overview-card:hover,
          .services-page .service-card:hover,
          .services-page .service-process-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-page *,
          .services-page *::before,
          .services-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }

          html.services-reveal-ready
            .services-page
            [data-service-reveal]:not(.service-is-visible) {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
