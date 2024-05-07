import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const buttonStyles = style({
    fontSize: vars.fontSizes.small,
    padding : vars.space.small,
    backgroundColor: vars.color['gray-700'],
    color: vars.color.white,
    width: '50px',
    height: '30px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
});