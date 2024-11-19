import { vars } from '@/shared/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { container as parentStyle } from './post-list.css'

export const cardStyle = style({
    display: 'flex',
    alignContent: 'space-between',
    border: '1px solid transparent',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '2px',
    // backgroundColor: vars.themeColor.color.mainBackground,  // 기본 배경색
    color: vars.themeColor.color.mainFontColor,  // 기본 폰트색
    textAlign: 'left', // 텍스트 가운데 정렬
    verticalAlign: 'middle', // 세로 가운데 정렬
    justifyContent: 'left', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
    overflow: 'hidden',
    // selectors: {
    //     // 자신의 hover 상태
    //     '&:hover': {
    //         color: vars.themeColor.color.orange200,
    //         backgroundColor: vars.themeColor.color.grayBackground,
    //     },
    // }
})

export const pStyle = style({
    padding: '2px',
    selectors: {
        // 자신의 hover 상태
        // '&:hover': {
        //     color: vars.themeColor.color.orange200,
        //     backgroundColor: vars.themeColor.color.grayBackground,
        // },
        [`${cardStyle}:hover &:hover`]: {
            color: vars.color['gray-500']
        }
    }
})