import React, { FC } from 'react';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { primaryPadding } from 'constants/styles';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { forms } from 'stores/forms';
import { useField } from 'effector-forms/dist';

export interface CampaignDatesLayoutProps {}

export const CampaignDatesLayout: FC<CampaignDatesLayoutProps> = ({ children }) => {
    const { value: dateFromValue, onChange: onChangeDateFrom } = useField(forms.createCampaignForm.fields.dateFrom);
    const { value: dateToValue, onChange: onChangeDateTo } = useField(forms.createCampaignForm.fields.dateTo);

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) => {
        dateFromValue !== dateFrom && onChangeDateFrom(dateFrom);
        dateToValue !== dateTo && onChangeDateTo(dateTo);
    };

    return (
        <>
            <Section>
                <ContentWrapper padding="24px 106px 30px" width="100%">
                    <Section justifyCenter>
                        <DatePickerBetween
                            defaultDateFrom={dateFromValue}
                            defaultDateTo={dateToValue}
                            height="60px"
                            marginBottom={primaryPadding}
                            minDate={new Date().toISOString()}
                            title={['START OF CAMPAIGN', 'END OF CAMPAIGN']}
                            titleType="outer"
                            width="500px"
                            onChange={onDatesBetweenChange}
                        />
                    </Section>
                </ContentWrapper>
            </Section>
            <Section marginTop="8px">
                <ContentWrapper padding="40px 25px 50px" width="100%">
                    {children}
                </ContentWrapper>
            </Section>
        </>
    );
};
