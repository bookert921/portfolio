import { useLayoutEffect, useState } from "react";
import { FixedNavProps } from "types/interfaces";

const useFixed = ({ navEl, mainEl }: FixedNavProps) => {
  const [fixed, setFixed] = useState(false);
  const fixItem = () => {
    const offset = mainEl.offsetHeight - navEl.offsetHeight;
    console.log(
      window.scrollY,
      mainEl.offsetHeight - navEl.offsetHeight
    );
    if (window.scrollY > offset) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useLayoutEffect(() => {
    if (!navEl || !mainEl) return;

    document.addEventListener("scroll", fixItem, {
      capture: true,
      passive: true,
    });

    return () =>
      document.removeEventListener("scroll", fixItem, {
        capture: true,
        passive: true,
      } as any);
  }, [navEl, mainEl]);

  return fixed;
};

export default useFixed;
