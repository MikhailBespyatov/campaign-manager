import removeImg from 'assets/img/increment.svg';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { AddFieldButton } from 'components/common/buttons/AddFieldButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { DatePickerInput } from 'components/common/inputs/DatePicker';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { Button } from 'components/FormComponents/buttons/Button';
import {
    initialValues,
    onCurrencyChange,
    onSubmit,
    removeImgDiameter,
    validationSchema
} from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/CreateCampaignForm/styles';
import { ErrorSpan, TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { blue, errorColor, primaryPadding, successColor, untouchedColor } from 'constants/styles';
import { useStore } from 'effector-react';
import { FieldArray, Formik } from 'formik';
import React, { ChangeEvent, FC, useEffect } from 'react';
import { campaignsEvents, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { Color } from 'types';

export const labelFontSize = '16px';
export const labelLineHeight = '20px';
export const labelFontWeight = '600';
export const labelMarginBottom = '5px';

const LabelSpan: FC<Color> = ({ children, color }) => (
    <Span color={color} fontSize="16px" fontWeight="600" lineHeight="20px">
        {children}
    </Span>
);

export const CreateCampaignForm = () => {
    const initialContentIds = useStore(campaignsStores.contentIds);
    const loading = useStore(loadingStores.loading);

    useEffect(
        () => () => {
            campaignsEvents.clearContentIds();
        },
        []
    );

    return (
        <HighlightedTitleBlock title="Create Campaign">
            <RowBlockCell padding={primaryPadding}>
                <Formik
                    initialValues={{ ...initialValues, contentIds: initialContentIds }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, handleSubmit, errors, isValid, dirty, touched, setFieldValue }) => (
                        <FormWrapper onSubmit={handleSubmit}>
                            <TextInput label="Campaign Name" name="title" placeholder="Enter campaign name" />
                            <ErrorSpan touched={touched?.tags}>
                                {!values.tags.filter(i => i !== '').length &&
                                    !values.contentIds.filter(i => i !== '').length &&
                                    'At least one of tags or content ids fields required'}
                            </ErrorSpan>
                            <FieldArray name="tags">
                                {({ remove, push }) => (
                                    <Column marginBottom={primaryPadding} width="100%">
                                        <Row>
                                            <LabelSpan
                                                color={
                                                    !touched?.tags
                                                        ? untouchedColor
                                                        : errors.tags || errors.contentIds
                                                        ? errorColor
                                                        : successColor
                                                }
                                            >
                                                Tags
                                            </LabelSpan>
                                        </Row>
                                        {values.tags.length > 0 &&
                                            values.tags.map((_, i) => (
                                                <Section key={i.toString()} alignCenter noWrap>
                                                    <Column marginRight={primaryPadding}>
                                                        <TextInput
                                                            label="New Tag"
                                                            name={`tags.${i}`}
                                                            placeholder="Enter of tag name"
                                                        />
                                                    </Column>
                                                    {values.tags.length + values.contentIds.length !== 1 && (
                                                        <CustomImg
                                                            pointer
                                                            height={removeImgDiameter}
                                                            rotate={45}
                                                            src={removeImg}
                                                            width={removeImgDiameter}
                                                            onClick={() => remove(i)}
                                                        />
                                                    )}
                                                </Section>
                                            ))}
                                        <AddFieldButton onClick={() => push('')} />
                                        {errors?.tags && typeof errors.tags !== 'object' && (
                                            <ErrorSpan touched={touched?.tags}>{errors.tags}</ErrorSpan>
                                        )}
                                    </Column>
                                )}
                            </FieldArray>
                            <FieldArray name="contentIds">
                                {({ remove, push }) => (
                                    <Column marginBottom={primaryPadding} width="100%">
                                        <Row>
                                            <LabelSpan
                                                color={
                                                    !touched?.contentIds
                                                        ? untouchedColor
                                                        : errors.tags || errors.contentIds
                                                        ? errorColor
                                                        : successColor
                                                }
                                            >
                                                Content ids
                                            </LabelSpan>
                                        </Row>
                                        {values.contentIds.length > 0 &&
                                            values.contentIds.map((_, i) => (
                                                <Section key={i.toString()} alignCenter noWrap>
                                                    <Column marginRight={primaryPadding}>
                                                        <TextInput
                                                            label="New contend id"
                                                            name={`contentIds.${i}`}
                                                            placeholder="Enter content id"
                                                        />
                                                    </Column>
                                                    {values.tags.length + values.contentIds.length !== 1 && (
                                                        <CustomImg
                                                            pointer
                                                            height={removeImgDiameter}
                                                            rotate={45}
                                                            src={removeImg}
                                                            width={removeImgDiameter}
                                                            onClick={() => remove(i)}
                                                        />
                                                    )}
                                                </Section>
                                            ))}
                                        <AddFieldButton onClick={() => push('')} />
                                        {errors?.contentIds && typeof errors.contentIds !== 'object' && (
                                            <ErrorSpan touched={touched?.contentIds}>{errors.contentIds}</ErrorSpan>
                                        )}
                                    </Column>
                                )}
                            </FieldArray>
                            <DatePickerInput label="Start of campaign" name="utcToStart" />
                            <DatePickerInput label="End of campaign" name="utcToEnd" />
                            <TextInput
                                label="Budget amount"
                                name="amount"
                                placeholder="Enter amount of budget"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
                            />
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'CREATE CAMPAIGN'}
                            </Button>
                        </FormWrapper>
                    )}
                </Formik>
            </RowBlockCell>
        </HighlightedTitleBlock>
    );
};
