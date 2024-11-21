import { Typo } from "@/shared/atom/typo/typo";
import { getPostAll } from "@/features/search-post/lib/get-post";
import * as styles from './main.css'
import { PostList } from "@/entities/post";
import IntroBox from "@/shared/atom/intro/inrtro";

export default async function Home() {
  const posts = await getPostAll();

  return (
    <main className={styles.mainContainer}>
      <IntroBox></IntroBox>
      <Typo size="p1">All Posts - {posts.length}</Typo>
      <hr/>
      <br/>
      <PostList />
    </main>
  );
}
