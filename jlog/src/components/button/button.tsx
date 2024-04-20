import React from 'react';
import { buttonStyles } from '@/components/button/button.css';

const Button: React.FC<{ children : React.ReactNode }> = ({children}) => {
    return (
        <button className={buttonStyles}>{children}</button>
    );
};

export default Button;