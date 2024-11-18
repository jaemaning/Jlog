// SearchOverlay.css.ts
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  flexDirection: 'column'
});

export const searchInput = style({
  width: '80vw',
  padding: '1rem',
  margin: 'auto',
  border: '2px solid #eee',
  borderRadius: '8px',
  fontSize: '1.1rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  ':focus': {
    borderColor: '#2196F3'
  }
});

export const searchContents = style({
  width: '80vw',
  padding: '1rem',
  margin: 'auto',
  fontSize: '1rem',
  outline: 'none',
});