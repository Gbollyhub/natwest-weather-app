"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { TemperatureUnitProvider } from "@/context/TemperatureUnitContextt";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TemperatureUnitProvider>{children}</TemperatureUnitProvider>
    </QueryClientProvider>
  );
}
