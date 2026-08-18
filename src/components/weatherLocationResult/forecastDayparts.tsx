import { cn } from "@/lib/utils";
import type { LocationSummary } from "@/types";
import type { ForecastDaypart } from "./types";
import { DaypartIcon } from "./icons";

interface ForecastDaypartsProps {
  location: LocationSummary;
  dayparts: ForecastDaypart[];
  className?: string;
}

export function ForecastDayparts({ location, dayparts, className }: ForecastDaypartsProps) {
  return (
    <section className={cn("mt-auto", className)} aria-labelledby="weather-forecast-heading">
      <h2 id="weather-forecast-heading" className="text-[13.5px] font-semibold">
        Today&rsquo;s Forecast for {location.city}, {location.country}
      </h2>

      <div className="mt-[22px] grid grid-cols-4">
        {dayparts.map((part, index) => (
          <div key={part.label} className={`relative pr-3 ${index > 0 ? "pl-5" : ""}`}>
            {index > 0 && <span className="absolute top-0 left-0 h-[62px] w-px bg-weather-hairline" aria-hidden="true" />}
            <p className="text-[13.5px] text-weather-ink-3">{part.label}</p>
            <p className="mt-0.5 text-[27px] font-normal text-weather-daypart">{part.temperature}</p>
            <div className="mt-3">
              <DaypartIcon kind={part.icon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
