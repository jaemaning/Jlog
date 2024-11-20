// server-input.tsx
import * as styles from './search-input.css'

export default function SearchInput() {

    return (
        <input 
            type="text" 
            placeholder="검색어를 입력해주세요."
            className={styles.searchInput}
            // onChange={}
            autoFocus
        />
    );
}