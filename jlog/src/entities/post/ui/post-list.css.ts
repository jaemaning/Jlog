import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

export const container = style({
  padding: '10px',
  '@media': {
    '(max-width: 1000px)': {
      fontSize: '1rem',
    },
    '(min-width: 1001px)': {
      fontSize: '1rem',
    }
  },
})

export const uiContainer = style({
  margin: '0',
  listStyleType: 'none'
})

export const FlexContainer = style({
  display : 'flex',
  justifyContent : 'space-between',
  width: '45rem',
  color: vars.themeColor.color.mainFontColor,
  textDecoration: 'none',

})

export const groupContainer = style({
  display : 'flex',
  justifyContent : 'space-between',
  ':hover' : {
    color: vars.themeColor.color.orange200,
  }
})

export const pStyle = style ({
  border: `1px solid ${vars.themeColor.color.mainBackground}`,
  borderRadius: '5px',
  padding: '3px 10px 3px 10px',
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
  height: '100%',
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