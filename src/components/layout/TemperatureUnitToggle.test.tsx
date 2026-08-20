import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/test/renderWithProviders";
import TemperatureUnitToggle from "./TemperatureUnitToggle";

describe("TemperatureUnitToggle", () => {
  it("render temperature units", () => {
    renderWithProviders(<TemperatureUnitToggle />);
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("°F")).toBeInTheDocument();
  });

  it("defaults to Celsius pressed", () => {
    renderWithProviders(<TemperatureUnitToggle />);
    expect(screen.getByRole("button", { name: "°C" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "°F" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("switches to Fahrenheit when clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<TemperatureUnitToggle />);

    await user.click(screen.getByRole("button", { name: "°F" }));

    expect(screen.getByRole("button", { name: "°F" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "°C" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
