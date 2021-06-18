import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import calendarImg from 'assets/img/calendar.svg';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    defaultFormat,
    defaultKeyboardButtonProps,
    imagePositionRight,
    imagePositionTop,
    materialTheme,
    titleMarginBottom
} from 'components/common/inputs/DatePicker/constants';
import {
    DataPickerWrapper,
    FakeBetweenDataPicker,
    FakeDataPicker,
    TextFieldBetweenForm,
    TextFieldForm,
    TitleSpan
} from 'components/common/inputs/DatePicker/styles';
import { HiddenInput } from 'components/common/inputs/Input';
import { Span } from 'components/common/typography/Span';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop } from 'constants/global';
import { requiredFieldMessage } from 'constants/messages';
import { primaryMargin } from 'constants/styles';
import 'date-fns';
import { useField } from 'formik';
import {
    borderBlockHorizontalPadding,
    borderBlockVerticalPadding
} from 'pages/CampaignManager/Campaign/Details/constants';
import React, { useEffect, useState } from 'react';
import { campaignsEvents } from 'stores/campaigns';
import { ThemeProvider } from 'styled-components';
import { DefaultValueString, Label, MarginBottom, Name, Sizes } from 'types';
import { getDate } from 'utils/usefulFunctions';

type dateType = Date | null;

interface Props extends Sizes, MarginBottom {
    defaultDateFrom: string;
    defaultDateTo: string;
    minDate?: string;
    maxDate?: string;
    onChange?: (dateFrom: string, dateTo: string) => void;
    titleType?: 'inner' | 'outer';
    title?: [string, string];
}

export const DatePickerBetween = ({
    defaultDateFrom,
    defaultDateTo,
    width,
    height,
    maxDate,
    minDate,
    marginBottom,
    onChange = Noop,
    titleType = 'inner',
    title = ['Date From', 'Date to']
}: Props) => {
    const [selectedDateFrom, setSelectedDateFrom] = useState<dateType>(new Date(defaultDateFrom));
    const [selectedDateTo, setSelectedDateTo] = useState<dateType>(new Date(defaultDateTo));

    const [titleFrom, titleTo] = title;
    const isInnerType = titleType === 'inner';

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
        const dateToSet = date;
        //Because when the user sets the date, the date for toDate is selected less than for fromDate - in BE the difference is considered less than one day
        dateToSet?.setMinutes(date ? date.getMinutes() + 1 : 1);
        setSelectedDateTo(dateToSet);
        onChange(selectedDateFrom?.toISOString() || '', dateToSet?.toISOString() || '');
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
            <Column>
                {!isInnerType && (
                    <MarginWrapper marginBottom={titleMarginBottom}>
                        <TitleSpan>{titleFrom}</TitleSpan>
                    </MarginWrapper>
                )}
                <BorderBlock
                    height={height}
                    paddingBottom={borderBlockVerticalPadding}
                    paddingRight={borderBlockHorizontalPadding}
                    width={width}
                >
                    <Column noWrap marginBottom={marginBottom}>
                        <DataPickerWrapper>
                            {isInnerType && (
                                <MarginWrapper marginBottom="3px">
                                    <Span fontSize="12px" fontWeight="400" lineHeight="15px">
                                        {titleFrom}
                                    </Span>
                                </MarginWrapper>
                            )}
                            <TextFieldBetweenForm
                                max={maxDate}
                                min={minDate}
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
                                        maxDate={maxDate}
                                        minDate={minDate}
                                        value={selectedDateFrom}
                                        onChange={handleDateChangeFrom}
                                    />
                                </MuiPickersUtilsProvider>
                            </FakeBetweenDataPicker>
                            <AbsoluteWrapper right={imagePositionRight} top={imagePositionTop}>
                                <CustomImg pointer src={calendarImg} width="25px" />
                            </AbsoluteWrapper>
                        </DataPickerWrapper>
                    </Column>
                </BorderBlock>
            </Column>
            <Column>
                {!isInnerType && (
                    <MarginWrapper marginBottom={titleMarginBottom}>
                        <TitleSpan>{titleTo}</TitleSpan>
                    </MarginWrapper>
                )}
                <BorderBlock
                    height={height}
                    paddingBottom={borderBlockVerticalPadding}
                    paddingRight={borderBlockHorizontalPadding}
                    width={width}
                >
                    <Column noWrap marginBottom={marginBottom}>
                        <DataPickerWrapper>
                            {isInnerType && (
                                <MarginWrapper marginBottom="3px">
                                    <Span fontSize="12px" fontWeight="400" lineHeight="15px">
                                        {titleTo}
                                    </Span>
                                </MarginWrapper>
                            )}
                            <TextFieldBetweenForm
                                max={maxDate}
                                min={minDate}
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
                                        maxDate={maxDate}
                                        minDate={minDate}
                                        value={selectedDateTo}
                                        onChange={handleDateChangeTo}
                                    />
                                </MuiPickersUtilsProvider>
                            </FakeBetweenDataPicker>
                            <AbsoluteWrapper right={imagePositionRight} top={imagePositionTop}>
                                <CustomImg pointer src={calendarImg} />
                            </AbsoluteWrapper>
                        </DataPickerWrapper>
                    </Column>
                </BorderBlock>
            </Column>
        </>
    );
};

interface InputPickerProps extends Name, Label, DefaultValueString {}

export const DatePickerInput = ({ name = '', label, defaultValue = new Date().toISOString() }: InputPickerProps) => {
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
            <MarginWrapper marginBottom={primaryMargin}>
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
