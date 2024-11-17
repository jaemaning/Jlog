import MDXContent from '@/shared/atom/MDXContent/MDXContent';
import NameTag from '@/shared/atom/nameTag/nameTag';
import { getPost } from '@/utils/getPost';
import { useEffect } from 'react';
import { container } from './page.css'

export default async function PostDetailPage({ params }: { params: { fn: string } }) {
  
  const post = await getPost(params.fn);

  const title = post.grayMatterData.title
  const date = JSON.stringify(post.grayMatterData.date).split("T")[0].toString().substring(1,20).split("-").join(".")

  return (
      <div>
        <article>
          <div className={container}>
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
          <hr />
          <MDXContent fn={post.content}></MDXContent>
        </article>
        <NameTag></NameTag>
      </div>
  );
};