
type AshuLogoProps = {
  compact?: boolean;
};

export default function AshuLogo({ compact = false }: AshuLogoProps) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3">
      {/* ASHU Brand Icon */}
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: "#0D9488",
          borderColor: "rgba(13,148,136,0.35)",
          boxShadow: "0 6px 20px rgba(13,148,136,0.18)",
        }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          width="32"
          height="32"
          fill="none"
        >
          <path
            d="M5 38 20.5 7h7L43 38h-8L24 17 13 38H5Z"
            fill="#FFFFFF"
          />
          <path
            d="M15.5 29H32"
            stroke="#102B46"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Brand Name */}
      <span className="flex flex-col">
        <span
          className="text-base font-black leading-tight tracking-[0.14em]"
          style={{ color: "var(--foreground)" }}
        >
          ASHU
        </span>

        {!compact && (
          <span
            className="mt-1 whitespace-nowrap text-[9px] font-bold leading-tight tracking-[0.16em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            TECHNOLOGIES
          </span>
        )}
      </span>
    </span>
  );
}
