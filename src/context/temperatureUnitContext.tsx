"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { TemperatureUnit } from "@/lib/temperature";

interface TemperatureUnitContextValue {
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
}

const TemperatureUnitContext = createContext<TemperatureUnitContextValue | null>(null);

export function TemperatureUnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useState<TemperatureUnit>("C");

  const value = useMemo(() => ({ unit, setUnit }), [unit]);

  return <TemperatureUnitContext.Provider value={value}>{children}</TemperatureUnitContext.Provider>;
}

export function useTemperatureUnit(): TemperatureUnitContextValue {
  const context = useContext(TemperatureUnitContext);
  if (!context) {
    throw new Error("useTemperatureUnit must be used within a TemperatureUnitProvider");
  }
  return context;
}
