import { posts } from "#site/content";
import MDXComponent from "@/app/components/mdx/MDXComponent";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import styles from "./PostPage.module.css";
import ResetHeader from "./resetHeader";
import { slug } from "github-slugger";

//TODO: DO THIS!
// export const generateStaticParams = () => {
//   const tags = posts;
//   const paths = Object.keys(tags).map((slug) => ({ slug: slug(slug) }));
//   return paths;
// };

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = getPost(slug);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <div id="post-body" className={styles.postBody}>
      <ResetHeader></ResetHeader>
      <div className={styles.n}>
        <MDXComponent code={post!.code}></MDXComponent>
      </div>
    </div>
  );
}

export default Post;
