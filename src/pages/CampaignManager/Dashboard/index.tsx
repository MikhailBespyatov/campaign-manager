import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { Hr } from 'components/common/dividers/Hr';
import { ColorPromptLine } from 'components/common/graphicComponents/ColorPromptLine';
import { BooleanCircleCheckbox } from 'components/common/inputs/BooleanCircleCheckbox';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { Select } from 'components/common/inputs/Select';
import { Switch } from 'components/common/inputs/Switch';
import { GraphicBlockSpan, TableHeaderSpan } from 'components/common/typography/special';
import { P } from 'components/common/typography/titles/P';
import { ContentWrapper } from 'components/grid/wrappers/ContentWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { UniversalWrapper } from 'components/grid/wrappers/UniversalWrapperDeprecated';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { primaryPadding, secondaryPadding } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import {
    buyColor,
    clickColor,
    engageColor,
    graphicOption,
    previewColor,
    tableUniversalWrapperBorder,
    tableUniversalWrapperPadding,
    testHeaderRadioArray,
    testSelectArray,
    viewColor
} from 'pages/CampaignManager/Dashboard/constants';
import React from 'react';

// const ColorPromptLine = ({ background }: Background) => (
//     <UniversalWrapperDeprecated background={background || black} height="2px" marginRight="10px" width="12px" />
// );

export const Dashboard = () => (
    <CampaignManagerLayout>
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
                    <Row alignCenter marginBottom="0">
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
                        <ReactEcharts option={graphicOption} style={{ height: '516px', width: '755px' }} />
                        {/* <UniversalWrapperDeprecated
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
                                    <Select values={testSelectArray} width="127px" />
                                </MarginWrapper>
                            </Section>
                            <Section alignCenter noWrap marginBottom={primaryPadding}>
                                <Column marginRight="40px">
                                    <P noWrap>Show us combined chart</P>
                                </Column>
                                <Switch />
                            </Section>
                            <Hr />
                            <Section alignCenter noWrap marginBottom={primaryPadding} marginTop={primaryPadding}>
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
            </UniversalWrapper>
        </ContentWrapper>
    </CampaignManagerLayout>
);
