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
import React, { useEffect, useState } from 'react';
import { DefaultValueString, Label, Name } from 'types';

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

    const handleDateChange = (date: dateType) => setSelectedDate(date);

    useEffect(() => {
        setValue(selectedDate?.toISOString() || '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    return (
        <Column width="100%">
            <HiddenInput {...field} value={selectedDate?.toISOString() || ''} />
            <ThemeProvider theme={materialTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        KeyboardButtonProps={defaultKeyboardButtonProps}
                        format={defaultFormat}
                        label={label}
                        margin="normal"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            </ThemeProvider>
            {/* {error && <ErrorSpan touched={touched}>{error}</ErrorSpan>} */}
        </Column>
    );
};
