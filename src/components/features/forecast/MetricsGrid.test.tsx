import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { MetricsGrid } from "./MetricsGrid";
import { renderWithProviders } from "@/test/renderWithProviders";
import { CurrentWeather, WeatherMetric } from "@/types";
import { formatTemperature } from "@/lib/temperature";

const current: CurrentWeather = {
  last_updated: "2026-08-18 14:15",
  temp_c: 18,
  temp_f: 64.4,
  feelslike_c: 17.4,
  feelslike_f: 63.3,
  is_day: 1,
  condition: { text: "Partly cloudy", icon: "" },
  wind_kph: 14,
  humidity: 72,
  dewpoint_c: 12,
  dewpoint_f: 53.6,
  pressure_mb: 1014,
  uv: 4,
  vis_km: 10,
  chance_of_rain: 10,
  precip_mm: 0,
  gust_kph: 22,
};

const metrics: WeatherMetric[] = [
  { icon: "wind", label: "Gust", value: `${current.gust_kph}km/h` },
  { icon: "wind", label: "Wind", value: `${current.wind_kph}km/h` },
  { icon: "humidity", label: "Humidity", value: `${current.humidity}%` },
  {
    icon: "dewPoint",
    label: "Dew Point",
    value: formatTemperature(current.dewpoint_c, "C"),
  },
  { icon: "pressure", label: "Pressure", value: `${current.pressure_mb} mb` },
  { icon: "uvIndex", label: "UV Index", value: `${current.uv}` },
  { icon: "visibility", label: "Visibility", value: `${current.vis_km} km` },
  {
    icon: "humidity",
    label: "Precipitation",
    value: `${current.precip_mm} mm`,
  },
];

describe("MetricsGrid", () => {
  it("render the current weather metrics values", () => {
    renderWithProviders(<MetricsGrid metrics={metrics} />);
    expect(screen.getByText("22km/h")).toBeInTheDocument();
    expect(screen.getByText("14km/h")).toBeInTheDocument();
    expect(screen.getByText("72%")).toBeInTheDocument();
    expect(screen.getByText("12°")).toBeInTheDocument();
    expect(screen.getByText("1014 mb")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("10 km")).toBeInTheDocument();
    expect(screen.getByText("0 mm")).toBeInTheDocument();
  });

  it("render the current weather metrics labels", () => {
    renderWithProviders(<MetricsGrid metrics={metrics} />);
    expect(screen.getByText("Gust")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("Dew Point")).toBeInTheDocument();
    expect(screen.getByText("Pressure")).toBeInTheDocument();
    expect(screen.getByText("UV Index")).toBeInTheDocument();
    expect(screen.getByText("Visibility")).toBeInTheDocument();
    expect(screen.getByText("Precipitation")).toBeInTheDocument();
  });
});
