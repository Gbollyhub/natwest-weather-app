"use client";

import { formatDateTime } from "@/lib/date";
import { formatTemperature } from "@/lib/temperature";
import { useTemperatureUnit } from "@/context/TemperatureUnitContextt";
import { ForecastLocation, CurrentWeather } from "@/types";

interface Props {
  current: CurrentWeather;
  location: ForecastLocation;
}

export function CurrentConditionsCard({ location, current }: Props) {
  const { unit } = useTemperatureUnit();

  return (
    <section
      className="pt-[0px] lg:pt-[45px] pb-[38px]"
      aria-labelledby="weather-now-heading"
    >
      <h1
        id="weather-now-heading"
        className="text-[25px] lg:text-[32px] font-semibold tracking-[-0.01em]"
      >
        {location.name}, {location.region}, {location.country}
      </h1>
      <p className="mt-[7px] text-[12px] text-weather-muted">
        As of {formatDateTime(current.last_updated)}
      </p>
      <p className="mt-1.5 bg-gradient-to-b from-weather-amber-lift to-[#eda92f] bg-clip-text text-[52px] leading-[1.15] font-semibold text-transparent">
        {formatTemperature(current.temp_c, unit)}
      </p>

      <div className="mt-[22px] mb-[26px] h-px w-4/5 bg-weather-hairline" />

      <div className="flex justify-between">
        <div>
          <p className="text-[19px] font-semibold tracking-[-0.01em]">
            {current.condition.text}
          </p>
          <p className="mt-[9px] text-xs text-weather-muted">
            {current.chance_of_rain}% chance of rain
          </p>
        </div>
        <div>
          <p className="text-[19px] font-semibold tracking-[-0.01em]">
            {formatTemperature(current.feelslike_c, unit)}
          </p>
          <p className="mt-[9px] text-xs text-weather-muted">Feels like</p>
        </div>
      </div>
    </section>
  );
}
