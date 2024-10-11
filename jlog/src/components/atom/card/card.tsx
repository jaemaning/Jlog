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
    className,
    title,
    date,
    description
}) => {

    return (
        <div className={classNames(cardStyle, className)}>
            <h2 className={titleStyle}>{title}</h2>
            <p>{format(new Date(date), 'yyyy.MM.dd')}</p>
            <p className={descriptionStyle}>{description}</p>
        </div>
    );
}

export default Card