import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

export const titleStyle = style({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  lineHeight: '1.3',
  height: '70px',
  maxHeight: '3em',
  marginBottom: '8px',
  color: vars.themeColor.color.mainFontColor,
});

export const descriptionStyle = style({
  fontSize: '1rem',
  lineHeight: '1.5',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '3em',
  height: '70px',
  fontWeight: '300',
  color: vars.themeColor.color.gray,
});