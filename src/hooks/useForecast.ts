"use client";

import { getForecast } from "@/services/forecast";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { isToday } from "date-fns";

function useForecast() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const { data, isPending, isError } = useQuery({
    queryKey: ["forecast", lat, lon],
    queryFn: () => getForecast(lat!, lon!),
    enabled: Boolean(lat && lon),
    staleTime: 5 * 60 * 1000,
  });

  const todayHourlyForcast = data?.forecast.forecastday.find(x => {
    return isToday(new Date(x.date));
  })

  return {
    forecast: data,
    isPending,
    isError,
    todayHourlyForcast
  };
}

export default useForecast;
