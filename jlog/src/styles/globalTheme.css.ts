import { 
    globalStyle,
    createThemeContract,
    createGlobalTheme,
    createTheme 
} from '@vanilla-extract/css';
import { style } from './style';
import { recipeMargin, recipePadding, recipeStyle } from './recipeStyle';
import { recipe } from '@vanilla-extract/recipes';


const themeColor = createThemeContract({
    color: {
      mainBackground: null,
      contentBackground: null,
      mainFontColor: null,
      borderColor: null,
      gradient: null,
      loadingColor: null,
      orange100: null,
      orange200: null,
      orange300: null
    },
  });
  
export const lightTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#f7f9fa',
        contentBackground: '#ffffff',
        mainFontColor: '#2c2c2c',
        borderColor: '#cbc9f9',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        loadingColor: '#EEEEEE',
        orange100 : style.colors['orange-bright'],
        orange200 : style.colors['orange-soft'],
        orange300 : style.colors['orange-burnt']
    },
});

  
export const darkTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#1d1d1d',
        contentBackground: '#2c2c2c',
        mainFontColor: '#ffffff',
        borderColor: '#b1b1b3',
        gradient: 'linear-gradient(#091236, #1E215D)',
        loadingColor: '#303030',
        orange100 : style.colors['orange-burnt'],
        orange200 : style.colors['orange-soft'],
        orange300 : style.colors['orange-bright']
    },
});


export const global = createGlobalTheme(':root', {
    color: style.colors,
    fontSizes: style.fontSizes,
    space : style.space,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    recipeColor : recipeStyle.recipeColors,
    recipePadding : recipeStyle.recipePadding,
    recipeMargin : recipeStyle.recipeMargin,
    recipeBorder : recipeStyle.recipeBorder,
    recipeAlignItems : recipeStyle.recipeAlignItems,
    recipeJustifyContent : recipeStyle.recipeJustifyContent,
});

export const vars = { ...global, themeColor };


globalStyle('body', {
    fontSize: vars.fontSizes.medium,
    backgroundColor: vars.themeColor.color.mainBackground,
    color: vars.themeColor.color.mainFontColor,
    userSelect: 'none',
    transition: 'all 0.15s linear',
    minHeight: '100vh',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
});

globalStyle('button', {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: vars.fontSizes.medium,
    padding: vars.space.medium,
    borderRadius: '10px',
    transition: 'all 0.15s linear',
    backgroundColor: vars.themeColor.color.loadingColor,
    color: vars.themeColor.color.mainFontColor,
});
