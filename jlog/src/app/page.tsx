import Box from "@/components/atom/box/box";
import Typo from "@/components/atom/typo/typo";
import { getPostAll } from "@/utils/getPost";
import Card from "@/components/atom/card/card";
import * as styles from './main.css'
import { format } from "date-fns";
import PostList from "@/components/mole/PostList/PostList";



export default async function Home() {
  const posts = await getPostAll('./posts');

  return (
    <main className={styles.mainContainer}>
      {/* <PostList /> */}
    </main>
  );
}
