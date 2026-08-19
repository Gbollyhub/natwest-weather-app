import { WeatherShell } from "@/components/common/weatherShell";
import { WeatherLandingHero } from "./weatherLandingPageHero";

export function WeatherLanding() {
  return (
    <WeatherShell>
      <WeatherLandingHero />
    </WeatherShell>
  );
}
