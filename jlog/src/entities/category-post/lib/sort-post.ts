import { Posts, Post } from '@/features/search-post/model/model'
import { GroupDictionary } from '../../../features/category-select-post/model/model';

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
    
    // 날짜별, 카테고리별 분리해서 넣어주기
    posts.map((post : Post)=>{
      const [year, month, day] = post.dateString.split(".")

      if(year in groups) {
        if ("All" in groups[year]) {
          groups[year]["All"].push([post.grayMatterData.title, post.category, month+"."+day, post.name])
        } else {
          groups[year]["All"] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
        }
        
        if (post.category in groups[year]) {
          groups[year][post.category].push([post.grayMatterData.title, post.category, month+"."+day, post.name])
        } else {
          groups[year][post.category] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
        }
      } else {
        groups[year] = {  }
        groups[year][post.category] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
        groups[year]["All"] = [[post.grayMatterData.title, post.category, month+"."+day, post.name]]
      }
    })

    return groups
}