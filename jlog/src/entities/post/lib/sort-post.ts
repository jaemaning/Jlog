import { Posts } from '../model/model'

// 월 일만 비교하기, 연도는 그룹으로 관리
export function sorting (posts: Posts) : Posts {
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