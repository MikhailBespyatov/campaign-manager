import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { WomInput } from 'components/common/inputs/NewDesign/WomInput';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { useField } from 'effector-forms/dist';
import React, { FC } from 'react';
import { forms } from 'stores/forms';

export interface CampaignDatesLayoutProps {}

export const CampaignDatesLayout: FC<CampaignDatesLayoutProps> = ({ children }) => {
    const { value: dateFromValue, onChange: onChangeDateFrom } = useField(forms.createCampaignForm.fields.dateFrom);
    const { value: dateToValue, onChange: onChangeDateTo } = useField(forms.createCampaignForm.fields.dateTo);
    const { value, onChange, isValid } = useField(forms.createCampaignForm.fields.budget);

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) => {
        dateFromValue !== dateFrom && onChangeDateFrom(dateFrom);
        dateToValue !== dateTo && onChangeDateTo(dateTo);
    };

    return (
        <>
            <Section>
                <ContentWrapper padding="16px 155px 25px" width="100%">
                    <Section alignCenter justifyCenter>
                        <DatePickerBetween
                            defaultDateFrom={dateFromValue}
                            defaultDateTo={dateToValue}
                            height="40px"
                            //marginBottom="13px"
                            minDate={new Date().toISOString()}
                            title={['START OF CAMPAIGN', 'END OF CAMPAIGN']}
                            titleType="outer"
                            width="500px"
                            onChange={onDatesBetweenChange}
                        />
                    </Section>

                    <WomInput
                        errorText="Insufficient funds"
                        isValid={isValid}
                        label="Budget amount"
                        value={value}
                        onChange={onChange}
                    />
                </ContentWrapper>
            </Section>

            <Section marginTop="8px">
                <ContentWrapper padding="16px 25px 40px" width="100%">
                    {children}
                </ContentWrapper>
            </Section>
        </>
    );
};
