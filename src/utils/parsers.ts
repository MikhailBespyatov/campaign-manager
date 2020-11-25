// multiply pixels by number
export const multiplyPixels = (pixels: string, multiplier: number) => {
    const num = Number(pixels.slice(0, -2));
    if (pixels.slice(-2) !== 'px' || Number.isNaN(num)) return '0';

    return num * multiplier + 'px';
};

// addition two pixels
export const pixelsAddition = (pixels1: string, pixels2: string) => {
    const num1 = Number(pixels1.slice(0, -2));
    const num2 = Number(pixels2.slice(0, -2));
    if (pixels1.slice(-2) !== 'px' || Number.isNaN(num1) || pixels2.slice(-2) !== 'px' || Number.isNaN(num2))
        return '0';

    return num1 + num2 + 'px';
};

export const pixelsSubtraction = (pixels1: string, pixels2: string) => {
    const num1 = Number(pixels1.slice(0, -2));
    const num2 = Number(pixels2.slice(0, -2));
    if (pixels1.slice(-2) !== 'px' || Number.isNaN(num1) || pixels2.slice(-2) !== 'px' || Number.isNaN(num2))
        return '0';

    return num1 - num2 + 'px';
};
