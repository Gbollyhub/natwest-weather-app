"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ForecastData, ForecastDay } from "@/types";
import { celsiusToFahrenheit } from "@/lib/temperature";
import { useTemperatureUnit } from "@/context/TemperatureUnitContext";

interface DayRange {
  day: ForecastDay;
  label: string;
  min: number;
  max: number;
}

interface Props {
  forecast: ForecastData;
}

// getDayLabel returns a label for the day based on the date string and index.
function getDayLabel(dateStr: string, index: number): string {
  if (index === 0) return "Today";
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

// toAbsoluteIconUrl converts a relative icon URL to an absolute URL.
function toAbsoluteIconUrl(icon: string): string {
  return icon.startsWith("//") ? `https:${icon}` : icon;
}

export function DailyForecastCard({ forecast }: Props) {
  const { unit } = useTemperatureUnit();
  const days = forecast.forecastday;

  if (!days || days.length === 0) return null;

  const toDisplayTemp = (celsius: number) =>
    Math.round(unit === "F" ? celsiusToFahrenheit(celsius) : celsius);

  const ranges: DayRange[] = days.map((day, index) => ({
    day,
    label: getDayLabel(day.date, index),
    min: toDisplayTemp(day.day.mintemp_c),
    max: toDisplayTemp(day.day.maxtemp_c),
  }));

  const globalMin = Math.min(...ranges.map((range) => range.min));
  const globalMax = Math.max(...ranges.map((range) => range.max));
  const span = Math.max(globalMax - globalMin, 1);

  return (
    <Card className="bg-card/10">
      <CardHeader>
        <CardTitle className="text-weather-ink">Daily Forecast</CardTitle>
        <CardDescription className="text-[12px] text-weather-muted">
          {ranges.length}-day outlook
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {ranges.map(({ day, label, min, max }) => {
            const offsetPercent = ((min - globalMin) / span) * 100;
            const widthPercent = Math.max(((max - min) / span) * 100, 6);

            return (
              <li key={day.date} className="flex items-center gap-2 sm:gap-4">
                <span className="w-9 shrink-0 text-sm font-medium text-weather-ink-2 sm:w-12">
                  {label}
                </span>

                <Image
                  src={toAbsoluteIconUrl(day.day.condition.icon)}
                  alt={day.day.condition.text}
                  width={32}
                  height={32}
                  className="size-7 shrink-0 sm:size-8"
                />

                <span className="w-6 shrink-0 text-right text-sm text-weather-muted tabular-nums">
                  <span className="sr-only">Low </span>
                  {min}°
                </span>

                <div className="relative h-1.5 min-w-0 flex-1 rounded-full bg-weather-hairline">
                  <div
                    className="absolute inset-y-0 rounded-full bg-gradient-to-r from-weather-amber-lift to-weather-amber"
                    style={{
                      left: `${offsetPercent}%`,
                      width: `${widthPercent}%`,
                    }}
                  />
                </div>

                <span className="w-6 shrink-0 text-sm font-semibold text-weather-ink tabular-nums">
                  <span className="sr-only">High </span>
                  {max}°
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
