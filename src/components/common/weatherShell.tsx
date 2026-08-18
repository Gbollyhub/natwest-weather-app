import type { ReactNode } from "react";
import { LOCATION, NAV_ITEMS } from "@/config/constants";
import type { LocationSummary } from "@/types";
import { LocationBar } from "./locationBar";
import { SiteHeader } from "./siteHeader";

interface WeatherShellProps {
  location?: LocationSummary;
  children: ReactNode;
}

export function WeatherShell({ location = LOCATION, children }: WeatherShellProps) {
  return (
    <div className="weather weather-app-bg min-h-screen p-2.5 text-weather-ink">
      <div className="weather-shell-bg relative flex min-h-[calc(100vh-20px)] flex-col overflow-hidden rounded-[26px] pb-16 duration-500 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1.5">
        <div className="flex flex-1 flex-col px-[clamp(20px,7.4%,108px)]">
          <SiteHeader navItems={NAV_ITEMS} />
          <div className="h-px bg-weather-hairline" />
          <LocationBar location={location} />
          {children}
        </div>
      </div>
    </div>
  );
}
