import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { server } from "@/test/server";
import { renderWithProviders } from "@/test/renderWithProviders";
import { LocationSearchForm } from "./LocationSearchForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

describe("LocationSearchForm error handling (integration)", () => {
  it("shows an error message when the search request fails", async () => {
    server.use(
      http.get("/api/location-search", () => {
        return HttpResponse.json({ error: "provider down" }, { status: 500 });
      })
    );

    const user = userEvent.setup();
    renderWithProviders(<LocationSearchForm />);

    const input = screen.getByRole("combobox", { name: /search for a city or country/i });
    await user.type(input, "lond");

    expect(await screen.findByText(/unable to search locations/i)).toBeInTheDocument();
  });
});