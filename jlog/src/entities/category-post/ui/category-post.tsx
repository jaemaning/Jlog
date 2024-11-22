import React from 'react';
import { Button } from '@/shared/atom/button';
import { container } from './category-list.css';
import { getPostAll } from '@/features/search-post/lib/get-post';

interface CategoryPostProps {
  category : string;
}

export async function CategoryPost({category} : CategoryPostProps) {
  // categories 전체 조회 후 뿌려줘야함

  // 해당 category 버튼 클릭시 아래 보여지는 list가 변경되어야함.

  return (
    <div className={container}>
    </div>
  );
};
