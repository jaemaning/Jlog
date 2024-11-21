import { vars } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
    textAlign: 'center',
    padding: '10px'
});

export const extraSetting = style({
    color: vars.themeColor.color.gray,
    fontSize: '1.1rem',
    lineHeight: '2rem'
})

export const articleStyle = style({
    width: '95%'
})