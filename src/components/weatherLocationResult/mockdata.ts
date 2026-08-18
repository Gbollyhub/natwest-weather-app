import type { CurrentConditions, FeelsLike, ForecastDaypart, SunTimes, WeatherMetric } from "./types";

export const CURRENT_CONDITIONS: CurrentConditions = {
  location: "Amsterdam, Netherlands Weather",
  asOf: "As of 8:49 am CEST",
  temperature: "7°",
  phrase: "Partly Cloudy",
  phraseSub: "1% chance of rain through 9 am",
};

export const SUN_TIMES: SunTimes = {
  sunrise: "6:29 am",
  sunset: "8:49 pm",
};

export const FEELS_LIKE: FeelsLike = {
  temperature: "3°",
  label: "Feels Like",
};

export const WEATHER_METRICS: WeatherMetric[] = [
  { icon: "highLow", label: "High / Low", value: "--/3°" },
  { icon: "wind", label: "Wind", value: "24 km/h" },
  { icon: "humidity", label: "Humidity", value: "61%" },
  { icon: "dewPoint", label: "Dew Point", value: "0°" },
  { icon: "pressure", label: "Pressure", value: "61%" },
  { icon: "uvIndex", label: "UV Index", value: "0 of 10" },
  { icon: "visibility", label: "Visibility", value: "Unlimited" },
  { icon: "moonPhase", label: "Moon Phase", value: "Waxing Gibbous" },
];

export const FORECAST_DAYPARTS: ForecastDaypart[] = [
  { label: "Morning", temperature: "10°", icon: "partly" },
  { label: "Afternoon", temperature: "11°", icon: "sun" },
  { label: "Evening", temperature: "6°", icon: "cloud" },
  { label: "Overnight", temperature: "4°", icon: "moon" },
];
