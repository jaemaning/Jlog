import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

const bold = 600;
const normal = 400;

// 타이포그래피 관련 스타일
export const typoStyle = recipe({
    base: {
      display : 'block',
      margin : 'none',
      boxSizing : 'border-box',
      padding : '0',
      color : vars.themeColor.color.mainFontColor
    },
  
    variants: {
      size: {
        h1: {
          fontSize: vars.fontSizes.extraLarge,
          fontWeight: bold
        },
        h2: {
          fontSize: vars.fontSizes.large,
          fontWeight: bold
        },
        h3: {
          fontSize: vars.fontSizes.mediumLarge,
          fontWeight: bold
        },
        p1: {
          fontSize: vars.fontSizes.medium,
          fontWeight: normal
        },
        p2: {
          fontSize: vars.fontSizes.small,
          fontWeight: normal
        },
        p3: {
          fontSize: vars.fontSizes.extraSmall,
          fontWeight: normal
        },

      },
      color: {
        black: {
          color: vars.color.black
        },
        white: {
          color: vars.color.white
        },
        gray100: {
          color: vars.color['gray-100']
        },
        gray300: {
          color: vars.color['gray-300']
        },
        gray500: {
          color: vars.color['gray-500']
        },
        gray700: {
          color: vars.color['gray-700']
        },
        gray800: {
          color: vars.color['gray-800']
        },
        gray900: {
          color: vars.color['gray-900']
        },
        orangeBright: {
          color: vars.color['orange-bright']
        },
        orangeBurnt: {
          color: vars.color['orange-burnt']
        },
        orangeSoft: {
          color: vars.color['orange-soft']
        },
        origin : {
          color: vars.themeColor.color.mainFontColor
        }
      },
      margin: vars.recipeMargin,
      padding: vars.recipePadding,
    },
  
    defaultVariants: {
      size: 'h1',
      margin: 'none',
      padding: 'none',
      color: 'origin'
    }
});