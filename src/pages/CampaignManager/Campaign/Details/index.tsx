import ballBuyImg from 'assets/img/ball_buy.svg';
import ballClickImg from 'assets/img/ball_click.svg';
import ballEngageImg from 'assets/img/ball_engage.svg';
import ballPreviewImg from 'assets/img/ball_preview.svg';
import ballViewImg from 'assets/img/ball_view.svg';
import hideButtonImg from 'assets/img/hide_button_img.svg';
import history from 'BrowserHistory';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { ballDiameter } from 'components/common/inputs/LanguageSwitch/constants';
import { CampaignTableElement } from 'components/common/tables/CampaignTableElement';
import { Span } from 'components/common/TextComponents/Span';
import { ContentWrapper } from 'components/common/wrappers/ContentWrapper';
import { Column, Section } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import ReactEcharts from 'echarts-for-react';
import {
    graphicOption,
    hideButtonImgDiameter,
    hideButtonImgHeight
} from 'pages/CampaignManager/Campaign/Details/constants';
import React from 'react';

const onBack = () => history.goBack();

export const Details = () => (
    <CampaignManagerLayout>
        <Section>
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="25" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Budget" title="20,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Spent" title="12,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign spend per day" title="1,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Budget" title="10,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Duration" title="12d" />
        </Section>
        <Section>
            <CampaignTableElement />
        </Section>
        {/* <Hr /> */}
        <ContentWrapper>
            <Section noWrap marginBottom="0">
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
        <Section justifyEnd marginBottom="46px" marginTop="70px">
            <RoundedButton
                reverse
                Img={<CustomImg height={hideButtonImgHeight} src={hideButtonImg} width={hideButtonImgDiameter} />}
                onClick={onBack}
            >
                HIDE DETAILS
            </RoundedButton>
        </Section>
    </CampaignManagerLayout>
);
