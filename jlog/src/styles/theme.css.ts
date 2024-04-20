import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    color: {
        primary: '#0070f3',
        background: '#ffffff',
        text: '#262425',
    },
    fontSizes: {
        0: '12px',
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px',
        5: '23px',
    },
    space : {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
    }
});
