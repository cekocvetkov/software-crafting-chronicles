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
      const isPostBody: boolean = isMobile && (elementClassName.startsWith("content-wrapper") || elementClassName.includes("about-me-page"));
      if (isPostBody) {
        const postBody = document.querySelector("#post-body")!;
        const content = document.querySelector(".content-wrapper")!;
        const secondColumn = document.querySelector("#second-column")!;
        const currentScrollPos = content.scrollTop;
        // console.log("!!!!");
        // console.log(`${prevScrollpos} x ${currentScrollPos}`);

        if (currentScrollPos <= 0) {
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.remove("show-header");
          // postBody.classList.remove("move");
        }
        if (currentScrollPos > prevScrollpos && !secondColumn.classList.contains("hide-posts")) {
          secondColumn.classList.remove("show-header");
          secondColumn.classList.add("hide-posts");
          // postBody.classList.add("move");
        }
        if (currentScrollPos < prevScrollpos && secondColumn.classList.contains("hide-posts")) {
          secondColumn.classList.remove("hide-posts");
          secondColumn.classList.add("show-header");
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
