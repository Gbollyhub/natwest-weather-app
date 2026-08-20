"use client";

import { useTemperatureUnit } from "@/context/TemperatureUnitContextt";
import { cn } from "@/lib/utils";
import type { TemperatureUnit } from "@/lib/temperature";

const UNITS: TemperatureUnit[] = ["C", "F"];

export function TemperatureUnitToggle() {
  const { unit, setUnit } = useTemperatureUnit();

  return (
    <div
      role="group"
      aria-label="Temperature unit"
      className="inline-flex items-center rounded-full border border-weather-hairline p-0.5 text-[12.5px]"
    >
      {UNITS.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={unit === option}
          onClick={() => setUnit(option)}
          className={cn(
            "cursor-pointer rounded-full px-2.5 py-1 transition-colors",
            unit === option
              ? "bg-weather-amber text-white"
              : "text-weather-ink-2 hover:text-weather-amber-dark"
          )}
        >
          °{option}
        </button>
      ))}
    </div>
  );
}
