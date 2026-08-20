import { LocationOption } from "@/types";
import axios from "axios";

// searchLocation makes a call to nextjs api route /api/location-search
// with the given search value and returns the location options.
export const searchLocation = async (searchValue: string) => {
  const { data } = await axios.get<LocationOption[]>("/api/location-search", {
    params: {
      searchValue,
    },
  });

  return data;
};
