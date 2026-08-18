import { LocationOption } from "@/types";
import axios from "axios";

export const searchLocation = async (location: string) => {
  const { data } = await axios.get<LocationOption[]>("/api/location-search", {
    params: {
        location
    }
  });

  return data;
};
