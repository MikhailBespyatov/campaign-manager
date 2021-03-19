import React from 'react';

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
    activeSubPage: string;
    onClick: (state: string) => void;
}
//
// export const CreateCampaignForm: FC<Props> = ({ activeSubPage, onClick }) => {
//     const initialValues = useStore(campaignsStores.createCampaignForm);
//     // const loading = useStore(loadingStores.loading);
//     // console.log(initialContentIds);
//     const isFirstSubPageActive = activeSubPage === itemsCreateCampaign[0].path;
//     const handleClickNext = () => onClick(itemsCreateCampaign[1].path);
//     const handleClickBack = () => onClick(itemsCreateCampaign[0].path);
//     const onChangeCampaignName = (e: ChangeEvent<HTMLInputElement>) =>
//         campaignsEvents.setFieldsCreateCampaignForm({ title: e.target.value });
//     const flexBasisDataPicker = getFlexBasisPercent(2);
//
//     // const { values, handleSubmit, isValid, dirty, touched, status, setStatus } = useFormik({
//     //     initialValues: { ...initialValues, contentIds: initialContentIds.map(i => i.womContentId || '') },
//     //     validationSchema,
//     //     onSubmit
//     // });
//
//     return (
//         <Formik
//             enableReinitialize
//             initialValues={{ ...initialValues }}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             {({ values, handleSubmit, isValid, setStatus, status }) => {
//                 const womBalanceValid = !status?.amount;
//                 return (
//                     <Row noWrap height="100%" marginBottom="0" width="100%">
//                         {/*{console.log(values)}*/}
//                         <Column height="100%" width="100%">
//                             <RowBlockCell padding={primaryPadding}>
//                                 <FormWrapper>
//                                     {isFirstSubPageActive ? (
//                                         <Column marginRight={primaryPadding} width="100%">
//                                             <TextInput
//                                                 required
//                                                 label="Campaign Name"
//                                                 name="title"
//                                                 placeholder="Enter campaign name"
//                                                 onChange={onChangeCampaignName}
//                                             />
//                                             <Row marginBottom="0" width="100%">
//                                                 <FlexGrow
//                                                     flexBasis={flexBasisDataPicker}
//                                                     flexShrink="0"
//                                                     marginRight={primaryPadding}
//                                                 >
//                                                     <DatePickerInput label="Start of campaign" name="utcToStart" />
//                                                 </FlexGrow>
//                                                 <FlexGrow flexBasis={flexBasisDataPicker} flexShrink="0">
//                                                     <DatePickerInput label="End of campaign" name="utcToEnd" />
//                                                 </FlexGrow>
//                                             </Row>
//                                         </Column>
//                                     ) : (
//                                         <Column marginRight={primaryPadding} width="100%">
//                                             <MarginWrapper marginBottom="20px">
//                                                 <Span fontSize="18px" fontWeight="600" lineHeight="22px">
//                                                     Add Budget
//                                                 </Span>
//                                             </MarginWrapper>
//                                             <WomInput
//                                                 label="Budget amount"
//                                                 name="amount"
//                                                 placeholder="Enter amount of budget"
//                                                 setStatus={setStatus}
//                                                 status={status}
//                                                 //onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
//                                             />
//                                         </Column>
//                                     )}
//                                 </FormWrapper>
//                                 <Column alignCenter marginBottom="0">
//                                     {isFirstSubPageActive ? (
//                                         <Column>
//                                             <ManualRoundedButton
//                                                 disabled={!(values?.title && initialValues.contentIds.length)}
//                                                 onClick={handleClickNext}
//                                             >
//                                                 NEXT
//                                             </ManualRoundedButton>
//                                         </Column>
//                                     ) : (
//                                         <>
//                                             <Column>
//                                                 <ManualRoundedButton
//                                                     disabled={!(isValid && womBalanceValid && Boolean(values.amount))}
//                                                     onClick={() => handleSubmit()}
//                                                 >
//                                                     START CAMPAIGN
//                                                 </ManualRoundedButton>
//                                             </Column>
//                                             <Column>
//                                                 <MarginWrapper marginTop="13px">
//                                                     <SimpleButton
//                                                         backgroundColor={'white'}
//                                                         color={'#FC4237'}
//                                                         onClick={handleClickBack}
//                                                     >
//                                                         Cancel
//                                                     </SimpleButton>
//                                                 </MarginWrapper>
//                                             </Column>
//                                         </>
//                                     )}
//                                 </Column>
//                             </RowBlockCell>
//                         </Column>
//                     </Row>
//                 );
//             }}
//         </Formik>
//     );
// };

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
