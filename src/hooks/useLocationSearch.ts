import { useState } from "react";
import { LocationOption } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "@/services/location";
import { useDebounce } from "./useDebounce";
import { useRouter } from "next/navigation";

function useLocationSearch() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const debouncedLocationSearch = useDebounce(searchValue, 500);
  const [location, setLocation] = useState<LocationOption | null>(null);

  const { data, isPending, isError } = useQuery({
    queryKey: ["location-search", debouncedLocationSearch],
    queryFn: () => searchLocation(debouncedLocationSearch),
    enabled: debouncedLocationSearch.length >= 2,
  });

  const handleLocationSelect = (value: LocationOption | null) => {
    if (!value) return;
    router.push(`/weather?lat=${value.lat}&lon=${value.lon}`);
  };

  return {
    location,
    setLocation,
    searchValue,
    setSearchValue,
    suggestions: data,
    isPending,
    isError,
    handleLocationSelect,
  };
}

export default useLocationSearch;
