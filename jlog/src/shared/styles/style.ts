const fontSizes: { [key: string]: string } = {
    'extraSmall': '12px',
    'small': '14px',
    'medium': '16px',
    'mediumLarge': '18px',
    'large': '20px',
    'extraLarge': '23px'
};

const space : { [key: string]: string } = {
    'extraSmall': '0px',
    'small': '4px',
    'medium': '8px',
    'mediumLarge': '16px',
    'large': '24px',
    'extraLarge': '32px'
};

const colors = {
    'black': '#000000',  // 순수 검정색
    'white': '#ffffff',  // 순수 흰색
    'gray-100': '#f8f9fa',  // 매우 밝은 회색, 배경색으로 적합
    'gray-300': '#dee2e6',  // 밝은 회색, 경계선이나 구분선, 밝은 텍스트용
    'gray-500': '#adb5bd',  // 중간 회색, 비활성화 요소나 보조 텍스트용
    'gray-700': '#495057',  // 어두운 회색, 주 텍스트용
    'gray-800': '#343a40',  // 더 어두운 회색, 강조 텍스트나 바닥 요소용
    'gray-900': '#212529',  // 가장 어두운 회색, 극도로 강조 필요한 요소용
    'orange-soft': '#f9ac55',  // 부드러운 주황색, 미묘한 강조에 적합
    'orange-bright': '#fb8c00',  // 밝은 주황색, 눈에 띄는 강조에 적합
    'orange-burnt': '#cc5500'  // 어두운 주황색, 성숙한 강조에 적합
};


const letterSpacing : {[key:string] : string} = {
    'tight': '0.05px',
    'normal': '0.06px',
    'wide': '0.07px'
};

const lineHeight : {[key:string] : string} = {
    'tight': '17px',
    'normal': '19px',
    'wide': '22px',
    'big': '26px'
};

export const style = {fontSizes, space, colors, letterSpacing, lineHeight};