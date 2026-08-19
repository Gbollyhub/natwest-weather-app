import { WeatherShell } from "@/components/layout/WeatherShell";
import { WeatherLandingHero } from "@/components/features/landing/WeatherLandingPageHero";

export function WeatherLanding() {
  return (
    <WeatherShell>
      <WeatherLandingHero />
    </WeatherShell>
  );
}