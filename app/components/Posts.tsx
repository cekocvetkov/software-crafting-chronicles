import { Post, posts } from "#site/content";
import { colorScheme, isColorTooSimilar } from "../utils/color-utils";
import { sortByDate } from "../utils/date-utils";
import PostItem from "./PostItem";
import styles from "./Posts.module.css";

let previousColor = "";

function Posts({ pathName }: { pathName: string }) {
  const sortedPosts = sortByDate(posts).filter((p) => pathName !== `/post/${p.slug}`);
  const highlighted = posts.filter((p) => pathName === `/post/${p.slug}`);
  const displayPosts: Post[] = sortedPosts.filter((p) => p.published);
  if (highlighted && highlighted.length > 0) {
    displayPosts.unshift(highlighted[0]);
  }
  // Function to generate a random index within the colorScheme array
  const getRandomColor = () => {
    let randomColor;
    do {
      const randomIndex = Math.floor(Math.random() * colorScheme.length);
      randomColor = colorScheme[randomIndex];
    } while (isColorTooSimilar(randomColor, previousColor));
    previousColor = randomColor;
    return randomColor;
  };
  getRandomColor();
  return (
    <div id="posts-list" className={styles.posts}>
      {displayPosts.map((post) => {
        return <PostItem key={post.slug} slug={post.slug} title={post.title} date={post.date} color={getRandomColor()} active={pathName === `/post/${post.slug}`}></PostItem>;
      })}
    </div>
  );
}

export default Posts;
