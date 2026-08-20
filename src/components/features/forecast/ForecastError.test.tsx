import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { ForecastError } from "./ForecastError";

describe("ForecastError", () => {
  it("calls onRetry when the button is clicked", async () => {
    const onRetry = vi.fn();
    const user = userEvent.setup();
    render(<ForecastError onRetry={onRetry} />);

    await user.click(screen.getByRole("button", { name: /try again/i }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});