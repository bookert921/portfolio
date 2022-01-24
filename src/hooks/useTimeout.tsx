import { useRef, useEffect, useCallback } from "react";

// https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/2-useTimeout/useTimeout.js

const useTimeout = (cb: () => void, delay: number) => {
  const callbackRef = useRef(cb);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(
      () => callbackRef.current(),
      delay
    );
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

export default useTimeout;
