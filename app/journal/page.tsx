"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Post, posts } from "#site/content";
interface TagItem {
  tag?: string;
  count?: number;
  active?: boolean;
}
function Journal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsValue = searchParams.get("search") ? searchParams.get("search") : "";
  const tagsParamValue = searchParams.get("tags") ? searchParams.get("tags") : "";

  const [currentTags, setCurrentTags] = useState<TagItem[]>([]);

  function getAllTags(posts: Array<Post>) {
    const tags: TagItem[] = [];
    posts.forEach((post) => {
      if (post.published) {
        post.tags?.forEach((tag) => {
          let t: TagItem | undefined = tags.find((t) => t.tag === tag);
          console.log(t);

          if (!t) {
            t = { tag: tag, active: false, count: 1 };
            tags.push(t);
          } else {
            t.count! += 1;
          }
        });
      }
    });

    return tags;
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    const tagsString = currentTags
      .filter((t) => t.active === true)
      .map((t) => t.tag)
      .join(",");
    router.push(`${pathname}?search=${input}&tags=${tagsString}`);
  }
  function handleTagClick(tag: string) {
    //TOGGLE THIS
    const newCurrentTags = currentTags;
    const clickedTag = newCurrentTags.find((t) => t.tag === tag);
    clickedTag!.active = !clickedTag?.active;

    setCurrentTags([...newCurrentTags]);
    const tagsString = newCurrentTags
      .filter((t) => t.active === true)
      .map((t) => t.tag)
      .join(",");
    router.push(`${pathname}?search=${searchParamsValue}&tags=${tagsString}`);
  }
  function isActive(tag: string) {
    // return Object.keys(currentTags).includes(tag);
  }
  useEffect(() => {
    const tags = getAllTags(posts);
    const tagParams = tagsParamValue?.split(",");
    tags.forEach((t) => {
      if (tagParams!.includes(t.tag!)) {
        t.active = true;
      }
    });
    setCurrentTags(tags);
  }, []);

  return (
    <div className="journap-wrapper">
      <div className="input">
        <input className="input" autoFocus={true} value={searchParamsValue!} type="text" placeholder="search" onChange={handleSearch} />
      </div>
      <div className="searchTags">
        {currentTags.length == 0 ? (
          <></>
        ) : (
          currentTags.map((tagItem: TagItem) => (
            <a onClick={() => handleTagClick(tagItem!.tag!)} className={`tag ${tagItem!.active ? "active" : ""}`} key={tagItem.tag}>
              {tagItem.tag} ({tagItem.count})
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default Journal;
