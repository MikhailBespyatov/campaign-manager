import cardModalImg from 'assets/img/card_modal_img.svg';
import productImg from 'assets/img/product_img.svg';
import summaryImg from 'assets/img/summary.svg';
import { Hr } from 'components/common/dividers/Hr';
import { Budget } from 'components/common/features/Budget';
import { Summary } from 'components/common/features/Summary';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { LanguageSwitch } from 'components/common/inputs/LanguageSwitch';
import { NumberCounter } from 'components/common/inputs/NumberCounter';
import { Switch } from 'components/common/inputs/Switch';
import { CampaignInputsTable } from 'components/common/tables/CampaignInputsTable';
import { CounterTag } from 'components/common/tags/CounterTag';
import { DropDownMenuTag } from 'components/common/tags/DropDownMenuTag';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row, Section } from 'components/common/wrappers/FlexWrapper';
import { OverflowAutoWrapper } from 'components/common/wrappers/OverflowAutoWrapper';
import { TagFilter } from 'components/filters/TagFilter';
import { wrapperHeight as TagFilterHeight } from 'components/filters/TagFilter/constants';
import { imgHeight, imgWidth } from 'components/grid/bars/TopBarWithButton/constants';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { avatarDiameter } from 'pages/CampaignManager/Campaign/Create/constants';
import React, { FC } from 'react';

const FilterSpan: FC = ({ children }) => (
    <Span color="#6B6B6B" fontSize="26px" lineHeight="32px">
        {children}
    </Span>
);

const OptionSpan: FC = ({ children }) => (
    <Span color="#0F1642" fontSize="24px" fontWeight="normal" lineHeight="29px">
        {children}
    </Span>
);

const TitleSpan: FC = ({ children }) => (
    <Span color="#0F1642" fontSize="50px" fontWeight="bold" lineHeight="61px">
        {children}
    </Span>
);

const SubtitleSpan: FC = ({ children }) => (
    <Span color="#0F1642" fontSize="28px" fontWeight="normal" lineHeight="34px" opacity={0.5}>
        {children}
    </Span>
);

const NumberSpan: FC = ({ children }) => (
    <Span color="#0F1642" fontSize="45px" fontWeight="500" lineHeight="55px">
        {children}
    </Span>
);

export const Create = () => (
    <CampaignManagerLayout>
        <Section>
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
        </Section>
        <Hr marginBottom="17px" />
        <Section marginBottom="20px">
            <TitleSpan>Campaign</TitleSpan>
        </Section>
        <OverflowAutoWrapper>
            <Section noWrap>
                <Column marginRight="75px">
                    <Row alignCenter noWrap marginBottom="25px">
                        <Column marginRight="25px">
                            <CustomImg height={avatarDiameter} src={productImg} width={avatarDiameter} />
                        </Column>
                        <Column marginRight="0">
                            <Span color="#0F1642" fontSize="28px" lineHeight="34px">
                                Niterunner
                            </Span>
                            <Span color="#0F1642" fontSize="18px" fontWeight="500" lineHeight="22px" opacity={0.5}>
                                New shoes
                            </Span>
                        </Column>
                    </Row>
                    <Row marginBottom="53px">
                        <CustomImg height="591px" src={cardModalImg} width="372px" />
                    </Row>
                    <Row marginBottom="39px">
                        <TitleSpan>Budget</TitleSpan>
                    </Row>
                    <Row marginBottom="22px">
                        <SubtitleSpan>Estimated cost per sale:</SubtitleSpan>
                    </Row>
                    <Row alignCenter marginBottom="44px">
                        <Column marginRight="18px">
                            <CustomImg height={imgHeight} src={summaryImg} width={imgWidth} />
                        </Column>
                        <Column marginRight="0">
                            <NumberSpan>0.03</NumberSpan>
                        </Column>
                    </Row>
                    <Row marginBottom="15px">
                        <SubtitleSpan>Confidence</SubtitleSpan>
                    </Row>
                    <Row marginBottom="34px">
                        <NumberSpan>85%</NumberSpan>
                    </Row>
                    <Row marginBottom="28px">
                        <SubtitleSpan>Campaign Budget</SubtitleSpan>
                    </Row>
                    <Row marginBottom="0">
                        <Budget summary="0.00" />
                    </Row>
                </Column>
                <Column>
                    <Row marginBottom="0">
                        <Column>
                            <Row alignCenter noWrap height={TagFilterHeight} marginBottom="28px">
                                {/* <Column marginRight="40px" width="240px">
                                    <FilterSpan>Hashtag filter</FilterSpan>
                                </Column>
                                <Column marginRight="0">
                                    <TagFilter />
                                </Column> */}
                                <TagFilter title="Hashtag filter" />
                            </Row>
                            <Row alignCenter noWrap height={TagFilterHeight} marginBottom="28px">
                                <Column marginRight="40px" width="240px">
                                    <FilterSpan>Spoken language</FilterSpan>
                                </Column>
                                <Column marginRight="38px">
                                    <LanguageSwitch>RU</LanguageSwitch>
                                </Column>
                                <Column marginRight="38px">
                                    <LanguageSwitch>EN</LanguageSwitch>
                                </Column>
                                <Column marginRight="38px">
                                    <DropDownMenuTag>OTHERS</DropDownMenuTag>
                                </Column>
                            </Row>
                            <Row alignCenter noWrap height={TagFilterHeight} marginBottom="28px">
                                <Column marginRight="40px" width="240px">
                                    <FilterSpan>Spoken language</FilterSpan>
                                </Column>
                                <Column marginRight="38px">
                                    <LanguageSwitch>RU</LanguageSwitch>
                                </Column>
                                <Column marginRight="38px">
                                    <LanguageSwitch>EN</LanguageSwitch>
                                </Column>
                                <Column marginRight="38px">
                                    <DropDownMenuTag>OTHERS</DropDownMenuTag>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <Hr marginBottom="41px" />
                    <Row noWrap marginBottom="14px">
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                        <Column marginRight="33px">
                            <CustomImg height="378px" src={cardModalImg} width="238px" />
                        </Column>
                    </Row>
                    <Row noWrap marginBottom="13px">
                        <Span color="#0F1642" fontSize="30px" fontWeight="normal" lineHeight="37px">
                            Similar campaigns
                        </Span>
                    </Row>
                    <Hr marginBottom="20px" />
                    <Row noWrap marginBottom="17px">
                        <Span color="#0F1642" fontSize="35px" fontWeight="normal" lineHeight="43px">
                            Options
                        </Span>
                    </Row>
                    <Row noWrap marginBottom="32px">
                        <CampaignInputsTable />
                    </Row>
                    <Hr marginBottom="20px" />
                    <Row noWrap marginBottom="17px">
                        <Span color="#0F1642" fontSize="35px" fontWeight="normal" lineHeight="43px">
                            Options
                        </Span>
                    </Row>
                    <Row alignCenter noWrap marginBottom="36px">
                        <Column marginRight="15px">
                            <OptionSpan>bla bla</OptionSpan>
                        </Column>
                        <Column marginRight="30px">
                            <Switch />
                        </Column>
                        <Column marginRight="15px">
                            <OptionSpan>bla bla</OptionSpan>
                        </Column>
                        <Column marginRight="30px">
                            <Switch />
                        </Column>
                        <Column marginRight="15px">
                            <OptionSpan>bla bla</OptionSpan>
                        </Column>
                        <Column marginRight="30px">
                            <NumberCounter />
                        </Column>
                        <Column marginRight="15px">
                            <OptionSpan>bla bla</OptionSpan>
                        </Column>
                        <Column marginRight="30px">
                            <NumberCounter />
                        </Column>
                    </Row>
                    <Row noWrap marginBottom="17px">
                        <Span color="#0F1642" fontSize="35px" fontWeight="normal" lineHeight="43px">
                            Hashtag
                        </Span>
                    </Row>
                    <Row noWrap marginBottom="0">
                        <CounterTag hashtag marginRight="50px">
                            ADIDAS
                        </CounterTag>
                        <CounterTag hashtag marginRight="50px">
                            SPORTSHOE
                        </CounterTag>
                        <CounterTag hashtag marginRight="50px">
                            STREETWARE
                        </CounterTag>
                    </Row>
                </Column>
            </Section>
        </OverflowAutoWrapper>
    </CampaignManagerLayout>
);
