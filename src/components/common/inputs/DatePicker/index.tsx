import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import {
    defaultFormat,
    defaultKeyboardButtonProps,
    materialTheme
} from 'components/common/inputs/DatePicker/constants';
import { HiddenInput } from 'components/common/inputs/Input';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import 'date-fns';
import { useField } from 'formik';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { DefaultValueString, Label, Name } from 'types';
import { DataPickerWrapper, TextFieldForm } from 'components/common/inputs/DatePicker/styles';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { requiredFieldMessage } from 'constants/messages';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import calendarImg from 'assets/img/calendar.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { getDate } from 'utils/usefulFunctions';

type dateType = Date | null;

interface Props {
    defaultDateFrom: string;
    defaultDateTo: string;
    onChange?: (dateFrom: string, dateTo: string) => void;
}

export const DatePickerBetween = ({ defaultDateFrom, defaultDateTo, onChange = noop }: Props) => {
    const [selectedDateFrom, setSelectedDateFrom] = useState<dateType>(new Date(defaultDateFrom));
    const [selectedDateTo, setSelectedDateTo] = useState<dateType>(new Date(defaultDateTo));

    const handleDateChangeFrom = (date: dateType) => {
        setSelectedDateFrom(date);
        onChange(date?.toISOString() || '', selectedDateTo?.toISOString() || '');
    };
    const handleDateChangeTo = (date: dateType) => {
        setSelectedDateTo(date);
        onChange(selectedDateFrom?.toISOString() || '', date?.toISOString() || '');
        console.log(selectedDateFrom, date);
    };
    // useEffect(() => {
    //     onChange(selectedDateFrom?.toISOString() || '', selectedDateTo?.toISOString() || '');
    //     //setSelectedDateFrom(new Date(defaultDateFrom));
    //     //setSelectedDateTo(new Date(defaultDateTo));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [selectedDateFrom, selectedDateTo]);

    useEffect(() => {
        setSelectedDateFrom(new Date(defaultDateFrom));
        setSelectedDateTo(new Date(defaultDateTo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultDateFrom, defaultDateTo]);

    return (
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    KeyboardButtonProps={defaultKeyboardButtonProps}
                    format={defaultFormat}
                    label="Choose date from"
                    margin="normal"
                    maxDate={new Date(defaultDateTo)}
                    minDate={new Date(defaultDateFrom)}
                    value={selectedDateFrom}
                    onChange={handleDateChangeFrom}
                />
                <KeyboardDatePicker
                    KeyboardButtonProps={defaultKeyboardButtonProps}
                    format={defaultFormat}
                    label="Choose date to"
                    margin="normal"
                    maxDate={new Date(defaultDateTo)}
                    minDate={selectedDateFrom}
                    value={selectedDateTo}
                    onChange={handleDateChangeTo}
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};

interface InputPickerProps extends Name, Label, DefaultValueString {}

export const DatePickerInput = ({ name, label, defaultValue = new Date().toISOString() }: InputPickerProps) => {
    // eslint-disable-next-line
    const [field, _, { setValue }] = useField(name);

    const [selectedDate, setSelectedDate] = useState<dateType>(new Date(defaultValue));

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setSelectedDate(new Date(e.currentTarget.value));

    useEffect(() => {
        setValue(selectedDate?.toISOString() || '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    return (
        <Column width="100%">
            <HiddenInput {...field} value={selectedDate?.toISOString() || ''} />
            <MarginWrapper marginBottom="8px">
                <Span fontSize="15px" fontWeight="400" lineHeight="19px">
                    {label}
                </Span>
            </MarginWrapper>
            {/*<ThemeProvider theme={materialTheme}>*/}
            {/*    <MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
            {/*        <KeyboardDatePicker*/}
            {/*            KeyboardButtonProps={defaultKeyboardButtonProps}*/}
            {/*            format={defaultFormat}*/}
            {/*            label={label}*/}
            {/*            margin="normal"*/}
            {/*            value={selectedDate}*/}
            {/*            onChange={handleDateChange1}*/}
            {/*        />*/}
            {/*    </MuiPickersUtilsProvider>*/}
            {/*</ThemeProvider>*/}
            <DataPickerWrapper>
                <TextFieldForm type="date" value={getDate(selectedDate) || ''} onChange={handleDateChange} />
                <AbsoluteWrapper right="28px" top="26px">
                    <CustomImg pointer src={calendarImg} />
                </AbsoluteWrapper>
            </DataPickerWrapper>
            <ErrorSpan>{requiredFieldMessage}</ErrorSpan>
            {/* {error && <ErrorSpan touched={touched}>{error}</ErrorSpan>} */}
        </Column>
    );
};
