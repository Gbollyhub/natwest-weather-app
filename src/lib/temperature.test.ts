import { describe, expect, it } from "vitest";
import { celsiusToFahrenheit, formatTemperature } from "./temperature";

describe("celsiusToFahrenheit", () => {
  it("converts the freezing point", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  it("converts the boiling point", () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it("converts negative temperatures", () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });

  it("preserves decimal precision", () => {
    expect(celsiusToFahrenheit(18.5)).toBeCloseTo(65.3, 5);
  });
});

describe("formatTemperature", () => {
  it("renders celsius with a degree symbol", () => {
    expect(formatTemperature(18, "C")).toBe("18°");
  });

  it("converts to fahrenheit when the unit is F", () => {
    expect(formatTemperature(18, "F")).toBe("64°");
  });

  it("rounds to the nearest whole number", () => {
    expect(formatTemperature(18.4, "C")).toBe("18°");
    expect(formatTemperature(18.6, "C")).toBe("19°");
  });

  it("renders sub-zero temperatures with a minus sign", () => {
    expect(formatTemperature(-3.2, "C")).toBe("-3°");
  });

  it("does not render negative zero", () => {
    expect(formatTemperature(-0.4, "C")).toBe("0°");
  });

  it("breaks rounding ties toward positive infinity", () => {
    expect(formatTemperature(2.5, "C")).toBe("3°");
    expect(formatTemperature(-2.5, "C")).toBe("-2°");
  });
});