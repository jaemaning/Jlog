import { Posts, Post } from '@/features/search-post/model/model'
import { GroupDictionary } from '../model/model';

// 월 일만 비교하기, 연도는 그룹으로 관리
export function postSortByMonDay (posts: Posts) : Posts {
    return [...posts].sort((a, b) => {
        const [_a, aMonth, aDay] = a.dateString.split(".").map(Number);
        const [_b, bMonth, bDay] = b.dateString.split(".").map(Number);
        
        // 월 비교
        if (bMonth !== aMonth) {
        return bMonth - aMonth;
        }
        // 일 비교
        return bDay - aDay;
    });
};

export function objectSortByYear(obj : Object) : string[] {
    return Object.keys(obj).sort((a, b)=>{
        return Number(b) - Number(a)
    })
}

export function postSortByCategory(posts: Posts) : GroupDictionary {
    const groups : GroupDictionary = {

    }
    
    // 날짜별 분리해서 넣어주기
    posts.map((post : Post)=>{
      const [year, month, day] = post.dateString.split(".")
      if(year in groups) {
        groups[year].push([post.grayMatterData.title, post.category, month+"."+day, post.name])
      } else {
        groups[year] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
      }
    })

    return groups
}