import { style } from '@vanilla-extract/css';
import { calcHeight } from '@/utils/utils';
import { calc } from '@vanilla-extract/css-utils';

export const mainContainer = style({
    width: '100%',
    height: '100%',
    minHeight: calc.subtract('100vh', '340px'), // 250px margin + 24px footer height + 66px navBar height
    marginTop: '50px'
});

export const gridContainer = style({
  display: 'grid',
  gap: '16px',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    '(min-width: 769px) and (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(min-width: 1201px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const gridItem = style({
  backgroundColor: '#f0f0f0',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});