// SearchOverlay.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '20vh',
  pointerEvents: 'auto',
  inset: '0'
});

export const searchContainer = style({
  width : '95%',
  display: 'flex',
  flexDirection: 'column',
});


export const searchContents = style({
  width: '80%',
  padding: '1rem',
  margin: 'auto',
  fontSize: '1rem',
  outline: 'none',
  maxHeight: '15rem'
});