import React from 'react';
import Box from '@/components/atom/box/box';
import Typo from '@/components/atom/typo/typo';
import DarkModeBtn from '../../atom/darkModeBtn/darkModeBtn';

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