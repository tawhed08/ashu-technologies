
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Website Development",
  "Web Application",
  "Dashboard & Admin Panel",
  "Backend & API",
  "UI/UX Design",
  "Business Automation",
  "Other",
];

const budgets = [
  "Under ৳10,000",
  "৳10,000–৳30,000",
  "৳30,000–৳75,000",
  "৳75,000+",
  "Not decided yet",
];

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition duration-300 placeholder:text-[var(--muted-foreground)] focus:border-[#0D9488] focus:ring-4 focus:ring-[#0D9488]/10";

const contactItems = [
  {
    icon: Mail,
    title: "Email us",
    description: "For project inquiries and collaboration",
    value: "hello@ashutechnologies.com",
    href: "mailto:hello@ashutechnologies.com",
  },
  {
    icon: MapPin,
    title: "Our location",
    description: "Based in Bangladesh",
    value: "Working digitally",
    href: undefined,
  },
  {
    icon: Clock3,
    title: "Let's discuss",
    description: "Have an idea? Let's talk about it.",
    value: "Start a conversation",
    href: "mailto:hello@ashutechnologies.com?subject=Project%20discussion",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      "[data-contact-reveal]"
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
        rootMargin: "0px 0px -30px 0px",
      }
    );

    root.classList.add("contact-reveal-ready");

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("contact-reveal-ready");
    };
  }, []);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${
        form.service || "Not specified"
      }\nBudget: ${
        form.budget || "Not specified"
      }\n\nProject details:\n${form.message}`
    );

    setSubmitted(true);

    window.location.href =
      `mailto:hello@ashutechnologies.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <style jsx global>{`
        .contact-page [data-contact-reveal] {
          opacity: 1;
          transform: none;
        }

        html.contact-reveal-ready
          .contact-page
          [data-contact-reveal]:not(.is-visible) {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
        }

        html.contact-reveal-ready
          .contact-page
          [data-contact-reveal] {
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-page .contact-card {
          will-change: transform;
        }

        .contact-page .contact-card:hover {
          box-shadow:
            0 22px 48px -30px rgba(13, 148, 136, 0.3),
            0 10px 24px -22px rgba(0, 0, 0, 0.2);
        }

        .contact-page .contact-grid-pattern {
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

        .contact-page input,
        .contact-page select,
        .contact-page textarea {
          color-scheme: inherit;
        }

        .contact-page input:focus-visible,
        .contact-page select:focus-visible,
        .contact-page textarea:focus-visible {
          outline: 2px solid #0d9488;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page [data-contact-reveal],
          .contact-page .contact-card,
          .contact-page .contact-card * {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          html.contact-reveal-ready
            .contact-page
            [data-contact-reveal]:not(.is-visible) {
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
              "radial-gradient(ellipse at 78% 18%, rgba(13,148,136,0.14), transparent 42%), radial-gradient(ellipse at 10% 100%, rgba(16,43,70,0.10), transparent 45%)",
          }}
        />

        <div
          aria-hidden="true"
          className="contact-grid-pattern pointer-events-none absolute inset-0 -z-10 opacity-60"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
            <div>
              <div
                data-contact-reveal
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9488]"
              >
                <Sparkles size={15} />
                Contact ASHU Technologies
              </div>

              <h1
                data-contact-reveal
                style={{ transitionDelay: "80ms" }}
                className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-[#0D9488] to-[#36C7B5] bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h1>

              <p
                data-contact-reveal
                style={{ transitionDelay: "150ms" }}
                className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg"
              >
                Every great digital product starts with a conversation. Tell
                us about your idea, your goals, and the challenge you want to
                solve. Let&apos;s explore what we can create together.
              </p>

              <div
                data-contact-reveal
                style={{ transitionDelay: "220ms" }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href="#project-inquiry"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0D9488] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0D9488]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B8278] hover:shadow-xl hover:shadow-[#0D9488]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:px-7 sm:py-4"
                >
                  Discuss your project
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="mailto:hello@ashutechnologies.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/50 hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] sm:px-7 sm:py-4"
                >
                  Send an email
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            {/* Hero contact card */}
            <div
              data-contact-reveal
              style={{ transitionDelay: "120ms" }}
              className="relative mx-auto w-full max-w-md"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#0D9488]/20 via-transparent to-[#102B46]/20 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-9">
                <div
                  aria-hidden="true"
                  className="contact-grid-pattern pointer-events-none absolute inset-0 opacity-40"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-[#0D9488]">
                      <MessageCircle size={27} />
                    </div>

                    <span className="rounded-full border border-[#0D9488]/20 bg-[#0D9488]/10 px-3 py-1.5 text-xs font-medium text-[#0D9488]">
                      Let&apos;s connect
                    </span>
                  </div>

                  <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
                    Have an idea?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                    Whether you need a website, a custom application, or a
                    smarter digital workflow, we&apos;re ready to hear what
                    you have in mind.
                  </p>

                  <div className="my-7 h-px bg-[var(--border)]" />

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[#102B46] text-xs font-bold text-white">
                        A
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[#0D9488] text-xs font-bold text-white">
                        T
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[var(--background)] text-[#0D9488]">
                        <MessageCircle size={15} />
                      </span>
                    </div>

                    <p className="text-xs leading-5 text-[var(--muted-foreground)]">
                      Your next project starts with a conversation.
                    </p>
                  </div>

                  <div className="mt-7 rounded-2xl border border-[#0D9488]/15 bg-[#0D9488]/5 p-4 transition duration-300 hover:border-[#0D9488]/35">
                    <div className="flex items-center gap-3">
                      <Mail size={19} className="shrink-0 text-[#0D9488]" />
                      <a
                        href="mailto:hello@ashutechnologies.com"
                        className="break-all text-sm font-medium transition hover:text-[#0D9488]"
                      >
                        hello@ashutechnologies.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details and inquiry form */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-8 lg:py-24">
        <aside data-contact-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
            Get in touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tell us what you&apos;re planning.
          </h2>

          <p className="mt-5 leading-8 text-[var(--muted-foreground)]">
            Share your requirements, goals, or questions. We&apos;ll use the
            details you provide to start a conversation about a suitable
            solution.
          </p>

          <div className="mt-9 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-[#0D9488] transition duration-300 group-hover:bg-[#0D9488] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                      {item.description}
                    </p>
                    <p className="mt-2 break-words text-sm font-medium">
                      {item.value}
                    </p>
                  </div>

                  {item.href && (
                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-[var(--muted-foreground)] transition group-hover:text-[#0D9488]"
                    />
                  )}
                </>
              );

              return (
                <div
                  key={item.title}
                  data-contact-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-card group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/40"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                      {content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            data-contact-reveal
            className="mt-6 rounded-2xl border border-[#0D9488]/20 bg-[#0D9488]/5 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-semibold">A quick question?</h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
              You don&apos;t need a complete project brief. A short email
              describing your idea is a great place to start.
            </p>

            <a
              href="mailto:hello@ashutechnologies.com?subject=Quick%20question"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] transition-all duration-300 hover:gap-3"
            >
              Start a conversation
              <ArrowRight size={16} />
            </a>
          </div>
        </aside>

        {/* Project inquiry form */}
        <div
          id="project-inquiry"
          data-contact-reveal
          className="scroll-mt-24 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-black/[0.03] sm:p-8 lg:p-10"
        >
          <div className="mb-8 border-b border-[var(--border)] pb-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0D9488]/15 bg-[#0D9488]/10 text-[#0D9488]">
              <Send size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Tell us about your project
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
              Fill in the details below. Your device&apos;s email app will
              prepare a message that you can review and send.
            </p>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-2xl border border-[#0D9488]/25 bg-[#0D9488]/10 p-4 text-sm leading-6"
            >
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-[#0D9488]"
              />
              <div>
                <p className="font-semibold">Your inquiry has been prepared.</p>
                <p className="mt-1 text-[var(--muted-foreground)]">
                  If your email app opens, review the message and press Send.
                  If it does not open, email us directly at{" "}
                  <a
                    href="mailto:hello@ashutechnologies.com"
                    className="font-semibold text-[#0D9488] underline underline-offset-4"
                  >
                    hello@ashutechnologies.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Your name <span className="text-[#0D9488]">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Email address <span className="text-[#0D9488]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="service"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Service needed
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Estimated budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Choose a budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2.5 block text-sm font-semibold"
              >
                Project details{" "}
                <span className="text-[#0D9488]">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="What would you like to build? Tell us about your goals, requirements, and ideas..."
                className={`${inputClass} resize-y leading-7`}
              />

              <p
                aria-live="polite"
                className="mt-2 text-right text-xs text-[var(--muted-foreground)]"
              >
                {form.message.length}/5000 characters
              </p>
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0D9488] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#0D9488]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B8278] hover:shadow-xl hover:shadow-[#0D9488]/25 focus:outline-none focus:ring-4 focus:ring-[#0D9488]/20"
            >
              Prepare project inquiry
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <p className="text-xs leading-6 text-[var(--muted-foreground)]">
              <span className="font-semibold">Privacy note:</span> This form
              opens your configured email app. It does not directly send or
              store your submission on a server.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
