import axios from "axios";
import { Forecast } from "@/types";

// getForecast makes a call to nextjs api route /api/forecast 
// with the given latitude and longitude and returns the forecast data.
export const getForecast = async (lat: string, lon: string) => {
  const { data } = await axios.get<Forecast>("/api/forecast", {
    params: {
      location: `${lat}, ${lon}`,
    },
  });

  return data;
};
