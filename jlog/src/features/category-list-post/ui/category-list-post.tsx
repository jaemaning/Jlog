'use client'

import Link from "next/link";
import * as styles from "./category-list-post.css"
import { Typo } from "../../../shared/atom/typo";
import SegmentIcon from '@mui/icons-material/Segment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimerIcon from '@mui/icons-material/Timer';
import { categoryDescription } from "@/features/category-list-post/model/model";
import { useEffect, useState } from "react";


type Posts = [string, string, string, string][][]

export function CategoryListPost(
    { categPosts, target_name, target_category, calcDay, startDate, endDate } : { categPosts : Posts, target_name : string, target_category: string, calcDay: number, startDate :string, endDate : string }
) {
    const currentIdx = categPosts.findIndex((post)=>{
        return post[3] as unknown as string === decodeURIComponent(target_name)
    })

    const [isPold, setIsPold] = useState(true)

    function clickedPold (e: React.MouseEvent) {
        setIsPold((prev)=>!prev)
    }

    return (
        <div className={styles.container}>
            <div className={styles.childContainer} onClick={clickedPold}>
                <Typo size="h2">{"* "}<span className={styles.orangeStyle}>{target_category}</span>{" *"} 관련글 모아보기</Typo>
                <div className={styles.lineStyle}>
                    <SegmentIcon className={styles.iconStyle}></SegmentIcon>
                    <p className={styles.smallPStyle}>{`${currentIdx+1}/${categPosts.length}`}</p>
                    <DateRangeIcon className={styles.iconStyle}></DateRangeIcon>
                    <p className={styles.smallPStyle}>{`${startDate} ~ ${endDate}`}</p>
                    <TimerIcon className={styles.iconStyle}></TimerIcon>
                    <p className={styles.smallPStyle}>{`${calcDay}일간 포스팅 중`}</p>
                </div>
                <Typo size="p1" margin="medium">{categoryDescription[target_category]}</Typo>
            </div>
            { isPold? null
            : (
                <div id="child">
                    {categPosts.map((post, idx)=>{
                        if (post[3] as unknown as string === decodeURIComponent(target_name)) {
                            return <p key={idx} className={styles.listOne}>{`${idx+1}. ${post[0]}`}</p>
                        } else {
                            return <Link key={idx} href={`/posts/${post[1]}/${post[3]}`} className={`${styles.listOne} ${styles.listOter}`}>{`${idx+1}. ${post[0]}`}</Link>
                        }
                    })}
                    <Typo size="p3" margin="medium" color="gray" onClick={clickedPold} cls={styles.listUp}>간략히 보기</Typo>
                </div>
            )}
        </div>
    );
}