// styles/styles.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const container = style({
  width: '100%',
  display : 'flex',
  alignItems : 'center',
  justifyContent: 'center',
  marginTop: '7rem',
  zIndex: 1
});

export const cardContainer = style({
  width: '300px',
  height: '300px',
})

export const card = style({
  width: '200px',
  height: '200px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  cursor : 'pointer',
  zIndex: 10,
});

export const cardInner = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: '50%',
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
  backfaceVisibility: 'hidden',
});

export const cardFront = style({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backfaceVisibility: 'hidden',
});

export const cardBack = style({
  color: 'black',
  transform: 'rotateY(180deg)',
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  border: `2px solid ${vars.themeColor.color.orange200}`,
  zIndex: 999
});

export const photoFrame = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: `2px solid ${vars.themeColor.color.orange200}`,
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
});

export const rotateCard = style({
  transform: 'rotateY(180deg)',
});
