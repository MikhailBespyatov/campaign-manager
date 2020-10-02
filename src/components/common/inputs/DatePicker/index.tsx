import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import {
    defaultFormat,
    defaultKeyboardButtonProps,
    materialTheme
} from 'components/common/inputs/DatePicker/constants';
import { noop } from 'constants/global';
import 'date-fns';
import React, { useEffect, useState } from 'react';

interface Props {
    defaultDateFrom: string;
    defaultDateTo: string;
    onChange?: (dateFrom: string, dateTo: string) => void;
}

export const DatePickerBetween = ({ defaultDateFrom, defaultDateTo, onChange = noop }: Props) => {
    const [selectedDateFrom, setSelectedDateFrom] = useState<Date | null>(new Date(defaultDateFrom));
    const [selectedDateTo, setSelectedDateTo] = useState<Date | null>(new Date(defaultDateTo));

    const handleDateChangeFrom = (date: Date | null) => setSelectedDateFrom(date);
    const handleDateChangeTo = (date: Date | null) => setSelectedDateTo(date);

    useEffect(() => {
        onChange(selectedDateFrom?.toISOString() || '', selectedDateTo?.toISOString() || '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDateFrom, selectedDateTo]);

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
                    minDate={new Date(defaultDateFrom)}
                    value={selectedDateTo}
                    onChange={handleDateChangeTo}
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};
