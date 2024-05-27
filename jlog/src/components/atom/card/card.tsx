import { cardStyle } from './card.css'
import React from 'react';
import classNames from 'classnames';

interface CardProps {
    responsive? : 'mobile' | 'tablet' | 'desktop';
    className?: String;
    children : React.ReactNode;
}


const Card: React.FC<CardProps> = ({
    responsive,
    className,
    children
}) => {
    return (
        <div className={classNames(cardStyle({ responsive }), className)}>
            {children}
        </div>
    );
}

export default Card