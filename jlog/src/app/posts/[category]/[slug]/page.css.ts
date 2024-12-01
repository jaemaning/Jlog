import { vars } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
    textAlign: 'center',
    padding: '10px',
});

export const extraSetting = style({
    color: vars.themeColor.color.subFontColor,
    fontSize: '1rem',
    lineHeight: '2rem',
    marginBottom: '50px'
})

export const articleStyle = style({
    width: '90%',
    margin: 'auto',
})

export const hrSetting = style({
    marginTop: '100px',
    backgroundColor: vars.themeColor.color.gray
})