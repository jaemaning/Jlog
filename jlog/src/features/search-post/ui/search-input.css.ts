import { vars } from "@/shared/styles/globalTheme.css";
import { style } from '@vanilla-extract/css';

export const searchInput = style({
    width: '80%',
    padding: '1rem',
    margin: 'auto',
    border: `2px solid ${vars.themeColor.color.borderColor}`,
    borderRadius: '8px',
    fontSize: '1.1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    ':focus': {
      borderColor: vars.themeColor.color.orange200
    }
  });
  