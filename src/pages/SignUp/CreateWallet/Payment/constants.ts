import history from 'BrowserHistory';
import { routes } from 'constants/routes';
import { yupCardName, yupCardNumber, yupCvc, yupExpireDate } from 'constants/yupFields';
import { ChangeEvent } from 'react';
import { slashInserter, spaceInserter } from 'utils/usefulFunctions';
import * as Yup from 'yup';

export const cardWidth = '54px';
export const cardHeight = '34px';

export const expirationDateMarginRight = '30px';

export const initialValues = { cardName: '', cardNumber: '', expireDate: '', cvc: '' };

export const validationSchema = Yup.object().shape({
    cardName: yupCardName,
    cardNumber: yupCardNumber,
    expireDate: yupExpireDate,
    cvc: yupCvc
});

export const onCardNumberChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value.replace(/ /g, '');
    const field = e.target.name;
    if (Number.isInteger(Number(value)) && Number(value) >= 0 && value.length <= 16)
        setFieldValue(field, spaceInserter(value), true);
};

export const onExpiredDataChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value.replace(/\//g, '');
    const field = e.target.name;
    if (Number.isInteger(Number(value)) && Number(value) >= 0 && value.length <= 4)
        setFieldValue(field, slashInserter(value), true);
};

export const onCvcChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value;
    const field = e.target.name;
    if (Number.isInteger(Number(value)) && Number(value) >= 0 && value.length <= 3) setFieldValue(field, value, true);
};

export const onSubmit = () => history.push(routes.signUp.success);
