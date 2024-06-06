"use client";

import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const flareSize = isPointer ? 0 : 20;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};
  return (
    <div
      className={`${styles.flare}`}
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
