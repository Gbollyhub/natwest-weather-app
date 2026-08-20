import { Suspense } from "react";
import ForecastView from "@/components/features/forecast/ForecastView";
import { WeatherAppShell } from "@/components/layout/WeatherAppShell";
import { ForecastSkeleton } from "@/components/features/forecast/ForecastSkeleton";
import { UtilityBar } from "@/components/layout/UtilityBar";

function ForecastFallback() {
  return (
    <WeatherAppShell>
      <UtilityBar />
      <ForecastSkeleton />
    </WeatherAppShell>
  );
}

export default function ForecastPage() {
  return (
    <Suspense fallback={<ForecastFallback />}>
      <ForecastView />
    </Suspense>
  );
}
