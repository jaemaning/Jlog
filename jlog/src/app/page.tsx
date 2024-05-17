import Box from "@/components/atom/box/box";
import Typo from "@/components/atom/typo/typo";
import { allPosts } from '.contentlayer/generated';

export default function Home() {
  return (
    <main>
      {allPosts.map((post) => (
        <Box key={post._id} padding="large">
          <Typo size="ha" margin="medium" href={`/posts/${post._raw.flattenedPath}`}>
            {post.title}
          </Typo>
          <Typo size="a" margin="medium" href={`/posts/${post._raw.flattenedPath}`}>
            {post.tags}
          </Typo>
        </Box>
      ))}
    </main>
  );
}
