import { describe, expect, it } from "vitest";
import { formatDateTime } from "./date";

describe("formatDateTime", () => {
  it("formats a WeatherAPI localtime string", () => {
    expect(formatDateTime("2026-08-18 14:15")).toBe("2:15 PM, August 18, 2026");
  });

  it("formats midnight as 12 AM", () => {
    expect(formatDateTime("2026-08-18 00:00")).toBe("12:00 AM, August 18, 2026");
  });

  it("formats noon as 12 PM", () => {
    expect(formatDateTime("2026-01-01 12:00")).toBe("12:00 PM, January 1, 2026");
  });

  it("handles a seconds component if the provider ever sends one", () => {
    expect(formatDateTime("2026-08-18 14:15:30")).toBe("2:15 PM, August 18, 2026");
  });

  it("returns an empty string for a malformed value", () => {
    expect(formatDateTime("not a date")).toBe("");
  });

  it("returns an empty string for an empty value", () => {
    expect(formatDateTime("")).toBe("");
  });
});