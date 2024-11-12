'use client';

import Button from "../button/button"
import SearchIcon from '@mui/icons-material/Search';
import * as styles from './searchBtn.css'
import { useSearchStore } from '@/store';
import { useEffect } from 'react'


const SearchBtn = () => {
    const { isSearchOpen, toggleSearch } = useSearchStore()

    useEffect(() => {
        const root = document.documentElement;
        if (isSearchOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            // 기본 설정 패딩 10px 있음
            root.style.overflow = 'hidden'
            root.style.paddingRight = `${scrollbarWidth+10}px`
        } else {
            root.style.overflow = ''
            root.style.paddingRight = ''
        }
    }, [isSearchOpen]);

    return (
        <div className={styles.container}>
            <Button
                size='circle'
                onClick={toggleSearch}
            >
                <SearchIcon></SearchIcon>
            </Button>
        </div>
    );
}

export default SearchBtn
