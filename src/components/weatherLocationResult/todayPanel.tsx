import type { LocationSummary } from "@/types";
import type { FeelsLike, SunTimes, WeatherMetric } from "./types";
import { MetricsGrid } from "./metricsGrid";
import { SunPathArc } from "./sunPathArc";

interface TodayPanelProps {
  location: LocationSummary;
  feelsLike: FeelsLike;
  sunTimes: SunTimes;
  metrics: WeatherMetric[];
}

export function TodayPanel({ location, feelsLike, sunTimes, metrics }: TodayPanelProps) {
  return (
    <section className="mt-8" aria-labelledby="weather-today-heading">
      <h2 id="weather-today-heading" className="text-[13.5px] font-semibold">
        Weather today in {location.city}, {location.country}
      </h2>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <p className="text-[38px] leading-none font-semibold tracking-[-0.01em]">{feelsLike.temperature}</p>
          <p className="mt-2 text-[10px] text-weather-muted">{feelsLike.label}</p>
        </div>
        <SunPathArc sunrise={sunTimes.sunrise} sunset={sunTimes.sunset} />
      </div>

      <MetricsGrid metrics={metrics} />
    </section>
  );
}
