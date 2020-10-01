import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { Hr } from 'components/common/dividers/Hr';
import { BooleanCircleCheckbox } from 'components/common/inputs/BooleanCircleCheckbox';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
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
    name1,
    name2,
    name3,
    name4,
    name5,
    testSelectArray
} from 'pages/CampaignManager/Campaign/Details/constants';
import { Wrapper } from 'pages/CampaignManager/Campaign/Details/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { RowHeaderRadioType } from 'types';

// const ColorPromptLine = ({ background }: Background) => (
//     <UniversalWrapper background={background || black} height="2px" marginRight="10px" width="12px" />
// );

interface ParamsProps {
    campaignId?: string;
}

export const Details = () => {
    const { campaignId } = useParams<ParamsProps>();
    const { sets } = useStore(campaignsStores.statisticsItems);
    const loading = useStore(loadingStores.initialLoading);

    const items = sets?.length && sets[0].items?.length ? sets[0].items : [];
    const summary = sets?.length && sets[0].summary ? sets[0].summary : {};

    const radioArray: RowHeaderRadioType[] = [
        {
            title: name1,
            quantity: summary?.viewCount?.toString() || '0',
            inBrackets: `(${summary?.viewsD1Percentage || 0}%)`,
            growType: 'success',
            growNumber: 0
        },
        {
            title: name2,
            quantity: summary?.likeCount?.toString() || '0',
            inBrackets: `(${summary?.likesPercentage || 0}%)`,
            growType: 'success',
            growNumber: 0
        },
        {
            title: name3,
            quantity: summary?.saveCount?.toString() || '0',
            inBrackets: `(${summary?.savesPercentage || 0}%)`,
            growType: 'success',
            growNumber: 0
        },
        {
            title: name4,
            quantity: summary?.commentCount?.toString() || '0',
            inBrackets: `(${summary?.commentsPercentage || 0}%)`,
            growType: 'success',
            growNumber: 0
        },
        {
            title: name5,
            quantity: summary?.shareCount?.toString() || '0',
            inBrackets: `(${summary?.sharesPercentage || 0}%)`,
            growType: 'success',
            growNumber: 0
        }
    ];

    const [yAxisData, setYAxisData] = useState(items.map(i => i.shareCount));
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
                color: graphicColor
            },
            data: yAxisData
        }
    ];

    const xAxis = [
        {
            type: 'category',
            axisTick: { show: false },
            boundaryGap: false,
            data: ['', ...items.map(i => new Date(i?.dateUtc || '').getDate())]
        }
    ];

    const onChange = (active: string) => {
        setGraphicName(active);
        switch (active) {
            case name1:
                setYAxisData(items.map(i => i.viewCount));
                setGraphicColor(color1);
                break;
            case name2:
                setYAxisData(items.map(i => i.likeCount));
                setGraphicColor(color2);
                break;
            case name3:
                setYAxisData(items.map(i => i.saveCount));
                setGraphicColor(color3);
                break;
            case name4:
                setYAxisData(items.map(i => i.commentCount));
                setGraphicColor(color4);
                break;
            default:
                setYAxisData(items.map(i => i.shareCount));
                setGraphicColor(color5);
        }
    };

    useEffect(() => {
        campaignId &&
            campaignsEffects.getStatisticsItems({
                returnQueryCount: false,
                campaignId: campaignId,
                dateFrom: '2020-08-01T00:00:00Z',
                dateTo: '2020-09-01T00:00:00Z',
                historicalSets: 0
            });
    }, [campaignId]);

    useEffect(() => {
        items?.length && setYAxisData(items.map(i => i.viewCount));
    }, [items]);

    return (
        <CampaignManagerLayout>
            <ContentWrapper>
                <Section>
                    <H1>Campaign id: {campaignId}</H1>
                </Section>
                {loading ? (
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
                                    <Column marginRight="75px">
                                        <ReactEcharts
                                            option={{ ...graphicOption, xAxis: xAxis, series: series }}
                                            style={{ height: '516px', width: '755px' }}
                                        />
                                    </Column>
                                    {/* <UniversalWrapper
                            border={graphicBlockBorder}
                            borderRadius={secondaryBorderRadius}
                            direction="column"
                            marginLeft="75px"
                            padding={primaryPadding}
                        > */}
                                    <BorderBlock>
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
