"use client";
import { usePathname } from "next/navigation";
import Posts from "./components/Posts";
import { Suspense } from "react";

function PostsWrapper() {
  const pathname = usePathname();

  return (
    <Suspense>
      <Posts pathName={pathname}></Posts>
    </Suspense>
  );
}

export default PostsWrapper;
