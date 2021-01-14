import { HiddenInput } from 'components/common/inputs/Input';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { Noop } from 'constants/global';
import 'date-fns';
import { useField } from 'formik';
import React, { useEffect, useState } from 'react';
import { DefaultValueString, Label, MarginBottom, Name, Sizes } from 'types';
import {
    DataPickerWrapper,
    FakeBetweenDataPicker,
    FakeDataPicker,
    TextFieldBetweenForm,
    TextFieldForm
} from 'components/common/inputs/DatePicker/styles';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { requiredFieldMessage } from 'constants/messages';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import calendarImg from 'assets/img/calendar.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { getDate } from 'utils/usefulFunctions';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { pickerMarginTop } from 'pages/CampaignManager/Campaign/Details/constants';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
    defaultFormat,
    defaultKeyboardButtonProps,
    materialTheme
} from 'components/common/inputs/DatePicker/constants';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from 'styled-components';
import { campaignsEvents } from 'stores/campaigns';

type dateType = Date | null;

interface Props extends Sizes, MarginBottom {
    defaultDateFrom: string;
    defaultDateTo: string;
    onChange?: (dateFrom: string, dateTo: string) => void;
}

export const DatePickerBetween = ({
    defaultDateFrom,
    defaultDateTo,
    width,
    height,
    marginBottom,
    onChange = Noop
}: Props) => {
    const [selectedDateFrom, setSelectedDateFrom] = useState<dateType>(new Date(defaultDateFrom));
    const [selectedDateTo, setSelectedDateTo] = useState<dateType>(new Date(defaultDateTo));

    // const handleDateChangeFrom1 = (e: ChangeEvent<HTMLInputElement>) => {
    //     const date = new Date(e.currentTarget.value);
    //     setSelectedDateFrom(date);
    //     onChange(date?.toISOString() || '', selectedDateTo?.toISOString() || '');
    // };
    // const handleDateChangeTo1 = (e: ChangeEvent<HTMLInputElement>) => {
    //     const date = new Date(e.currentTarget.value);
    //     setSelectedDateTo(date);
    //     onChange(selectedDateFrom?.toISOString() || '', date?.toISOString() || '');
    // };
    const handleDateChangeFrom = (date: dateType) => {
        setSelectedDateFrom(date);
        onChange(date?.toISOString() || '', selectedDateTo?.toISOString() || '');
    };
    const handleDateChangeTo = (date: dateType) => {
        setSelectedDateTo(date);
        onChange(selectedDateFrom?.toISOString() || '', date?.toISOString() || '');
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
        <>
            {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
            {/*    <KeyboardDatePicker*/}
            {/*        KeyboardButtonProps={defaultKeyboardButtonProps}*/}
            {/*        format={defaultFormat}*/}
            {/*        label="Choose date from"*/}
            {/*        margin="normal"*/}
            {/*        maxDate={new Date(defaultDateTo)}*/}
            {/*        minDate={new Date(defaultDateFrom)}*/}
            {/*        value={selectedDateFrom}*/}
            {/*        onChange={handleDateChangeFrom}*/}
            {/*    />*/}
            {/*    <KeyboardDatePicker*/}
            {/*        KeyboardButtonProps={defaultKeyboardButtonProps}*/}
            {/*        format={defaultFormat}*/}
            {/*        label="Choose date to"*/}
            {/*        margin="normal"*/}
            {/*        maxDate={new Date(defaultDateTo)}*/}
            {/*        minDate={selectedDateFrom}*/}
            {/*        value={selectedDateTo}*/}
            {/*        onChange={handleDateChangeTo}*/}
            {/*    />*/}
            {/*</MuiPickersUtilsProvider>*/}
            <BorderBlock height={height} width={width}>
                <Column noWrap marginBottom={marginBottom}>
                    <MarginWrapper marginBottom={pickerMarginTop}>
                        <Span fontSize="15px" fontWeight="400" lineHeight="18px">
                            Date From
                        </Span>
                    </MarginWrapper>
                    <DataPickerWrapper>
                        <TextFieldBetweenForm
                            max={getDate(new Date(defaultDateTo))}
                            min={getDate(new Date(defaultDateFrom))}
                            type="date"
                            value={getDate(selectedDateFrom) || ''}
                            // onChange={handleDateChangeFrom1}
                        />
                        <FakeBetweenDataPicker>
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
                            </MuiPickersUtilsProvider>
                        </FakeBetweenDataPicker>
                        <AbsoluteWrapper right="0" top="0">
                            <CustomImg pointer src={calendarImg} />
                        </AbsoluteWrapper>
                    </DataPickerWrapper>
                </Column>
            </BorderBlock>
            <BorderBlock height={height} width={width}>
                <Column noWrap marginBottom={marginBottom}>
                    <MarginWrapper marginBottom={pickerMarginTop}>
                        <Span fontSize="15px" fontWeight="400" lineHeight="18px">
                            Date To
                        </Span>
                    </MarginWrapper>
                    <DataPickerWrapper>
                        <TextFieldBetweenForm
                            max={getDate(new Date(defaultDateTo))}
                            min={getDate(selectedDateFrom)}
                            type="date"
                            value={getDate(selectedDateTo) || ''}
                            // onChange={handleDateChangeTo1}
                        />
                        <FakeBetweenDataPicker>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                        </FakeBetweenDataPicker>
                        <AbsoluteWrapper right="0" top="0">
                            <CustomImg pointer src={calendarImg} />
                        </AbsoluteWrapper>
                    </DataPickerWrapper>
                </Column>
            </BorderBlock>
        </>
    );
};

interface InputPickerProps extends Name, Label, DefaultValueString {}

export const DatePickerInput = ({ name, label, defaultValue = new Date().toISOString() }: InputPickerProps) => {
    // eslint-disable-next-line
    const [field, _, { setValue }] = useField(name);

    const [selectedDate, setSelectedDate] = useState<dateType>(new Date(field.value));

    // const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setSelectedDate(new Date(e.currentTarget.value));
    const handleDateChange = (date: dateType) => setSelectedDate(date);

    useEffect(() => {
        setValue(selectedDate?.toISOString() || '');
        campaignsEvents.setFieldsCreateCampaignForm({ [field.name]: selectedDate?.toISOString() || '' });
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
            <DataPickerWrapper>
                <TextFieldForm type="date" value={getDate(selectedDate) || ''} />
                <FakeDataPicker>
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
                </FakeDataPicker>
                <AbsoluteWrapper right="28px" top="26px">
                    <CustomImg pointer src={calendarImg} />
                </AbsoluteWrapper>
            </DataPickerWrapper>
            <ErrorSpan>{requiredFieldMessage}</ErrorSpan>
            {/* {error && <ErrorSpan touched={touched}>{error}</ErrorSpan>} */}
        </Column>
    );
};
