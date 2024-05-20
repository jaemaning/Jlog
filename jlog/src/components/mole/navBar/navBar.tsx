import React from 'react';
import Box from '@/components/atom/box/box';
import Typo from '@/components/atom/typo/typo';
import DarkModeBtn from '../../atom/darkModeBtn/darkModeBtn';
import SearchBtn from '@/components/atom/searchBtn/searchBtn'
import Button from '@/components/atom/button/button';
import { container } from './navBar.css';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({

}) => {
    return (
        <Box justifyContent='spaceBetween'>
            <Typo size='ha' margin='medium' href='/'>JLOG</Typo>
            <Box justifyContent='end'>
                <Typo size='a' margin='medium'>Test1</Typo>
                <Typo size='a' margin='medium'>Test2</Typo>
                <DarkModeBtn />
                <SearchBtn />
            </Box>
        </Box>
    );
};

export default NavBar;