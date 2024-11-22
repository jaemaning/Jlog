import React from 'react';
import { typoStyle } from './typo.css';
import { vars } from '@/shared/styles/globalTheme.css';
import clsx from 'clsx';

type TypoProps = {
    size?: 'h1' | 'h2' | 'h3' | 'p1' | 'p2' | 'p3' | 'a' | 'ha';
    color?: 'black' | 'white' | 'gray100' | 'gray300' | 'gray500' | 'gray700' | 'gray800' | 'gray900' | 'orangeBright' | 'origin' | 'gray';
    margin?: keyof typeof vars.recipeMargin;
    padding?: keyof typeof vars.recipePadding;
    children: React.ReactNode;
    href?: string;
	cls?: string[] | string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLParagraphElement>) => void;
};

export const Typo: React.FC<TypoProps> = ({ size, color, margin, padding, children, href, cls, onClick }) => {
	const combinedClassName = clsx(
        typoStyle({ size, color, margin, padding }),
        cls
    );

	if (size === 'a' || size === 'ha') {
		return (
			<a className={combinedClassName} {...(href ? { href } : {})} onClick={onClick}>
				{children}
			</a>
		)
	} else {
		return (
			<p className={combinedClassName} onClick={onClick}>
				{children}
			</p>
		)
	}
};
