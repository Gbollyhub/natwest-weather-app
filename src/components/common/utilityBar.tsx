import type { LocationSummary } from "@/types";
import Link from 'next/link'
import { TemperatureUnitToggle } from "./temperatureUnitToggle";

export function UtilityBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-[12.5px] text-weather-ink-2">
      <Link href="/" className="underline">
      Back to search page
      </Link>
      <TemperatureUnitToggle />
    </div>
  );
}
