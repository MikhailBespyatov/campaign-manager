import womLogo from 'assets/img/wom-token-logo.png';
import { ResetButton } from 'components/common/buttons/ResetButton';
import { DropdownSection } from 'components/common/dropdowns/SectionDropdown';
import { StyledRow, StyledRowNoShrink } from 'components/common/dropdowns/SectionDropdown/style';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { defaultTextColor } from 'constants/defaults';
import { black, grey4, primaryColor, red2, white } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    areaCommonStyle,
    defaultUtsFrom,
    defaultUtsTo,
    getRequestObject,
    graphicOption,
    numbersAfterDecimalPoint,
    titleFontSize,
    titleFontSizeStatsItem,
    titleLineHeight,
    titleLineHeightStatsItem
} from 'pages/CampaignManager/Financials/constants';
import React, { useEffect, useMemo, useState } from 'react';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { walletEffects, walletStores } from 'stores/wallet';
import {
    addDaysToDate,
    codeToString,
    dateToLongString,
    dateToShortString,
    getFixedNumber
} from 'utils/usefulFunctions';
import {
    ChartWrapper,
    EmptyWrapper,
    GroupByWeekWrapper,
    HeadingWrapper,
    ResetButtonWrapper,
    StatsItemTitle,
    StatsItemWrapper,
    StatsWrapper,
    Title
} from './styles';

const NothingFound = () => (
    <Column alignCenter justifyCenter height="324px" width="100%">
        <MarginWrapper marginBottom="26px">
            <Span uppercase color={black} fontSize="18px" fontWeight="bold" lineHeight="22px">
                No Data Found
            </Span>
        </MarginWrapper>
        <Span color={grey4} fontSize="13px" fontWeight="normal" lineHeight="22px">
            We don’t have any data to show here.
        </Span>
    </Column>
);

export const Financials = () => {
    const [dateFrom, setDateFrom] = useState<string>(defaultUtsFrom);
    const [dateTo, setDateTo] = useState<string>(defaultUtsTo);
    const [groupByWeek, setGroupByWeek] = useState<boolean>(false);
    const { items } = useStore(organizationsStores.turnoverStatistics);
    const organizationId = useStore(organizationsStores.organizationId);
    const { walletId } = useStore(organizationsStores.item);
    const walletBalance = useStore(walletStores.walletBalance);
    const loading = useStore(organizationsStores.loading);

    const memoizedRequestObject = useMemo(() => getRequestObject(organizationId, dateFrom, dateTo, groupByWeek), [
        dateFrom,
        dateTo,
        groupByWeek,
        organizationId
    ]);

    useEffect(() => {
        if (organizationId) {
            organizationsEffects.getItemById(organizationId);
        }
    }, [organizationId]);

    useEffect(() => {
        walletId && walletEffects.getItemById(walletId);
    }, [walletId]);

    useEffect(() => {
        organizationsEffects.getTurnoverStatisticsById(memoizedRequestObject);
    }, [memoizedRequestObject]);

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) => {
        setDateFrom(dateFrom);
        setDateTo(dateTo);
    };

    const onWeekCheckbox = () => {
        setGroupByWeek(!groupByWeek);
    };

    const onReset = () => {
        setDateFrom(defaultUtsFrom);
        setDateTo(defaultUtsTo);
        setGroupByWeek(false);
    };

    const xAxis = {
        type: 'category',
        axisTick: { show: false },
        axisLabel: { show: true, color: grey4 },
        axisLine: { show: false },
        boundaryGap: false,
        data: items?.length
            ? [
                  ...items.map(i => {
                      const date = typeof i?.date === 'string' ? i.date : '';
                      return dateToShortString(date);
                  })
              ]
            : []
    };

    const series = {
        type: 'line',
        labelLine: {
            show: true
        },
        smooth: true,
        symbolSize: 10,
        label: {
            show: true,
            position: 'top',
            color: primaryColor,
            fontSize: 12,
            lineHeight: 16
        },
        lineStyle: {
            color: '#3333FF',
            width: 4
        },
        itemStyle: {
            color: '#3333FF',
            borderWidth: 2
        },
        areaStyle: {
            ...areaCommonStyle,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0.2,
                        color: '#3333FF' // color at 0% position
                    },
                    {
                        offset: 1,
                        color: 'white' // color at 100% position
                    }
                ]
            }
        },
        data: items?.length ? items.map(i => getFixedNumber(i.value as number, numbersAfterDecimalPoint)) : []
    };

    return (
        <CampaignManagerLayout>
            <Column>
                <MarginWrapper marginBottom="24px">
                    <Title>Financials</Title>
                </MarginWrapper>
                <ChartWrapper alignCenter noWrap>
                    {items && items?.length !== 0 ? (
                        <ReactEcharts
                            option={{ series, ...graphicOption, xAxis }}
                            style={{ height: '506px', width: '100%' }}
                        />
                    ) : (
                        <NothingFound />
                    )}

                    <AbsoluteWrapper left="27px" top="24px">
                        <Column>
                            <MarginWrapper marginBottom="20px">
                                <Span color={black} fontSize="18px" fontWeight="normal" lineHeight="22px" opacity={0.5}>
                                    Current WOM Balance
                                </Span>
                            </MarginWrapper>
                            <Row alignCenter>
                                <CustomImg alt="wom" height="auto" src={womLogo} width="38px" />
                                <MarginWrapper marginLeft="16px">
                                    <Span fontSize="40px" lineHeight="47px">
                                        {walletBalance}
                                    </Span>
                                </MarginWrapper>
                            </Row>
                        </Column>
                    </AbsoluteWrapper>
                </ChartWrapper>
                <Section noWrap marginBottom="10px">
                    <Column marginRight="20px">
                        <MarginWrapper marginBottom="8px">
                            <Span
                                uppercase
                                color={grey4}
                                fontSize={titleFontSize}
                                fontWeight="400"
                                lineHeight={titleLineHeight}
                            >
                                Group by
                            </Span>
                        </MarginWrapper>
                        <GroupByWeekWrapper>
                            <Checkbox defaultValue={groupByWeek} label="Week" name="Week" onChange={onWeekCheckbox} />
                        </GroupByWeekWrapper>
                    </Column>
                    <Row noWrap width="612px">
                        <DatePickerBetween
                            hovered
                            backgroundColor={white}
                            borderRadius="38px"
                            defaultDateFrom={dateFrom}
                            defaultDateTo={dateTo}
                            height="40px"
                            title={['FROM', 'TO']}
                            titleFontSize={titleFontSize}
                            titleLineHeight={titleLineHeight}
                            titleType="outer"
                            width="296px"
                            onChange={onDatesBetweenChange}
                        />
                    </Row>
                    <ResetButtonWrapper>
                        <ResetButton onClick={onReset}>Reset</ResetButton>
                    </ResetButtonWrapper>
                </Section>
                <StatsWrapper>
                    {items && items?.length !== 0 ? (
                        <>
                            <HeadingWrapper>
                                <StyledRowNoShrink>
                                    <StatsItemTitle>Date</StatsItemTitle>
                                </StyledRowNoShrink>
                                <Row alignCenter justifyCenter margin="0 20px" width="50px">
                                    <StatsItemTitle>P/L</StatsItemTitle>
                                </Row>
                                <StyledRow>
                                    <MarginWrapper marginRight="50px">
                                        <StatsItemTitle>WOM</StatsItemTitle>
                                    </MarginWrapper>
                                </StyledRow>
                            </HeadingWrapper>

                            {!loading ? (
                                items?.map((it, i) => {
                                    const date = typeof it?.date === 'string' ? it.date : '';

                                    const dateTitle = dateToLongString(date);
                                    const endDateTitle = dateToLongString(addDaysToDate(date, 7));

                                    const profit = it.value && it.value !== 0 && it.value > 0;

                                    return (
                                        <MarginWrapper key={i} marginBottom="1px">
                                            <DropdownSection
                                                date={dateTitle}
                                                endDate={groupByWeek ? endDateTitle : undefined}
                                                profit={profit}
                                                wom={getFixedNumber(it.value as number, numbersAfterDecimalPoint)}
                                            >
                                                {it?.values ? (
                                                    it?.values?.map(({ value, code }, j) => (
                                                        <StatsItemWrapper key={j} justifyBetween>
                                                            <Span
                                                                fontSize={titleFontSizeStatsItem}
                                                                lineHeight={titleLineHeightStatsItem}
                                                                opacity={0.5}
                                                            >
                                                                {codeToString(code)}
                                                            </Span>{' '}
                                                            <Span
                                                                color={(value && value < 0 && red2) || defaultTextColor}
                                                                fontSize={titleFontSizeStatsItem}
                                                                lineHeight={titleLineHeightStatsItem}
                                                            >
                                                                {getFixedNumber(
                                                                    value as number,
                                                                    numbersAfterDecimalPoint
                                                                )}
                                                            </Span>
                                                        </StatsItemWrapper>
                                                    ))
                                                ) : (
                                                    <EmptyWrapper>
                                                        <Span uppercase fontSize="18px" lineHeight="22px" opacity={0.5}>
                                                            Empty
                                                        </Span>
                                                    </EmptyWrapper>
                                                )}
                                            </DropdownSection>
                                        </MarginWrapper>
                                    );
                                })
                            ) : (
                                <Loader size="large" />
                            )}
                        </>
                    ) : (
                        <NothingFound />
                    )}
                </StatsWrapper>
            </Column>
        </CampaignManagerLayout>
    );
};
