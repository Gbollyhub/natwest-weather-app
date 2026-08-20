import { useEffect, useState } from "react";
import { LocationOption } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "@/services/location";
import { useDebounce } from "./useDebounce";
import { useRouter } from "next/navigation";

const LOCATE_ERROR_DISPLAY_MS = 3000;

function useLocationSearch() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const debouncedLocationSearch = useDebounce(searchValue, 500);
  const [location, setLocation] = useState<LocationOption | null>(null);
  const [locateError, setLocateError] = useState<string | null>(null);

  useEffect(() => {
    if (!locateError) return;

    const timer = setTimeout(() => setLocateError(null), LOCATE_ERROR_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [locateError]);

  const { data, isPending, isError } = useQuery({
    queryKey: ["location-search", debouncedLocationSearch],
    queryFn: () => searchLocation(debouncedLocationSearch),
    enabled: debouncedLocationSearch.length >= 2,
  });

  const handleLocationSelect = (value: LocationOption | null) => {
    if (!value) return;
    router.push(`/forecast?lat=${value.lat}&lon=${value.lon}`);
  };

  const locateUserFunc = () => {
    setLocateError(null);

    if (!navigator.geolocation) {
      setLocateError("Your browser doesn't support location access. Please search for a location instead.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        router.push(`/forecast?lat=${latitude}&lon=${longitude}`);
      },
      (error) => {
        console.error(error);
        setLocateError(
          error.code === error.PERMISSION_DENIED
            ? "Location access was denied. Please allow location access or search for a location instead."
            : "We couldn't determine your location. Please search for a location instead.",
        );
      },
    );
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
    debouncedLocationSearch,
    locateUserFunc,
    locateError,
  };
}

export default useLocationSearch;
