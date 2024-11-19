// // global style 지정
import { colors } from '@mui/material';
import { globalStyle, fontFace } from '@vanilla-extract/css'
import { vars } from './globalTheme.css';

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

globalStyle('hr',{
    height: '0.5px',
    backgroundColor: vars.themeColor.color.gray,
    border: 'none',
    margin: '20px 0',
    width: '100%'
})