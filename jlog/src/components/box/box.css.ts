import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

// 박스는 div, section 형태의 기본적인 단위

export const box = recipe({
    base: {
      width : '100%',
      display : 'block',
      '@media' : {
        'screen and (min-width: 768px)': {
          display : 'flex'
        },
      }
    },
  
    variants: {
      color: vars.recipeColor,
      padding: vars.recipePadding,
      margin: vars.recipeMargin,
      alignItems: {
        start: { alignItems: 'flex-start' },
        center: { alignItems: 'center' },
        end: { alignItems: 'flex-end' }
      },
      justifyContent: {
        start: { justifyContent: 'flex-start' },
        center: { justifyContent: 'center' },
        end: { justifyContent: 'flex-end' },
        spaceBetween: { justifyContent: 'space-between' },
        spaceAround: { justifyContent:'space-around' }
      },
      border: {
        none: { border: 'none' },
        thin: { border: '1px solid #ddd' },
        thick: { border: '2px solid #333' }
      }
    },
  
    defaultVariants: {
      padding: 'medium'
    }
  });