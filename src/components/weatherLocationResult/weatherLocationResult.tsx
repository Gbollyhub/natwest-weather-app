import { WeatherShell } from "@/components/common/weatherShell";
import { LOCATION } from "@/config/constants";
import { CurrentConditionsCard } from "./currentConditionsCard";
import { ForecastDayparts } from "./forecastDayparts";
import { CURRENT_CONDITIONS, FEELS_LIKE, FORECAST_DAYPARTS, SUN_TIMES, WEATHER_METRICS } from "./mockdata";
import { SkyArtwork } from "./skyArtwork";
import { TodayPanel } from "./todayPanel";

export function WeatherLocationResult() {
  return (
    <WeatherShell location={LOCATION}>
      <main id="main" className="mt-[42px] flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[clamp(40px,5vw,366px)]">
        <div className="order-2 w-full lg:order-none lg:w-[482px] lg:max-w-full lg:flex-[0_1_482px]">
          <CurrentConditionsCard conditions={CURRENT_CONDITIONS} />
          <TodayPanel location={LOCATION} feelsLike={FEELS_LIKE} sunTimes={SUN_TIMES} metrics={WEATHER_METRICS} />
        </div>

        <div className="contents lg:flex lg:w-full lg:flex-col lg:flex-[0_1_394px]">
          <SkyArtwork className="order-1 lg:order-none" />
          <ForecastDayparts location={LOCATION} dayparts={FORECAST_DAYPARTS} className="order-3 lg:order-none" />
        </div>
      </main>
    </WeatherShell>
  );
}
