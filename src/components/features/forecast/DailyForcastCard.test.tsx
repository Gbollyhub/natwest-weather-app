import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { DailyForecastCard } from "./DailyForecastCard";
import type { ForecastData } from "@/types";

const forecast: ForecastData = {
  forecastday: [
    {
      date: "2026-08-18",
      day: { maxtemp_c: 21, mintemp_c: 13, daily_chance_of_rain: 10, condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/64x64/day/116.png" } },
      astro: { moon_phase: "Waxing Gibbous" },
      hour: [],
    },
    {
      date: "2026-08-19",
      day: { maxtemp_c: 19, mintemp_c: 12, daily_chance_of_rain: 65, condition: { text: "Moderate rain", icon: "//cdn.weatherapi.com/64x64/day/302.png" } },
      astro: { moon_phase: "Waxing Gibbous" },
      hour: [],
    },
  ],
};

describe("DailyForecastCard", () => {
  it("labels the first day as Today and the rest by weekday", () => {
    renderWithProviders(<DailyForecastCard forecast={forecast} />);
    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("Wed")).toBeInTheDocument();
  });

  it("renders the high and low for each day in celsius by default", () => {
    renderWithProviders(<DailyForecastCard forecast={forecast} />);
    expect(screen.getByText("21°")).toBeInTheDocument();
    expect(screen.getByText("13°")).toBeInTheDocument();
    expect(screen.getByText("19°")).toBeInTheDocument();
    expect(screen.getByText("12°")).toBeInTheDocument();
  });

  it("renders nothing when there are no forecast days", () => {
    const { container } = renderWithProviders(
      <DailyForecastCard forecast={{ forecastday: [] }} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});