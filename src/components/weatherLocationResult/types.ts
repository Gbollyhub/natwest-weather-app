export type DaypartIconKind = "sun" | "partly" | "cloud" | "moon";

export type MetricGlyphName =
  | "highLow"
  | "wind"
  | "humidity"
  | "dewPoint"
  | "pressure"
  | "uvIndex"
  | "visibility"
  | "moonPhase";

export interface CurrentConditions {
  location: string;
  asOf: string;
  temperature: string;
  phrase: string;
  phraseSub: string;
}

export interface SunTimes {
  sunrise: string;
  sunset: string;
}

export interface FeelsLike {
  temperature: string;
  label: string;
}

export interface WeatherMetric {
  icon: MetricGlyphName;
  label: string;
  value: string;
}

export interface ForecastDaypart {
  label: string;
  temperature: string;
  icon: DaypartIconKind;
}
