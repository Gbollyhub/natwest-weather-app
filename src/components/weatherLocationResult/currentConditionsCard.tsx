import type { CurrentConditions } from "./types";

export function CurrentConditionsCard({ conditions }: { conditions: CurrentConditions }) {
  return (
    <section
      className="rounded-[14px] bg-white/46 px-9 pt-[34px] pb-[38px] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[18px]"
      aria-labelledby="weather-now-heading"
    >
      <h1 id="weather-now-heading" className="text-[22px] font-semibold tracking-[-0.01em]">
        {conditions.location}
      </h1>
      <p className="mt-[7px] text-[12.5px] text-weather-muted">{conditions.asOf}</p>
      <p className="mt-1.5 bg-gradient-to-b from-weather-amber-lift to-[#eda92f] bg-clip-text text-[52px] leading-[1.15] font-semibold text-transparent">
        {conditions.temperature}
      </p>

      <div className="mt-[22px] mb-[26px] h-px w-4/5 bg-weather-hairline" />

      <p className="text-[19px] font-semibold tracking-[-0.01em]">{conditions.phrase}</p>
      <p className="mt-[9px] text-xs text-weather-muted">{conditions.phraseSub}</p>
    </section>
  );
}
