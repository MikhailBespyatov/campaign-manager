import ballBuyImg from 'assets/img/ball_buy.svg';
import ballClickImg from 'assets/img/ball_click.svg';
import ballEngageImg from 'assets/img/ball_engage.svg';
import ballPreviewImg from 'assets/img/ball_preview.svg';
import ballViewImg from 'assets/img/ball_view.svg';
import { Hr } from 'components/common/dividers/Hr';
import { Summary } from 'components/common/features/Summary';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { RowHeaderRadio } from 'components/common/inputs/RowHeaderRadio';
import { RowRadio } from 'components/common/inputs/RowRadio';
import { DropDownMenuTag } from 'components/common/tags/DropDownMenuTag';
import { Span } from 'components/common/TextComponents/Span';
import { ContentWrapper } from 'components/common/wrappers/ContentWrapper';
import { Column, Section } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import ReactEcharts from 'echarts-for-react';
import { graphicOption, testHeaderRadioArray } from 'pages/CampaignManager/Dashboard/constants';
import { ballDiameter } from 'pages/CampaignManager/Discover/Details/constants';
import React from 'react';

export const Dashboard = () => (
    <MainLayout>
        <Section>
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
        </Section>
        <Hr />
        <ContentWrapper>
            <Section justifyEnd marginBottom="55px">
                <DropDownMenuTag>7 DAYS</DropDownMenuTag>
            </Section>
            <Section marginBottom="52px">
                <RowHeaderRadio values={testHeaderRadioArray} />
            </Section>
            <Section marginBottom="52px">
                <RowRadio values={['Combined', 'Separate']}></RowRadio>
            </Section>
            <Section noWrap marginBottom="52px">
                <MarginWrapper margin="auto">
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
                </MarginWrapper>
                <Column width="100%">
                    <ReactEcharts option={graphicOption} style={{ height: '516px', width: '100%' }} />
                </Column>
            </Section>
        </ContentWrapper>
    </MainLayout>
);
