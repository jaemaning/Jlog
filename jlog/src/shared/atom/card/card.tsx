'use client';

import { cardStyle } from './card.css'
import { titleStyle, descriptionStyle } from './cardContent.css'
import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns'


interface CardProps {
    className?: string;
    title: string;
    date: string;
    description: string;
    id: number;
}


const Card: React.FC<CardProps> = ({
    title,
    date,
    description
}) => {

    return (
        <div className={cardStyle}>
            <h2 className={titleStyle}>{title}</h2>
            <p>{date}</p>
            <p className={descriptionStyle}>{description}</p>
        </div>
    );
}

export default Card