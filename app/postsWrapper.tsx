"use client";
import { usePathname } from "next/navigation";
import Posts from "./components/Posts";

function PostsWrapper() {
  const pathname = usePathname();

  return <Posts pathName={pathname}></Posts>;
}

export default PostsWrapper;
