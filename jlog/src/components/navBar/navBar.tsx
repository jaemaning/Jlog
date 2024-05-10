import React from 'react';
import Box from '@/components/box/box';
import Typo from '@/components/typo/typo';
import DarkModeBtn from '../darkModeBtn/darkModeBtn';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({

}) => {
    return (
        <Box justifyContent='spaceBetween'>
            <Typo size='ha' margin='medium' href='/'>JLOG</Typo>
            <DarkModeBtn />
        </Box>
    );
};

export default NavBar;