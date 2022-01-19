import { useEffect, useState } from "react";

const useSticky = ({
  navEl,
  mainEl,
}: {
  navEl: HTMLDivElement;
  mainEl: HTMLDivElement;
}) => {
  const [fixed, setFixed] = useState(false);

  const nav = navEl;
  if (!nav) throw new Error("Didn't find a nav");
  const main = mainEl;
  if (!main) throw new Error("Didn't find a main");
  const offset = main.offsetHeight - nav.offsetHeight;

  //   let previousY = 9999;
  const updateNav = () => {
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
    document.addEventListener("scroll", updateNav, {
      capture: true,
      passive: true,
    });
    return () =>
      document.removeEventListener("scroll", updateNav, {
        capture: true,
        passive: true,
      } as any);
  }, [updateNav]);

  return fixed;
};

export default useSticky;
