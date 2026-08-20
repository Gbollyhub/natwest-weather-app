import api from "@/lib/api";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_WEATHER_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json(
      { error: "Location is required" },
      { status: 400 },
    );
  }

  try {
    const { data } = await api.get("/forecast.json", {
      params: {
        key: API_KEY,
        q: location,
        days: 3,
        aqi: "no",
        alerts: "no",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[/api/forecast] WeatherAPI request failed:",
        error.response?.status,
        error.response?.data?.error ?? error.message,
      );
    } else {
      console.error("[/api/forecast] Unexpected error:", error);
    }
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: 502 },
    );
  }
}
