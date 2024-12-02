import MDXContent from '@/shared/atom/mdx-content/mdx-content';
import { container, extraSetting, articleStyle, hrSetting } from './page.css'
import { getPostDetail } from '@/features/search-post/lib/get-post';
import Giscus from '@/shared/atom/giscus/giscus';
import { PostFooter } from '@/entities/post-footer';
import { postAll } from '@/features/category-select-post/lib/prev-next-post';

type Params = {
  category: string
  slug: string
};


export default async function PostDetailPage({ params } : { params : Params }) {
  const post = await getPostDetail(params.category, params.slug)

  // Array 탐색 후 이전 이후 검색
  const { posts, target_idx, categPosts } = await postAll(params.category, params.slug)
  const prev = target_idx > 0 ? posts[target_idx - 1] : null;
  const next = target_idx < posts.length - 1 ? posts[target_idx + 1] : null;

  return (
      <div>
        <article className={articleStyle}>
          <div className={container}>
            <h1>{post.grayMatterData.title}</h1>
            <p>{post.dateString}</p>
            <hr className={hrSetting} />
          </div>
          <div className={extraSetting}>
            <MDXContent postName={post.content}></MDXContent>
            <hr className={hrSetting} />
          </div>
          <PostFooter prev={prev} next={next} categPosts={categPosts} target_name={params.slug} target_category={params.category}></PostFooter>
          <Giscus></Giscus>
        </article>
      </div>
  );
};