"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);

  const pathName = usePathname();

  const isActive = (href: string) => pathName === href;

  useEffect(() => {
    const handleScroll = (e: any) => {
      const elementClassName = e.target.className;
      if (!elementClassName) {
        return;
      }
      const isPostBody: boolean = elementClassName.startsWith("PostPage") || elementClassName.includes("about-me-page");
      if (isPostBody) {
        const header = document.querySelector("#header")!;
        const postBody = document.querySelector("#post-body")!;
        const currentScrollPos = postBody.scrollTop;

        if (0 >= currentScrollPos) {
          header.classList.remove("hide");
          postBody.classList.remove("move");
        } else {
          header.classList.add("hide");
          postBody.classList.add("move");
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
          journal
        </Link>
      </div>
    </div>
  );
}

export default Header;
