import React from 'react';
import { getPostAll } from '@/utils/getPost';
import Card from '@/entities/post/ui/post-card';
import Link from 'next/link';
import * as styles from './post-list.css'
import { GroupDictionary } from '../model/model';


interface PostListProps {
  category? : string;
}

export async function PostList ({category} : PostListProps) {
  const posts = await getPostAll(category)
  // categories 전체 조회 후 뿌려줘야함
  const groups : GroupDictionary = {

  }

  // 카테고리 분리
  posts.map((post)=>{
    const [year, month, day] = post.dateString.split(".")
    if(year in groups) {
      groups[year].push([post.grayMatterData.title, post.category, month+"."+day, post.name])
    } else {
      groups[year] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
    }
  })
  // 연도별로 정렬 (내림차순)
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
                    <p className={`${styles.pStyle} ${styles.grayColor}`}>{date}</p>
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