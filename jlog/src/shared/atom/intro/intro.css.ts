import { vars } from "@/shared/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const linkStyle = style({
    color: vars.themeColor.color.gray,
    margin: '4px',
    textDecoration: 'none',
    ':hover' : {
        textShadow: `0 0 1em ${vars.themeColor.color.mainFontColor}, 0 0 0.1em ${vars.themeColor.color.mainFontColor}`
    }
})