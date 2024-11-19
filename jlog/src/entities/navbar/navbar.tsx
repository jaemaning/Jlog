import React from 'react';
import Box from '@/shared/atom/box/box';
import { Typo } from '@/shared/atom/typo/typo';
import DarkModeBtn from '../../shared/atom/dark-mode-button/dark-mode-button';
import { SearchButton } from '@/features/search-post/ui/search-button'


export function Navbar() {
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