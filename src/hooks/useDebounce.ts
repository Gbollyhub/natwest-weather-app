import { useEffect, useState } from "react";

// useDebounce is a custom hook that debounces a value by a specified delay. 
// It returns the debounced value, which only updates after the specified delay
export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}