type TLogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function Logo({ light = true, compact = false }: TLogoProps) {
  return (
    <a
      href="/#top"
      data-testid="logo-home-link"
      className="group inline-flex items-center gap-3"
      aria-label="ДХАРМА108 — на главную"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]"
      >
        <rect width="64" height="64" rx="14" fill={light ? "#0C1322" : "#0F172A"} />
        <g stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M32 11v35" />
          <path d="M21 17v9c0 7.5 4.6 11 11 12.5" />
          <path d="M43 17v9c0 7.5-4.6 11-11 12.5" />
          <path d="M23 46h18" />
          <path d="M27 53h10" />
        </g>
        <circle cx="32" cy="9.5" r="2.6" fill="#D9531E" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-[0.08em] ${
            light ? "text-ivory" : "text-deep"
          }`}
        >
          ДХАРМА<span className="text-gold">108</span>
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.24em] ${
              light ? "text-ivory/50" : "text-deep/50"
            }`}
          >
            Шива Дева-Парампара
          </span>
        )}
      </span>
    </a>
  );
}
