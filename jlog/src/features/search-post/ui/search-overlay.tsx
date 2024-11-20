// SearchOverlay.tsx
'use client';

import { useSearchStore } from '../model/search-store';
import SearchInput from './search-input';
import * as styles from './search-overaly.css';

export const SearchOverlay = () => {
    const { isSearchOpen, toggleSearch } = useSearchStore();

    if (!isSearchOpen) return null;

    return (
        <div className={styles.overlay} onClick={()=>toggleSearch()}>
            <div className={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
                <SearchInput></SearchInput>
                <div className={styles.searchContents}>
                    <p>검색 결과물 (구현 중)</p>
                </div>
            </div>
        </div>
    );
};
