import Link from "next/link";
import * as styles from "./post-footer.css"
import { CategoryListPost } from "@/features/category-list-post";
import { calcTime } from "../lib/category-list-post-calc";


type Post = [string, string, string, string][]

export function PostFooter(
    { prev, next, categPosts, target_name, target_category } : {prev: Post | null, next: Post | null, categPosts : Post[], target_name: string, target_category: string}
) {
    const startDate : string = categPosts[categPosts.length-1][2] as unknown as string
    const endDate : string = categPosts[0][2] as unknown as string

    const calcDay = calcTime(startDate, endDate)

    return (
        <div>
            <div className={styles.container}>
                {
                    prev ? 
                    <Link href={`/posts/${prev[1]}/${prev[3]}`} className={styles.semiContainer}>
                        <svg viewBox="0 0 3 6" className={`${styles.arrow} ${styles.arrowLeft}`}>
                            <path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                        <p className={`${styles.pTag} ${styles.leftPTag}`}>{prev[0]}</p>
                    </Link>
                    : 
                    <div>
                        <p>없음</p>
                    </div>
                }
                {
                    next ? 
                    <Link href={`/posts/${next[1]}/${next[3]}`} className={styles.semiContainer}>
                        <p className={`${styles.pTag} ${styles.rightPTag}`}>{next[0]}</p>
                        <svg viewBox="0 0 3 6" className={`${styles.arrow} ${styles.arrowRight}`}><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    : 
                    <div>
                        <p>없음</p>
                    </div>
                }
            </div>
            <CategoryListPost categPosts={categPosts} target_name={target_name} target_category={target_category} calcDay={calcDay} startDate={startDate} endDate={endDate}></CategoryListPost>
        </div>
    );
}