import { vars } from '@/shared/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

// 박스는 div, section 형태의 기본적인 단위

export const boxStyle = recipe({
    base: {
      width : '100%',
      display : 'flex',
      margin : 'none',
      boxSizing : 'border-box'
    },
  
    variants: {
      color: vars.recipeColor,
      padding: vars.recipePadding,
      margin: vars.recipeMargin,
      alignItems: vars.recipeAlignItems,
      justifyContent: vars.recipeJustifyContent,
      border: vars.recipeBorder,
      responsive : {
        block: {
          '@media' : {
            'screen and (min-width: 768px)': {
              display : 'flex'
            },
          },
          display : 'block'
        },
        flex: {
          '@media' : {
            'screen and (min-width: 768px)': {
              display : 'flex'
            }
          },
          display : 'flex'
        }
      }
    },
  
    defaultVariants: {
      padding: 'medium',
      responsive: 'flex'
    }
  });