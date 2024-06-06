import { other } from "#site/content";

import MDXComponent from "../components/mdx/MDXComponent";
import ResetHeader from "../post/[slug]/resetHeader";

function AboutMe() {
  const aboutMePage = other.find((p) => p.slug == "about-me");
  return (
    <div id="post-body" className={`post-body-about about-me-page`}>
      <ResetHeader></ResetHeader>
      <div>
        <MDXComponent code={aboutMePage!.code}></MDXComponent>
      </div>
    </div>
  );
}

export default AboutMe;
