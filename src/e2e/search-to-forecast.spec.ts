import { test, expect, Page } from "playwright/test";
import { mockLondonSearchResult, mockLondonForecast } from "./mockdata";

async function mockWeatherApi(page: Page) {
  await page.route("**/api/location-search**", async (route) => {
    await route.fulfill({ json: mockLondonSearchResult });
  });

  await page.route("**/api/forecast**", async (route) => {
    await route.fulfill({ json: mockLondonForecast });
  });
}

test.describe("search to forecast", () => {
  test("searching a city, selecting it shows the city's weather forecast", async ({
    page,
  }) => {
    await mockWeatherApi(page);
    await page.goto("/");

    const searchInput = page.getByRole("combobox", {
      name: /search for a city or country/i,
    });
    await searchInput.fill("lond");

    const option = page.getByRole("option", {
      name: /london, city of london, greater london, united kingdom/i,
    });

    await expect(option).toBeVisible();
    await option.click();

    await expect(page).toHaveURL(/\/forecast\?lat=51\.52&lon=-0\.11/);

    await expect(
      page.getByRole("heading", {
        name: /london, city of london, greater london, united kingdom/i,
      }),
    ).toBeVisible();
    await expect(page.getByText("18°")).toBeVisible();
    await expect(page.getByText("Partly cloudy")).toBeVisible();
  });

  test("searching a city with no matches shows the empty state and does not navigate", async ({
    page,
  }) => {
    await page.route("**/api/location-search**", async (route) => {
      await route.fulfill({ json: [] });
    });

    await page.goto("/");

    const searchInput = page.getByRole("combobox", {
      name: /search for a city or country/i,
    });
    await searchInput.fill("zzzrandomlocation");

    await expect(page.getByText(/no matching locations/i)).toBeVisible();
    await expect(page).toHaveURL("/");
  });

  test("a failed forecast request shows the error state with a working retry", async ({
    page,
  }) => {
    await page.route("**/api/forecast**", (route) =>
      route.fulfill({ status: 500, json: { error: "provider down" } }),
    );

    await page.goto("/forecast?lat=51.52&lon=-0.11");

    await expect(
      page.getByRole("heading", { name: /Could not load the forecast/i }),
    ).toBeVisible({ timeout: 15000 });

    // Swap the mock to succeed now, before clicking retry
    await page.unroute("**/api/forecast**");
    await page.route("**/api/forecast**", (route) =>
      route.fulfill({ json: mockLondonForecast }),
    );

    await page.getByRole("button", { name: /try again/i }).click();

    await expect(page.getByText("18°")).toBeVisible();
  });
});
