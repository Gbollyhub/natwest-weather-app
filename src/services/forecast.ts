import axios from "axios";
import { Forecast } from "@/types";

export const getForecast = async (lat: string, lon: string) => {
  const { data } = await axios.get<Forecast>("/api/forecast", {
    params: {
      location: `${lat}, ${lon}`,
    },
  });

  return data;
};
