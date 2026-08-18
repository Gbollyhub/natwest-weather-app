import {
  ChevronDownIcon,
  MenuIcon,
  PlayCircleIcon,
  SearchIcon,
} from "./icons";

export function SiteHeader({ navItems }: { navItems: string[] }) {
  return (
    <header className="flex items-center pt-[26px] pb-6">
      <a
        href="#main"
        className="flex w-[45px] flex-none items-start rounded-[2px] bg-[#17170f] px-1 py-[5px] text-[8.5px] leading-[1.18] font-bold tracking-[-0.01em] text-white"
        aria-label="NatWest Weather App"
      >
        NatWest
        <br />
        Weather
        <br />
        App
      </a>

      <nav
        className="ml-8 hidden items-center gap-[26px] text-[15px] font-medium whitespace-nowrap text-weather-ink lg:flex min-[1181px]:ml-[60px] min-[1181px]:gap-11"
        aria-label="Forecast views"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#main"
            className="no-underline hover:text-weather-amber-dark"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-[18px] min-[1181px]:gap-[26px]">
        <a
          href="#main"
          className="inline-flex items-center gap-[9px] text-[15px] font-medium whitespace-nowrap text-weather-ink no-underline hover:text-weather-amber-dark"
        >
          <PlayCircleIcon />
          <span className="hidden lg:inline">Video</span>
        </a>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-[9px] border-0 bg-none text-[15px] font-medium whitespace-nowrap text-weather-ink hover:text-weather-amber-dark"
          aria-expanded="false"
        >
          <span className="hidden lg:inline">More Forecasts</span>
          <ChevronDownIcon />
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer border-0 bg-none p-0.5 text-weather-ink hover:text-weather-amber-dark"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer border-0 bg-none p-0.5 text-weather-ink hover:text-weather-amber-dark"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
