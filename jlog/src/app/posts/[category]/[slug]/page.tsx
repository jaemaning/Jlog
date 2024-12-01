import MDXContent from '@/shared/atom/mdx-content/mdx-content';
import { container, extraSetting, articleStyle, hrSetting } from './page.css'
import { getPostDetail } from '@/features/search-post/lib/get-post';
import Giscus from '@/shared/atom/giscus/giscus';
import PostFooter from '@/shared/atom/post-footer/post-footer';
import PostsCacheManager from '@/utils/cache';
import { GroupDictionary } from '@/features/category-select-post/model/model';

type Params = {
  category: string
  slug: string
};


export default async function PostDetailPage({ params } : { params : Params }) {
  const post = await getPostDetail(params.category, params.slug)

  const cacheManager = await PostsCacheManager.getInstance();

  // 캐싱된 데이터 가져오기
  const { postGroups, groups, newGroups, sortedYears } = await cacheManager.getCachedData();

  // 모든 데이터를 순서로대로 Array 전환
  async function postAll(groups : GroupDictionary, categ : string, name : string) {
    const posts = await Object.keys(groups)
    .sort((a, b) => Number(b) - Number(a))
    .reduce((acc, year)=>{
      return acc.concat(groups[year]["All"])
    }, [] as [string, string, string, string][][])

    // 단일 포스트 인덱스 조회
    const idx = await posts.findIndex((post) => {
      if (typeof post[1] === 'string' && typeof post[3] == 'string') {
        return post[1] === categ && post[3] === decodeURIComponent(name)
      }
    });

    return {"posts" : posts, "target_idx" : idx}
  }

  // Array 탐색 후 이전 이후 검색
  const { posts, target_idx } = await postAll(groups, params.category, params.slug)
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
          <hr />
          <div className={extraSetting}>
            <MDXContent postName={post.content}></MDXContent>
            <hr className={hrSetting} />
          </div>
          <PostFooter prev={prev} next={next}></PostFooter>
          <Giscus></Giscus>
        </article>
      </div>
  );
};