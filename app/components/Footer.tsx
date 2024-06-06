"use client";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.footerWrapper}>
      <div className={styles.contactIcons}>
        <Link aria-label="LinkedIn Link" href="https://linkedin.com/in/tsvetkov-tsvetan">
          <IoLogoLinkedin size={24} />
        </Link>
        <Link aria-label="Github Link" href="https://github.com/cekocvetkov">
          <IoLogoGithub size={24}></IoLogoGithub>
        </Link>
      </div>
      <div className={styles.footer}>Copyright © 2024 Tsvetan Tsvetkov </div>
    </footer>
  );
}

export default Footer;
