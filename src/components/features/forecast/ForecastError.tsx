"use client";

import { CloudAlert, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ForecastError({ onRetry }: { onRetry: () => void }) {
  return (
    <div role="alert" className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
      <CloudAlert className="size-12 text-weather-amber" aria-hidden="true" />

      <div>
        <h1 className="text-[22px] font-semibold tracking-[-0.01em]">Couldn&rsquo;t load the forecast</h1>
        <p className="mt-2 text-sm text-weather-muted">
          Something went wrong while fetching the weather for this location.
        </p>
      </div>

      <Button
        type="button"
        onClick={onRetry}
        className="h-auto gap-2 rounded-md bg-weather-amber px-6 py-3 text-white hover:bg-weather-amber/90"
      >
        <RefreshCw className="size-4" aria-hidden="true" />
        Try again
      </Button>
    </div>
  );
}
