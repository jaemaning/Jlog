import React from 'react';
import { buttonStyle } from '@/components/button/button.css';
import { vars } from '@/styles/globalTheme.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void; // onClick 타입을 정의
    color? : keyof typeof vars.recipeColor;
    size? : 'small' | 'medium' | 'large';
    margin? : keyof typeof vars.recipeMargin;
    border? : keyof typeof vars.recipeBorder;
}

const Button: React.FC<ButtonProps> = ({
    children, 
    onClick,
    color,
    size,
    margin,
    border
}) => {
    return (
        <button className={buttonStyle({ color, size, margin, border })} onClick={onClick}>{children}</button>
    );
};

export default Button;