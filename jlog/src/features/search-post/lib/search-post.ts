import { Posts } from "../model/model";

export function postSortByDate (posts: Posts) : Posts {
    return [...posts].sort((a, b) => {
        const [aYear, aMonth, aDay] = a.dateString.split(".").map(Number);
        const [bYear, bMonth, bDay] = b.dateString.split(".").map(Number);

        // 연 비교
        if (aYear !== bYear) {
            return bYear-aYear
        }

        // 월 비교
        if (bMonth !== aMonth) {
            return bMonth - aMonth;
        }

        // 일 비교
        return bDay - aDay;
    });
};

export function postSearch(posts: React.RefObject<Posts>, val : string) {
    const searchQuery = val.toLowerCase();
    const filteredPosts = posts.current!.filter((post) => {
        // 제목 | 내용에서 검색어가 포함된 경우 필터링
        return post.grayMatterData.title.toLowerCase().includes(searchQuery) || post.content.toLowerCase().includes(searchQuery);
    })
    return postSortByDate(filteredPosts)
}

// const searchQuery = e.target.value.toLowerCase();
// const filteredPosts = initialPostsRef.current.filter((post) => {
//     // 제목 | 내용에서 검색어가 포함된 경우 필터링
//     return post.grayMatterData.title.toLowerCase().includes(searchQuery) || post.content.toLowerCase().includes(searchQuery);
// });