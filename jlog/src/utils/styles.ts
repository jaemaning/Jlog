import { vars } from '@/styles/theme.css';
import type { ResponsiveProp, Responsive } from 'types';

export type AppTheme = typeof vars;

const BREAKPOINTS : { [key: string] : string } = {
    'mobile': '320px',
    'tablet': '768px',
    'desktop': '1024px',
};

export function toPropValue<T>(
    propKey: string,
    prop? : T | ResponsiveProp<T>,
    theme? : AppTheme
) {
    if (prop === undefined) {
        return undefined;
    }

    if (isResponsiveProp(prop)) {
        const result = []
        for (const )
    }
}

function isResponsiveProp<T>(prop: T | ResponsiveProp<T>): prop is ResponsiveProp<T> {
    return typeof prop === 'object' && prop !== null;
}