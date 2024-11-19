// SearchOverlay.tsx
'use client';
import { useSearchStore } from '../model/search-store';
import * as styles from './search-overaly.css';

export const SearchOverlay = () => {
    const { isSearchOpen, toggleSearch } = useSearchStore();

    if (!isSearchOpen) return null;

    return (
        <div className={styles.overlay} onClick={()=>toggleSearch()}>
            <div className={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
                <input 
                    type="text" 
                    placeholder="검색어를 입력해주세요."
                    className={styles.searchInput}
                    autoFocus
                />
                <div className={styles.searchContents}>
                    <p>검색 결과물 (구현 중)</p>
                </div>
            </div>
        </div>
    );
};
