import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import calendarImg, { ReactComponent as CalendarImg } from 'assets/img/calendar.svg';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    defaultFormat,
    defaultKeyboardButtonProps,
    materialTheme,
    titleMarginBottom
} from 'components/common/inputs/DatePicker/constants';
import {
    CalendarButton,
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
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop } from 'constants/global';
import { requiredFieldMessage } from 'constants/messages';
import { grey4, primaryMargin } from 'constants/styles';
import 'date-fns';
import { useField } from 'formik';
import {
    borderBlockHorizontalPadding,
    borderBlockVerticalPadding
} from 'pages/CampaignManager/Campaign/Details/constants';
import React, { useEffect, useState } from 'react';
import { campaignsEvents } from 'stores/campaigns';
import { ThemeProvider } from 'styled-components';
import { DefaultValueString, Label, MarginBottom, MaxSizes, MinSizes, Name, Sizes } from 'types';
import { getDate } from 'utils/usefulFunctions';

type dateType = Date | null;

interface Props extends Sizes, MarginBottom, Pick<MinSizes, 'minWidth'>, Pick<MaxSizes, 'maxWidth'> {
    defaultDateFrom: string;
    defaultDateTo: string;
    minDate?: string;
    maxDate?: string;
    onChange?: (dateFrom: string, dateTo: string) => void;
    titleType?: 'inner' | 'outer';
    title?: [string, string];
    borderRadius?: string;
    backgroundColor?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
    titleLineHeight?: string;
    hovered?: boolean;
}

export const DatePickerBetween = ({
    defaultDateFrom,
    defaultDateTo,
    width,
    minWidth,
    maxWidth,
    height,
    maxDate,
    minDate,
    marginBottom,
    onChange = Noop,
    titleType = 'inner',
    title = ['Date From', 'Date to'],
    borderRadius,
    backgroundColor,
    titleFontSize,
    titleFontWeight,
    titleLineHeight,
    hovered
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
            <Column width="50%">
                {!isInnerType && (
                    <MarginWrapper marginBottom={titleMarginBottom}>
                        <TitleSpan>{titleFrom}</TitleSpan>
                    </MarginWrapper>
                )}
                <BorderBlock
                    backgroundColor={backgroundColor}
                    borderRadius={borderRadius}
                    height={height}
                    hovered={hovered}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                    paddingBottom={borderBlockVerticalPadding}
                    paddingRight={borderBlockHorizontalPadding}
                    width={width}
                >
                    <Section alignCenter justifyBetween>
                        <Column justifyCenter noWrap marginBottom={marginBottom}>
                            {isInnerType && (
                                <Row alignCenter>
                                    <MarginWrapper marginBottom="3px" marginRight="10px">
                                        <Span
                                            color={grey4}
                                            fontSize={titleFontSize || '12px'}
                                            fontWeight={titleFontWeight || '400'}
                                            lineHeight={titleLineHeight || '15px'}
                                        >
                                            {titleFrom}
                                        </Span>
                                    </MarginWrapper>

                                    {/* <InfoPopover
                                        backgroundColor={popoverBackground}
                                        popoverText="Some additional information"
                                        type="right"
                                        width="250px"
                                    >
                                        <InfoImg />
                                    </InfoPopover> */}
                                </Row>
                            )}
                            <TextFieldBetweenForm
                                max={maxDate}
                                min={minDate}
                                type="date"
                                value={getDate(selectedDateFrom) || ''}
                                // onChange={handleDateChangeFrom1}
                            />
                        </Column>
                        <Column>
                            <DataPickerWrapper>
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
                            </DataPickerWrapper>
                            {/* <AbsoluteWrapper right={imagePositionRight} top={imagePositionTop}> */}
                            <CalendarButton>
                                <CalendarImg />
                            </CalendarButton>
                            {/* </AbsoluteWrapper> */}
                        </Column>
                    </Section>
                </BorderBlock>
            </Column>
            <Column width="50%">
                {!isInnerType && (
                    <MarginWrapper marginBottom={titleMarginBottom}>
                        <Span
                            color={grey4}
                            fontSize={titleFontSize || '12px'}
                            fontWeight={titleFontWeight || '400'}
                            lineHeight={titleLineHeight || '15px'}
                        >
                            {titleTo}
                        </Span>
                    </MarginWrapper>
                )}
                <BorderBlock
                    backgroundColor={backgroundColor}
                    borderRadius={borderRadius}
                    height={height}
                    hovered={hovered}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                    paddingBottom={borderBlockVerticalPadding}
                    paddingRight={borderBlockHorizontalPadding}
                    width={width}
                >
                    <Section alignCenter justifyBetween>
                        <Column noWrap marginBottom={marginBottom}>
                            {isInnerType && (
                                <Row alignCenter>
                                    <MarginWrapper marginBottom="3px" marginRight="10px">
                                        <Span fontSize="12px" fontWeight="400" lineHeight="15px">
                                            {titleTo}
                                        </Span>
                                    </MarginWrapper>
                                    {/* <InfoPopover
                                        backgroundColor={popoverBackground}
                                        popoverText="Some additional information"
                                        width="250px"
                                    >
                                        <InfoImg />
                                    </InfoPopover> */}
                                </Row>
                            )}
                            <TextFieldBetweenForm
                                max={maxDate}
                                min={minDate}
                                type="date"
                                value={getDate(selectedDateTo) || ''}
                                // onChange={handleDateChangeTo1}
                            />
                        </Column>
                        <Row>
                            <DataPickerWrapper>
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
                                {/* <AbsoluteWrapper right={imagePositionRight} top={imagePositionTop}> */}
                                <CalendarButton>
                                    <CalendarImg />
                                </CalendarButton>
                                {/* </AbsoluteWrapper> */}
                            </DataPickerWrapper>
                        </Row>
                    </Section>
                </BorderBlock>
            </Column>
        </>
    );
};

interface InputPickerProps extends Name, Label, DefaultValueString {}

export const DatePickerInput = ({ name = '', label }: InputPickerProps) => {
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
