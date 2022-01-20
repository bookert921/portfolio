import { useCallback, useState } from "react";
import { DOMRef } from "types/interfaces";

const useDOMRef = () => {
  const [DOMRef, setDOMRef] = useState<DOMRef<any>>({});
  const setRef = useCallback((node) => {
    if (node != null) {
      console.log("Setting DOM Refs");
      setDOMRef((prevDOMRefs) => ({
        ...prevDOMRefs,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  return [DOMRef, setRef] as [
    DOMRef<any>,
    (node?: any) => void
  ];
};

export default useDOMRef;
