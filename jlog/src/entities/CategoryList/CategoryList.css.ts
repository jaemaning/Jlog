import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';


export const container = style({
  position: 'relative',
  width: '50%',
  left: '50%',
  marginLeft: '-25%',
  textAlign: 'center',
  bottom: '5px',
  marginTop: '200px',
});
