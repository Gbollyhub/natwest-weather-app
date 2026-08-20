import api from "@/lib/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_WEATHER_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchValue = searchParams.get("searchValue");

  if (!searchValue) {
    return NextResponse.json(
      { error: "SearchValue is required" },
      { status: 400 },
    );
  }

  try {
    const { data } = await api.get("/search.json", {
      params: {
        key: API_KEY,
        q: searchValue,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[/api/location-search] WeatherAPI request failed:",
        error.response?.status,
        error.response?.data?.error ?? error.message,
      );
    } else {
      console.error("[/api/location-search] Unexpected error:", error);
    }
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: 502 },
    );
  }
}
