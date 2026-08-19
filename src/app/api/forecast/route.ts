import api from "@/lib/api";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_WEATHER_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

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
}