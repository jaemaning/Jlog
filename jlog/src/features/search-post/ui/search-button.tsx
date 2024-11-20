'use client';

import { Button } from '@/shared/atom/button';
import SearchIcon from '@mui/icons-material/Search';
import * as styles from './search-button.css'
import { useSearchStore } from '../model/search-store';
import { useEffect } from 'react'


export const SearchButton = () => {
    const { isSearchOpen, toggleSearch } = useSearchStore()

    useEffect(() => {
        const root = document.documentElement;
        if (isSearchOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            // 기본 설정 패딩 10px 있음
            root.style.overflow = 'hidden'
            root.style.paddingRight = `${scrollbarWidth+10}px`
        } else {
            root.style.removeProperty('overflow');
            root.style.removeProperty('padding-right');
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