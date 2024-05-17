import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const preStyle = style({
  overflowX: 'auto',
  padding: '1rem 0',
  border: '1px solid #8b8b8b',
  marginTop: '0',
});

export const codeTitleStyle = style({
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '0.4rem 1rem',
  border: '1px solid #8b8b8b',
  borderTopLeftRadius: '0.4rem',
  borderTopRightRadius: '0.4rem',
  borderBottomStyle: 'none',
});

export const codeTitleNextPreStyle = style({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
});

export const codeStyle = style({
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.9rem',
  lineHeight: 1.5,
  padding: '0.2rem 1rem',
  borderRadius: '0.2rem',
});
