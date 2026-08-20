import { Suspense } from "react";
import ForecastView from "@/components/features/forecast/ForecastView";
import { ForecastSkeleton } from "@/components/features/forecast/ForecastSkeleton";

export default function ForecastPage() {
  return (
    <Suspense fallback={<ForecastSkeleton />}>
      <ForecastView />
    </Suspense>
  );
}