import { Typo } from "@/shared/atom/typo/typo";
import { getPostAll } from "@/features/search-post/lib/get-post";
import * as styles from './main.css'
import { PostList } from "@/features/category-select-post";
import IntroBox from "@/shared/atom/intro/inrtro";
import { CategoryList } from "@/entities/category-post"
import { divideCategory } from "@/entities/category-post/lib/category-post";

export default async function Home() {
  const posts = await getPostAll();

  return (
    <main className={styles.mainContainer}>
      <IntroBox></IntroBox>
      <CategoryList posts={posts} />
    </main>
  );
}
