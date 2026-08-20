export type SceneKey = "clear" | "partly-cloudy" | "cloudy" | "rain" | "thunderstorm" | "snow" | "fog";

export function classifyCondition(conditionText: string): SceneKey {
  const value = conditionText.toLowerCase();

  if (value.includes("thunder")) return "thunderstorm";
  if (value.includes("snow") || value.includes("sleet") || value.includes("ice") || value.includes("blizzard")) {
    return "snow";
  }
  if (value.includes("rain") || value.includes("drizzle") || value.includes("shower")) return "rain";
  if (value.includes("fog") || value.includes("mist") || value.includes("haze")) return "fog";
  if (value.includes("overcast")) return "cloudy";
  if (value.includes("partly")) return "partly-cloudy";
  if (value.includes("cloud")) return "cloudy";
  if (value.includes("clear") || value.includes("sunny")) return "clear";

  return "cloudy";
}
