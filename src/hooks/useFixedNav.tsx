import { useEffect, useLayoutEffect, useState } from "react";
import { DOMRef } from "@types";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const useFixedNav = ({ navbarEl, landingEl }: DOMRef<HTMLElement>) => {
  const [fixedNav, setFixedNav] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const fixItem = () => {
    let offset = landingEl.offsetHeight - navbarEl.offsetHeight;
    if (mobile) offset = offset - 32;

    if (window.scrollY >= offset) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  /* For pages that have no scroll */
  useEffect(() => {
    const main = document.querySelector("main");
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
