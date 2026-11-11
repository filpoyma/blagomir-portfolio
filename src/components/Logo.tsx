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
      <img
        src="/images/dharma-wheel.svg"
        width="34"
        height="34"
        alt=""
        aria-hidden="true"
        className="shrink-0 motion-safe:animate-[spin_8s_linear_infinite_paused] group-hover:[animation-play-state:running]"
      />
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
