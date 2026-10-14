
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#171B22] px-6 text-[#CBD5E1]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#CBD5E1]/20 bg-[#CBD5E1]/10">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#CBD5E1]/20 border-t-[#CBD5E1]" />
        </div>

        <h1 className="text-xl font-bold tracking-[0.2em]">
          ASHU
        </h1>

        <p className="mt-2 text-xs tracking-[0.25em] text-slate-400">
          TECHNOLOGIES
        </p>

        <p className="mt-6 text-sm text-slate-400">
          Preparing your digital experience...
        </p>
      </div>
    </main>
  );
}
