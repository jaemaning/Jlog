'use client';

import { cardStyle, pStyle } from './post-card.css'
import { titleStyle, descriptionStyle } from './post-card-content.css'
import React from 'react';
import { format } from 'date-fns'


interface CardProps {
    className?: string;
    title: string;
    date: string;
    id: number;
}


const Card: React.FC<CardProps> = ({
    title,
    date
}) => {
    return (
        <div className={cardStyle}>
            <p className={pStyle}>{title}</p>
            <p className={pStyle}>{date}</p>
        </div>
    );
}

export default Card