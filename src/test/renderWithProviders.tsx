import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { TemperatureUnitProvider } from "@/context/TemperatureUnitContext";

function AllProviders({ children }: { children: ReactNode }) {
  return <TemperatureUnitProvider>{children}</TemperatureUnitProvider>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";