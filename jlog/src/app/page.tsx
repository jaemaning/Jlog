import Box from "@/components/atom/box/box";
import Typo from "@/components/atom/typo/typo";
import { parsePost } from "@/utils/getPost";
import Card from "@/components/atom/card/card";
import * as styles from './main.css'
import { format } from "date-fns";



export default async function Home() {
  const posts = await parsePost('./posts');

  return (
    <main className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        {posts.map((post, index) => (
          <Card 
          key={index} 
          className={styles.gridItem} 
          title={post.graayMatterData.title} 
          description={post.graayMatterData.description} 
          date={post.graayMatterData.date}
          id={index}
          />
        ))}
      </div>
    </main>
  );
}
