"use client";
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
      console.log(isMobile);
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
    console.log(window.innerWidth);
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log("!! " + isMobile);
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
        <a href="https://linkedin.com/in/tsvetkov-tsvetan">
          <IoLogoLinkedin size={24} />
        </a>
        <a href="https://github.com/cekocvetkov">
          <IoLogoGithub size={24}></IoLogoGithub>
        </a>
      </div>
      <div className="footer">Copyright © 2024 Tsvetan Tsvetkov </div>
    </footer>
  );
}

export default Footer;
