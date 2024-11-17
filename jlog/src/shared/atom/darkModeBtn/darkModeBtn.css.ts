import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

export const container = style({
    width: '40px',
    height: '40px',
});

export const loadingContatiner = style({
    width: '40px',
    height: '40px',
    backgroundColor: vars.themeColor.color.loadingColor,
    borderRadius: '15px'
});

export const button = style({
    width: '100%',
    height: '100%',
});