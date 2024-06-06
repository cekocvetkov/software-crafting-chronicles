import { posts } from "#site/content";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import ResetHeader from "./resetHeader";
import MDXComponent from "@/app/components/mdx/MDXComponent";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = getPost(slug);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <div id="post-body" className="post-body">
      <ResetHeader></ResetHeader>
      <div>
        <MDXComponent code={post!.code}></MDXComponent>
      </div>
    </div>
  );
}

export default Post;
