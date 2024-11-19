import React from 'react';
import { getPostAll } from '@/entities/post/lib/get-post';
import Link from 'next/link';
import * as styles from './post-list.css'
import { GroupDictionary, Posts, Post } from '../model/model';
import { sorting } from '../lib/sort-post'


interface PostListProps {
  category? : string;
}

export async function PostList ({category} : PostListProps) {
  const posts = await getPostAll(category)
  const sortedPost = await sorting(posts)
  // categories 전체 조회 후 뿌려줘야함
  const groups : GroupDictionary = {

  }
  
  // 날짜별 분리해서 넣어주기
  sortedPost.map((post : Post)=>{
    const [year, month, day] = post.dateString.split(".")
    if(year in groups) {
      groups[year].push([post.grayMatterData.title, post.category, month+"."+day, post.name])
    } else {
      groups[year] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
    }
  })

  // 여기서 연도 한번 더 분류
  const sortedYears = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

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