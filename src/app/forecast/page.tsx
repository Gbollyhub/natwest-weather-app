"use client";

import { WeatherShell } from "@/components/layout/WeatherShell";
import { CurrentConditionsCard } from "@/components/features/forecast/CurrentConditionsCard";
import { DailyForecastCard } from "@/components/features/forecast/DailyForecastCard";
import { HourlyTemperatureChart } from "@/components/features/forecast/HourlyTemperatureChart";
import { SkyArtwork } from "@/components/features/forecast/SkyArtwork";
import { TodayPanel } from "@/components/features/forecast/TodayPanel";
import useForecast from "@/hooks/useForecast";
import useDayNightTheme from "@/hooks/useDayNightTheme";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { ForecastError } from "@/components/features/forecast/ForecastError";
import { ForecastSkeleton } from "@/components/features/forecast/ForecastSkeleton";

export function ForecastResult() {
  const { forecast, isPending, isError, refetch } = useForecast();
  const theme = useDayNightTheme(forecast);

  return (
    <WeatherShell theme={theme}>
      <UtilityBar />
      {isError ? (
        <ForecastError onRetry={() => refetch()} />
      ) : isPending || !forecast ? (
        <ForecastSkeleton />
      ) : (
        <>
          <main
            id="main"
            className="mt-[42px] flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[clamp(40px,5vw,366px)]"
          >
            <div className="order-2 w-full lg:order-none lg:w-[482px] lg:max-w-full lg:flex-[0_1_482px]">
              <CurrentConditionsCard
                current={forecast.current}
                location={forecast.location}
              />
              <TodayPanel current={forecast.current} />
            </div>

            <div className="hidden contents lg:flex lg:w-full lg:flex-col lg:flex-[0_1_394px]">
              <SkyArtwork
                className="order-1 lg:order-none"
                conditionText={forecast.current.condition.text}
                isDay={theme === "day"}
              />
            </div>
          </main>

          <div className="mt-15">
            <HourlyTemperatureChart forecast={forecast.forecast} />
          </div>

          <div className="mt-15">
            <DailyForecastCard forecast={forecast.forecast} />
          </div>
        </>
      )}
    </WeatherShell>
  );
}
