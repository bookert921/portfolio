import { useEffect, useState } from "react";
import { FixedProps } from "types/interfaces";

const useFixed = ({ fixedEl, containerEl }: FixedProps) => {
  const [fixed, setFixed] = useState(false);

  const fixItem = () => {
    const offset =
      containerEl.offsetHeight - fixedEl.offsetHeight;
    if (window.scrollY > offset) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    if (!fixedEl || !containerEl) return;
    document.addEventListener("scroll", fixItem, {
      capture: true,
      passive: true,
    });

    return () =>
      document.removeEventListener("scroll", fixItem, {
        capture: true,
        passive: true,
      } as any);
  }, [fixedEl, containerEl]);

  return fixed;
};

export default useFixed;
