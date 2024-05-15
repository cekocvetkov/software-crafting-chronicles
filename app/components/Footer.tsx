"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <footer id="footer" className="footer-wrapper">
      <div className="contact-icons">
        <Link aria-label="LinkedIn Link" href="https://linkedin.com/in/tsvetkov-tsvetan">
          <IoLogoLinkedin size={24} />
        </Link>
        <Link aria-label="Github Link" href="https://github.com/cekocvetkov">
          <IoLogoGithub size={24}></IoLogoGithub>
        </Link>
      </div>
      <div className="footer">Copyright © 2024 Tsvetan Tsvetkov </div>
    </footer>
  );
}

export default Footer;
