// // global style 지정
import { globalStyle, fontFace } from '@vanilla-extract/css'

const GowunDodum = fontFace({
    src: 'url("/fonts/GowunDodum-Regular.ttf")',
})

globalStyle(
    'html', {
    padding : '0 10px',
    fontFamily : GowunDodum,
    height: '100%',
    width: '1024px',
    margin: 'auto',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
            margin: '0',
            boxSizing: 'border-box'
        }
    }
});

