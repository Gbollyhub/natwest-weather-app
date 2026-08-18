import type { WeatherMetric } from "./types";
import { MetricGlyph } from "./icons";

export function MetricsGrid({ metrics }: { metrics: WeatherMetric[] }) {
  return (
    <dl className="mt-[18px] grid grid-cols-2 gap-x-[19px]">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex items-center gap-[15px] border-b border-weather-hairline py-[15px]">
          <span className="inline-flex flex-none text-weather-ink-2">
            <MetricGlyph name={metric.icon} />
          </span>
          <dt className="flex-1 text-[11px] font-medium text-weather-ink-2">{metric.label}</dt>
          <dd className="text-[11px] text-weather-ink-3 tabular-nums">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
