import { womExchangeRate } from 'constants/global';
import { ChangeEvent } from 'react';
import { commaInserter } from 'utils/usefulFunctions';

export const wrapperWidth = '244px';

export const womImgWidth = '25px';
export const womImgHeight = '29px';

export const inputBackground = '#EDEDED';
export const inputFontSize = '30px';

export const labelColor = '#9EA1B3';
export const borderColor = '#3333FF';
export const disabledBorderColor = '#F0F0F0';
export const disabledColor = '#D7D7D7';

export const labelFontSize = '16px';
export const labelLineHeight = '20px';
export const labelFontWeight = '600';
export const labelMarginBottom = '5px';

export const inputWrapperWidth = '100%';
export const inputWrapperHeight = '50px';
export const inputWrapperBorderRadius = '30px';
export const inputWrapperMarginBottom = '5px';
export const inputWrapperVerticalPadding = '12px';

export const iconDiameter = '10px';
export const absoluteIconRight = `calc((${inputWrapperHeight} - ${iconDiameter}) / 2)`;
export const absoluteIconTop = `calc((${inputWrapperHeight} - ${iconDiameter}) / 2)`;

export const errorSpanHeight = '41px';
export const errorSpanMarginBottom = '0';

export const currencyToText = (currency: number) => '$' + currency + ' USD';

export const onCurrencyChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: (value: any, shouldValidate?: boolean | undefined) => void,
    setCurrency: (value: number) => void
) => {
    const value = e.target.value.replace(/,/g, '');
    const wom = Number(value);
    if (Number.isInteger(wom) && wom >= 0) {
        setValue(commaInserter(value), true);
        setCurrency(wom * womExchangeRate);
    }
};
