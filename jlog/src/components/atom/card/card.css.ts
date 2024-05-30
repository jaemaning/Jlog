import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const cardStyle = recipe({
    base: {
        border: `solid 1px ${vars.themeColor.color.borderColor}`,
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '2px',
        backgroundColor: vars.themeColor.color.mainBackground,  // 기본 배경색
        color: vars.themeColor.color.mainFontColor,  // 기본 폰트색
        textAlign: 'center', // 텍스트 가운데 정렬
        verticalAlign: 'middle', // 세로 가운데 정렬
        justifyContent: 'center', // 가로 가운데 정렬
        alignItems: 'center', // 세로 가운데 정렬
        padding: vars.space.large,
        ':hover': {
          backgroundColor: vars.themeColor.color.loadingColor,  // hover 시 배경색 변경
        }
    },

    variants: {
        responsive: {
            mobile: {
                width: '90%',
                
            },
            tablet: {
                width: '45%',
    
            },
            desktop: {
                width: '30%'
    
            }
        }
    },
})