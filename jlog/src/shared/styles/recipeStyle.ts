const recipeColors: { [key: string]: { backgroundColor: string, color: string } } = {
    'black': { 'backgroundColor': '#000000', 'color': '#ffffff' },
    'white': { 'backgroundColor': '#ffffff', 'color': '#000000' },
    'gray-100': { 'backgroundColor': '#f8f9fa', 'color': '#212529' },
    'gray-300': { 'backgroundColor': '#dee2e6', 'color': '#343a40' },
    'gray-500': { 'backgroundColor': '#6c757d', 'color': '#495057' },
    'gray-700': { 'backgroundColor': '#495057', 'color': '#adb5bd' },
    'gray-800': { 'backgroundColor': '#343a40', 'color': '#dee2e6' },
    'gray-900': { 'backgroundColor': '#212529', 'color': '#f8f9fa' },
    'orange-soft': { 'backgroundColor': '#f9ac55', 'color': '#000000' },
    'orange-bright': { 'backgroundColor': '#fb8c00', 'color': '#000000' },
    'orange-burnt': { 'backgroundColor': '#cc5500', 'color': '#ffffff' },
}

export const recipePadding = {
    none: { padding: '0px' },
    small: { padding: '4px' },
    medium: { padding: '8px' },
    large: { padding: '16px' },
    extraLarge: { padding: '32px' },
    auto : {padding : 'auto'}
};

export const recipeMargin = {
    none: { margin: '0px' },
    small: { margin: '4px' },
    medium: { margin: '8px' },
    large: { margin: '16px' },
    extraLarge: { margin: '32px' },
    auto : {margin : 'auto'}
};

export const recipeBorder= {
    none: { border: 'none' },
    thin: { border: '1px solid #ddd' },
    thick: { border: '2px solid #333' },
    dashed: { border: '1px dashed #333' },
};

export const recipeAlignItems = {
    start: { alignItems: 'flex-start' },
    center: { alignItems: 'center' },
    end: { alignItems: 'flex-end' }
};

export const recipeJustifyContent = {
    start: { justifyContent: 'flex-start' },
    center: { justifyContent: 'center' },
    end: { justifyContent: 'flex-end' },
    spaceBetween: { justifyContent: 'space-between' },
    spaceAround: { justifyContent:'space-around' }
};


export const recipeStyle = { recipeColors, recipePadding, recipeMargin, recipeBorder, recipeAlignItems, recipeJustifyContent };