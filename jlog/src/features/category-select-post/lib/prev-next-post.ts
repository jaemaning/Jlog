import PostsCacheManager from "@/utils/cache";

// 모든 데이터를 순서로대로 Array 전환
export async function postAll(categ : string, name : string) {

  const cacheManager = await PostsCacheManager.getInstance();

  // 캐싱된 데이터 가져오기
  const { postGroups, groups, newGroups, sortedYears } = await cacheManager.getCachedData();
  const posts = await Object.keys(groups)
  .sort((a, b) => Number(b) - Number(a))
  .reduce((acc, year)=>{
    return acc.concat(groups[year]["All"])
  }, [] as [string, string, string, string][][])
  
  const categPosts = await Object.keys(groups)
  .sort((a, b) => Number(b) - Number(a))
  .reduce((acc, year)=>{
    return groups[year][categ]? acc.concat(groups[year][categ]) : acc
  }, [] as [string, string, string, string][][])


  // 단일 포스트 인덱스 조회
  const idx = await posts.findIndex((post) => {
    if (typeof post[1] === 'string' && typeof post[3] == 'string') {
      return post[1] === categ && post[3] === decodeURIComponent(name)
    }
  });

  return {"posts" : posts, "target_idx" : idx, "categPosts" : categPosts}
}