import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const cardStyle = style({
    border: '1px solid transparent',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px 20px 5px 20px',
    // backgroundColor: vars.themeColor.color.mainBackground,  // 기본 배경색
    color: vars.themeColor.color.mainFontColor,  // 기본 폰트색
    textAlign: 'left', // 텍스트 가운데 정렬
    verticalAlign: 'middle', // 세로 가운데 정렬
    justifyContent: 'left', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
    height: '200px',
    overflow: 'hidden',
    padding: vars.space.large,
    ':hover': {
        border: `1px solid ${vars.themeColor.color.orange200}`,  // hover 시 배경색 변경
    }
})