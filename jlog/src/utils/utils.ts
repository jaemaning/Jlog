// utils.ts
export const calcHeight = (vh: number, px: number): string => {
    return `calc(${vh}vh - ${px}px)`;
  };

export const calcWidth = (vw: number, px: number): string => {
    return `calc(${vw}vw - ${px}px)`;
  }

