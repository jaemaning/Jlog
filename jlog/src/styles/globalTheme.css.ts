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
      btnColor: null,
    },
  });
  
export const lightTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#f7f9fa',
        contentBackground: '#ffffff',
        mainFontColor: '#2c2c2c',
        borderColor: '#cbc9f9',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        btnColor: '#EBEBEB',
    },
});

  
export const darkTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#1d1d1d',
        contentBackground: '#2c2c2c',
        mainFontColor: '#ffffff',
        borderColor: '#b1b1b3',
        gradient: 'linear-gradient(#091236, #1E215D)',
        btnColor: '#313236',
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
    transition: 'all 0.25s linear'
});

globalStyle('button', {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: vars.fontSizes.medium,
    padding: vars.space.medium,
    borderRadius: '10px',
    transition: 'all 0.25s linear',
    backgroundColor: vars.themeColor.color.btnColor,
    color: vars.themeColor.color.mainFontColor,
});
