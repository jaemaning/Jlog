'use client'

import { darkTheme, lightTheme } from '@/shared/styles/globalTheme.css';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider ({children, ...props} : ThemeProviderProps) {
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme={'light'}
            value={{
                light: lightTheme,
                dark: darkTheme,
            }}
            >
            {children}
        </NextThemeProvider>
    );
};
