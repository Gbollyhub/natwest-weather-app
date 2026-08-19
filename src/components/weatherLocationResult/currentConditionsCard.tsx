"use client";

import { formatDateTime } from "@/lib/date";
import type { CurrentConditions } from "./types";
import useForecast from "@/hooks/useForecast";

export function CurrentConditionsCard() {
  const { forecast } = useForecast();

  if (!forecast) return null;
  return (
    <section
      className="pt-[0px] lg:pt-[45px] pb-[38px]"
      aria-labelledby="weather-now-heading"
    >
      <h1
        id="weather-now-heading"
        className="text-[25px] lg:text-[32px] font-semibold tracking-[-0.01em]"
      >
        {forecast.location.name}, {forecast.location.region},{" "}
        {forecast.location.country}
      </h1>
      <p className="mt-[7px] text-[12px] text-weather-muted">
        As of {formatDateTime(forecast.current.last_updated)}
      </p>
      <p className="mt-1.5 bg-gradient-to-b from-weather-amber-lift to-[#eda92f] bg-clip-text text-[52px] leading-[1.15] font-semibold text-transparent">
        {Math.round(forecast.current.temp_c)}°
      </p>

      <div className="mt-[22px] mb-[26px] h-px w-4/5 bg-weather-hairline" />

      <div className="flex justify-between">
        <div>
          <p className="text-[19px] font-semibold tracking-[-0.01em]">
            {forecast.current.condition.text}
          </p>
          <p className="mt-[9px] text-xs text-weather-muted">
            {forecast.current.chance_of_rain}% chance of rain
          </p>
        </div>
        <div>
          <p className="text-[19px] font-semibold tracking-[-0.01em]">
            {Math.round(forecast.current.feelslike_c)}°
          </p>
          <p className="mt-[9px] text-xs text-weather-muted">Feels like</p>
        </div>
      </div>
    </section>
  );
}
