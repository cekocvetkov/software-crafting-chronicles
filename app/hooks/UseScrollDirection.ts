import { useState, useEffect, useRef } from "react";
import useMobile from "./IsMobile";
const scrollEffectsThresholdInPx = 300;
const useScrollDirection = () => {
  const isMobile = useMobile();
  const [scrollDirection, setScrollDirection] = useState("top");
  const lastScrollTopRef = useRef(0);
  function debounce(fn: any, delay: any) {
    let timeoutId: any;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
  useEffect(() => {
    console.log("Setting up scroll listener...");
    const handleScroll = () => {
      console.log(lastScrollTopRef.current);
      console.log(`isMobile: ${isMobile.current}`);
      const contentBody = document.querySelector("#content")!;
      const header = document.querySelector("#header")!;
      const secondColumn = document.querySelector("#second-column")!;

      const currentScrollTop = contentBody.scrollTop;

      // Skip scroll animations effects if it's just for a little space
      if (isMobile.current && Math.abs(contentBody.scrollHeight - window.outerHeight) < 200) {
        return;
      }

      if (currentScrollTop <= 0) {
        setScrollDirection("top");

        header.classList.remove("hide-header");
        header.classList.remove("show-header");
        // contentBody.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        if (isMobile.current) {
          contentBody.classList.remove("move-body");
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.remove("show-header");
        }
      } else if (currentScrollTop > lastScrollTopRef.current) {
        setScrollDirection("down");
        header.classList.remove("show-header");
        header.classList.add("hide-header");
        if (isMobile.current) {
          contentBody.classList.add("move-body");
          secondColumn.classList.remove("show-header");
          secondColumn.classList.add("hide-posts");
        }
      } else if (currentScrollTop < lastScrollTopRef.current) {
        setScrollDirection("up");
        header.classList.remove("hide-header");
        header.classList.add("show-header");
        if (isMobile.current) {
          contentBody.classList.remove("move-body");
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.add("show-header");
        }
      }
      if (isMobile.current) {
        if (currentScrollTop + window.outerHeight >= contentBody.scrollHeight) {
          lastScrollTopRef.current = contentBody.scrollHeight;
        } else {
          lastScrollTopRef.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }
      } else {
        lastScrollTopRef.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
      }
    };

    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
