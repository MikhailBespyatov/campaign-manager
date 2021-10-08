import womLogo from 'assets/img/wom-token-logo.png';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { ResetButton } from 'components/common/buttons/ResetButton';
import { DropdownSection } from 'components/common/dropdowns/SectionDropdown';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentText } from 'components/Layouts/CampaignManagerLayout/styles';
import { MainLayout } from 'components/Layouts/MainLayout';
import { defaultTextColor } from 'constants/defaults';
import { routes } from 'constants/routes';
import { grey4, primaryColor, red2, white } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    areaCommonStyle,
    defaultUtsFrom,
    defaultUtsTo,
    getRequestObject,
    graphicOption
} from 'pages/CampaignManager/Financials/constants';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { modalEvents } from 'stores/modal';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { walletEffects, walletStores } from 'stores/wallet';
import { Background } from 'types';
import { addDaysToDate, codeToString, dateToLongString, dateToShortString } from 'utils/usefulFunctions';
import {
    ChartWrapper,
    EmptyWrapper,
    GroupByWeekWrapper,
    ResetButtonWrapper,
    StatsItemWrapper,
    StatsWrapper,
    Title
} from './styles';

interface Props extends Background {}

export const Financials = ({ background }: Props) => {
    const history = useHistory();
    const [dateFrom, setDateFrom] = useState<string>(defaultUtsFrom);
    const [dateTo, setDateTo] = useState<string>(defaultUtsTo);
    const [groupByWeek, setGroupByWeek] = useState<boolean>(false);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
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

    const goToCreateCampaign = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.create);
    const onWomBuy = () => modalEvents.openQexWidgetModal();
    const onWalletOpen = () => modalEvents.openWalletModal();

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
        data: items?.length ? items.map(i => i.value) : []
    };

    return (
        <MainLayout
            background={background}
            topBar={
                <TopBarWithButton
                    buttons={
                        <Row alignCenter marginBottom="0">
                            <Column marginRight="25px">
                                <ClickableWrapper width="fit-content" onClick={onWalletOpen}>
                                    <ContentText noWrap>MY WALLET</ContentText>
                                </ClickableWrapper>
                            </Column>
                            <Column marginRight="25px">
                                <ClickableWrapper width="fit-content" onClick={onWomBuy}>
                                    <ContentText noWrap>BUY WOM</ContentText>
                                </ClickableWrapper>
                            </Column>
                            <Column>
                                <ManualRoundedButton
                                    height="44px"
                                    minWidth="150px"
                                    width="150px"
                                    onClick={goToCreateCampaign}
                                >
                                    CREATE CAMPAIGN
                                </ManualRoundedButton>
                            </Column>
                        </Row>
                    }
                />
            }
        >
            <Column>
                <MarginWrapper marginBottom="24px">
                    <Title>Financials</Title>
                </MarginWrapper>
                <ChartWrapper alignCenter noWrap>
                    <ReactEcharts
                        option={{ series, ...graphicOption, xAxis }}
                        style={{ height: '506px', width: '100%' }}
                    />
                    <AbsoluteWrapper left="27px" top="61px">
                        <Row alignCenter>
                            <CustomImg alt="wom" height="auto" src={womLogo} width="38px" />
                            <MarginWrapper marginLeft="16px">
                                <Span fontSize="40px" lineHeight="49px">
                                    {walletBalance}
                                </Span>
                            </MarginWrapper>
                        </Row>
                    </AbsoluteWrapper>
                </ChartWrapper>
                <Section noWrap marginBottom="10px">
                    <Column marginRight="20px">
                        <MarginWrapper marginBottom="8px">
                            <Span uppercase color={grey4} fontSize="11px" fontWeight="400" lineHeight="13px">
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
                            titleFontSize="11px"
                            titleLineHeight="13px"
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
                    {!loading ? (
                        items?.map((it, i) => {
                            const date = typeof it?.date === 'string' ? it.date : '';

                            const dayTitle = dateToLongString(date);
                            const weekTitle = `${dayTitle} - ${dateToLongString(addDaysToDate(date, 7))}`;

                            const profit = it.value && it.value !== 0 && it.value > 0;

                            const title = groupByWeek ? weekTitle : dayTitle;

                            return (
                                <MarginWrapper key={i} marginBottom="24px">
                                    <DropdownSection profit={profit} title={title} wom={walletBalance}>
                                        {it?.values ? (
                                            it?.values?.map(({ value, code }, j) => (
                                                <StatsItemWrapper key={j} justifyBetween>
                                                    <Span fontSize="18px" lineHeight="22px" opacity={0.5}>
                                                        {codeToString(code)}
                                                    </Span>{' '}
                                                    <Span
                                                        color={(value && value < 0 && red2) || defaultTextColor}
                                                        fontSize="18px"
                                                        lineHeight="22px"
                                                    >
                                                        {value}
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
                </StatsWrapper>
            </Column>
        </MainLayout>
    );
};
