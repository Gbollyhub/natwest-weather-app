"use client";

import { useState } from "react";
import { LocateFixed, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";
import type { LocationOption } from "@/types";

const LOCATION_INPUT_ID = "weather-location-search";

export function LocationSearchForm({ suggestions }: { suggestions: LocationOption[] }) {
  const [value, setValue] = useState<LocationOption | null>(null);

  return (
    <form
      className="flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      onSubmit={(event) => event.preventDefault()}
    >
      <Combobox items={suggestions} value={value} onValueChange={setValue}>
        <label htmlFor={LOCATION_INPUT_ID} className="sr-only">
          Search for a city or country
        </label>
        <ComboboxInputGroup className="sm:flex-1">
          <Search className="size-4 shrink-0 text-weather-muted" aria-hidden="true" />
          <ComboboxInput id={LOCATION_INPUT_ID} placeholder="Search city or country" />
        </ComboboxInputGroup>
        <ComboboxPopup>
          <ComboboxEmpty>No matching locations.</ComboboxEmpty>
          <ComboboxList>
            {(item: LocationOption) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>

      <Button
        type="button"
        className="h-auto shrink-0 gap-2 rounded-md bg-weather-amber px-6 py-3 text-white hover:bg-weather-amber/90"
      >
        <LocateFixed className="size-4" aria-hidden="true" />
        Use my location
      </Button>
    </form>
  );
}
