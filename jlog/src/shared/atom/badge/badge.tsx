import React from 'react';
import { badgeStyle } from '@/shared/atom/badge/badge.css';
import { vars } from '@/shared/styles/globalTheme.css';

interface BadgeProps {
    children: React.ReactNode;
    onClick?: () => void; // onClick 타입을 정의
    color? : keyof typeof vars.recipeColor;
    size? : 'small' | 'medium' | 'large' | 'fit' | 'circle';
    margin? : keyof typeof vars.recipeMargin;
    border? : keyof typeof vars.recipeBorder;
}

function Badge (props: BadgeProps) {
    const {
        children, 
        onClick,
        color,
        size,
        margin,
        border
    } = props

    return (
        <button className={badgeStyle({ color, size, margin, border })} onClick={onClick}>{children}</button>
    );
}

export default Badge;