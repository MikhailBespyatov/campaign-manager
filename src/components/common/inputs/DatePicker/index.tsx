import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import React from 'react';

export const MaterialUIPickers = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Date picker inline"
                    margin="normal"
                    value={selectedDate}
                    variant="inline"
                    onChange={handleDateChange}
                />
                <KeyboardDatePicker
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                    format="MM/dd/yyyy"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    margin="normal"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <KeyboardTimePicker
                    KeyboardButtonProps={{
                        'aria-label': 'change time'
                    }}
                    id="time-picker"
                    label="Time picker"
                    margin="normal"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
};
