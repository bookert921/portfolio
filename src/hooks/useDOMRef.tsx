import { DOMRefReturn } from "@types";
import { useCallback, useState } from "react";
import { DOMRef } from "types/interfaces";

const useDOMRef = () => {
  const [DOMRef, setDOMRef] = useState<DOMRef<unknown>>({});
  const setRef = useCallback((node) => {
    if (node != null) {
      setDOMRef((prevDOMRefs) => ({
        ...prevDOMRefs,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  return [DOMRef, setRef] as DOMRefReturn;
};

export default useDOMRef;
