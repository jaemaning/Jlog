import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const buttonStyles = style({
    fontSize: vars.fontSizes[1],
    padding : vars.space[1],
});