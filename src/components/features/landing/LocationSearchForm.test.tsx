import { describe, expect, it, vi, beforeEach } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/test/renderWithProviders";
import { LocationSearchForm } from "./LocationSearchForm";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe("LocationSearchForm (integration)", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("searches for a location and navigates to its forecast on selection", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LocationSearchForm />);

    const input = screen.getByRole("combobox", { name: /search for a city or country/i });
    await user.type(input, "lond");

    const option = await screen.findByRole(
      "option",
      { name: /london, city of london, greater london, united kingdom/i },
      { timeout: 2000 }
    );
    await user.click(option);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/forecast?lat=51.52&lon=-0.11");
    });
  });

  it("shows a no-results message for a location that does not exist", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LocationSearchForm />);

    const input = screen.getByRole("combobox", { name: /search for a city or country/i });
    await user.type(input, "randomplace");

    expect(await screen.findByText(/no matching locations/i)).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled();
  });
});