"use client";
import Link from "next/link";
import { formatDate } from "../utils/date-utils";
import styles from "./Posts.module.css";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  color: string; //HEX String
  active: boolean;
}

function PostItem({ slug, title, date, color, active }: PostItemProps) {
  return (
    <Link
      key={1}
      href={`/post/${slug}`}
      className={`${styles.post} ${active ? styles.active : ""}`}
      style={{ backgroundColor: color }}
    >
      <div className={styles.postText}>{title}</div>
      <div className={styles.postDate}>{formatDate(date)}</div>
    </Link>
  );
}

export default PostItem;
