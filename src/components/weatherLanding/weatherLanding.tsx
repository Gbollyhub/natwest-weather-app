import { WeatherShell } from "@/components/common/weatherShell";
import { WeatherLandingHero } from "./weatherLandingHero";

export function WeatherLanding() {
  return (
    <WeatherShell>
      <WeatherLandingHero />
    </WeatherShell>
  );
}
