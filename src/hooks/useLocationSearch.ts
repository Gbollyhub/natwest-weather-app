import { useState } from "react";
import { LocationOption } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "@/services/location";
import { useDebounce } from "./useDebounce";

function useLocationSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState<LocationOption | null>(null);
  const debouncedLocationSearch = useDebounce(searchValue, 500);

  const { data, isPending, isError } = useQuery({
    queryKey: ["location-search", debouncedLocationSearch],
    queryFn: () => searchLocation(debouncedLocationSearch),
    enabled: debouncedLocationSearch.length >= 2,
  });

  return {
    location,
    setLocation,
    searchValue,
    setSearchValue,
    suggestions: data,
    isPending,
    isError,
  };
}

export default useLocationSearch;
