import React from 'react';
import { buttonStyle } from './button.css';
import { vars } from '@/shared/styles/globalTheme.css';
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void; // onClick 타입을 정의
    color? : keyof typeof vars.recipeColor;
    size? : 'small' | 'medium' | 'large' | 'fit' | 'circle';
    margin? : keyof typeof vars.recipeMargin;
    border? : keyof typeof vars.recipeBorder;
    cls? : string | string[];
}

export function Button({
    children, 
    onClick,
    color,
    size,
    margin,
    border,
    cls
} : ButtonProps) {
    const combinedClassName = clsx(
        buttonStyle({ color, size, margin, border }), // 기존 스타일
        cls
    );

    return (
        <button className={combinedClassName} onClick={onClick}>{children}</button>
    );
};