"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const pathName = usePathname();

  const isActive = (href: string) => pathName === href;

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
