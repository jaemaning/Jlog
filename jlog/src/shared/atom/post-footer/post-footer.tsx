import Link from "next/link";
import * as styles from "./post-footer.css"


export default function PostFooter(
    { prev, next } : {prev: [string, string, string, string][] | null, next: [string, string, string, string][] | null}
) {

    return (
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
    );
}