import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/globalTheme.css';
import { calc } from '@vanilla-extract/css-utils';

export const container = style({
  position: 'relative',
  width: '50%',
  left: '50%',
  marginLeft: '-25%',
  textAlign: 'center',
  bottom: '5px',
  marginTop: '500px',
});

export const svgClass = style({
  width: 'calc(100vw + 50%)', // 부모 요소의 절반을 더하여 너비를 설정
  height: '45rem',
  position: 'absolute',
  top: '-40rem',
  left: 'calc(-50vw)', // 부모 요소의 절반과 위치를 더하여 왼쪽 벽에 맞춤
  fill: vars.themeColor.color.orange100,
  zIndex : -1
});
