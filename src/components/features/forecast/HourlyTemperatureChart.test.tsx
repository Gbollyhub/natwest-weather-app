import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/renderWithProviders";
import { HourlyTemperatureChart } from "./HourlyTemperatureChart";
import type { ForecastData } from "@/types";

const forecast: ForecastData = {
  forecastday: [
    {
      date: "2026-08-18",
      day: { maxtemp_c: 21, mintemp_c: 13, daily_chance_of_rain: 10, condition: { text: "Partly cloudy", icon: "" } },
      astro: { moon_phase: "Waxing Gibbous" },
      hour: [
        { time: "2026-08-18 00:00", temp_c: 14, temp_f: 57.2, condition: { text: "Clear", icon: "" } },
        { time: "2026-08-18 12:00", temp_c: 20, temp_f: 68, condition: { text: "Sunny", icon: "" } },
      ],
    },
  ],
};

describe("HourlyTemperatureChart", () => {
  it("renders the card heading", () => {
    const { getByText } = renderWithProviders(<HourlyTemperatureChart forecast={forecast} />);
    expect(getByText("Hourly Temperature")).toBeInTheDocument();
  });

  it("renders an SVG chart when hourly data is present", () => {
    const { container } = renderWithProviders(<HourlyTemperatureChart forecast={forecast} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders nothing when there is no forecast day", () => {
    const { container } = renderWithProviders(
      <HourlyTemperatureChart forecast={{ forecastday: [] }} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});