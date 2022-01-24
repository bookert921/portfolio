import { useLayoutEffect, useState } from "react";
import { FixedNavProps } from "types/interfaces";

const useFixedNav = ({
  navbarEl,
  landingEl,
}: FixedNavProps) => {
  const [fixedNav, setFixedNav] = useState(false);
  const fixItem = () => {
    const offset =
      landingEl.offsetHeight - navbarEl.offsetHeight;
    if (window.scrollY > offset) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
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

  return fixedNav;
};

export default useFixedNav;
