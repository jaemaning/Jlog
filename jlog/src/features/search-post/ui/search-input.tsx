'use client';

import * as styles from './search-input.css'
import { Posts } from '../model/model';
import { ChangeEvent, useEffect, useRef } from 'react';
import { postSearch } from '../lib/search-post';


export function SearchInput({postValues, setPostValues} : { postValues : Posts, setPostValues : React.Dispatch<React.SetStateAction<Posts>> }) {

    // 초기 postValues를 저장할 ref 생성
    const initialPostsRef = useRef<Posts>([]);

    // 초기 렌더링 시 postValues 깊은 복사
    useEffect(() => {
        initialPostsRef.current = JSON.parse(JSON.stringify(postValues)); // 깊은 복사
    }, []);

    // 검색 이벤트 핸들러
    async function changeEvent(e: ChangeEvent<HTMLInputElement>) {
        setPostValues(postSearch(initialPostsRef, e.target.value)); // 필터링된 결과를 상태로 업데이트
    }

    return (
        <input 
            type="text" 
            placeholder="검색어를 입력해주세요."
            className={styles.searchInput}
            onChange={changeEvent}
            autoFocus
        />
    );
}