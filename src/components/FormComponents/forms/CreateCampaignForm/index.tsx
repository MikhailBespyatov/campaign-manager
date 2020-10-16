import { Block } from 'components/common/blocks/Block';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { DatePickerInput } from 'components/common/inputs/DatePicker';
import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import {
    initialValues,
    onCurrencyChange,
    onSubmit,
    validationSchema
} from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/CreateCampaignForm/styles';
import { ErrorSpan, TextInput } from 'components/FormComponents/inputs/TextInput';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { CreateCampaignMiniCard } from 'components/Layouts/Cards/CreateCampaignMiniCard';
import { blue, primaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import { FieldArray, Formik } from 'formik';
import React, { ChangeEvent } from 'react';
import { campaignsEvents, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';

export const labelFontSize = '16px';
export const labelLineHeight = '20px';
export const labelFontWeight = '600';
export const labelMarginBottom = '5px';

// const LabelSpan: FC<Color> = ({ children, color }) => (
//     <Span color={color} fontSize="16px" fontWeight="600" lineHeight="20px">
//         {children}
//     </Span>
// );

export const CreateCampaignForm = () => {
    const initialContentIds = useStore(campaignsStores.contentIds);
    const loading = useStore(loadingStores.loading);

    // useEffect(
    //     () => () => {
    //         campaignsEvents.clearContentIds();
    //     },
    //     []
    // );

    return (
        <Formik
            initialValues={{ ...initialValues, contentIds: initialContentIds.map(i => i.womContentId || '') }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleSubmit, isValid, dirty, touched, setFieldValue }) => (
                <>
                    <Block title="Selected videos">
                        <RowBlockCell padding={primaryPadding}>
                            <Row marginBottom="0">
                                <FieldArray name="contentIds">
                                    {({ remove }) =>
                                        values.contentIds.map((item, i) => (
                                            <CreateCampaignMiniCard
                                                key={item}
                                                marginBottom="0"
                                                {...initialContentIds[i]}
                                                onRemove={() => {
                                                    remove(i);
                                                    campaignsEvents.removeContentById(item);
                                                }}
                                            />
                                        ))
                                    }
                                </FieldArray>
                            </Row>
                        </RowBlockCell>
                    </Block>
                    <HighlightedTitleBlock title="Create Campaign">
                        <RowBlockCell padding={primaryPadding}>
                            <FormWrapper onSubmit={handleSubmit}>
                                <TextInput label="Campaign Name" name="title" placeholder="Enter campaign name" />
                                <ErrorSpan touched={touched?.tags}>
                                    {!values.contentIds.filter(i => i !== '').length && 'Selected videos are required'}
                                </ErrorSpan>
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
                        </RowBlockCell>
                    </HighlightedTitleBlock>
                </>
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
