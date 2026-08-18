export function GreetingSection({ greeting, headingId }: { greeting: string; headingId: string }) {
  return (
    <div>
      <h1
        id={headingId}
        suppressHydrationWarning
        className="text-[32px] font-semibold tracking-[-0.01em] sm:text-[40px]"
      >
        {greeting}
      </h1>
      <p className="mt-3 text-[15px] text-weather-ink-2 sm:text-base">
        Which city or country&rsquo;s weather can I help you with today?
      </p>
    </div>
  );
}
