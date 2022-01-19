import { useEffect, useState } from "react";
import { StickyProps } from "types/interfaces";

const useSticky = ({ navEl, mainEl }: StickyProps) => {
  const [fixed, setFixed] = useState(false);

  //   let previousY = 9999;
  const updateNav = () => {
    const offset = mainEl.offsetHeight - navEl.offsetHeight;
    console.log(offset);
    // iOS scrolls to make sure the viewport fits, don't hide the input then
    const hasKeyboardFocus =
      document.activeElement &&
      (document.activeElement.nodeName === "INPUT" ||
        document.activeElement.nodeName === "TEXTAREA");

    if (hasKeyboardFocus) {
      return;
    }

    if (window.scrollY > offset) {
      setFixed(true);
    } else {
      setFixed(false);
    }

    // const showNav = () => {
    //   nav.classList.add("down");
    //   nav.classList.remove("up");
    // };

    // const hideNav = () => {
    //   nav.classList.add("up");
    //   nav.classList.remove("down");
    // };

    // const goingUp =
    //   window.screenY > 1 && window.screenY > previousY;
    // previousY = window.screenY;

    // if (goingUp) {
    //   showNav();
    // } else {
    //   hideNav();
    // }
  };

  useEffect(() => {
    if (!navEl || !mainEl) return;
    document.addEventListener("scroll", updateNav, {
      capture: true,
      passive: true,
    });

    return () =>
      document.removeEventListener("scroll", updateNav, {
        capture: true,
        passive: true,
      } as any);
  }, [navEl, mainEl]);

  return fixed;
};

export default useSticky;
