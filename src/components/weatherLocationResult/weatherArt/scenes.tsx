import {
  Celestial,
  CloudShape,
  FogBands,
  LightningBolt,
  RainStreaks,
  SecondaryCloudShape,
  SnowFlecks,
  StarField,
} from "./primitives";

export interface SceneProps {
  isDay: boolean;
}

export function ClearScene({ isDay }: SceneProps) {
  return (
    <>
      {!isDay && <StarField />}
      <Celestial isDay={isDay} cx={310} cy={190} r={140} />
    </>
  );
}

export function PartlyCloudyScene({ isDay }: SceneProps) {
  return (
    <>
      {!isDay && <StarField />}
      <Celestial isDay={isDay} />
      <CloudShape variant="light" />
    </>
  );
}

export function CloudyScene({}: SceneProps) {
  return (
    <>
      <SecondaryCloudShape variant="dark" />
      <CloudShape variant="dark" />
    </>
  );
}

export function RainScene({}: SceneProps) {
  return (
    <>
      <CloudShape variant="dark" />
      <RainStreaks />
    </>
  );
}

export function ThunderstormScene({}: SceneProps) {
  return (
    <>
      <CloudShape variant="dark" />
      <LightningBolt />
    </>
  );
}

export function SnowScene({}: SceneProps) {
  return (
    <>
      <CloudShape variant="neutral" />
      <SnowFlecks />
    </>
  );
}

export function FogScene({ isDay }: SceneProps) {
  return <FogBands isDay={isDay} />;
}
