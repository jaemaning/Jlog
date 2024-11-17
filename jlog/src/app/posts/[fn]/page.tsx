import MDXContent from '@/shared/atom/MDXContent/MDXContent';
import NameTag from '@/shared/atom/nameTag/nameTag';
import { getPost } from '@/utils/getPost';

export default async function PostDetailPage({ params }: { params: { fn: string } }) {
  
  const post = await getPost(params.fn);

  const title = post.grayMatterData.title
  const date = JSON.stringify(post.grayMatterData.date)
  const year = date

  return (
      <div>
        <article>
          <h1>{title}</h1>
          <p>{date}</p>
          <MDXContent fn={post.content}></MDXContent>
        </article>
        <NameTag></NameTag>
      </div>
  );
};