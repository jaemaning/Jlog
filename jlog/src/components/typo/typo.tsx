import React from 'react';
import { typoStyle } from './typo.css';
import { vars } from '@/styles/globalTheme.css';

type TypoProps = {
    size?: 'h1' | 'h2' | 'h3' | 'p1' | 'p2' | 'p3';
    color?: 'black' | 'white' | 'gray100' | 'gray300' | 'gray500' | 'gray700' | 'gray800' | 'gray900' | 'orangeBright' | 'origin';
    margin?: keyof typeof vars.recipeMargin;
    padding?: keyof typeof vars.recipePadding;
    children: React.ReactNode;
};

const Typo: React.FC<TypoProps> = ({ size, color, margin, padding, children }) => {
    return (
        <p className={typoStyle({ size, color, margin, padding })}>
            {children}
        </p>
    );
};

export default Typo;