import React from 'react';
import Box from '@/components/atom/box/box';
import Typo from '@/components/atom/typo/typo';
import DarkModeBtn from '../../atom/darkModeBtn/darkModeBtn';
import SearchBtn from '@/components/atom/searchBtn/searchBtn'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({

}) => {
    return (
        <Box justifyContent='spaceBetween' alignItems='center'>
            <Typo size='ha' margin='medium' href='/'>JLOG</Typo>
            <Box justifyContent='end'>
                <DarkModeBtn />
                <SearchBtn />
            </Box>
        </Box>
    );
};

export default NavBar;