"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import useForecast from "@/hooks/useForecast";
import { celsiusToFahrenheit } from "@/lib/temperature";
import { useTemperatureUnit } from "@/context/temperatureUnitContext";

const chartConfig = {
  temp: {
    label: "Temperature",
    color: "#f0ad33",
  },
} satisfies ChartConfig;

function formatHourLabel(time: string): string {
  return time.slice(-5);
}

export function HourlyTemperatureChart() {
  const { forecast } = useForecast();
  const { unit } = useTemperatureUnit();

  const today = forecast?.forecast.forecastday[0];
  if (!today) return null;

  const chartData = today.hour.map((entry) => ({
    hour: formatHourLabel(entry.time),
    temp: Math.round(unit === "F" ? celsiusToFahrenheit(entry.temp_c) : entry.temp_c),
  }));

  return (
    <Card className="bg-card/10">
      <CardHeader>
        <CardTitle className="text-weather-ink">Hourly Temperature</CardTitle>
        <CardDescription className="text-[12px] text-weather-muted">Today, 00:00 – 23:00</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full sm:h-[250px] lg:h-[300px]">
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} interval="preserveStartEnd" />
            <YAxis
              domain={[(dataMin: number) => dataMin - 2, (dataMax: number) => dataMax + 2]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={32}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="temp" type="linear" stroke="var(--color-temp)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
