'use client'

import React, { useEffect, useState } from 'react';
import { container, hiddenOpt, selectOpt, selectVariants } from './category-list.css';
import { PostList } from '@/features/category-select-post';
import { Posts } from '@/features/search-post/model/model';
import { divideCategory } from '../lib/category-post';
import { CategoryGroups } from '../model/model';
import { objectSortByYear, postSortByCategory, postSortByMonDay } from '../lib/sort-post';
import { GroupDictionary } from '@/features/category-select-post/model/model';
import { Typo } from '@/shared/atom/typo';


export function CategoryList({ posts } : {posts : Posts}) {
  // 해당 category 버튼 클릭시 아래 보여지는 list가 변경되어야함.
  const [category, setCategory] = useState("All");
  const [postGroups, setPostGroups] = useState<CategoryGroups>({});
  const [groups, setGroups] = useState<GroupDictionary>({});
  const [sortedYears, setSortedYear] = useState<string[]>([]);
  
  useEffect(()=>{
    async function fetchData() {
      const postGroups = await divideCategory(posts);
      const sortedPost = await postSortByMonDay(posts) // 월, 일 별 sorting
      const groups = await postSortByCategory(sortedPost) // category 별 분류
      const sortedYears = await objectSortByYear(groups) // 연도 sorting 후 리스트 처리

      setPostGroups(postGroups);
      setGroups(groups)
      setSortedYear(sortedYears)
    }

    fetchData();
  }, [posts, category])

  function clickEvent(e : string) {
    setCategory(e)
  }

  return (
    <div>
      <div className={container}>
        <Typo cls={`${selectOpt} ${category === "All" ? selectVariants.active : selectVariants.inactive}`} onClick={()=>{clickEvent("All")}}>All({postGroups["All"]?.length})</Typo>
        {
          Object.keys(postGroups)
          .filter((post)=> post !== "All")
          .map((post, idx)=>(
            <Typo cls={[hiddenOpt, `${selectOpt} ${category === post ? selectVariants.active : selectVariants.inactive}`]} key={idx} onClick={()=>clickEvent(post)}>{post[0].toUpperCase()+post.substring(1, post.length)}({postGroups[post].length})</Typo>
          ))
        }
      </div>
      <hr/>
      <br/>
      <PostList sortedYears={sortedYears} groups={groups} category={category}/>
    </div>
  );
};