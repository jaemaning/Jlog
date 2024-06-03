'use client';

import { cardStyle } from './card.css'
import { titleStyle, descriptionStyle } from './cardContent.css'
import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns'
import { useRouter } from 'next/navigation';

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
    description,
    id
}) => {
    const router = useRouter();

    const navigateTo = (id:number) => {
      router.push(`/post/${id}`);
    };

    return (
        <div className={classNames(cardStyle, className)} onClick={()=>{navigateTo(id)}}>
            <h2 className={titleStyle}>{title}</h2>
            <p>{format(new Date(date), 'yyyy.MM.dd')}</p>
            <p className={descriptionStyle}>{description}</p>
        </div>
    );
}

export default Card