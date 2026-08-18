import type { LocationSummary } from "@/types";
import { ChevronDownIcon, GlobeIcon } from "./icons";

export function LocationBar({ location }: { location: LocationSummary }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-[12.5px] text-weather-ink-2">
      <p>
        <strong className="font-semibold">
          {location.city}, {location.country}
        </strong>{" "}
        - Based on your internet address -{" "}
        <a
          href="#main"
          className="text-inherit underline underline-offset-[3px]"
        >
          Use precise location
        </a>{" "}
        -{" "}
        <a
          href="#main"
          className="text-inherit underline underline-offset-[3px]"
        >
          More information
        </a>
      </p>
      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-2 border-0 bg-none text-[12.5px] text-weather-ink-2 hover:text-weather-amber-dark"
      >
        <GlobeIcon />
        <span>NL | °C</span>
        <ChevronDownIcon />
      </button>
    </div>
  );
}
