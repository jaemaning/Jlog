import React from 'react';
import { buttonStyle } from './button.css';
import { vars } from '@/shared/styles/globalTheme.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void; // onClick 타입을 정의
    color? : keyof typeof vars.recipeColor;
    size? : 'small' | 'medium' | 'large' | 'fit' | 'circle';
    margin? : keyof typeof vars.recipeMargin;
    border? : keyof typeof vars.recipeBorder;
}

export function Button({
    children, 
    onClick,
    color,
    size,
    margin,
    border
} : ButtonProps) {
    return (
        <button className={buttonStyle({ color, size, margin, border })} onClick={onClick}>{children}</button>
    );
};