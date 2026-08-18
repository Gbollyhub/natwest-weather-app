import type { SunTimes } from "./types";
import { ArrowDownIcon, ArrowUpIcon } from "./icons";

export function SunPathArc({ sunrise, sunset }: SunTimes) {
  return (
    <div className="mr-[34px] w-[112px]">
      <svg viewBox="0 0 112 46" width="112" height="46" aria-hidden="true">
        <defs>
          <linearGradient id="weatherArc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#e07f2a" />
            <stop offset="55%" stopColor="#ee9d33" />
            <stop offset="100%" stopColor="#f6c455" />
          </linearGradient>
        </defs>
        <path d="M10 40a46 46 0 0 1 92 0" fill="none" stroke="url(#weatherArc)" strokeWidth="1.8" strokeLinecap="round" />
        <g stroke="#f3b53f" strokeWidth="1.1" strokeLinecap="round">
          <circle cx="88" cy="27" r="3" fill="#f8c95e" stroke="none" />
          <path d="M88 21.4v-1.8M88 34.4v1.8M82.4 27h-1.8M95.4 27h-1.8M84 23l-1.3-1.3M93.3 32.3 92 31M92 23l1.3-1.3M82.7 32.3 84 31" />
        </g>
      </svg>
      <div className="mt-0.5 flex justify-between text-[8.5px] text-weather-ink-3">
        <span className="inline-flex items-center gap-[5px]">
          <ArrowUpIcon />
          {sunrise}
        </span>
        <span className="inline-flex items-center gap-[5px]">
          <ArrowDownIcon />
          {sunset}
        </span>
      </div>
    </div>
  );
}
