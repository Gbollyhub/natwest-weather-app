"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export function SiteHeader({
  navItems,
  currentItem,
}: {
  navItems: string[];
  currentItem?: string;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavId = useId();

  return (
    <header className="flex items-center pt-[26px] pb-6">
      <Link
        href="/"
        className="flex w-[45px] flex-none items-start rounded-[2px] bg-[#17170f] px-1 py-[5px] text-[8.5px] leading-[1.18] font-bold tracking-[-0.01em] text-white"
        aria-label="NatWest Weather App"
      >
        <br />
        Weather
        <br />
        App
      </Link>

      <nav
        className="ml-8 hidden items-center gap-[26px] text-[15px] font-medium whitespace-nowrap text-weather-ink lg:flex min-[1181px]:ml-[60px] min-[1181px]:gap-11"
        aria-label="Forecast views"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#main"
            aria-current={item === currentItem ? "page" : undefined}
            className="no-underline hover:text-weather-amber-dark aria-[current=page]:font-semibold"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-[18px] min-[1181px]:gap-[26px]">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-[9px] border-0 bg-none text-[15px] font-medium whitespace-nowrap text-weather-ink hover:text-weather-amber-dark"
        >
          <span className="hidden lg:inline">More Forecasts</span>
          <ChevronDown className="size-[14px]" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer border-0 bg-none p-0.5 text-weather-ink hover:text-weather-amber-dark lg:hidden"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileNavOpen}
          aria-controls={mobileNavId}
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          {isMobileNavOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileNavOpen && (
        <nav
          id={mobileNavId}
          aria-label="Forecast views"
          className="absolute inset-x-2.5 top-[88px] z-20 flex flex-col gap-1 rounded-2xl border border-border bg-popover p-3 text-[15px] font-medium text-popover-foreground shadow-lg lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#main"
              aria-current={item === currentItem ? "page" : undefined}
              onClick={() => setIsMobileNavOpen(false)}
              className="rounded-lg px-3 py-2 no-underline hover:bg-weather-hairline aria-[current=page]:font-semibold"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
