import { vars } from "@/shared/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";


export const container = style({
    display: "flex",
    justifyContent: 'space-between',
    textDecoration: 'none',
    marginBottom: '100px'
})

export const semiContainer = style({
    display: 'flex',
    justifyContent: 'space-between',
    width: '40%',
    textDecoration: 'none',
    color: vars.themeColor.color.mainFontColor
})


export const arrow = style({
    height: "0.5rem",
    overflow: 'visible',
    margin: 'auto 0',
    padding: '12px',
    width: '20px'
})

export const arrowLeft = style({
    marginRight: '0'

})

export const arrowRight = style({
    marginLeft: '0'
})

export const pTag = style({
    margin : 'auto'
})

export const leftPTag = style({
    textAlign: 'left',
    marginLeft: '0'
})

export const rightPTag = style({
    textAlign: 'left',
    marginRight: '0'
})