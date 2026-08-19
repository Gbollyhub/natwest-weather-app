export type LocationOption = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export interface LocationSummary {
  city: string;
  country: string;
}

export type ForecastLocation = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};

export type CurrentWeather = {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_kph: number;
  humidity: number;
  dewpoint_c: number;
  dewpoint_f: number;
  pressure_mb: number;
  uv: number;
  vis_km: number;
  chance_of_rain: number;
  precip_mm: number;
  gust_kph: number
};

export type WeatherCondition = {
  text: string;
  icon: string;
};

export type ForecastData = {
  forecastday: ForecastDay[];
};

export type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    condition: WeatherCondition;
  };
  astro: {
    moon_phase: string;
  };
  hour: HourWeather[];
};

export type HourWeather = {
  time: string;
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
};

export type Forecast = {
  location: ForecastLocation;
  current: CurrentWeather;
  forecast: ForecastData;
};

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

export interface WeatherMetric {
  icon: MetricGlyphName;
  label: string;
  value: string;
}

