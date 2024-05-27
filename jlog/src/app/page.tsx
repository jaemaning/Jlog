import Box from "@/components/atom/box/box";
import Typo from "@/components/atom/typo/typo";
import { parsePost } from "@/utils/getPost";
import Card from "@/components/atom/card/card";
import * as styles from './main.css'


export default async function Home() {
  const posts = await parsePost('./posts');

  return (
    <main>
      {posts.map((post, index) => (
        <div className={styles.gridContainer} key={index}>
          <Card className={styles.gridItem}>{post.data.title}</Card>
          {/* <h2>{post.data}</h2> */}
        </div>
      ))}
    </main>
  );
}
