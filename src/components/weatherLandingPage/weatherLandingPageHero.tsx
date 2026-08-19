"use client";

import { useState } from "react";
import { GREETINGS } from "@/config/constants";
import { GreetingSection } from "./greetingSection";
import { LocationSearchForm } from "./locationSearchForm";

export function WeatherLandingHero() {
  const [greeting] = useState(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
  );

  return (
    <section
      aria-labelledby="weather-greeting-heading"
      className="flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center"
    >
      <GreetingSection
        greeting={greeting}
        headingId="weather-greeting-heading"
      />
      <LocationSearchForm />
    </section>
  );
}
