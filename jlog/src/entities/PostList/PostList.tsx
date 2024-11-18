import React from 'react';
import * as styles from './PostList.css';
import { getPostAll } from '@/utils/getPost';
import Card from '@/shared/atom/card/card';
import Link from 'next/link';

interface PostListProps {
  category? : string;
}

const PostList: React.FC<PostListProps> = async ({category}) => {
  const posts = await getPostAll(category)
  // categories 전체 조회 후 뿌려줘야함

  // 해당 category 버튼 클릭시 아래 보여지는 list가 변경되어야함.
  return (
    <div className={styles.gridContainer}>
      {posts.map((post, index) => (
        <Link className={styles.postLink} key={index} href={`/posts/${post.category}/${post.name}`}>
          <Card 
            key={index} 
            className={styles.gridItem} 
            title={post.grayMatterData.title} 
            description={post.grayMatterData.description} 
            date={post.dateString}
            id={index}
          >
          </Card>
        </Link>
      ))}
  </div>
  );
};

export default PostList;
