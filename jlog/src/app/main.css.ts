import { style } from '@vanilla-extract/css';
import { calcHeight } from '@/utils/utils';
import { calc } from '@vanilla-extract/css-utils';

export const mainContainer = style({
    width: '100%',
    height: '100%',
    minHeight: calc.subtract('100vh', '340px'), // 250px margin + 24px footer height + 66px navBar height
    marginTop: '50px'
});