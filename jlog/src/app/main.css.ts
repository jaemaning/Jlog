import { style } from '@vanilla-extract/css';
import { calcHeight } from '@/utils/utils';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '@/shared/styles/globalTheme.css';

export const mainContainer = style({
    width: '100%',
    height: '100%',
    minHeight: calc.subtract('100vh', '340px'), // 250px margin + 24px footer height + 66px navBar height
    marginTop: '50px'
});

export const hrStyle = style({
    height: '0.5px',
    backgroundColor: vars.themeColor.color.gray,
    border: 'none',
    margin: '20px 0',
});