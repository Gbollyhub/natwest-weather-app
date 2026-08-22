export const mockLondonSearchResult = [
  {
    id: 2801268,
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    url: "london-city-of-london-greater-london-united-kingdom",
  },
];

export const mockLondonForecast = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    localtime: "2026-08-18 14:20",
  },
  current: {
    last_updated: "2026-08-18 14:15",
    temp_c: 18,
    temp_f: 64.4,
    feelslike_c: 17.4,
    feelslike_f: 63.3,
    is_day: 1,
    condition: { text: "Partly cloudy", icon: "" },
    wind_kph: 14,
    humidity: 72,
    dewpoint_c: 12,
    dewpoint_f: 53.6,
    pressure_mb: 1014,
    uv: 4,
    vis_km: 10,
    chance_of_rain: 10,
    precip_mm: 0,
    gust_kph: 22,
  },
  forecast: {
    forecastday: [
      {
        date: "2026-08-18",
        day: {
          maxtemp_c: 21,
          mintemp_c: 13,
          daily_chance_of_rain: 10,
          condition: { text: "Partly cloudy", icon: "" },
        },
        astro: { moon_phase: "Waxing Gibbous" },
        hour: [
          {
            time: "2026-08-18 00:00",
            temp_c: 14,
            temp_f: 57.2,
            condition: { text: "Clear", icon: "" },
          },
          {
            time: "2026-08-18 12:00",
            temp_c: 20,
            temp_f: 68,
            condition: { text: "Sunny", icon: "" },
          },
        ],
      },
    ],
  },
};
