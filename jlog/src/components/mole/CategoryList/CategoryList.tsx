import React from 'react';
import Box from '@/shared/atom/box/box';
import Button from '@/shared/atom/button/button';
import { container } from './CategoryList.css';
import { getCategoryPostLists } from '@/utils/getPost';

interface CategoryListProps {
  category : string;
}

const CatogoryList: React.FC<CategoryListProps> = ({category}) => {
  const categoryPosts = getCategoryPostLists(category)
  
  // categories 전체 조회 후 뿌려줘야함

  // 해당 category 버튼 클릭시 아래 보여지는 list가 변경되어야함.
  

  return (
    <div className={container}>
      <Button>All</Button>
    </div>
  );
};

export default CatogoryList;
