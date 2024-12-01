import { divideCategory } from "@/entities/category-post/lib/category-post";
import { objectSortByYear, postPrevNextContentAdd, postSortByCategory, postSortByMonDay } from "@/entities/category-post/lib/sort-post";
import { getPostAll } from "@/features/search-post/lib/get-post";
import { Posts } from "@/features/search-post/model/model";

class PostsCacheManager {
  private static instance: PostsCacheManager;
  private cachedData: any = null;
  private CACHE_TIMEOUT = 60 * 60 * 1000; // 1시간
  private lastUpdated: number = 0;

  private constructor() {

  }

  // Singleton 패턴: 유일한 인스턴스를 반환
  public static getInstance(): PostsCacheManager {
    if (!PostsCacheManager.instance) {
      PostsCacheManager.instance = new PostsCacheManager();
    }
    return PostsCacheManager.instance;
  }

  // 캐시 초기화 및 데이터 가져오기
  public async getStaticPosts(posts?: Posts) {
    const now = Date.now();

    // 캐시가 유효한 경우, 저장된 데이터 반환
    if (this.cachedData && now - this.lastUpdated < this.CACHE_TIMEOUT) {
      return this.cachedData;
    }

    // posts가 없으면 예외 발생
    if (!posts) {
      throw new Error("Posts data is required to initialize cache!");
    }

    // 데이터 처리
    const postGroups = await divideCategory(posts);
    const sortedPost = await postSortByMonDay(posts);
    const groups = await postSortByCategory(sortedPost);
    const sortedYears = await objectSortByYear(groups);
    const newGroups = await postPrevNextContentAdd(groups);

    // 데이터 갱신
    this.cachedData = { postGroups, groups, newGroups, sortedYears };
    this.lastUpdated = now;

    return this.cachedData;
  }

  // 캐시 데이터 가져오기 (초기화된 상태가 아닌 경우 캐시 데이터 생성)
  public async getCachedData() {
    if (!this.cachedData) {
      const posts = await getPostAll()
      await this.getStaticPosts(posts)
      return this.cachedData
    }
    return this.cachedData;
  }
}

export default PostsCacheManager;