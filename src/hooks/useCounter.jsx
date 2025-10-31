import { useEffect, useState, useRef } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const toggle = () => setRunning((prev) => !prev);
  const reiniciar = () => setCount(initial);
  const adelantar = () => setCount((prev) => prev + 5);
  const atrasar = () => setCount((prev) => Math.max(prev - 5, 0));

  return { count, running, toggle, reiniciar, adelantar, atrasar };
}
