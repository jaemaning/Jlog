import Box from "../box/box";
import Button from "../button/button"
import SearchIcon from '@mui/icons-material/Search';
import * as styles from './searchBtn.css'


const SearchBtn = () => {
    

    return (
        <div className={styles.container}>
            <Button size='circle'>
                <SearchIcon></SearchIcon>
            </Button>
        </div>
    );
}

export default SearchBtn