import { buttonHeight } from 'components/common/buttons/AddFieldButton/constants';
import { Props, SetErrorsCreateCampaign } from 'components/FormComponents/forms/CreateCampaignForm/types';
import { yupDefault, yupDefaultArray } from 'constants/yupFields';
import { ChangeEvent } from 'react';
import { campaignsEffects } from 'stores/campaigns';
import { commaInserter, getOrganizationId } from 'utils/usefulFunctions';
import * as Yup from 'yup';

export const removeImgDiameter = buttonHeight;

export const formWrapperWidth = '300px';

export const formValues: Props = {
    title: '',
    tags: [],
    contentIds: [],
    utcToStart: new Date().toISOString(),
    utcToEnd: new Date().toISOString(),
    amount: ''
};

export const validationSchema = Yup.object().shape({
    title: yupDefault,
    // tags: Yup.array().of(yupDefault),
    contentIds: yupDefaultArray,
    // .of(yupDefault)
    // .when('tags', {
    //     is: val => val.length === 0,
    //     then: yupDefaultArray,
    //     otherwise: Yup.array().of(yupDefault)
    // }),
    utcToStart: yupDefault,
    utcToEnd: yupDefault,
    amount: yupDefault
});

export const onPermissionChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value;
    const field = e.target.name;
    if (Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= 2) setFieldValue(field, value, true);
};

interface SetErrorsFormikProps extends SetErrorsCreateCampaign {}

export const onCurrencyChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value.replace(/,/g, '');
    const field = e.target.name;
    const wom = Number(value);
    if (Number.isInteger(wom) && wom >= 0) setFieldValue(field, commaInserter(value), true);
};

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) =>
    campaignsEffects.upsertItem({
        organizationId: getOrganizationId(),
        title: values.title,
        tags: values.tags,
        contentIds: values.contentIds,
        schedule: {
            utcToStart: values.utcToStart,
            utcToEnd: values.utcToEnd
        },
        budget: {
            budgetTotal: Number(values.amount.replaceAll(',', ''))
        },
        settings: {
            watchOverride: false,
            mustWatch: false
        }
    });
