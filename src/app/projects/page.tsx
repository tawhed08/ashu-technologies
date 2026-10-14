
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FolderGit2,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "E-Membership Platform",
    category: "Web Applications",
    description:
      "A membership management concept featuring member profiles, membership plans, payment workflows, and digital certificates.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    number: "01",
    demo: "",
    source: "",
  },
  {
    title: "Inventory Management",
    category: "Business Systems",
    description:
      "A business management concept for tracking inventory, organizing products, and monitoring everyday operations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    number: "02",
    demo: "",
    source: "",
  },
  {
    title: "Spider Clock",
    category: "Web Applications",
    description:
      "A modern clock experience with multiple themes, world clocks, alarms, a stopwatch, and a timer.",
    technologies: ["Next.js", "TypeScript", "PWA"],
    number: "03",
    demo: "https://spider-clock-lac.vercel.app/",
    source: "https://github.com/tawhed08/spider-clock",
  },
  {
    title: "Business Website",
    category: "Websites",
    description:
      "A polished, responsive website concept for presenting a company's services, projects, and business identity.",
    technologies: ["Next.js", "Tailwind CSS", "Lucide"],
    number: "04",
    demo: "",
    source: "",
  },
  {
    title: "Admin Dashboard",
    category: "Business Systems",
    description:
      "A dashboard concept focused on clear data presentation, management workflows, and responsive layouts.",
    technologies: ["React", "TypeScript", "Charts"],
    number: "05",
    demo: "",
    source: "",
  },
  {
    title: "Digital Service Portal",
    category: "Web Applications",
    description:
      "A service portal concept designed to organize digital services and make essential information easier to access.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    number: "06",
    demo: "",
    source: "",
  },
];

const filters = [
  "All Projects",
  "Web Applications",
  "Websites",
  "Business Systems",
];

const categoryIcons = {
  "Web Applications": Code2,
  Websites: Globe,
  "Business Systems": Layers3,
};

const highlights = [
  { icon: FolderGit2, label: "Project portfolio" },
  { icon: Layers3, label: "Modern technology" },
  { icon: Code2, label: "Practical solutions" },
];

const statistics = [
  { value: "06", label: "Project concepts" },
  { value: "03", label: "Project categories" },
  { value: "01", label: "Live demo featured" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  // Enable reveal animations once when the page mounts.
  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      motionPreference.matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    root.classList.add("projects-reveal-ready");

    return () => {
      root.classList.remove("projects-reveal-ready");
    };
  }, []);

  // Observe the currently rendered elements whenever the filter changes.
  useEffect(() => {
    const root = document.documentElement;

    if (
      !root.classList.contains("projects-reveal-ready") ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      ".projects-page [data-project-reveal]:not(.is-visible)"
    );

    if (!elements.length) {
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
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [activeFilter]);

  return (
    <main className="projects-page min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <style jsx global>{`
        .projects-page [data-project-reveal] {
          opacity: 1;
          transform: none;
        }

        html.projects-reveal-ready
          .projects-page
          [data-project-reveal]:not(.is-visible) {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
        }

        html.projects-reveal-ready
          .projects-page
          [data-project-reveal] {
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .projects-page .project-card {
          will-change: transform;
        }

        .projects-page .project-card:hover {
          box-shadow:
            0 24px 55px -30px rgba(13, 148, 136, 0.3),
            0 12px 30px -24px rgba(0, 0, 0, 0.2);
        }

        .projects-page .project-visual-grid {
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

        .projects-page .project-filter {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-page [data-project-reveal],
          .projects-page .project-card,
          .projects-page .project-card * {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          html.projects-reveal-ready
            .projects-page
            [data-project-reveal]:not(.is-visible) {
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
              "radial-gradient(ellipse at 80% 10%, rgba(13,148,136,0.16), transparent 42%), radial-gradient(ellipse at 5% 95%, rgba(16,43,70,0.12), transparent 45%)",
          }}
        />

        <div
          aria-hidden="true"
          className="project-visual-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div
              data-project-reveal
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9488]"
            >
              <Sparkles size={15} />
              Our work &amp; ideas
            </div>

            <h1
              data-project-reveal
              className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              style={{ transitionDelay: "70ms" }}
            >
              Ideas transformed into{" "}
              <span className="bg-gradient-to-r from-[#0D9488] to-[#36C7B5] bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            <p
              data-project-reveal
              className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg"
              style={{ transitionDelay: "140ms" }}
            >
              Explore projects and concepts showcasing our approach to modern
              websites, web applications, and business software.
            </p>

            <div
              data-project-reveal
              className="mt-9 flex flex-wrap gap-3"
              style={{ transitionDelay: "210ms" }}
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--muted-foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/40"
                  >
                    <Icon size={16} className="text-[#0D9488]" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                data-project-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#0D9488]/40 sm:p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-[#0D9488] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)] sm:text-sm">
                  {stat.label}
                </p>
                <div className="mt-4 h-1 w-9 rounded-full bg-[#0D9488]/35 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0D9488]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project collection */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div data-project-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
              Selected projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Work that reflects our approach.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-foreground)]">
              Explore the collection by category and discover the technologies
              behind each project.
            </p>
          </div>

          <p
            data-project-reveal
            className="shrink-0 text-sm text-[var(--muted-foreground)]"
          >
            Showing{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {filteredProjects.length}
            </span>{" "}
            of {projects.length} projects
          </p>
        </div>

        {/* Interactive filters */}
        <div
          data-project-reveal
          className="mb-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`project-filter rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                  isActive
                    ? "border-[#0D9488] bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/15"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted-foreground)] hover:border-[#0D9488]/50 hover:text-[#0D9488]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <div
          className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {filteredProjects.map((project, index) => {
            const Icon =
              categoryIcons[
                project.category as keyof typeof categoryIcons
              ] ?? Code2;

            return (
              <article
                key={project.number}
                data-project-reveal
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                className="project-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[#0D9488]/40"
              >
                {/* Project visual */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--background)] sm:h-52">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-80 transition duration-700 group-hover:scale-110"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(13,148,136,0.17), transparent 55%), linear-gradient(135deg, rgba(16,43,70,0.08), transparent 70%)",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="project-visual-grid absolute inset-0 opacity-70"
                  />

                  <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)]">
                    PROJECT / {project.number}
                  </span>

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-[#0D9488]/20 bg-[var(--surface)] text-[#0D9488] shadow-lg shadow-[#0D9488]/5 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#0D9488]/50">
                    <Icon size={34} strokeWidth={1.5} />
                  </div>

                  <span className="absolute bottom-5 right-5 max-w-[70%] truncate rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)]">
                    {project.category}
                  </span>
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted-foreground)]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-xs font-medium text-[var(--muted-foreground)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-5">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] transition-all duration-300 hover:gap-3 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                      >
                        Live Demo
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--muted-foreground)]">
                        Demo coming soon
                      </span>
                    )}

                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[#0D9488] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                      >
                        Source Code
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transparency note */}
        <div
          data-project-reveal
          className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
        >
          <CheckCircle2
            size={19}
            className="mt-0.5 shrink-0 text-[#0D9488]"
          />
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            Portfolio transparency: projects without a live demo are concepts
            or project descriptions. They are not presented as completed
            client projects.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(13,148,136,0.13), transparent 55%)",
          }}
        />

        <div
          data-project-reveal
          className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-28"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D9488]/20 bg-[#0D9488]/10 text-[#0D9488] transition duration-500 hover:rotate-6 hover:scale-105">
            <FolderGit2 size={25} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#0D9488]">
            Have an idea?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s create something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted-foreground)]">
            Have a website, web application, or business system in mind?
            Let&apos;s discuss your goals and explore a solution that fits
            your needs.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0D9488] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0D9488]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B8278] hover:shadow-xl hover:shadow-[#0D9488]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Start a project
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
