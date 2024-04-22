import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    color: {
        primary: '#0070f3',
        background: '#ffffff',
        text: '#262425',
    },
    fontSizes: {
        'extraSmall': '12px',
        'small': '14px',
        'medium': '16px',
        'mediumLarge': '18px',
        'large': '20px',
        'extraLarge': '23px'
    },
    space : {
        'extraSmall': '0px',
        'small': '4px',
        'medium': '8px',
        'mediumLarge': '16px',
        'large': '24px',
        'extraLarge': '32px'
    }
});
