import { cn } from "@/lib/utils";

export function SkyArtwork({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-0 mb-2 max-w-[520px] lg:mt-[5px] lg:mr-[-70px] lg:mb-0 lg:ml-[-110px] lg:max-w-none",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 620 470" role="presentation" className="block h-auto w-full">
        <defs>
          <radialGradient id="weatherSun" cx="34%" cy="28%" r="78%">
            <stop offset="0%" stopColor="#ffe28c" />
            <stop offset="52%" stopColor="#fbc23f" />
            <stop offset="100%" stopColor="#ef9c17" />
          </radialGradient>
          <linearGradient id="weatherCloud" x1="0.15" y1="0" x2="0.75" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="62%" stopColor="#fbfaf7" />
            <stop offset="100%" stopColor="#ece8e0" />
          </linearGradient>
          <filter id="weatherSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="weatherShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="26" stdDeviation="26" floodColor="#c8bda6" floodOpacity="0.28" />
          </filter>
        </defs>

        <circle cx="424" cy="168" r="118" fill="url(#weatherSun)" />

        <g filter="url(#weatherShadow)">
          <path
            fill="url(#weatherCloud)"
            d="M118 330c-38 0-66-26-66-60 0-31 23-56 54-60 6-45 45-79 92-79 34 0 64 18 80 45 10-6 21-9 34-9 34 0 62 26 65 59 30 5 52 30 52 60 0 34-28 60-63 60H118Z"
          />
          <path
            fill="url(#weatherLobe)"
            d="M369 226c26 0 48 17 55 41 3 10 4 21 2 32-5 20-22 31-45 31-33 0-60-26-60-58s21-46 48-46Z"
            opacity="0.98"
          />
        </g>
      </svg>
    </div>
  );
}
