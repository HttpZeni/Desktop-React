import { useRef, useCallback } from "react";

export function useHoldPress(callback: () => void, holdTime = 800) {
  const timeoutRef = useRef<number | null>(null);

  const start = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => {
      callback();
    }, holdTime);
  }, [callback, holdTime]);

  const stop = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop
  };
}
