import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

export const container = style({
  padding: '10px',

})

export const uiContainer = style({
  margin: '0',
  listStyleType: 'none',
  width: '100%'
})

export const FlexContainer = style({
  display : 'flex',
  justifyContent : 'space-between',
  width: '100%',
  color: vars.themeColor.color.mainFontColor,
  textDecoration: 'none',
})

export const groupContainer = style({
  display : 'flex',
  justifyContent : 'space-between',
  width: '100%',
  ':hover' : {
    color: vars.themeColor.color.orange200,
  }
})

export const pStyle = style ({
  border: `1px solid ${vars.themeColor.color.mainBackground}`,
  borderRadius: '5px',
  padding: '3px 10px 3px 10px',
  display: 'block',
  selectors: {
    [`${groupContainer}:hover &`] : {
      color: vars.themeColor.color.gray
    },
    [`${FlexContainer}:hover &`]: {
      color: vars.themeColor.color.orange200,
      backgroundColor: vars.themeColor.color.grayBackground
    }
  }
})

export const yearStyle = style({
  border: `1px solid ${vars.themeColor.color.mainBackground}`,
  borderRadius: '5px',
  padding: '3px 10px 3px 10px',
  width: '30px',
  height: '100%',
  display: 'block',
  selectors: {
    [`${groupContainer}:hover &`]: {
      color: vars.themeColor.color.orange200,
      backgroundColor: vars.themeColor.color.grayBackground
    }
  }
})

export const grayColor = style({
  color: vars.themeColor.color.gray
})

// export const gridContainer = style({
//     display: 'grid',
//     gap: '16px',
//     '@media': {
//       '(max-width: 1000px)': {
//         gridTemplateColumns: 'repeat(1, 1fr)',
//       },
//       '(min-width: 1001px)': {
//         gridTemplateColumns: 'repeat(2, 1fr)',
//       }
//     },
//   });
  
// export const gridItem = style({
//   backgroundColor: '#f0f0f0',
//   padding: '16px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
// });


export const gridItem = style({

})

export const postLink = style({
  textDecoration: 'none'
});