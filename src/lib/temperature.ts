import { TemperatureUnit } from "@/types";

export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// formatTemperature takes a temperature e.g 30 in Celsius and a unit ("C" or "F") 
// and returns a 86°F or 30°C string representation of the temperature.
export function formatTemperature(celsius: number, unit: TemperatureUnit): string {
  const value = unit === "F" ? celsiusToFahrenheit(celsius) : celsius;
  return `${Math.round(value)}°`;
}
