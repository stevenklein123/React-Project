import { useState } from "react";

export function useCounter(initialValue = 0, { min = -Infinity, max = Infinity } = {}) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => Math.min(prev + 1, max));
  const decrement = () => setCount((prev) => Math.max(prev - 1, min));
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset, setCount };
}
