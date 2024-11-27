import MDXContent from '@/shared/atom/mdx-content/mdx-content';
import NameTag from '@/shared/atom/name-tag/name-tag';
import { container, extraSetting, articleStyle } from './page.css'
import { getPostDetail } from '@/features/search-post/lib/get-post';
import { notFound } from 'next/navigation';
import Giscus from '@/shared/atom/giscus/giscus';

type Params = {
  params: { category: string; slug: string };
};

export default async function PostDetailPage({ params } : Params) {
  const post = await getPostDetail(params.category, params.slug)

  return (
      <div>
        <article className={articleStyle}>
          <div className={container}>
            <h1>{post.grayMatterData.title}</h1>
            <p>{post.dateString}</p>
          </div>
          <hr />
          <div className={extraSetting}>
            <MDXContent postName={post.content}></MDXContent>
          </div>
        </article>
        <Giscus></Giscus>
      </div>
  );
};