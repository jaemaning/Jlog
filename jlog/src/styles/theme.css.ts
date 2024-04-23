import { createTheme } from '@vanilla-extract/css';
import { style } from './style';

export const [themeClass, vars] = createTheme({
    color: style.colors,
    fontSizes: style.fontSizes,
    space : style.space
});
