import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { CampaignItem } from 'components/common/features/CampaignItem';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { HistoricalSetSelect } from 'components/common/inputs/HistoricalSetSelect';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { RowHeaderRadioType } from 'components/common/inputs/RowHeaderRadio/types';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { CampaignStatusLayout } from 'components/Layouts/CampaignStatusLayout';
import { SelectedVideoCard } from 'components/Layouts/Cards/SelectedVideoCard';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { historicalSetsDefault, historicalSetsFilterValues } from 'constants/filters';
import { noDataAvailableMessage } from 'constants/messages';
import { grey4, primaryColor, primaryMargin, tertiaryMargin } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    areaCommonStyle,
    borderBlockHorizontalPadding,
    borderBlockVerticalPadding,
    borderBlockWidth,
    colors,
    dateBlockHeight,
    engagementName1,
    engagementName2,
    engagementName3,
    engagementName4,
    engagementName5,
    graphicOption,
    growSpread,
    postfixsLegendWeek
} from 'pages/CampaignManager/Campaign/Details/constants';
import { Wrapper } from 'pages/CampaignManager/Campaign/Details/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { campaignsEffects, campaignsEvents, campaignsStores } from 'stores/campaigns';
import { getCampaignStatus, getOrganizationId } from 'utils/usefulFunctions';

interface ParamsProps {
    campaignId?: string;
}

export const Details = () => {
    const { campaignId } = useParams<ParamsProps>();
    const { sets } = useStore(campaignsStores.statisticsItems);
    const { schedule, contentIds } = useStore(campaignsStores.item);
    const item = useStore(campaignsStores.item);
    const status = getCampaignStatus(item);
    const campaignSelectedVideos = useStore(campaignContentStores.campaignSelectedVideos);
    const initialLoading = useStore(campaignContentStores.initialLoading);
    const loading = useStore(campaignsStores.loading);
    const uriPrimary = campaignSelectedVideos.items?.[0].uriPrimary || '';
    const defaultOrganizationId = getOrganizationId();

    useEffect(() => {
        defaultOrganizationId &&
            campaignsEffects.getItems({ organizationId: defaultOrganizationId, limit: 10, pageIndex: 0 });
    }, [defaultOrganizationId]);

    // let isFirstDatesLoaded = true;
    //console.log(isFirstDatesLoaded);

    // const utcToStart = schedule?.utcStarted || '';
    // const utcToEnd = schedule?.utcEnded || '';

    const utcToStart = useMemo(() => schedule?.utcToStart || '', [schedule]);
    const utcToEnd = useMemo(() => schedule?.utcToEnd || '', [schedule]);

    //console.log(utcToStart, utcToEnd);

    // const items = useMemo(() => (sets?.length && sets[0].items?.length ? sets[0].items.reverse() : []), [sets]);
    // const items1 = useMemo(() => (sets?.length && sets[1].items?.length ? sets[1].items.reverse() : []), [sets]);
    const summary = useMemo(() => (sets?.length && sets[0].summary ? sets[0].summary : {}), [sets]);

    const radioArray: RowHeaderRadioType[] = [
        {
            title: engagementName1,
            quantity: summary?.viewCount?.toString() || '0'
        },
        {
            title: engagementName2,
            quantity: summary?.likeCount?.toString() || '0',
            // inBrackets: `${summary?.likesPercentage || 0}%`,
            ...growSpread(summary?.likesPercentage || 0)
            // growType: deltaStatistics?.likesDelta && deltaStatistics.likesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.likesDelta ? deltaStatistics.likesDelta : 0
        },
        {
            title: engagementName3,
            quantity: summary?.saveCount?.toString() || '0',
            // inBrackets: `${summary?.savesPercentage || 0}%`,
            ...growSpread(summary?.savesPercentage || 0)
            // growType: deltaStatistics?.savesDelta && deltaStatistics.savesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.savesDelta ? deltaStatistics.savesDelta : 0
        },
        {
            title: engagementName4,
            quantity: summary?.commentCount?.toString() || '0',
            // inBrackets: `${summary?.commentsPercentage || 0}%`,
            ...growSpread(summary?.commentsPercentage || 0)
        },
        {
            title: engagementName5,
            quantity: summary?.shareCount?.toString() || '0',
            // inBrackets: `${summary?.sharesPercentage || 0}%`,
            ...growSpread(summary?.sharesPercentage || 0)
            // growType: deltaStatistics?.sharesDelta && deltaStatistics.sharesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.sharesDelta ? deltaStatistics.sharesDelta : 0
        }
    ];

    const [setsData, setSetsData] = useState(sets?.map(i => i?.items?.map(i => i.viewCount)));

    // const [yAxisData, setYAxisData] = useState(items.map(i => i.viewCount));
    // const [yAxisData1, setYAxisData1] = useState(items1.map(i => i.viewCount));
    // const [graphicColor, setGraphicColor] = useState(color1);
    const [graphicName, setGraphicName] = useState(engagementName1);

    const series =
        sets?.map((_, i) => ({
            name: `${graphicName} ${postfixsLegendWeek[i]}`,
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
            itemStyle: {
                color: colors[i],
                borderWidth: 2
            },
            lineStyle: {
                color: colors[i]
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
                            color: colors[i] // color at 0% position
                        },
                        {
                            offset: 1,
                            color: 'white' // color at 100% position
                        }
                    ]
                }
            },
            data: setsData?.length ? setsData[i] : []
        })) || [];

    const xAxis = [
        {
            type: 'category',
            axisTick: { show: false },
            axisLabel: { show: true, color: grey4 },
            axisLine: { show: false },
            boundaryGap: false,
            data:
                sets?.length && sets[0]?.items
                    ? [
                          ...sets[0].items.map(
                              i =>
                                  new Date(i?.dateUtc || '').getDate() +
                                  ' ' +
                                  new Date(i?.dateUtc || '').toLocaleDateString('en-US', {
                                      month: 'short'
                                  })
                          )
                      ]
                    : []
        }
    ];

    const onChange = (active: string) => {
        setGraphicName(active);
        switch (active) {
            case engagementName1:
                // setYAxisData(items.map(i => i.viewCount));
                // setYAxisData1(items1.map(i => i.viewCount));
                // setGraphicColor(color1);
                setSetsData(sets?.map(i => i?.items?.map(i => i.viewCount)));
                break;
            case engagementName2:
                // setYAxisData(items.map(i => i.likeCount));
                // setYAxisData1(items1.map(i => i.likeCount));
                // setGraphicColor(color2);
                setSetsData(sets?.map(i => i?.items?.map(i => i.likeCount)));
                break;
            case engagementName3:
                // setYAxisData(items.map(i => i.saveCount));
                // setYAxisData1(items1.map(i => i.saveCount));
                // setGraphicColor(color3);
                setSetsData(sets?.map(i => i?.items?.map(i => i.saveCount)));
                break;
            case engagementName4:
                // setYAxisData(items.map(i => i.commentCount));
                // setYAxisData1(items1.map(i => i.commentCount));
                // setGraphicColor(color4);
                setSetsData(sets?.map(i => i?.items?.map(i => i.commentCount)));
                break;
            default:
                // setYAxisData(items.map(i => i.shareCount));
                // setYAxisData1(items1.map(i => i.shareCount));
                // setGraphicColor(color5);
                setSetsData(sets?.map(i => i?.items?.map(i => i.shareCount)));
        }
    };

    const onHistoricalSetsChange = (value: string) => {
        // graphic do not update series lines quantity after first query
        // so i need a double query, do not know how resolve this problem so far
        campaignsEvents.updateStatisticsValues({
            historicalSets: historicalSetsFilterValues.findIndex(historicalValue => historicalValue === value)
        });
        campaignsEvents.updateStatisticsValues({
            historicalSets: historicalSetsFilterValues.findIndex(historicalValue => historicalValue === value)
        });
    };

    const onDatesBetweenChange = (dateFrom: string, dateTo: string) =>
        campaignsEvents.updateStatisticsValues({
            dateFrom: dateFrom,
            dateTo: dateTo
        });

    useEffect(() => {
        campaignId && campaignsEffects.getItemById(campaignId);
    }, [campaignId]);

    useEffect(() => {
        // utcToStart && utcToEnd && campaignId && console.log('ye');
        utcToStart &&
            utcToEnd &&
            campaignId &&
            campaignsEvents.updateStatisticsValues({
                returnQueryCount: false,
                campaignId: campaignId,
                dateFrom: utcToStart,
                dateTo: utcToEnd,
                historicalSets: historicalSetsFilterValues.findIndex(
                    historicalValue => historicalValue === historicalSetsDefault
                )
            });
    }, [utcToStart, utcToEnd, campaignId]);

    useEffect(() => {
        // items?.length && setYAxisData(items.map(i => i.viewCount));
        // items1?.length && setYAxisData1(items1.map(i => i.viewCount));
        setSetsData(sets?.map(i => i?.items?.map(i => i.viewCount)));
    }, [sets]);

    useEffect(() => {
        contentIds?.length && campaignContentEffects.getSelectedVideos(contentIds);
    }, [contentIds]);

    return (
        <CampaignManagerLayout>
            <CampaignStatusLayout>
                <ContentWrapper marginBottom="45px" padding="16px 20px" width="100%">
                    <MarginWrapper marginBottom={tertiaryMargin}>
                        <CampaignItem isDetailsPage backgroundImg={uriPrimary} status={status} {...item} />
                    </MarginWrapper>
                    <Section marginBottom="20px">
                        {/* <MarginWrapper marginRight={secondaryMargin}>
                            <ManualRoundedButton
                                borderRadius={tertiaryBorderRadius}
                                fontWeight="700"
                                height={primaryButtonDiameter}
                                minWidth="148px"
                                onClick={Noop}
                            >
                                EDIT CAMPAIGN
                            </ManualRoundedButton>
                        </MarginWrapper>
                        <MarginWrapper marginRight={secondaryMargin}>
                            <ManualRoundedButton
                                background={lightPink}
                                borderRadius={tertiaryBorderRadius}
                                fontWeight="700"
                                height={primaryButtonDiameter}
                                mainColor={red}
                                minWidth="148px"
                                onClick={Noop}
                            >
                                REMOVE CAMPAIGN
                            </ManualRoundedButton>
                        </MarginWrapper> */}
                    </Section>

                    <ContentWrapper>
                        {loading ? (
                            <Section>
                                <Loader />
                            </Section>
                        ) : (
                            <>
                                <Column marginBottom={!!campaignSelectedVideos?.items?.length ? '5px' : '0'}>
                                    <MarginWrapper marginBottom={primaryMargin}>
                                        <Span
                                            fontSize={defaultFontSize}
                                            fontWeight={defaultFontWeight}
                                            lineHeight="17px"
                                        >
                                            {`(${campaignSelectedVideos?.items?.length || '0'}) Videos`}
                                        </Span>
                                    </MarginWrapper>
                                    <Row marginBottom="0">
                                        {/*{campaignSelectedVideos?.items?.map(item => (*/}
                                        {/*    <CreateCampaignMiniCard*/}
                                        {/*        key={item.womContentId}*/}
                                        {/*        marginBottom="0"*/}
                                        {/*        {...item}*/}
                                        {/*    />*/}
                                        {/*)) || <></>}*/}
                                        {campaignSelectedVideos?.items?.map(({ womContentId, uriPrimary }) => (
                                            <MarginWrapper
                                                key={womContentId}
                                                marginBottom="20px"
                                                marginRight={primaryMargin}
                                            >
                                                <SelectedVideoCard
                                                    removeDeleteImg
                                                    id={womContentId}
                                                    uriPrimary={uriPrimary}
                                                />
                                            </MarginWrapper>
                                        )) || null}
                                    </Row>
                                </Column>
                                <Section>
                                    <Row>
                                        {utcToStart && utcToEnd && (
                                            <DatePickerBetween
                                                defaultDateFrom={utcToStart}
                                                defaultDateTo={utcToEnd}
                                                height={dateBlockHeight}
                                                //marginBottom={primaryPadding}
                                                width={borderBlockWidth}
                                                onChange={onDatesBetweenChange}
                                            />
                                        )}
                                    </Row>
                                    <BorderBlock
                                        height={dateBlockHeight}
                                        paddingBottom={borderBlockVerticalPadding}
                                        paddingRight={borderBlockHorizontalPadding}
                                        width={borderBlockWidth}
                                    >
                                        <Column noWrap /*marginBottom={primaryPadding}*/>
                                            <Row marginBottom="2px">
                                                <Span fontSize="12px" fontWeight="400" lineHeight="15px">
                                                    Compare Range
                                                </Span>
                                                {/* <MarginWrapper marginLeft="10px">
                                                    <InfoPopover
                                                        backgroundColor={popoverBackground}
                                                        popoverText="Some additional information"
                                                        width="250px"
                                                    >
                                                        <InfoImg />
                                                    </InfoPopover>
                                                </MarginWrapper> */}
                                            </Row>

                                            <HistoricalSetSelect
                                                withoutBorder
                                                defaultActive={historicalSetsDefault}
                                                paddingRight="0px"
                                                values={historicalSetsFilterValues}
                                                width={borderBlockWidth}
                                                onChange={onHistoricalSetsChange}
                                            />
                                        </Column>
                                    </BorderBlock>
                                    {/* <Section alignCenter noWrap marginBottom={primaryPadding}>
                                            <Column marginRight="40px">
                                                <P noWrap>Show us combined chart</P>
                                            </Column>
                                            <Switch />
                                        </Section>
                                        <Hr />
                                        <Section
                                            alignCenter
                                            noWrap
                                            marginBottom={primaryPadding}
                                            marginTop={primaryPadding}
                                        >
                                            <Column marginRight={primaryPadding} width="50%">
                                                <Row alignCenter noWrap marginBottom={primaryPadding}>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                                <Row alignCenter noWrap marginBottom={primaryPadding}>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                                <Row alignCenter noWrap>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight={primaryPadding} width="50%">
                                                <Row alignCenter noWrap marginBottom={primaryPadding}>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                                <Row alignCenter noWrap marginBottom={primaryPadding}>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                                <Row alignCenter noWrap>
                                                    <Column marginRight={secondaryPadding}>
                                                        <BooleanCircleCheckbox name="name" />
                                                    </Column>
                                                    <GraphicBlockSpan>New shoes</GraphicBlockSpan>
                                                </Row>
                                            </Column>
                                        </Section> */}
                                </Section>
                            </>
                        )}

                        {initialLoading ? (
                            <Loader />
                        ) : (
                            <>
                                <MarginWrapper marginBottom="13px">
                                    <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                                        Overall Statistics
                                    </Span>
                                </MarginWrapper>

                                <RowHeaderRadio values={radioArray} onChange={onChange} />

                                <Wrapper>
                                    <Column width="100%">
                                        {/* <Row alignCenter marginBottom="0">
                                    <ColorPromptLine background={previewColor} />
                                    <TableHeaderSpan>New Shoes</TableHeaderSpan>
                                    <ColorPromptLine background={viewColor} />
                                    <TableHeaderSpan>Brand Only</TableHeaderSpan>
                                    <ColorPromptLine background={engageColor} />
                                    <TableHeaderSpan>Test Campaign</TableHeaderSpan>
                                    <ColorPromptLine background={clickColor} />
                                    <TableHeaderSpan>Zalando Push</TableHeaderSpan>
                                    <ColorPromptLine background={buyColor} />
                                    <TableHeaderSpan>YEAY General</TableHeaderSpan>
                                </Row> */}
                                        <Section alignCenter noWrap>
                                            {/* <Column marginRight="25px"> */}
                                            {sets?.[0]?.items?.length ? (
                                                <ReactEcharts
                                                    option={{ series: series, ...graphicOption, xAxis: xAxis }}
                                                    style={{ height: '516px', width: '100%' }}
                                                />
                                            ) : (
                                                noDataAvailableMessage
                                            )}
                                            {/* </Column> */}
                                        </Section>
                                    </Column>
                                </Wrapper>
                            </>
                        )}
                    </ContentWrapper>
                </ContentWrapper>
            </CampaignStatusLayout>
        </CampaignManagerLayout>
    );
};
