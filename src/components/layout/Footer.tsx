import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AshuLogo from "@/components/brand/AshuLogo";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Link
              href="/"
              aria-label="ASHU Technologies home"
              className="inline-flex rounded-xl transition-opacity hover:opacity-80"
            >
              <AshuLogo />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              Building modern websites and thoughtful digital solutions for
              growing businesses. We turn ideas into meaningful digital
              experiences.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface)]"
            >
              Let&apos;s work together
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="md:justify-self-end">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-12 gap-y-4"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Ashu Technologies. All rights reserved.
          </p>
          <p>Designed with care. Built for what&apos;s next.</p>
        </div>
      </div>
    </footer>
  );
}