import type { ComponentType } from "react";
import { classifyCondition, type SceneKey } from "./classifyCondition";
import {
  ClearScene,
  CloudyScene,
  FogScene,
  PartlyCloudyScene,
  RainScene,
  SnowScene,
  ThunderstormScene,
  type SceneProps,
} from "./scenes";

const SCENE_BY_KEY: Record<SceneKey, ComponentType<SceneProps>> = {
  clear: ClearScene,
  "partly-cloudy": PartlyCloudyScene,
  cloudy: CloudyScene,
  rain: RainScene,
  thunderstorm: ThunderstormScene,
  snow: SnowScene,
  fog: FogScene,
};

export function WeatherScene({ conditionText, isDay }: { conditionText: string; isDay: boolean }) {
  const Scene = SCENE_BY_KEY[classifyCondition(conditionText)];
  return <Scene isDay={isDay} />;
}
