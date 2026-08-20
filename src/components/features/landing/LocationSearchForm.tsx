"use client";

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
import useLocationSearch from "@/hooks/useLocationSearch";
import { cn } from "@/lib/utils";

const LOCATION_INPUT_ID = "weather-location-search";

function formatLocationLabel(item: LocationOption): string {
  return `${item.name}, ${item.region}, ${item.country}`;
}

export function LocationSearchForm({ className }: { className?: string }) {
  const {
    location,
    searchValue,
    setSearchValue,
    suggestions,
    handleLocationSelect,
    isError,
    isPending,
    debouncedLocationSearch,
    locateUserFunc,
    locateError,
  } = useLocationSearch();

  return (
    <div className="flex flex-col gap-2">
      <form
        className={cn(
          "flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center",
          className,
        )}
        onSubmit={(event) => event.preventDefault()}
      >
        <Combobox
          items={suggestions}
          value={location}
          onValueChange={handleLocationSelect}
          inputValue={searchValue}
          onInputValueChange={setSearchValue}
          itemToStringLabel={formatLocationLabel}
          filter={null}
        >
          <label htmlFor={LOCATION_INPUT_ID} className="sr-only">
            Search for a city or country
          </label>
          <ComboboxInputGroup className="sm:flex-1">
            <Search
              className="size-4 shrink-0 text-weather-muted"
              aria-hidden="true"
            />
            <ComboboxInput
              id={LOCATION_INPUT_ID}
              placeholder="Search city or country"
            />
          </ComboboxInputGroup>
          <ComboboxPopup>
            <ComboboxEmpty>
              {isError
                ? "Unable to search locations."
                : isPending && debouncedLocationSearch.length >= 2
                  ? "Searching..."
                  : "No matching locations."}
            </ComboboxEmpty>
            <ComboboxList>
              {(item: LocationOption) => (
                <ComboboxItem key={item.id} value={item}>
                  {formatLocationLabel(item)}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>

        <Button
          onClick={locateUserFunc}
          type="button"
          className="h-auto shrink-0 gap-2 rounded-md bg-weather-amber px-6 py-3 text-weather-ink hover:bg-weather-amber/90"
        >
          <LocateFixed className="size-4" aria-hidden="true" />
          Use my location
        </Button>
      </form>

      {locateError && (
        <p role="alert" className="text-xs text-red-600">
          {locateError}
        </p>
      )}
    </div>
  );
}
