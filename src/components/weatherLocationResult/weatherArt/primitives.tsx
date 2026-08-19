const CLOUD_PATH =
  "M118 330c-38 0-66-26-66-60 0-31 23-56 54-60 6-45 45-79 92-79 34 0 64 18 80 45 10-6 21-9 34-9 34 0 62 26 65 59 30 5 52 30 52 60 0 34-28 60-63 60H118Z";
const LOBE_PATH =
  "M369 226c26 0 48 17 55 41 3 10 4 21 2 32-5 20-22 31-45 31-33 0-60-26-60-58s21-46 48-46Z";

type CloudVariant = "light" | "dark" | "neutral";

const CLOUD_GRADIENTS: Record<CloudVariant, { cloud: string; lobe: string }> = {
  light: { cloud: "weatherCloud", lobe: "weatherLobe" },
  dark: { cloud: "weatherCloudDark", lobe: "weatherLobeDark" },
  neutral: { cloud: "weatherCloud", lobe: "weatherCloud" },
};

export function Celestial({
  isDay,
  cx = 424,
  cy = 168,
  r = 118,
}: {
  isDay: boolean;
  cx?: number;
  cy?: number;
  r?: number;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="url(#weatherCelestial)" />
      {!isDay && (
        <g fill="#8f8a72" opacity="0.3">
          <circle cx={cx - r * 0.3} cy={cy - r * 0.34} r={r * 0.12} />
          <circle cx={cx + r * 0.28} cy={cy - r * 0.08} r={r * 0.17} />
          <circle cx={cx - r * 0.05} cy={cy + r * 0.3} r={r * 0.09} />
        </g>
      )}
    </g>
  );
}

export function CloudShape({ variant = "light" }: { variant?: CloudVariant }) {
  const { cloud: cloudId, lobe: lobeId } = CLOUD_GRADIENTS[variant];

  return (
    <g filter="url(#weatherShadow)">
      <path fill={`url(#${cloudId})`} d={CLOUD_PATH} />
    </g>
  );
}

export function SecondaryCloudShape({ variant = "dark" }: { variant?: CloudVariant }) {
  const { cloud: cloudId } = CLOUD_GRADIENTS[variant];

  return (
    <g filter="url(#weatherShadow)" transform="translate(300 -40) scale(0.62)">
      <path fill={`url(#${cloudId})`} d={CLOUD_PATH} />
    </g>
  );
}

export function RainStreaks({ originY = 330 }: { originY?: number }) {
  const drops: Array<[number, number]> = [
    [150, originY + 20],
    [190, originY + 36],
    [230, originY + 18],
    [270, originY + 40],
    [310, originY + 24],
    [130, originY + 48],
  ];

  return (
    <g stroke="url(#weatherRain)" strokeWidth="6" strokeLinecap="round" opacity="0.85">
      {drops.map(([x, y], index) => (
        <line key={index} x1={x} y1={y} x2={x - 14} y2={y + 32} />
      ))}
    </g>
  );
}

export function SnowFlecks({ originY = 330 }: { originY?: number }) {
  const flakes: Array<[number, number]> = [
    [150, originY + 22],
    [190, originY + 38],
    [230, originY + 20],
    [270, originY + 42],
    [310, originY + 26],
    [130, originY + 50],
  ];

  return (
    <g fill="url(#weatherSnow)">
      {flakes.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="7" />
      ))}
    </g>
  );
}

export function LightningBolt() {
  return <path d="M300 336 264 392 288 392 256 444 322 380 296 380Z" fill="#ffcf4d" />;
}

export function FogBands({ isDay }: { isDay: boolean }) {
  const tone = isDay ? "#dcdad2" : "#333a5c";

  return (
    <g filter="url(#weatherSoft)" opacity={isDay ? 0.75 : 0.6}>
      <rect x="60" y="250" width="420" height="26" rx="13" fill={tone} />
      <rect x="120" y="300" width="340" height="22" rx="11" fill={tone} />
      <rect x="40" y="348" width="440" height="24" rx="12" fill={tone} />
    </g>
  );
}

export function StarField() {
  const stars: Array<[number, number, number]> = [
    [96, 58, 2.6],
    [498, 46, 2],
    [548, 108, 2.4],
    [70, 132, 1.8],
    [430, 36, 1.6],
    [566, 176, 2.2],
  ];

  return (
    <g fill="#fdf6e3">
      {stars.map(([x, y, r], index) => (
        <circle key={index} cx={x} cy={y} r={r} opacity="0.9" />
      ))}
    </g>
  );
}
