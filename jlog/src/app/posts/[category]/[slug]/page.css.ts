import { vars } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
    textAlign: 'center',
    padding: '10px'
});

export const extraSetting = style({
    color: vars.themeColor.color.gray
})