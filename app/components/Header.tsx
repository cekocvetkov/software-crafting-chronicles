"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import useScrollDirection from "../hooks/UseScrollDirection";
import ScrollToTop from "./ScrollToTop";

function Header() {
  const pathName = usePathname();
  useScrollDirection();

  const isActive = (href: string) => pathName === href;

  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div id="header" className={styles.header}>
        <Link href="/" scroll={false} className={styles.navItem}>
          tsv
        </Link>
        <div className={styles.nav}>
          <Link href="/about-me" scroll={false} className={isActive("/about-me") ? styles.navItemActive : styles.navItem}>
            about me
          </Link>
          <Link href="/journal" scroll={false} className={isActive("/journal") ? styles.navItemActive : styles.navItem}>
            search
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
