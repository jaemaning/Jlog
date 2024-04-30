import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const buttonStyles = style({
    fontSize: vars.fontSizes.small,
    padding : vars.space.small,
});