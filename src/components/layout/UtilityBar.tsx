import Link from "next/link";
import { LocationSearchForm } from "@/components/features/landing/LocationSearchForm";
import TemperatureUnitToggle from "./TemperatureUnitToggle";

export function UtilityBar() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center lg:justify-between gap-4 pt-4 text-[12.5px] text-weather-ink-2">
      <Link href="/" className="underline">
        Back to Home
      </Link>
      <div className="flex lg:flex-row flex-col flex-wrap items-center gap-3 w-full lg:w-auto">
        <LocationSearchForm className="lg:w-auto w-full flex-col lg:flex-row items-center gap-2 sm:w-[500px]" />
        <TemperatureUnitToggle />
      </div>
    </div>
  );
}
