import type { CurrentWeather, WeatherMetric } from "@/types";
import { MetricsGrid } from "./MetricsGrid";
import useForecast from "@/hooks/useForecast";
import { formatTemperature } from "@/lib/temperature";
import { useTemperatureUnit } from "@/context/TemperatureUnitContext";

interface Props {
  current: CurrentWeather;
}

export function TodayPanel({current}: Props) {
  const { unit } = useTemperatureUnit();

  const metrics: WeatherMetric[] = [
    { icon: "wind", label: "Gust", value: `${current.gust_kph}km/h` },
    { icon: "wind", label: "Wind", value: `${current.wind_kph}km/h` },
    { icon: "humidity", label: "Humidity", value: `${current.humidity}%` },
    { icon: "dewPoint", label: "Dew Point", value: formatTemperature(current.dewpoint_c, unit) },
    { icon: "pressure", label: "Pressure", value: `${current.pressure_mb} mb` },
    { icon: "uvIndex", label: "UV Index", value: `${current.uv}` },
    { icon: "visibility", label: "Visibility", value: `${current.vis_km} km` },
    { icon: "humidity", label: "Precipitation", value: `${current.precip_mm} mm` },
  ];

  return (
    <section aria-labelledby="weather-today-heading">
      <h2 id="weather-today-heading" className="text-[16px] font-medium">
        More weather information
      </h2>
      <MetricsGrid metrics={metrics} />
    </section>
  );
}
