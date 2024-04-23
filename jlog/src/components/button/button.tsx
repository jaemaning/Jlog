import React from 'react';
import { buttonStyles } from '@/components/button/button.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void; // onClick 타입을 정의
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className={buttonStyles} onClick={onClick}>{children}</button>
    );
};

export default Button;