// utils.ts
export const calcHeight = (vh: number, px: number): string => {
    return `calc(${vh}vh - ${px}px)`;
  };