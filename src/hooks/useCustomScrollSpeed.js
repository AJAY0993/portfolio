// src/hooks/useThrottledScroll.js
import { useEffect } from "react";

const useThrottledScroll = (scrollSpeed = 0.5) => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollDiff = currentScrollTop - lastScrollTop;
      lastScrollTop = currentScrollTop;

      window.scrollBy({
        top: scrollDiff * scrollSpeed,
        behavior: "smooth",
      });
    };

    // Throttle the scroll event to improve performance
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(
            function () {
              if (Date.now() - lastRan >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
              }
            },
            limit - (Date.now() - lastRan),
          );
        }
      };
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [scrollSpeed]);
};

export default useThrottledScroll;
