import { useCallback, useState } from "react";

const useDOMRef = <
  T extends Record<keyof T, HTMLElement>
>() => {
  const [DOMRef, setDOMRef] = useState<T>({} as T);
  const setRef = useCallback((node) => {
    if (node != null) {
      setDOMRef((prevDOMRefs) => ({
        ...prevDOMRefs,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  return [DOMRef, setRef] as const;
};

export default useDOMRef;
