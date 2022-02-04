import { useEffect, useLayoutEffect, useState } from "react";
import { DOMRef } from "types/interfaces";

const useFixedNav = ({ navbarEl, landingEl }: DOMRef<HTMLElement>) => {
  const [fixedNav, setFixedNav] = useState(false);
  const fixItem = () => {
    const offset = landingEl.offsetHeight - navbarEl.offsetHeight;
    if (window.scrollY > offset) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    const main = document.querySelector("main");
    console.log(main);
    const mainHeight = main != null && main.offsetHeight;
    if (mainHeight <= window.innerHeight) {
      setFixedNav(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!navbarEl || !landingEl) return;
    setFixedNav(false);

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
