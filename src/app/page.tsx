import { WeatherAppShell } from "@/components/layout/WeatherAppShell";
import { LandingPageHero } from "@/components/features/landing/LandingPageHero";

export default function WeatherLanding() {
  return (
    <WeatherAppShell>
      <LandingPageHero />
    </WeatherAppShell>
  );
}