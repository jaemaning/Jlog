import React from 'react';
import { boxStyle } from './box.css';
import { vars } from '@/shared/styles/globalTheme.css';

interface BoxProps {
    children: React.ReactNode;
    color?: keyof typeof vars.recipeColor;
    padding?: keyof typeof vars.recipePadding;
    margin?: keyof typeof vars.recipeMargin;
    border?: keyof typeof vars.recipeBorder;
    alignItems?: keyof typeof vars.recipeAlignItems;
    justifyContent?: keyof typeof vars.recipeJustifyContent;
    responsive?: 'block' | 'flex';
}

const Box: React.FC<BoxProps> = ({  
    color,
    padding,
    margin,
    border,
    alignItems,
    justifyContent,
    children,
    responsive
}) => {
    return (
        <div className={boxStyle({color, padding, margin, border, alignItems, justifyContent, responsive})}>
            {children}
        </div>
    );
};

export default Box;