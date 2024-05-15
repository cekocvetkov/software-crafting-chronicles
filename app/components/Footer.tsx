"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const elementClassName = e.target.className;
      if (!elementClassName) {
        return;
      }
      const isPostBody: boolean = isMobile && (elementClassName.startsWith("PostPage") || elementClassName.includes("about-me-page"));
      if (isPostBody) {
        const postBody = document.querySelector("#post-body")!;
        const content = document.querySelector("#content")!;
        const secondColumn = document.querySelector("#second-column")!;
        const currentScrollPos = postBody.scrollTop;
        if (prevScrollpos >= currentScrollPos) {
          content.classList.remove("moveMobile");
          secondColumn.classList.remove("hide-posts");
        } else {
          content.classList.add("moveMobile");
          secondColumn.classList.add("hide-posts");
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
