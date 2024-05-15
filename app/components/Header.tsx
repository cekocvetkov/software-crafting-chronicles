"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);

  const pathName = usePathname();

  const isActive = (href: string) => pathName === href;

  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
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
      //then mobile
      if (elementClassName.startsWith("content-wrapper")) {
        console.log("JAAA");
        const header = document.querySelector("#header")!;
        const contentBody = document.querySelector(".content-wrapper")!;
        const currentScrollPos = contentBody.scrollTop;
        if (currentScrollPos <= 0) {
          header.classList.remove("hide-header");
          header.classList.remove("show-header");
          // postBody.classList.remove("move");
        }
        if (currentScrollPos > prevScrollpos && !header.classList.contains("hide-header")) {
          console.log("DOWN");
          header.classList.remove("show-header");
          header.classList.add("hide-header");
          // postBody.classList.add("move");
        }
        if (currentScrollPos < prevScrollpos && header.classList.contains("hide-header")) {
          console.log("UP");
          header.classList.remove("hide-header");
          header.classList.add("show-header");
        }
        setPrevScrollpos(currentScrollPos);
      }
    };

    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (
    <div id="header" className={styles.header}>
      <Link href="/" className={styles.navItem}>
        tsv
      </Link>
      <div className={styles.nav}>
        <Link href="/about-me" className={isActive("/about-me") ? styles.navItemActive : styles.navItem}>
          about me
        </Link>
        <Link href="/journal" className={isActive("/journal") ? styles.navItemActive : styles.navItem}>
          search
        </Link>
      </div>
    </div>
  );
}

export default Header;
