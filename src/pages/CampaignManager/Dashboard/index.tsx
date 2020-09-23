import { Hr } from 'components/common/dividers/Hr';
import { Summary } from 'components/common/features/Summary';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { Select } from 'components/common/inputs/Select';
import { Switch } from 'components/common/inputs/Switch';
import { P } from 'components/common/TextComponents/P';
import { Span } from 'components/common/TextComponents/Span';
import { ContentWrapper } from 'components/common/wrappers/ContentWrapper';
import { Column, Row, Section } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { UniversalWrapper } from 'components/common/wrappers/UniversalWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { black, primaryColor, secondaryColor } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import {
    buyColor,
    clickColor,
    engageColor,
    graphicBlockBorder,
    graphicOption,
    previewColor,
    tableUniversalWrapperBorder,
    tableUniversalWrapperPadding,
    testHeaderRadioArray,
    testSelectArray,
    viewColor
} from 'pages/CampaignManager/Dashboard/constants';
import React, { FC } from 'react';
import { Background } from 'types';

const ColorPromptLine = ({ background }: Background) => (
    <UniversalWrapper background={background || black} height="2px" marginRight="10px" width="12px" />
);

const TableHeaderSpan: FC = ({ children }) => (
    <Column marginRight="15px">
        <Span color={primaryColor} fontSize="8px" lineHeight="10px">
            {children}
        </Span>
    </Column>
);

const GraphicBlockSpan: FC = ({ children }) => (
    <Span color={secondaryColor} fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);

export const Dashboard = () => (
    <CampaignManagerLayout>
        <Section>
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="25" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Budget" title="20,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Spent" title="12,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign spend per day" title="1,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Budget" title="10,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Duration" title="12d" />
        </Section>
        <ContentWrapper>
            <Section marginBottom="0">
                <RowHeaderRadio values={testHeaderRadioArray} />
            </Section>
            <UniversalWrapper
                border={tableUniversalWrapperBorder}
                borderTop="none"
                padding={tableUniversalWrapperPadding}
                width="100%"
            >
                {/* <MarginWrapper margin="auto">
                    <Column justifyCenter>
                        <Section alignCenter noWrap>
                            <Column marginRight="16px">
                                <CustomImg height={ballDiameter} src={ballPreviewImg} width={ballDiameter} />
                            </Column>
                            <Column>
                                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                    Preview
                                </Span>
                            </Column>
                        </Section>
                        <Section alignCenter noWrap>
                            <Column marginRight="16px">
                                <CustomImg height={ballDiameter} src={ballViewImg} width={ballDiameter} />
                            </Column>
                            <Column>
                                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                    View
                                </Span>
                            </Column>
                        </Section>
                        <Section alignCenter noWrap>
                            <Column marginRight="16px">
                                <CustomImg height={ballDiameter} src={ballEngageImg} width={ballDiameter} />
                            </Column>
                            <Column>
                                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                    Engage
                                </Span>
                            </Column>
                        </Section>
                        <Section alignCenter noWrap>
                            <Column marginRight="16px">
                                <CustomImg height={ballDiameter} src={ballClickImg} width={ballDiameter} />
                            </Column>
                            <Column>
                                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                    Click
                                </Span>
                            </Column>
                        </Section>
                        <Section alignCenter noWrap>
                            <Column marginRight="16px">
                                <CustomImg height={ballDiameter} src={ballBuyImg} width={ballDiameter} />
                            </Column>
                            <Column>
                                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                    Buy
                                </Span>
                            </Column>
                        </Section>
                    </Column>
                </MarginWrapper> */}
                <Column width="100%">
                    <Row alignCenter marginBottom="30px">
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
                    </Row>
                    <Section alignCenter noWrap>
                        <ReactEcharts option={graphicOption} style={{ height: '516px', width: '100%' }} />
                        <UniversalWrapper
                            border={graphicBlockBorder}
                            borderRadius="10px"
                            direction="column"
                            marginRight="75px"
                            padding="20px"
                        >
                            <Section alignCenter noWrap marginBottom="20px">
                                <P>Timeline wiew</P>
                                <MarginWrapper marginLeft="auto">
                                    <Select values={testSelectArray}>31 days</Select>
                                </MarginWrapper>
                            </Section>
                            <Section alignCenter noWrap marginBottom="20px">
                                <P>Show us combined chart</P>
                                <Switch />
                            </Section>
                            <Hr />
                            <Section alignCenter noWrap marginBottom="20px">
                                <Column marginRight="20px" width="50%">
                                    <GraphicBlockSpan>Timeline view</GraphicBlockSpan>
                                </Column>
                            </Section>
                        </UniversalWrapper>
                    </Section>
                </Column>
            </UniversalWrapper>
        </ContentWrapper>
    </CampaignManagerLayout>
);
