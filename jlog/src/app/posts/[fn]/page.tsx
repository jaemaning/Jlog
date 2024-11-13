import MDXContent from '@/components/atom/MDXContent/MDXContent';
import NameTag from '@/components/atom/nameTag/nameTag';
import { getPost } from '@/utils/getPost';

export default async function PostDetailPage({ params }: { params: { fn: string } }) {
  
  const post = await getPost(params.fn);

  return (
      <div>
        <article>
          <h1>{post.grayMatterData.title}</h1>
          <MDXContent fn={post.content}></MDXContent>
        </article>
        <NameTag></NameTag>
      </div>
  );
};