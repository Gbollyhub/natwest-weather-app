import type { ReactNode } from "react";
import { NAV_ITEMS } from "@/config/constants";
import { cn } from "@/lib/utils";
import type { DayNightTheme } from "@/hooks/useDayNightTheme";
import { SiteHeader } from "./SiteHeader";

interface WeatherAppShellProps {
  theme?: DayNightTheme;
  currentNavItem?: string;
  children: ReactNode;
}

export function WeatherAppShell({
  theme = "day",
  currentNavItem,
  children,
}: WeatherAppShellProps) {
  const isNight = theme === "night";

  return (
    <div
      className={cn(
        "weather relative min-h-screen p-2.5 text-weather-ink",
        isNight && "weather-night",
      )}
    >
      <div className="weather-app-bg absolute inset-0" aria-hidden="true" />
      <div
        className={cn(
          "weather-app-bg-night absolute inset-0 transition-opacity duration-1000 ease-in-out",
          isNight ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[calc(100vh-20px)] flex-col overflow-hidden rounded-[26px] pb-16 duration-500 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1.5">
        <div className="weather-shell-bg absolute inset-0" aria-hidden="true" />
        <div
          className={cn(
            "weather-shell-bg-night absolute inset-0 transition-opacity duration-1000 ease-in-out",
            isNight ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />

        <div className="relative flex flex-1 flex-col px-[clamp(20px,7.4%,108px)]">
          <SiteHeader navItems={NAV_ITEMS} currentItem={currentNavItem} />
          <div className="h-px bg-weather-hairline" />
          {children}
          <footer className="flex mt-12 text-[14px] justify-center">
            Powered by WeatherAPI.com
          </footer>
        </div>
      </div>
    </div>
  );
}
