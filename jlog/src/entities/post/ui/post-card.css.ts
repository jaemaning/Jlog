import { vars } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const cardStyle = style({
    display: 'flex',
    alignContent: 'space-between',
    border: '1px solid transparent',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '2px',
    color: vars.themeColor.color.mainFontColor, 
    textAlign: 'left',
    verticalAlign: 'middle',
    justifyContent: 'left',
    alignItems: 'center', 
    overflow: 'hidden',
})

export const pStyle = style({
    padding: '2px',
    selectors: {
        [`${cardStyle}:hover &:hover`]: {
            color: vars.color['gray-500']
        }
    }
})