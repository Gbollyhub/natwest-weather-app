import type { DaypartIconKind, MetricGlyphName } from "./types";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const METRIC_PATHS: Record<MetricGlyphName, React.ReactNode> = {
  highLow: (
    <>
      <path {...strokeProps} d="M4.4 2.6v8.2" />
      <path {...strokeProps} d="M2.2 4.8 4.4 2.6l2.2 2.2" />
      <circle cx="11.6" cy="3.6" r="1.5" {...strokeProps} />
    </>
  ),
  wind: (
    <>
      <path {...strokeProps} d="M1.8 6h7.4a2 2 0 1 0-2-2" />
      <path {...strokeProps} d="M2.6 9h6.2" />
      <path {...strokeProps} d="M4.4 12h5a1.8 1.8 0 1 1-1.8 1.8" />
    </>
  ),
  humidity: <path {...strokeProps} d="M8 1.8s4.4 4.5 4.4 7.3A4.4 4.4 0 0 1 8 13.5a4.4 4.4 0 0 1-4.4-4.4C3.6 6.3 8 1.8 8 1.8Z" />,
  dewPoint: (
    <>
      <path {...strokeProps} d="M6.6 2.6s3.6 3.9 3.6 6.3a3.6 3.6 0 1 1-7.2 0c0-2.4 3.6-6.3 3.6-6.3Z" />
      <circle cx="12.8" cy="3.4" r="1.2" {...strokeProps} />
    </>
  ),
  pressure: (
    <>
      <path {...strokeProps} d="M8 1.6v3.2M6.4 3.2 8 1.6l1.6 1.6" />
      <path {...strokeProps} d="M4.6 7.2h6.8M5.8 9.6h4.4" />
      <path {...strokeProps} d="M8 14.4v-3.2M6.4 12.8 8 14.4l1.6-1.6" />
    </>
  ),
  uvIndex: (
    <>
      <circle cx="8" cy="8" r="2.9" {...strokeProps} />
      <path
        {...strokeProps}
        d="M8 1.4v1.6M8 13v1.6M1.4 8H3M13 8h1.6M3.5 3.5l1.1 1.1M11.4 11.4l1.1 1.1M12.5 3.5l-1.1 1.1M4.6 11.4l-1.1 1.1"
      />
    </>
  ),
  visibility: (
    <>
      <path {...strokeProps} d="M1.4 8S4 3.6 8 3.6 14.6 8 14.6 8 12 12.4 8 12.4 1.4 8 1.4 8Z" />
      <circle cx="8" cy="8" r="2.1" fill="currentColor" stroke="none" />
    </>
  ),
  moonPhase: (
    <>
      <circle cx="8" cy="8" r="6.2" {...strokeProps} />
      <path d="M8 1.8a6.2 6.2 0 0 1 0 12.4Z" fill="currentColor" />
    </>
  ),
};

export function MetricGlyph({ name }: { name: MetricGlyphName }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      {METRIC_PATHS[name]}
    </svg>
  );
}

export function ArrowUpIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 10.2V2.2M2.6 5.6 6 2.2l3.4 3.4" fill="none" stroke="#e8a33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 1.8v8M2.6 6.4 6 9.8l3.4-3.4" fill="none" stroke="#e8a33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DaypartIcon({ kind }: { kind: DaypartIconKind }) {
  const cloud = (
    <path
      fill="url(#dpCloud)"
      d="M14 40c-6 0-11-4.4-11-10 0-5.2 4.2-9.5 9.6-9.9 2.4-6.6 8.8-11.1 16.1-11.1 7.9 0 14.7 5.3 16.6 12.6 5.6.7 9.7 5.2 9.7 10.5 0 5.9-5 10.9-11.4 10.9H14Z"
    />
  );

  return (
    <svg width="62" height="52" viewBox="0 0 62 52" aria-hidden="true">
      <defs>
        <linearGradient id="dpCloud" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eae6dd" />
        </linearGradient>
        <radialGradient id="dpSun" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="60%" stopColor="#fbc340" />
          <stop offset="100%" stopColor="#f0a41c" />
        </radialGradient>
      </defs>

      {kind === "sun" && <circle cx="31" cy="27" r="15" fill="url(#dpSun)" />}

      {kind === "partly" && (
        <>
          {cloud}
          <path fill="url(#dpSun)" d="M44 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-11-5-11-12 4.4-12 11-12Z" />
        </>
      )}

      {kind === "cloud" && cloud}

      {kind === "moon" && (
        <>
          {cloud}
          <path
            fill="url(#dpSun)"
            d="M47 12c1.6 3.9 1.2 8.4-1.5 12-2.7 3.6-7 5.3-11.1 4.9 3.4 4.2 9.4 5.3 14.1 2.3 5-3.2 6.7-9.8 3.8-15a11 11 0 0 0-5.3-4.2Z"
          />
        </>
      )}
    </svg>
  );
}
