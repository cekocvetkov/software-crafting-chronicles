"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function Tags({ tags }: { tags: string[] }) {
  const router = useRouter();

  const pathname = usePathname();
  const [currentTags, setCurrentTags] = useState<string[]>([]);

  function onClick(tag: any) {
    if (currentTags.includes(tag)) {
      const indexOfTag = currentTags.indexOf(tag);
      const newCurrentTags = [...currentTags.slice(0, indexOfTag), ...currentTags.slice(indexOfTag + 1)];
      setCurrentTags(newCurrentTags);
      router.push(`/journal?tags=${newCurrentTags}`);
      return;
    }
    const newCurrentTags = new Set([...currentTags, tag]);
    setCurrentTags([...newCurrentTags]);
    router.push(`/journal?tags=${[...newCurrentTags]}`);
  }

  function isActive(tag: string) {
    return currentTags.includes(tag);
  }

  return (
    <div className="tags">
      {tags && tags.length == 0 ? (
        <></>
      ) : (
        tags?.map((tag) => (
          <a onClick={() => onClick(tag)} className={`tag ${isActive(tag) ? "active" : ""}`} key={tag}>
            {tag}
          </a>
        ))
      )}
    </div>
  );
}

export default Tags;
