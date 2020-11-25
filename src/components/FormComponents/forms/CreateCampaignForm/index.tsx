import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { DatePickerInput } from 'components/common/inputs/DatePicker';
import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import {
    initialValues,
    onSubmit,
    validationSchema
} from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/CreateCampaignForm/styles';
import { ErrorSpan, TextInput } from 'components/FormComponents/inputs/TextInput';
import { WomInput } from 'components/FormComponents/inputs/WomInput';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { CreateCampaignMiniCard } from 'components/Layouts/Cards/CreateCampaignMiniCard';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { blue, primaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import { FieldArray, Formik } from 'formik';
import React from 'react';
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

    return (
        <Formik
            initialValues={{ ...initialValues, contentIds: initialContentIds.map(i => i.womContentId || '') }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleSubmit, isValid, dirty, touched, status, setStatus }) => (
                <Row noWrap width="100%">
                    {/* {console.log(status)} */}
                    {!!initialContentIds.length && <VideoCard unselectable {...initialContentIds[0]} />}
                    <Column>
                        {!!initialContentIds.length && (
                            <HighlightedTitleBlock title="Selected videos" width="100%">
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
                            </HighlightedTitleBlock>
                        )}
                        <HighlightedTitleBlock title="Create Campaign" width="100%">
                            <RowBlockCell padding={primaryPadding}>
                                <FormWrapper onSubmit={handleSubmit}>
                                    <Row marginBottom="0">
                                        <Column marginRight={primaryPadding} width="320px">
                                            <TextInput
                                                label="Campaign Name"
                                                name="title"
                                                placeholder="Enter campaign name"
                                            />
                                            <Row marginBottom="0">
                                                <Column marginRight={primaryPadding} width="150px">
                                                    <DatePickerInput label="Start of campaign" name="utcToStart" />
                                                </Column>
                                                <Column marginRight={'0'} width="150px">
                                                    <DatePickerInput label="End of campaign" name="utcToEnd" />
                                                </Column>
                                            </Row>
                                        </Column>
                                        <Column marginRight={primaryPadding} width="250px">
                                            <WomInput
                                                label="Budget amount"
                                                name="amount"
                                                placeholder="Enter amount of budget"
                                                setStatus={setStatus}
                                                status={status}
                                                //onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
                                            />
                                        </Column>
                                    </Row>
                                    <Row alignBaseline marginBottom="0">
                                        <Column marginRight={primaryPadding}>
                                            <Button
                                                background={isValid && dirty ? blue : undefined}
                                                // * disable button if there is a status as error
                                                disabled={loading || status?.amount}
                                            >
                                                {loading ? <Loader /> : 'CREATE CAMPAIGN'}
                                            </Button>
                                        </Column>
                                        <Column marginRight={primaryPadding} width="200px">
                                            <ErrorSpan touched={touched?.tags}>
                                                {!values.contentIds.filter(i => i !== '').length &&
                                                    'Selected videos are required'}
                                            </ErrorSpan>
                                        </Column>
                                    </Row>
                                </FormWrapper>
                            </RowBlockCell>
                        </HighlightedTitleBlock>
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
