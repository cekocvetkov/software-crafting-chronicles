import { other } from "#site/content";

import styles from "./page.module.css";
import MDXComponent from "../components/mdx/MDXComponent";
import ResetHeader from "../post/[slug]/resetHeader";
import { SourceTextModule } from "vm";

function AboutMe() {
  const aboutMePage = other.find((p) => p.slug == "about-me");
  return (
    <div id="post-body" className={`${styles.postBody} about-me-page`}>
      <ResetHeader></ResetHeader>
      <div className={styles.n}>
        <MDXComponent code={aboutMePage!.code}></MDXComponent>
      </div>
    </div>
  );
}

export default AboutMe;
