import { describe, expect, it } from "vitest";
import { classifyCondition, type SceneKey } from "./classify-condition";

describe("classifyCondition", () => {
  it("is case insensitive", () => {
    expect(classifyCondition("PARTLY CLOUDY")).toBe("partly-cloudy");
    expect(classifyCondition("sUnNy")).toBe("clear");
  });

  it("falls back to cloudy for an unrecognised condition", () => {
    expect(classifyCondition("Volcanic ash")).toBe("cloudy");
  });

  it("falls back to cloudy for an empty string", () => {
    expect(classifyCondition("")).toBe("cloudy");
  });

  it("prioritises thunder over rain when both are present", () => {
    expect(classifyCondition("Moderate or heavy rain with thunder")).toBe(
      "thunderstorm",
    );
  });

  it("prioritises snow over rain for freezing precipitation", () => {
    expect(classifyCondition("Light sleet showers")).toBe("snow");
  });
});
