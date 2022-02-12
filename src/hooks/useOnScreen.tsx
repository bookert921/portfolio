import { DOMRef } from "@types";
import { useEffect, useState } from "react";

export default function useOnScreen(ref: DOMRef<any>, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref as HTMLElement);
    return () => {
      if (ref == null) return;
      observer.unobserve(ref as HTMLElement);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
