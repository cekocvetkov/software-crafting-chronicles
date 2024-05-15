"use client";
import React, { useEffect, useState } from "react";

function ScrollHandler() {
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const elementClassName = e.target.className;
      if (!elementClassName) {
        return;
      }
      const isContentBody: boolean = elementClassName === "content";
      if (isContentBody && !isMobile) {
        const header = document.querySelector("#header")!;
        const contentBody = document.querySelector("#content")!;
        const currentScrollPos = contentBody.scrollTop;
        if (currentScrollPos <= 0) {
          header.classList.remove("hide-header");
          header.classList.remove("show-header");
          // postBody.classList.remove("move");
        }
        if (currentScrollPos > prevScrollpos && !header.classList.contains("hide-header")) {
          header.classList.remove("show-header");
          header.classList.add("hide-header");
          // postBody.classList.add("move");
        }
        if (currentScrollPos < prevScrollpos && header.classList.contains("hide-header")) {
          header.classList.remove("hide-header");
          header.classList.add("show-header");
        }
        setPrevScrollpos(currentScrollPos);
        return;
      }
      const isPostBody: boolean = isMobile && elementClassName.startsWith("content-wrapper");
      if (isPostBody) {
        const postBody = document.querySelector("#post-body")!;
        const content = document.querySelector(".content-wrapper")!;
        const secondColumn = document.querySelector("#second-column")!;
        const header = document.querySelector("#header")!;

        const currentScrollPos = content.scrollTop;

        if (currentScrollPos <= 0) {
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.remove("show-header");

          header.classList.remove("hide-header");
          header.classList.remove("show-header");
        }
        if (currentScrollPos > prevScrollpos && !secondColumn.classList.contains("hide-posts")) {
          secondColumn.classList.remove("show-header");
          secondColumn.classList.add("hide-posts");

          header.classList.remove("show-header");
          header.classList.add("hide-header");
          // postBody.classList.add("move");
        }
        if (currentScrollPos < prevScrollpos && secondColumn.classList.contains("hide-posts")) {
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.add("show-header");

          header.classList.remove("hide-header");
          header.classList.add("show-header");
        }

        setPrevScrollpos(currentScrollPos);
      }
    };
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, prevScrollpos]);
  return <div></div>;
}

export default ScrollHandler;
