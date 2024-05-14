"use client";

import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";
function Cursor() {
  let timer: NodeJS.Timeout;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = (e: any) => {
    if (timer !== null) {
      setIsScrollable(true);
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      setIsScrollable(false);
    }, 150);
  };
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
      // setIsScrollable(target.className.startsWith("Posts"));
    };
    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const flareSize = isPointer ? 0 : 20;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};
  const scrollableStyle = isScrollable ? styles.flareScroll : {};
  return (
    <div
      // className={`${styles.flare} ${scrollableStyle}`} // add mouse effect for posts
      className={`${styles.flare} ${scrollableStyle}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
}

// Export the FlareCursor component to be used in other parts of the application.
export default Cursor;
