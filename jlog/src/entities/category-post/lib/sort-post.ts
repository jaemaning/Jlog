import { Posts, Post } from '@/features/search-post/model/model'
import { GroupDictionary, NewGroupDictionary } from '../../../features/category-select-post/model/model';

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
          groups[year]["All"].push([post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name])
        } else {
          groups[year]["All"] = [[post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name]]
        }
        
        if (post.category in groups[year]) {
          groups[year][post.category].push([post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name])
        } else {
          groups[year][post.category] = [[post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name]]
        }
      } else {
        groups[year] = {  }
        groups[year][post.category] = [[post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name]]
        groups[year]["All"] = [[post.grayMatterData.title, post.category, year+"."+month+"."+day, post.name]]
      }
    })

    return groups
}


export function postPrevNextContentAdd(
  groups: GroupDictionary
): NewGroupDictionary {
  const newGroups: NewGroupDictionary = {};

  // 각 연도를 순회
  for (const year in groups) {
    newGroups[year] = {};

    // 각 카테고리를 순회
    for (const category in groups[year]) {
      const items = groups[year][category]; // 현재 카테고리의 배열
      const newItems = items.map((item, index) :  [string, string, string, string, string, string] => {
        const prev =
          index > 0 ? items[index - 1].join("##") : "prevNull"; // 이전 요소
        const next =
          index < items.length - 1 ? items[index + 1].join("##") : "nextNull"; // 다음 요소

        // 새 배열 반환
        return [...item, prev, next];
      });

      // 변환된 카테고리를 NewGroupDictionary에 추가
      newGroups[year][category] = newItems;
    }
  }

  return newGroups;
}