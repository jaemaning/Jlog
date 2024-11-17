import { vars } from '@/shared/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

// 기본적인 box 구성

export const buttonStyle = recipe({
    base: {
      display : 'flex',
      borderRadius: '8px',
      cursor: 'pointer',
      margin : 'none',
      boxSizing : 'border-box',
      transition: 'background-color 0.3s, color 0.3s',  // 부드러운 색상 전환 효과
      backgroundColor: vars.themeColor.color.mainBackground,  // 기본 배경색
      color: vars.themeColor.color.mainFontColor,  // 기본 폰트색
      textAlign: 'center', // 텍스트 가운데 정렬
      verticalAlign: 'middle', // 세로 가운데 정렬
      justifyContent: 'center', // 가로 가운데 정렬
      alignItems: 'center', // 세로 가운데 정렬
      ':hover': {
        backgroundColor: vars.themeColor.color.loadingColor,  // hover 시 배경색 변경
      }
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
        },
        fit: {
          width: 'fit-content',
          height: 'fit-content',
        },
        circle : {
          borderRadius: '50%',
          width: '40px',
          height: '40px',
        }
      },
      margin: vars.recipeMargin,
      border: vars.recipeBorder
    },
  
    defaultVariants: {
      size: 'medium',
      border : 'none'
    }
  });