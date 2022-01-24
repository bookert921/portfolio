import { useEffect } from "react";

const useOnWidthResize = (
  cb: () => void,
  maxWidth: number = 768
) => {
  const onResize = (e: Event) => {
    const target = e.target as Window;
    if (target.innerWidth > maxWidth) {
      cb();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () =>
      window.removeEventListener("resize", onResize);
  }, []);
};

export default useOnWidthResize;
