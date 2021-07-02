import { womExchangeRate } from 'constants/global';
import { ChangeEvent } from 'react';
import { walletStores } from 'stores/wallet';
import { commaInserter } from 'utils/usefulFunctions';

export const wrapperWidth = '244px';

export const womImgWidth = '20px';
export const womImgHeight = '23px';

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

export const exceedWomError = 'Insufficient funds';

export const onCurrencyChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: (value: any, shouldValidate?: boolean | undefined) => void,
    setCurrency: (value: number) => void,
    setTouched: (value: boolean, shouldValidate?: boolean | undefined) => void,
    setStatus: (status?: any) => void
) => {
    const value = e.target.value.replace(/,/g, '');
    const wom = Number(value);
    if (Number.isInteger(wom) && wom >= 0) {
        setValue(commaInserter(value), false);
        // console.log(commaInserter(value));
        // campaignsEvents.setFieldsCreateCampaignForm({ amount: commaInserter(value) });
        setCurrency(Number((wom * womExchangeRate).toFixed(2)));
        // * set status as error if you have not enough WOM
        if (wom > walletStores.walletBalance.getState()) {
            setStatus({ amount: exceedWomError });
            setTouched(true, true);
        } else setStatus({ amount: '' });
    }
};
