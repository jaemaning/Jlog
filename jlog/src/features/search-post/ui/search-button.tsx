'use client';

import { Button } from '@/shared/atom/button';
import SearchIcon from '@mui/icons-material/Search';
import * as styles from './search-button.css'
import { useSearchStore } from '../model/search-store';
import { useEffect } from 'react'
import { Typo } from '@/shared/atom/typo';


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

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            // MetaKey (⌘ on macOS) + K 또는 CtrlKey + K 감지
            if ((event.metaKey || event.ctrlKey) && event.key.match('k')) {
                toggleSearch();
                console.log(isSearchOpen)
            }
        };

        function handleKeyDownESC(event: KeyboardEvent) {
            // ESC 감지
            if (event.key.match('Escape')) {
                console.log(isSearchOpen)
                if (isSearchOpen) {
                    toggleSearch();
                }
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keydown', handleKeyDownESC);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keydown', handleKeyDownESC);
        };
    }, [toggleSearch, isSearchOpen]);

    return (
        <div className={styles.container}>
            <button
                className={styles.buttonStyleAdd}
                onClick={toggleSearch}
            >
                검색하기...
                <p
                    className={styles.typoStyleAdd}
                >
                     ⌘ K 
                </p>
            </button>
        </div>
    );
}