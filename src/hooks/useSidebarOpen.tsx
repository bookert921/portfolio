import { useEffect, useState } from "react";
import { DOMRef } from "types/interfaces";
import useOnClickOutside from "./useOnClickOutside";
import useOnWidthResize from "./useOnWidthResize";
import useToggle from "./useToggle";

const useSidebarOpen = (refs: DOMRef<any>) => {
  const [sideOpen, setSideOpen] = useToggle();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sideOpen) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
    setShow(false);
  }, [sideOpen, show]);

  useOnWidthResize(() => setSideOpen(false));

  useOnClickOutside(refs.navbarEl, () =>
    setSideOpen(false)
  );

  useEffect(() => {
    if (sideOpen) {
      const el = document.getElementById("about");
      if (
        el &&
        window.scrollY > window.innerHeight * 0.5 &&
        window.scrollY <
          window.innerHeight + window.innerHeight * 0.1
      ) {
        el.scrollIntoView();
      } else if (
        window.scrollY <=
        window.innerHeight * 0.5
      ) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }, [sideOpen]);

  return { show, sideOpen, setSideOpen };
};

export default useSidebarOpen;
