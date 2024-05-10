import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

// 기본적인 box 구성

export const buttonStyle = recipe({
    base: {
      display : 'block',
      borderRadius: '8px',
      cursor: 'pointer',
      margin : 'none',
      boxSizing : 'border-box',
    },
  
    variants: {
      color: vars.recipeColor,
      size: {
        small: {
          fontSize: vars.fontSizes.small,
          padding : vars.space.small,
          width: '50px',
          height: '30px',

        },
        medium: {
          fontSize: vars.fontSizes.medium,
          padding : vars.space.medium,
          width: '100px',
          height: '50px',
        },
        large: {
          fontSize: vars.fontSizes.large,
          padding : vars.space.large,
          width: '150px',
          height: '70px',
        }
      },
      margin: vars.recipeMargin,
      border: vars.recipeBorder
    },
  
    defaultVariants: {
			color : 'black',
      size: 'medium',
      border : 'none'
    }
  });