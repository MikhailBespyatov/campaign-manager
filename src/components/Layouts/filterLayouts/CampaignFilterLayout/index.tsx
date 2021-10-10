import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { WomInput } from 'components/common/inputs/NewDesign/WomInput';
import { inputFieldWidth, maxContainerWidth } from 'components/common/inputs/NewDesign/WomInput/constants';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import addDays from 'date-fns/addDays';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import startOfToday from 'date-fns/startOfToday';
import { useField } from 'effector-forms/dist';
import React, { FC, useEffect } from 'react';
import { forms } from 'stores/forms';

export interface CampaignDatesLayoutProps {}

export const CampaignDatesLayout: FC<CampaignDatesLayoutProps> = ({ children }) => {
    const { value: startDate, onChange: onChangeStartDate, validate: validateStartDate } = useField(
        forms.createCampaignForm.fields.dateFrom
    );

    const { value: endDate, onChange: onChangeEndDate, validate: validateEndDate } = useField(
        forms.createCampaignForm.fields.dateTo
    );

    const { value: budgetValue, onChange, isValid, isTouched, validate: validateBudget } = useField(
        forms.createCampaignForm.fields.budget
    );

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) => {
        startDate !== dateFrom && onChangeStartDate(dateFrom);
        endDate !== dateTo && onChangeEndDate(dateTo);
    };

    useEffect(() => {
        const calendarDaysBetweenStartDateAndTodayDate = differenceInCalendarDays(new Date(startDate), startOfToday());
        const calendarDaysBetweenTodayDateAndEndDate = differenceInCalendarDays(new Date(endDate), startOfToday());
        const calendarDaysBetweenStartDateAndEndDate = differenceInCalendarDays(new Date(endDate), new Date(startDate));

        if (calendarDaysBetweenStartDateAndTodayDate < 0) {
            onChangeStartDate(new Date().toISOString());
            //console.log('SET new startDate', startDate);
        }

        if (calendarDaysBetweenStartDateAndEndDate < 1) {
            onChangeEndDate(addDays(new Date(startDate), 1).toISOString());
            //console.log('SET new endDate', addDays(new Date(startDate), 1).toISOString());
        } else if (calendarDaysBetweenTodayDateAndEndDate < 1) {
            onChangeEndDate(addDays(new Date(), 1).toISOString());
            // console.log('SET new endDate', addDays(new Date(), 1).toISOString());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        validateStartDate();
        validateEndDate();
        validateBudget();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endDate, startDate, budgetValue]);

    return (
        <>
            <Section>
                <ContentWrapper align="center" padding="16px 155px 25px" width="100%">
                    <Section alignCenter justifyCenter maxWidth={maxContainerWidth}>
                        <DatePickerBetween
                            hovered
                            defaultDateFrom={startDate}
                            defaultDateTo={endDate}
                            //marginBottom="13px"
                            height="40px"
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
                            isTouched={isTouched}
                            isValid={isValid}
                            label="Budget amount"
                            value={budgetValue}
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
