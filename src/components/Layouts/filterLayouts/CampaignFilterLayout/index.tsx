import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { WomInput } from 'components/common/inputs/NewDesign/WomInput';
import { inputFieldWidth, maxContainerWidth } from 'components/common/inputs/NewDesign/WomInput/constants';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { useField } from 'effector-forms/dist';
import React, { FC, useEffect } from 'react';
import { forms } from 'stores/forms';

export interface CampaignDatesLayoutProps {}

export const CampaignDatesLayout: FC<CampaignDatesLayoutProps> = ({ children }) => {
    const { value: dateFromValue, onChange: onChangeDateFrom, validate: validateDateFrom } = useField(
        forms.createCampaignForm.fields.dateFrom
    );
    const { value: dateToValue, onChange: onChangeDateTo, validate: validateDateTo } = useField(
        forms.createCampaignForm.fields.dateTo
    );

    const { value, onChange, isValid } = useField(forms.createCampaignForm.fields.budget);

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) => {
        dateFromValue !== dateFrom && onChangeDateFrom(dateFrom);
        dateToValue !== dateTo && onChangeDateTo(dateTo);
    };

    useEffect(() => {
        validateDateFrom();
        validateDateTo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateFromValue, dateToValue]);

    return (
        <>
            <Section>
                <ContentWrapper align="center" padding="16px 155px 25px" width="100%">
                    <Section alignCenter justifyCenter maxWidth={maxContainerWidth}>
                        <DatePickerBetween
                            defaultDateFrom={dateFromValue}
                            defaultDateTo={dateToValue}
                            height="40px"
                            //marginBottom="13px"
                            maxWidth={inputFieldWidth}
                            minDate={new Date().toISOString()}
                            minWidth="250px"
                            title={['START OF CAMPAIGN', 'END OF CAMPAIGN']}
                            titleType="outer"
                            width="95%"
                            onChange={onDatesBetweenChange}
                        />
                    </Section>

                    <Section maxWidth={maxContainerWidth}>
                        <WomInput
                            errorText="Insufficient funds"
                            isValid={isValid}
                            label="Budget amount"
                            value={value}
                            onChange={onChange}
                        />
                    </Section>
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
