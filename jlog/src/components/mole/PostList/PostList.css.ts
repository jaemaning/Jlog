import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';


export const gridContainer = style({
    display: 'grid',
    gap: '16px',
    '@media': {
      '(max-width: 1000px)': {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      '(min-width: 1001px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      }
    },
  });
  
  export const gridItem = style({
    backgroundColor: '#f0f0f0',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  });