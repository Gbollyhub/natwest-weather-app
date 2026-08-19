"use client";

import { WeatherShell } from "@/components/common/weatherShell";
import { LOCATION } from "@/config/constants";
import { CurrentConditionsCard } from "./currentConditionsCard";
import { DailyForecastCard } from "./dailyForecastCard";
import { HourlyTemperatureChart } from "./hourlyTemperatureChart";
import { SkyArtwork } from "./skyArtwork";
import { TodayPanel } from "./todayPanel";
import useForecast from "@/hooks/useForecast";
import { UtilityBar } from "../common/utilityBar";
import { WeatherLocationResultError } from "./weatherLocationResultError";
import { WeatherLocationResultSkeleton } from "./weatherLocationResultSkeleton";

export function WeatherLocationResult() {
  const { forecast, isPending, isError, refetch } = useForecast();

  if (isError) return <WeatherLocationResultError onRetry={() => refetch()} />;
  if (isPending || !forecast) return <WeatherLocationResultSkeleton />;
  return (
    <WeatherShell location={LOCATION}>
       <UtilityBar />
      <main
        id="main"
        className="mt-[42px] flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[clamp(40px,5vw,366px)]"
      >
        <div className="order-2 w-full lg:order-none lg:w-[482px] lg:max-w-full lg:flex-[0_1_482px]">
          <CurrentConditionsCard />
          <TodayPanel />
        </div>

        <div className="contents lg:flex lg:w-full lg:flex-col lg:flex-[0_1_394px]">
          <SkyArtwork className="order-1 lg:order-none" />
        </div>
      </main>

      <div className="mt-15">
        <HourlyTemperatureChart />
      </div>

      <div className="mt-15">
        <DailyForecastCard />
      </div>
    </WeatherShell>
  );
}
