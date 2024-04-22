// // global style 지정
import { globalStyle, fontFace } from '@vanilla-extract/css'

const GowunDodum = fontFace({
    src: 'url("/fonts/GowunDodum-Regular.ttf")',
})

globalStyle(
    'html', {
    padding : 0,
    fontFamily : GowunDodum,
    height: '100%',
    width: '920px',
    margin: 'auto',
    '@media': {
        'screen and (max-width: 1024px)': {
            width: 'calc(100% - 124px);',
            margin: '0 62px',
            boxSizing: 'border-box'
        }
    }
});