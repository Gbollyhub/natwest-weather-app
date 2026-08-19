import { LocationOption } from "@/types";
import axios from "axios";

export const searchLocation = async (searchValue: string) => {
  const { data } = await axios.get<LocationOption[]>("/api/location-search", {
    params: {
      searchValue,
    },
  });

  return data;
};
