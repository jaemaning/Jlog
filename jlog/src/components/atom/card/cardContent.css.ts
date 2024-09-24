import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const titleStyle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  color: vars.themeColor.color.mainFontColor,
});

export const descriptionStyle = style({
  fontSize: '1rem',
  lineHeight: '1.5',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '70px',
  color: vars.themeColor.color.borderColor,
});