import type { WeatherMetric } from "@/types";
import { MetricGlyph } from "./Icons";

export function MetricsGrid({ metrics }: { metrics: WeatherMetric[] | null }) {
  return (
    <dl className="mt-[18px] grid grid-cols-2 gap-x-[19px]">
      {metrics?.map((metric) => (
        <div
          key={metric.label}
          className="flex items-center gap-[15px] border-b border-weather-hairline py-[15px]"
        >
          <dt className="flex flex-1 items-center gap-[15px] text-[12px] font-medium text-weather-ink-2">
            <span className="inline-flex flex-none">
              <MetricGlyph name={metric.icon} />
            </span>
            {metric.label}
          </dt>
          <dd className="text-[12px] text-weather-ink-3 tabular-nums">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
