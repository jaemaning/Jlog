import { 
    globalStyle,
    createThemeContract,
    createGlobalTheme,
    createTheme 
} from '@vanilla-extract/css';
import { style } from './style';


const themeColor = createThemeContract({
    color: {
      mainBackground: null,
      contentBackground: null,
      mainFontColor: null,
      borderColor: null,
      gradient: null,
    },
  });
  
export const lightTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#f7f9fa',
        contentBackground: '#ffffff',
        mainFontColor: '#2c2c2c',
        borderColor: '#cbc9f9',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
    },
});
  
export const darkTheme = createTheme(themeColor, {
    color: {
        mainBackground: '#1d1d1d',
        contentBackground: '#2c2c2c',
        mainFontColor: '#ffffff',
        borderColor: '#b1b1b3',
        gradient: 'linear-gradient(#091236, #1E215D)',
    },
});


export const global = createGlobalTheme(':root', {
    color: style.colors,
    fontSizes: style.fontSizes,
    space : style.space
});

export const vars = { ...global, themeColor };


globalStyle('body', {
    fontSize: vars.fontSizes.medium,
    backgroundColor: `hsl(${vars.themeColor.color.mainBackground})`,
    userSelect: 'none',
    transition: 'all 0.25s linear'
});
