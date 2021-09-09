export const searchSelectWidth = '405px';
export const inputWidth = '405px';
export const inputHeight = '32px';

export const inputFontWeight = '400';
export const inputFontSize = '12px';
export const inputBorderRadius = '19px';

export const filterItems = (value: string, itemsList: string[]): string[] =>
    itemsList.filter(item => item.toLowerCase().includes(value.toLowerCase()));
