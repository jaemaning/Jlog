import Box from "@/shared/atom/box/box";
import Typo from "@/shared/atom/typo/typo";
import { getPostAll } from "@/utils/getPost";
import Card from "@/shared/atom/card/card";
import * as styles from './main.css'
import { format } from "date-fns";
import PostList from "@/components/mole/PostList/PostList";
import IntroBox from "@/components/mole/IntroBox/IntroBox";

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
