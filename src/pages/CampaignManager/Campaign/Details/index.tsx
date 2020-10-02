import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { Hr } from 'components/common/dividers/Hr';
import { BooleanCircleCheckbox } from 'components/common/inputs/BooleanCircleCheckbox';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { RowHeaderRadioType } from 'components/common/inputs/RowHeaderRadio/types';
import { Select } from 'components/common/inputs/Select';
import { Switch } from 'components/common/inputs/Switch';
import { Loader } from 'components/common/Loader';
import { GraphicBlockSpan } from 'components/common/typography/special';
import { H1 } from 'components/common/typography/titles/H';
import { P } from 'components/common/typography/titles/P';
import { ContentWrapper } from 'components/grid/wrappers/ContentWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { primaryPadding, secondaryPadding } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    areaCommonStyle,
    color1,
    color2,
    color3,
    color4,
    color5,
    graphicOption,
    growSpread,
    name1,
    name2,
    name3,
    name4,
    name5,
    testSelectArray
} from 'pages/CampaignManager/Campaign/Details/constants';
import { Wrapper } from 'pages/CampaignManager/Campaign/Details/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { parseMonthDate } from 'utils/usefulFunctions';

interface ParamsProps {
    campaignId?: string;
}

export const Details = () => {
    const { campaignId } = useParams<ParamsProps>();
    const { sets, deltaStatistics } = useStore(campaignsStores.statisticsItems);
    const { title, schedule } = useStore(campaignsStores.item);
    const initialLoading = useStore(loadingStores.initialLoading);
    const loading = useStore(loadingStores.loading);

    const utcStarted = schedule?.utcStarted || '';
    const utcEnded = schedule?.utcEnded || '';

    const items = useMemo(() => (sets?.length && sets[0].items?.length ? sets[0].items.reverse() : []), [sets]);
    const items1 = useMemo(() => (sets?.length && sets[1].items?.length ? sets[1].items.reverse() : []), [sets]);
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

    const [yAxisData, setYAxisData] = useState(items.map(i => i.shareCount));
    const [yAxisData1, setYAxisData1] = useState(items1.map(i => i.shareCount));
    const [graphicColor, setGraphicColor] = useState(color1);
    const [graphicName, setGraphicName] = useState(name1);

    const series = [
        {
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
                color: graphicColor
            },
            lineStyle: {
                color: graphicColor
            },
            areaStyle: {
                ...areaCommonStyle,
                opacity: 0.1,
                color: graphicColor
            },
            data: yAxisData1
        },
        {
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
                color: 'green'
            },
            lineStyle: {
                color: 'green'
            },
            areaStyle: {
                ...areaCommonStyle,
                opacity: 0.1,
                color: 'green'
            },
            data: yAxisData
        }
    ];

    const xAxis = [
        {
            type: 'category',
            axisTick: { show: false },
            boundaryGap: false,
            data: ['', ...items.map(i => parseMonthDate(new Date(i?.dateUtc || '')))]
        }
    ];

    const onChange = (active: string) => {
        setGraphicName(active);
        switch (active) {
            case name1:
                setYAxisData(items.map(i => i.viewCount));
                setYAxisData1(items1.map(i => i.viewCount));
                setGraphicColor(color1);
                break;
            case name2:
                setYAxisData(items.map(i => i.likeCount));
                setYAxisData1(items1.map(i => i.likeCount));
                setGraphicColor(color2);
                break;
            case name3:
                setYAxisData(items.map(i => i.saveCount));
                setYAxisData1(items1.map(i => i.saveCount));
                setGraphicColor(color3);
                break;
            case name4:
                setYAxisData(items.map(i => i.commentCount));
                setYAxisData1(items1.map(i => i.commentCount));
                setGraphicColor(color4);
                break;
            default:
                setYAxisData(items.map(i => i.shareCount));
                setYAxisData1(items1.map(i => i.shareCount));
                setGraphicColor(color5);
        }
    };

    useEffect(() => {
        campaignId && campaignsEffects.getItemById(campaignId);
    }, [campaignId]);

    useEffect(() => {
        utcStarted &&
            utcEnded &&
            campaignsEffects.getStatisticsItems({
                returnQueryCount: false,
                campaignId: '5dfb9a1669819a1e9a77fb30',
                dateFrom: '2020-09-01T00:00:00Z',
                dateTo: '2020-10-01T00:00:00Z',
                historicalSets: 1
            });
    }, [utcStarted, utcEnded, campaignId]);

    useEffect(() => {
        items?.length && setYAxisData(items.map(i => i.viewCount));
        items1?.length && setYAxisData1(items1.map(i => i.viewCount));
    }, [items, items1]);

    return (
        <CampaignManagerLayout>
            <ContentWrapper>
                <Section>
                    {loading ? (
                        <Loader />
                    ) : (
                        <Column>
                            <H1>Campaign id: {campaignId}</H1>
                            <H1>Campaign Name: {title}</H1>
                        </Column>
                    )}
                </Section>
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
                                    <Column marginRight="25px">
                                        <ReactEcharts
                                            option={{ ...graphicOption, xAxis: xAxis, series: series }}
                                            style={{ height: '516px', width: '1000px' }}
                                        />
                                    </Column>
                                    <BorderBlock>
                                        <Section>
                                            <DatePickerBetween
                                                defaultDateFrom={utcStarted || new Date().toISOString()}
                                                defaultDateTo={utcEnded || new Date().toISOString()}
                                            />
                                        </Section>
                                        <Section alignCenter noWrap marginBottom={primaryPadding}>
                                            <P noWrap>Timeline wiew</P>
                                            <MarginWrapper marginLeft="auto">
                                                <Select values={testSelectArray} width="127px">
                                                    31 days
                                                </Select>
                                            </MarginWrapper>
                                        </Section>
                                        <Section alignCenter noWrap marginBottom={primaryPadding}>
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
                                        </Section>
                                    </BorderBlock>
                                </Section>
                            </Column>
                        </Wrapper>
                    </>
                )}
            </ContentWrapper>
        </CampaignManagerLayout>
    );
};
