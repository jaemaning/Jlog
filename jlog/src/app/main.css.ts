import { style } from '@vanilla-extract/css';
import { calcHeight } from '@/utils/utils';

export const mainContainer = style({
    width: '100%',
    height: '100%',
    minHeight: calcHeight(100, 340) // 250px margin + 24px footer height + 66px navBar height
});
