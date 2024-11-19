import MDXContent from '@/shared/atom/mdx-content/MDXContent';
import NameTag from '@/shared/atom/name-tag/name-tag';
import { container, extraSetting } from './page.css'
import { getPostDetail } from '@/entities/post/lib/get-post';

type Props = {
  params: { category: string; slug: string };
};


export default async function PostDetailPage({ params : { category, slug } } : Props) {
  const post = await getPostDetail(category, slug)

  if (!post) {
    return null
  }

  return (
      <div>
        <article>
          <div className={container}>
            <h1>{post.grayMatterData.title}</h1>
            <p>{post.dateString}</p>
          </div>
          <hr />
          <div className={extraSetting}>
            <MDXContent postName={post.content}></MDXContent>
          </div>
        </article>
        <NameTag></NameTag>
      </div>
  );
};