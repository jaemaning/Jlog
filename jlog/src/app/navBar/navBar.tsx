import React from 'react';
import Box from '@/shared/atom/box/box';
import Typo from '@/shared/atom/typo/typo';
import DarkModeBtn from '../../shared/atom/darkModeBtn/darkModeBtn';
import { SearchButton } from '@/features/search-post/ui/search-button'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({

}) => {
    return (
        <Box justifyContent='spaceBetween' alignItems='center'>
            <Typo size='ha' margin='medium' href='/'>JLOG</Typo>
            <Box justifyContent='end'>
                <DarkModeBtn />
                <SearchButton />
            </Box>
        </Box>
    );
};

export default NavBar;