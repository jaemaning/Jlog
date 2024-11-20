import React from 'react';
import { getPostAll } from '@/features/search-post/lib/get-post';
import Link from 'next/link';
import * as styles from './post-list.css';
import { postSortByMonDay, objectSortByYear, postSortByCategory } from '../lib/sort-post';


interface PostListProps {
  category? : string;
}

export async function PostList ({category} : PostListProps) {

  const posts = await getPostAll(category) // 전체 포스트 조회  
  const sortedPost = await postSortByMonDay(posts) // 월, 일 별 sorting
  const groups = await postSortByCategory(sortedPost) // category 별 분류
  const sortedYears = await objectSortByYear(groups) // 연도 sorting 후 리스트 처리

  return (
    <div className={styles.container}>
      {sortedYears.map((year) => (
        <div key={year}>
          <div className={styles.groupContainer}>
            <p className={`${styles.yearStyle} ${styles.grayColor}`}>{year}</p>
            <ul className={styles.uiContainer}>
              {groups[year].map(([title, category, date, name], index) => (
                <li key={index} >
                  <Link href={`/posts/${category}/${name}`} className={styles.FlexContainer}>
                    <p className={styles.pStyle}>{title}</p>
                    <p className={`${styles.grayColor} ${styles.pStyle}`}>{date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <hr />
          <br />
        </div>
      ))}
    </div>
  );

  // 해당 category 버튼 클릭시 아래 보여지는 list가 변경되어야함.
  // return (
  //   <div className={styles.container}>
  //     {groups.map((post, index) => (
  //       <Link className={styles.postLink} key={index} href={`/posts/${post.category}/${post.name}`}>
  //         <Card 
  //           key={index} 
  //           className={styles.gridItem} 
  //           title={post.grayMatterData.title} 
  //           date={post.dateString}
  //           id={index}
  //         >
  //         </Card>
  //       </Link>
  //     ))}
  // </div>
  // );
};