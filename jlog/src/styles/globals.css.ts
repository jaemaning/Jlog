// global style 지정
import { globalStyle } from '@vanilla-extract/css'

globalStyle(
    'html, body', {
    padding : 0,
    margin : 0,
    fontFamily : ""
});

globalStyle(
    '*', {
    boxSizing: 'border-box'
});

globalStyle('a', {
    cursor : 'pointer',
    textDecoration : 'none',
    transition : 'all 0.3s',
    color : 'blue'
});

globalStyle('ol, ul', {
    listStyle : 'none'
});