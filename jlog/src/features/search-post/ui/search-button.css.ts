import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';
import { colors } from '@mui/material';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center'
});


export const buttonStyleAdd = style({
    backgroundColor : vars.themeColor.color.grayBackground,
    padding: '10px',
    width: '100%',
    borderRadius: '10px',
    color: vars.themeColor.color.mainFontColor,
    display: 'flex',
    height: '35px',
    alignContent: 'cneter',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    fontWeight: '500',
    ":hover" : {
        backgroundColor : '#363636'
    }
})

export const typoStyleAdd = style({
    border : `1px solid ${vars.themeColor.color.gray}`,
    backgroundColor: vars.themeColor.color.mainBackground,
    // color : vars.themeColor.color.gray,
    borderRadius: '5px',
    margin: '0 0 0 10px',
    padding: '1px 4px'
})