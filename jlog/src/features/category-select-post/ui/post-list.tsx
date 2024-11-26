import React from 'react';
import Link from 'next/link';
import * as styles from './post-list.css';
import { GroupDictionary } from '../model/model';


export function PostList ({ sortedYears, groups, category } : { sortedYears :string[], groups : GroupDictionary, category: string }) {

  return (
    <div className={styles.container}>
      {sortedYears.map((year) => (
        groups[year][category]? 
        <div key={year}>
          <div className={styles.groupContainer}>
            <p className={`${styles.yearStyle} ${styles.grayColor}`}>{year}</p>
            <ul className={styles.uiContainer}>
              {groups[year][category].map(([title, categ, date, name], index) => (
                <li key={index} >
                  <Link href={`/posts/${categ}/${name}`} className={styles.FlexContainer}>
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
      :null))}
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