import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const titleStyle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.4em',
  height: 'calc(1.4em *2)',
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
  color: vars.themeColor.color.borderColor,
});