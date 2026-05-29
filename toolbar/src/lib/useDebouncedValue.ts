import { useEffect, useRef, useState } from "react";

export function useDebouncedValue<T>(
  value: T,
  delay = 300,
  onDebounce?: (value: T) => void,
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const callbackRef = useRef(onDebounce);

  useEffect(() => {
    callbackRef.current = onDebounce;
  }, [onDebounce]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);

      callbackRef.current?.(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
}
