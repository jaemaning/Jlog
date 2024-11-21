// SearchOverlay.tsx
'use client';

import { useState } from 'react';
import { Posts } from '../model/model';
import { useSearchStore } from '../model/search-store';
import { SearchInput } from './search-input';
import * as styles from './search-overaly.css';
import { postSortByDate } from '../lib/search-post';
import Link from 'next/link';

export function SearchOverlay({ posts } : {posts : Posts}) {
    const { isSearchOpen, toggleSearch } = useSearchStore();
    const [ postValues, setPostValues ] = useState(posts)

    if (!isSearchOpen) return null;

    return (
        <div className={styles.overlay} onClick={()=>toggleSearch()}>
            <div className={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
                <SearchInput postValues={postValues} setPostValues={setPostValues}></SearchInput>
                <div className={styles.searchContents}>
                        {postSortByDate(postValues).map((post)=>{
                            return (
                                <Link
                                    key={`${post.category}-${post.name}`} 
                                    href={`/posts/${post.category}/${post.name}`} 
                                    className={styles.linkStyle} 
                                    onClick={()=>toggleSearch()}>
                                    <div className={styles.postBox}>
                                        <p className={styles.fgp1}>{post.grayMatterData.title}</p>
                                        <div className='fgp2'> </div>
                                        <p className='fgp3'>{post.dateString}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    );
};
