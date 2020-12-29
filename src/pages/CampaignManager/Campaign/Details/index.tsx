import { Block } from 'components/common/blocks/Block';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { RowHeaderRadioType } from 'components/common/inputs/RowHeaderRadio/types';
import { Select } from 'components/common/inputs/Select';
import { Loader } from 'components/common/Loader';
import { H1 } from 'components/common/typography/titles/H';
import { P } from 'components/common/typography/titles/P';
import { ContentWrapper } from 'components/grid/wrappers/ContentWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { CreateCampaignMiniCard } from 'components/Layouts/Cards/CreateCampaignMiniCard';
import { historicalSetsDefault, historicalSetsFilterValues } from 'constants/filters';
import { noContentMessage, noDataAvailableMessage } from 'constants/messages';
import { primaryPadding } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    areaCommonStyle,
    colors,
    graphicOption,
    growSpread,
    name1,
    name2,
    name3,
    name4,
    name5
} from 'pages/CampaignManager/Campaign/Details/constants';
import { Wrapper } from 'pages/CampaignManager/Campaign/Details/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { campaignsEffects, campaignsEvents, campaignsStores } from 'stores/campaigns';

interface ParamsProps {
    campaignId?: string;
}

export const Details = () => {
    const { campaignId } = useParams<ParamsProps>();
    const { sets, deltaStatistics } = useStore(campaignsStores.statisticsItems);
    const { title, schedule, contentIds } = useStore(campaignsStores.item);
    const campaignSelectedVideos = useStore(campaignContentStores.campaignSelectedVideos);
    const initialLoading = useStore(campaignContentStores.initialLoading);
    const loading = useStore(campaignsStores.loading);

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
            title: name1,
            quantity: summary?.viewCount?.toString() || '0'
        },
        {
            title: name2,
            quantity: summary?.likeCount?.toString() || '0',
            inBrackets: `(${summary?.likesPercentage || 0}%)`,
            ...growSpread(deltaStatistics?.likesDelta)
            // growType: deltaStatistics?.likesDelta && deltaStatistics.likesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.likesDelta ? deltaStatistics.likesDelta : 0
        },
        {
            title: name3,
            quantity: summary?.saveCount?.toString() || '0',
            inBrackets: `(${summary?.savesPercentage || 0}%)`,
            ...growSpread(deltaStatistics?.savesDelta)
            // growType: deltaStatistics?.savesDelta && deltaStatistics.savesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.savesDelta ? deltaStatistics.savesDelta : 0
        },
        {
            title: name4,
            quantity: summary?.commentCount?.toString() || '0',
            inBrackets: `(${summary?.commentsPercentage || 0}%)`
        },
        {
            title: name5,
            quantity: summary?.shareCount?.toString() || '0',
            inBrackets: `(${summary?.sharesPercentage || 0}%)`,
            ...growSpread(deltaStatistics?.sharesDelta)
            // growType: deltaStatistics?.sharesDelta && deltaStatistics.sharesDelta > 0 ? 'success' : 'error',
            // growNumber: deltaStatistics?.sharesDelta ? deltaStatistics.sharesDelta : 0
        }
    ];

    const [setsData, setSetsData] = useState(sets?.map(i => i?.items?.map(i => i.viewCount)));

    // const [yAxisData, setYAxisData] = useState(items.map(i => i.viewCount));
    // const [yAxisData1, setYAxisData1] = useState(items1.map(i => i.viewCount));
    // const [graphicColor, setGraphicColor] = useState(color1);
    const [graphicName, setGraphicName] = useState(name1);

    const series =
        sets?.map((_, i) => ({
            name: graphicName,
            type: 'line',
            smooth: true,
            stack: 'Buy',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                color: colors[i]
            },
            lineStyle: {
                color: colors[i]
            },
            areaStyle: {
                ...areaCommonStyle,
                color: colors[i]
            },
            data: setsData?.length ? setsData[i] : []
        })) || [];

    const xAxis = [
        {
            type: 'category',
            axisTick: { show: false },
            boundaryGap: false,
            data:
                sets?.length && sets[0]?.items
                    ? ['', ...sets[0].items.map(i => new Date(i?.dateUtc || '').getDate())]
                    : []
        }
    ];

    const onChange = (active: string) => {
        setGraphicName(active);
        switch (active) {
            case name1:
                // setYAxisData(items.map(i => i.viewCount));
                // setYAxisData1(items1.map(i => i.viewCount));
                // setGraphicColor(color1);
                setSetsData(sets?.map(i => i?.items?.map(i => i.viewCount)));
                break;
            case name2:
                // setYAxisData(items.map(i => i.likeCount));
                // setYAxisData1(items1.map(i => i.likeCount));
                // setGraphicColor(color2);
                setSetsData(sets?.map(i => i?.items?.map(i => i.likeCount)));
                break;
            case name3:
                // setYAxisData(items.map(i => i.saveCount));
                // setYAxisData1(items1.map(i => i.saveCount));
                // setGraphicColor(color3);
                setSetsData(sets?.map(i => i?.items?.map(i => i.saveCount)));
                break;
            case name4:
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
            historicalSets: Number(value)
        });
        campaignsEvents.updateStatisticsValues({
            historicalSets: Number(value)
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
                historicalSets: Number(historicalSetsDefault)
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
            <ContentWrapper>
                {loading ? (
                    <Section>
                        <Loader />
                    </Section>
                ) : (
                    <>
                        <Section>
                            <H1>Campaign Name: {title}</H1>
                        </Section>
                        <Section>
                            <BorderBlock>
                                <Section>
                                    {utcToStart && utcToEnd && (
                                        <DatePickerBetween
                                            defaultDateFrom={utcToStart}
                                            defaultDateTo={utcToEnd}
                                            onChange={onDatesBetweenChange}
                                        />
                                    )}
                                </Section>
                                <Section alignCenter noWrap marginBottom={primaryPadding}>
                                    <P noWrap>Historical Sets: </P>
                                    <MarginWrapper marginLeft="auto">
                                        <Select
                                            defaultActive={historicalSetsDefault}
                                            values={historicalSetsFilterValues}
                                            width="80px"
                                            onChange={onHistoricalSetsChange}
                                        />
                                    </MarginWrapper>
                                </Section>
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
                            </BorderBlock>

                            <Column>
                                <Block title="Selected videos">
                                    <RowBlockCell padding={primaryPadding}>
                                        <Row marginBottom="0">
                                            {campaignSelectedVideos?.items?.map(item => (
                                                <CreateCampaignMiniCard
                                                    key={item.womContentId}
                                                    marginBottom="0"
                                                    {...item}
                                                />
                                            )) || noContentMessage}
                                        </Row>
                                    </RowBlockCell>
                                </Block>
                            </Column>
                        </Section>
                    </>
                )}

                {initialLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Section marginBottom="0">
                            <RowHeaderRadio values={radioArray} onChange={onChange} />
                        </Section>
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
                                    {sets?.length && sets[0]?.items?.length ? (
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
        </CampaignManagerLayout>
    );
};
