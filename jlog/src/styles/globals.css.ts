// global style 지정
import { globalStyle, fontFace } from '@vanilla-extract/css'

const GowunDodum = fontFace({
    src: 'url("/fonts/GowunDodum-Regular.ttf")',
})

globalStyle(
    'html, body', {
    padding : 0,
    margin : 0,
    fontFamily : GowunDodum,
    height: '100%'
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