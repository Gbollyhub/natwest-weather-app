import api from "@/lib/api";
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
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: 502 },
    );
  }
}
