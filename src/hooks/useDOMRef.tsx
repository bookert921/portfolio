import { DOMRef } from "@types";
import { useCallback, useState } from "react";

function useDOMRef() {
  const [DOMRef, setDOMRef] = useState<DOMRef<any>>({});
  const setRef = useCallback((node) => {
    if (node != null) {
      setDOMRef((prevDOMRefs) => ({
        ...prevDOMRefs,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  return { DOMRef, setRef };
}

export default useDOMRef;
