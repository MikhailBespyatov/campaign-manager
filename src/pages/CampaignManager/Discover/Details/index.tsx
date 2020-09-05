import backModalImg from 'assets/img/back.svg';
import ballBuyImg from 'assets/img/ball_buy.svg';
import ballClickImg from 'assets/img/ball_click.svg';
import ballEngageImg from 'assets/img/ball_engage.svg';
import ballPreviewImg from 'assets/img/ball_preview.svg';
import ballViewImg from 'assets/img/ball_view.svg';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { RowRadio } from 'components/common/inputs/RowRadio';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row, Section } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { OverflowAutoWrapper } from 'components/common/wrappers/OverflowAutoWrapper';
import { TagFilter } from 'components/filters/TagFilter';
import { CampaignContentCard } from 'components/Layouts/Cards/CampaignContentCard';
import { closeModalImgDiameter } from 'components/Layouts/Cards/CampaignContentCard/constants';
import { MainLayout } from 'components/Layouts/MainLayout';
import ReactEcharts from 'echarts-for-react';
import { ballDiameter, graphicOption } from 'pages/CampaignManager/Discover/Details/constants';
import { ContentWrapper } from 'pages/CampaignManager/Discover/Details/styles';
import React from 'react';
import { useHistory } from 'react-router';

export const Details = () => {
    const history = useHistory();

    const onBack = () => history.goBack();

    return (
        <MainLayout>
            <Section alignCenter marginBottom="35px">
                <TagFilter />
            </Section>
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
            <ContentWrapper>
                <OverflowAutoWrapper>
                    <Row noWrap widthMaxContent>
                        <Column marginRight="0">
                            <CampaignContentCard
                                buttonTop={
                                    <CustomImg
                                        pointer
                                        height={closeModalImgDiameter}
                                        src={backModalImg}
                                        width={closeModalImgDiameter}
                                        onClick={onBack}
                                    />
                                }
                            />
                        </Column>
                        <Column>
                            <Row alignCenter noWrap>
                                <Column marginRight="6px">
                                    <Span color="#0F1642" fontSize="25px" fontWeight="normal" lineHeight="30px">
                                        Milestones
                                    </Span>
                                </Column>
                                <Column marginRight="18px">
                                    <RoundedButton>Allow</RoundedButton>
                                </Column>
                                <Column marginRight="18px">
                                    <RoundedButton>Start Promo</RoundedButton>
                                </Column>
                                <Column marginRight="18px">
                                    <RoundedButton>End Promo</RoundedButton>
                                </Column>
                                <MarginWrapper marginLeft="auto">
                                    <RowRadio active="Relative" values={['Absolute', 'Relative']} />
                                </MarginWrapper>
                            </Row>
                            <Section>
                                <ReactEcharts
                                    option={graphicOption('#FC4237')}
                                    style={{ height: '300px', width: '100%' }}
                                />
                            </Section>
                            <Section alignCenter justifyCenter>
                                <Column marginRight="16px">
                                    <CustomImg height={ballDiameter} src={ballPreviewImg} width={ballDiameter} />
                                </Column>
                                <Column>
                                    <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                        Preview
                                    </Span>
                                </Column>
                            </Section>
                            <Section>
                                <ReactEcharts
                                    option={graphicOption('#AD0132')}
                                    style={{ height: '300px', width: '100%' }}
                                />
                            </Section>
                            <Section alignCenter justifyCenter>
                                <Column marginRight="16px">
                                    <CustomImg height={ballDiameter} src={ballViewImg} width={ballDiameter} />
                                </Column>
                                <Column>
                                    <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                        View
                                    </Span>
                                </Column>
                            </Section>
                            <Section>
                                <ReactEcharts
                                    option={graphicOption('#15226B')}
                                    style={{ height: '300px', width: '100%' }}
                                />
                            </Section>
                            <Section alignCenter justifyCenter>
                                <Column marginRight="16px">
                                    <CustomImg height={ballDiameter} src={ballEngageImg} width={ballDiameter} />
                                </Column>
                                <Column>
                                    <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                        Engage
                                    </Span>
                                </Column>
                            </Section>
                            <Section>
                                <ReactEcharts
                                    option={graphicOption('#0CB6D1')}
                                    style={{ height: '300px', width: '100%' }}
                                />
                            </Section>
                            <Section alignCenter justifyCenter>
                                <Column marginRight="16px">
                                    <CustomImg height={ballDiameter} src={ballClickImg} width={ballDiameter} />
                                </Column>
                                <Column>
                                    <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                                        Click
                                    </Span>
                                </Column>
                            </Section>
                            <Section>
                                <ReactEcharts
                                    option={graphicOption('#FE7500')}
                                    style={{ height: '300px', width: '100%' }}
                                />
                            </Section>
                            <Section alignCenter justifyCenter>
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
                    </Row>
                </OverflowAutoWrapper>
            </ContentWrapper>
        </MainLayout>
    );
};
