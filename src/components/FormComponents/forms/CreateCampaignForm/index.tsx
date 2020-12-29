import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { DatePickerInput } from 'components/common/inputs/DatePicker';
import {
    initialValues,
    onSubmit,
    validationSchema
} from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/CreateCampaignForm/styles';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { WomInput } from 'components/FormComponents/inputs/WomInput';
import { Column, FlexGrow, Row } from 'components/grid/wrappers/FlexWrapper';
import { primaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { campaignsStores } from 'stores/campaigns';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { SimpleButton } from 'components/common/buttons/SimpleButton';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';

export const labelFontSize = '16px';
export const labelLineHeight = '20px';
export const labelFontWeight = '600';
export const labelMarginBottom = '5px';

// const LabelSpan: FC<Color> = ({ children, color }) => (
//     <Span color={color} fontSize="16px" fontWeight="600" lineHeight="20px">
//         {children}
//     </Span>
// );

interface Props {
    isFirstPage: boolean;
    onClick: (state: boolean) => void;
}

export const CreateCampaignForm: FC<Props> = ({ isFirstPage, onClick }) => {
    const initialContentIds = useStore(campaignsStores.contentIds);
    // const loading = useStore(loadingStores.loading);
    // console.log(initialContentIds);
    const handleClickNext = () => onClick(false);
    const handleClickBack = () => onClick(true);

    return (
        <Formik
            initialValues={{ ...initialValues, contentIds: initialContentIds.map(i => i.womContentId || '') }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleSubmit, isValid, dirty, touched, status, setStatus }) => (
                <Row noWrap height="100%" marginBottom="0" width="100%">
                    <Column height="100%" width="100%">
                        <RowBlockCell padding={primaryPadding}>
                            <FormWrapper>
                                {isFirstPage ? (
                                    <Column marginRight={primaryPadding} width="100%">
                                        <TextInput
                                            required
                                            label="Campaign Name"
                                            name="title"
                                            placeholder="Enter campaign name"
                                        />
                                        <Row marginBottom="0" width="100%">
                                            <FlexGrow
                                                flexBasis="50%"
                                                flexGrow="1"
                                                flexShrink="0"
                                                marginRight={primaryPadding}
                                            >
                                                <DatePickerInput label="Start of campaign" name="utcToStart" />
                                            </FlexGrow>
                                            <FlexGrow flexBasis="50%" flexGrow="1" flexShrink="0" marginRight={'0'}>
                                                <DatePickerInput label="End of campaign" name="utcToEnd" />
                                            </FlexGrow>
                                        </Row>
                                    </Column>
                                ) : (
                                    <Column marginRight={primaryPadding} width="100%">
                                        <MarginWrapper marginBottom="20px">
                                            <Span fontSize="18px" fontWeight="600" lineHeight="22px">
                                                Add Budget
                                            </Span>
                                        </MarginWrapper>
                                        <WomInput
                                            label="Budget amount"
                                            name="amount"
                                            placeholder="Enter amount of budget"
                                            setStatus={setStatus}
                                            status={status}
                                            //onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
                                        />
                                    </Column>
                                )}
                            </FormWrapper>
                            <Column alignCenter marginBottom="0">
                                {isFirstPage ? (
                                    <Column>
                                        <RoundedButton
                                            disabled={!values?.title || !initialContentIds.length}
                                            onClick={handleClickNext}
                                        >
                                            NEXT
                                        </RoundedButton>
                                    </Column>
                                ) : (
                                    <>
                                        <Column>
                                            <RoundedButton disabled={!isValid || !dirty} onClick={() => handleSubmit()}>
                                                START CAMPAIGN
                                            </RoundedButton>
                                        </Column>
                                        <Column>
                                            <MarginWrapper marginTop="13px">
                                                <SimpleButton
                                                    backgroundColor={'white'}
                                                    color={'#FC4237'}
                                                    onClick={handleClickBack}
                                                >
                                                    Cancel
                                                </SimpleButton>
                                            </MarginWrapper>
                                        </Column>
                                    </>
                                )}
                            </Column>
                        </RowBlockCell>
                    </Column>
                </Row>
            )}
        </Formik>
    );
};

/* <FieldArray name="tags">
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
                            </FieldArray> */

// <FieldArray name="contentIds">
//     {({ remove, push }) => (
//         <Column marginBottom={primaryPadding} width="100%">
//             <Row>
//                 <LabelSpan
//                     color={
//                         !touched?.contentIds
//                             ? untouchedColor
//                             : errors.tags || errors.contentIds
//                             ? errorColor
//                             : successColor
//                     }
//                 >
//                     Content ids
//                 </LabelSpan>
//             </Row>
//             {values.contentIds.length > 0 &&
//                 values.contentIds.map((_, i) => (
//                     <Section key={i.toString()} alignCenter noWrap>
//                         <Column marginRight={primaryPadding}>
//                             <TextInput
//                                 label="New contend id"
//                                 name={`contentIds.${i}`}
//                                 placeholder="Enter content id"
//                             />
//                         </Column>
//                         {values.tags.length + values.contentIds.length !== 1 && (
//                             <CustomImg
//                                 pointer
//                                 height={removeImgDiameter}
//                                 rotate={45}
//                                 src={removeImg}
//                                 width={removeImgDiameter}
//                                 onClick={() => remove(i)}
//                             />
//                         )}
//                     </Section>
//                 ))}
//             <AddFieldButton onClick={() => push('')} />
//             {errors?.contentIds && typeof errors.contentIds !== 'object' && (
//                 <ErrorSpan touched={touched?.contentIds}>{errors.contentIds}</ErrorSpan>
//             )}
//         </Column>
//     )}
// </FieldArray>
