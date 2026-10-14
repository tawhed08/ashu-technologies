
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#171B22] px-6 text-[#CBD5E1]">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 text-7xl font-bold tracking-tight">
          404
        </div>

        <div className="mx-auto mb-6 h-px w-20 bg-[#CBD5E1]/40" />

        <h1 className="text-2xl font-semibold sm:text-3xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-400">
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to Ashu Technologies.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#CBD5E1] px-6 py-3 text-sm font-semibold text-[#171B22] transition hover:bg-white"
        >
          Back to homepage
        </Link>

        <p className="mt-10 text-xs tracking-[0.2em] text-slate-500">
          ASHU TECHNOLOGIES
        </p>
      </div>
    </main>
  );
}
