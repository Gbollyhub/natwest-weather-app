import { cn } from "@/lib/utils";
import { SkyDefs } from "./WeatherArt/Defs";
import { WeatherScene } from "./WeatherArt/WeatherScene";

interface SkyArtworkProps {
  className?: string;
  conditionText: string;
  isDay: boolean;
}

export function SkyArtwork({ className, conditionText, isDay }: SkyArtworkProps) {
  return (
    <div
      className={cn(
        "weather-float flex justify-center mx-0 mb-2 max-w-[520px] lg:mt-[5px] lg:mr-[-70px] lg:mb-0 lg:ml-[-110px] lg:max-w-none",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 620 470" role="presentation" className="block h-auto w-full">
        <SkyDefs isDay={isDay} />
        <WeatherScene conditionText={conditionText} isDay={isDay} />
      </svg>
    </div>
  );
}
