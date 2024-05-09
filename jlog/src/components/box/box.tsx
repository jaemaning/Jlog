import React from 'react';
import { box } from './box.css';
import { vars } from '@/styles/globalTheme.css';

interface BoxProps {
    children: React.ReactNode;
    color?: keyof typeof vars.color;
    padding?: keyof typeof vars.space;
    margin?: 'none' | 'small' | 'medium' | 'large';
    border?: 'none' | 'thin' | 'thick';
    alignItems?: 'start' | 'center' | 'end';
    justifyContent?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround';
}

const Box: React.FC<BoxProps> = ({  
    color,
    padding,
    margin,
    border,
    alignItems,
    justifyContent,
    children
}) => {
    return (
        <div className={box({color, padding, margin, border, alignItems, justifyContent})}>
            {children}
        </div>
    );
};

export default Box;