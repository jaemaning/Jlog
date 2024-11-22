import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';


export const container = style({
  display: 'flex',
  width: '60%',
  justifyContent: 'space-between',
  margin: '20px',
});

export const hiddenOpt = style({
  '@media': {
    '(max-width: 800px)': {
      visibility: 'hidden'
    },
    '(min-width: 801px)': {
      visibility: 'visible'
    }
  },
})

export const selectOpt = style({
  color: "gray",
  cursor: "pointer",
  ":hover" : {
    color: vars.themeColor.color.mainFontColor
  }
})

export const selectVariants = styleVariants({
  active: {
    borderBottom: '2px solid red'
  },
  inactive: {
    border : "none",
    color : vars.themeColor.color.gray
  },
});