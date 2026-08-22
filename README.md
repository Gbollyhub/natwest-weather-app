# NatWest Weather App

A small weather app built for the NatWest front-end coding exercise.

You can search for a city or UK postcode, view current conditions and a 3-day forecast, and switch between Celsius and Fahrenheit. The layout is responsive and works across desktop and mobile.

Built with **Next.js 16, TypeScript, TanStack Query, Tailwind CSS and WeatherAPI.com**.

**Deployed on Vercel: https://natwest-weather-app.vercel.app/**

Figma Design Link: https://www.figma.com/design/58WPyC8YJ4xEQNXKJN8vBe/Natwest-Weather-App?node-id=0-1&t=hKf3znD5BjUP7uuO-1

Figma Design Prototype: https://www.figma.com/proto/58WPyC8YJ4xEQNXKJN8vBe/Natwest-Weather-App?node-id=1-2&t=7ezkRzZr2Rha81cH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/Gbollyhub/natwest-weather-app.git
cd natwest-weather-app
npm install
```

### 2. Add your WeatherAPI key

Create a free account at [WeatherAPI.com](https://www.weatherapi.com/) and get an API key.

Then create `.env.local`:

```bash
cp .env.example .env.local
```

Add:

```env
NEXT_WEATHER_API_URL=https://api.weatherapi.com
NEXT_WEATHER_API_KEY=your_key_here
```

The API key is kept server-side and is never exposed to the browser. Weather requests go through the app's own API routes.

### 3. Start the app

```bash
npm run dev
```

Open http://localhost:3000.

## Testing

The project uses **Vitest, React Testing Library and MSW**.

```bash
npm test
npm test:e2e
```

Other useful commands:

```bash
npm run test:watch
npm run test:coverage
```

The tests are split into:

* **Unit tests** – utilities such as temperature conversion and date formatting.
* **Component tests** – UI components such as the forecast cards, metrics and temperature toggle.
* **Integration tests** – the search flow, including the debounced search, API response and URL update.
* **E2E tests** – the search to forecast flow, including error state.

I chose this approach so that most tests stay fast and focused, while the more important user flow is tested with realistic network behaviour.

## A few technical decisions

### Next.js instead of plain React.js

I went with Next.js mainly because the WeatherAPI key has to stay off the client, and Next.js gives me a server (via API routes) to hide it behind in the same project, no separate backend to stand up and deploy. It also meant file-based routing for the two screens here and a single, simple Vercel deploy. The trade-off is real added complexity, the server/client component boundary and a stricter build step, one build failure only ever showed up in next build, never in next dev. For a pure client-side app with no secret to hide, I'd lean towards React.js instead.

### WeatherAPI.com

I considered WeatherAPI.com, OpenWeather and Open-Meteo.

WeatherAPI.com was the best fit because a single request provides the location, current conditions and forecast, supports UK postcode searches, and returns both Celsius and Fahrenheit values.

The free plan provides a 3-day forecast, so the app currently uses that rather than making additional requests.

### Server-side API requests

The browser doesn't call WeatherAPI directly.

Instead:

```text
Browser
   ↓
Next.js API route
   ↓
WeatherAPI
```

This keeps the API key on the server and gives the application a single place to handle the external API.

### TanStack Query

TanStack Query is used for server state such as weather data and location search results.

It provides caching, loading/error states and request deduplication without introducing a larger client-side state management solution.

## Testing decisions

I chose **Vitest** with React Testing Library rather than Jest because it provides a lightweight setup with native ESM and works well with the existing TypeScript/Vite-style tooling.

**Mock Service Worker (MSW)** is used for API mocking in integration tests. Rather than mocking the weather hook itself, the tests intercept the network request so the real query, loading and error behaviour are exercised.

**Playwright** is a strong choice for E2E because it gives you a good balance of real browser testing, reliability, speed, and developer experience.

I haven't added a large number of tests just for coverage. The focus is on testing actual behaviour and places where bugs are likely to occur.

## What I'd improve next

Given more time, I'd prioritise:

1. Add automated accessibility checks with axe.
2. Improve API error handling so different provider failures produce more useful messages.
3. Add visual regression tests for the main weather states.

## License

Built as part of the NatWest front-end coding exercise.
