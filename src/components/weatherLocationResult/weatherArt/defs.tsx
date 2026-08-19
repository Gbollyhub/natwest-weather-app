export function SkyDefs({ isDay }: { isDay: boolean }) {
  return (
    <defs>
      <radialGradient id="weatherCelestial" cx="34%" cy="28%" r="78%">
        {isDay ? (
          <>
            <stop offset="0%" stopColor="#ffe28c" />
            <stop offset="52%" stopColor="#fbc23f" />
            <stop offset="100%" stopColor="#ef9c17" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#f6f2e6" />
            <stop offset="55%" stopColor="#d9d3c1" />
            <stop offset="100%" stopColor="#aea684" />
          </>
        )}
      </radialGradient>

      <linearGradient id="weatherCloud" x1="0.15" y1="0" x2="0.75" y2="1">
        {isDay ? (
          <>
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="62%" stopColor="#fbfaf7" />
            <stop offset="100%" stopColor="#ece8e0" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#828cae" />
            <stop offset="62%" stopColor="#606a90" />
            <stop offset="100%" stopColor="#454c74" />
          </>
        )}
      </linearGradient>

      <linearGradient id="weatherLobe" x1="0.2" y1="0" x2="0.8" y2="1">
        {isDay ? (
          <>
            <stop offset="0%" stopColor="#ffd96a" />
            <stop offset="100%" stopColor="#f5ab26" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#a7aed0" />
            <stop offset="100%" stopColor="#767ea4" />
          </>
        )}
      </linearGradient>

      <linearGradient id="weatherCloudDark" x1="0.15" y1="0" x2="0.75" y2="1">
        {isDay ? (
          <>
            <stop offset="0%" stopColor="#ccd0d9" />
            <stop offset="60%" stopColor="#aab0bd" />
            <stop offset="100%" stopColor="#878d9c" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#454c6c" />
            <stop offset="60%" stopColor="#333955" />
            <stop offset="100%" stopColor="#22263c" />
          </>
        )}
      </linearGradient>

      <linearGradient id="weatherLobeDark" x1="0.2" y1="0" x2="0.8" y2="1">
        {isDay ? (
          <>
            <stop offset="0%" stopColor="#b9bfcc" />
            <stop offset="100%" stopColor="#9198a8" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#565d80" />
            <stop offset="100%" stopColor="#3c4363" />
          </>
        )}
      </linearGradient>

      <linearGradient id="weatherRain" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={isDay ? "#8ec1e6" : "#5c7fa8"} />
        <stop offset="100%" stopColor={isDay ? "#4a90c9" : "#38597e"} />
      </linearGradient>

      <linearGradient id="weatherSnow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#dbe8f6" />
      </linearGradient>

      <filter id="weatherSoft" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="7" />
      </filter>

      <filter id="weatherShadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="26" stdDeviation="26" floodColor={isDay ? "#c8bda6" : "#05070f"} floodOpacity="0.28" />
      </filter>
    </defs>
  );
}
