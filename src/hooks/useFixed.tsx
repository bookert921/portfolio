import { useLayoutEffect, useState } from "react";
import { FixedNavProps } from "types/interfaces";

const useFixed = ({
  navbarEl,
  landingEl,
}: FixedNavProps) => {
  const [fixed, setFixed] = useState(false);
  const fixItem = () => {
    const offset =
      landingEl.offsetHeight - navbarEl.offsetHeight;
    if (window.scrollY > offset) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useLayoutEffect(() => {
    if (!navbarEl || !landingEl) return;

    document.addEventListener("scroll", fixItem, {
      capture: true,
      passive: true,
    });

    return () =>
      document.removeEventListener("scroll", fixItem, {
        capture: true,
        passive: true,
      } as any);
  }, [navbarEl, landingEl]);

  return fixed;
};

export default useFixed;
