import { WeatherShell } from "@/components/layout/WeatherAppShell";
import { LandingPageHero } from "@/components/features/landing/LandingPageHero";

export default function WeatherLanding() {
  return (
    <WeatherShell>
      <LandingPageHero />
    </WeatherShell>
  );
}