"use client";

import { useMemo } from "react";
import type { DayNightTheme, Forecast } from "@/types";

function useDayNightTheme(forecast: Forecast | undefined): DayNightTheme {
  return useMemo(() => {
    if (!forecast) return "day";
    return forecast.current.is_day === 0 ? "night" : "day";
  }, [forecast]);
}

export default useDayNightTheme;
