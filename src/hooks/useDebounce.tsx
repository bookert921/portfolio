import { useEffect } from "react";
import useTimeout from "./useTimeout";

const useDebounce = (
  cb: () => void,
  delay: number,
  deps: any[]
) => {
  const { reset, clear } = useTimeout(cb, delay);
  useEffect(reset, [...deps, reset]);
  useEffect(clear, []);
};

export default useDebounce;
