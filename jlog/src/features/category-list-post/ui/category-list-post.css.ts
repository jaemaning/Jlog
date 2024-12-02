import { vars } from "@/shared/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";



export const childContainer = style({

})

export const container = style({
    backgroundColor: vars.themeColor.color.grayBackground,
    width: '90%',
    margin: '50px auto',
    borderRadius: '10px',
    padding : '20px',
    selectors: {
        [`&:has(${childContainer}:hover)`] : {
          backgroundColor: vars.themeColor.color.grayBackgroundHover,
          cursor: 'pointer'
        }
    }
})



export const listOne = style({
    display: 'block',
    textDecoration: 'none',
    padding: '0.4rem',
    color : vars.themeColor.color.orange200,
    margin: 0
})

export const listOter = style({
    color : vars.themeColor.color.gray,
    width: 'fit-content',
    ":hover" : {
        color : vars.themeColor.color.mainFontColor
    }
})

export const iconStyle = style({
    color : vars.themeColor.color.mainFontColor,
    width : '14px',
    height: '14px',
    margin: '0'
})

export const orangeStyle = style({
    display : 'inline',
    color : vars.themeColor.color.orange200
})


export const lineStyle = style({
    margin : '8px 0'
})


export const smallPStyle = style({
    color: vars.themeColor.color.mainFontColor,
    fontSize: '14px',
    display: 'inline-block',
    margin: '0 15px 0 4px',
    textAlign: 'center',
    lineHeight: '14px'
})

export const listUp = style({
    ':hover' : {
        cursor: "pointer",
        color: vars.themeColor.color.mainFontColor
    }
})