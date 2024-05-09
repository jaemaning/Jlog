import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonStyles = style({
    fontSize: vars.fontSizes.small,
    padding : vars.space.small,
    width: '50px',
    height: '30px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
});

// 박스는 div, section 형태의 기본적인 단위

export const button = recipe({
    base: {
      display : 'block',
    },
  
    variants: {
      color: vars.color,
      padding: {
        none: { padding: '0' },
        small: { padding: vars.space.small },
        medium: { padding: vars.space.medium },
        large: { padding: vars.space.large }
      },
      margin: {
        none: { margin: '0' },
        small: { margin: vars.space.small  },
        medium: { margin: vars.space.medium  },
        large: { margin: vars.space.large  }
      },
      border: {
        none: { border: 'none' },
        thin: { border: '1px solid #ddd' },
        thick: { border: '2px solid #333' }
      }
    },
  
    defaultVariants: {
			color : 'neutral',
      padding: 'medium',
      border : 'none'
    }
  });