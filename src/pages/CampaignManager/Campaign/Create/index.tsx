import cardModalImg from 'assets/img/card_modal_img.svg';
import productImg from 'assets/img/product_img.svg';
import womImg from 'assets/img/wom_logo.svg';
import { AsideBlock } from 'components/common/blocks/AsideBlock';
import { ColumnBlockCell } from 'components/common/blocks/BlockCell';
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
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { secondaryColor } from 'constants/styles';
import { asideBlockPadding, avatarDiameter } from 'pages/CampaignManager/Campaign/Create/constants';
import React, { FC } from 'react';

const BudgetSpan: FC = ({ children }) => (
    <Span color={secondaryColor} fontSize="12px" lineHeight="20px" opacity={0.4}>
        {children}
    </Span>
);

const DarkBudgetSpan: FC = ({ children }) => (
    <Span color={secondaryColor} fontSize="16px" lineHeight="24px">
        {children}
    </Span>
);

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

// const SubtitleSpan: FC = ({ children }) => (
//     <Span color="#0F1642" fontSize="28px" fontWeight="normal" lineHeight="34px" opacity={0.5}>
//         {children}
//     </Span>
// );

// const NumberSpan: FC = ({ children }) => (
//     <Span color="#0F1642" fontSize="45px" fontWeight="500" lineHeight="55px">
//         {children}
//     </Span>
// );

export const Create = () => (
    <CampaignManagerLayout>
        <Section>
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
                <Column marginRight="30px">
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
                    <Row marginBottom="20px">
                        <CustomImg height="410px" src={cardModalImg} width="258px" />
                    </Row>
                    <Row marginBottom="20px">
                        <AsideBlock title="Budget">
                            <ColumnBlockCell padding={asideBlockPadding}>
                                <Section noWrap marginBottom="0">
                                    <Column alignCenter justifyCenter width="50%">
                                        <BudgetSpan>Estimated cost per sale</BudgetSpan>
                                        <Row alignCenter marginBottom="0">
                                            <Column marginRight="5px">
                                                <DarkBudgetSpan>0.03</DarkBudgetSpan>
                                            </Column>
                                            <CustomImg height="17px" src={womImg} width="20px" />
                                        </Row>
                                    </Column>
                                    <Column alignCenter justifyCenter width="50%">
                                        <Row marginBottom="20px">
                                            <BudgetSpan>Confidence</BudgetSpan>
                                        </Row>
                                        <DarkBudgetSpan>85%</DarkBudgetSpan>
                                    </Column>
                                </Section>
                            </ColumnBlockCell>
                            <ColumnBlockCell padding={asideBlockPadding}>
                                <Column>
                                    <Row marginBottom="20px">
                                        <BudgetSpan>Campaign budget</BudgetSpan>
                                    </Row>
                                    <Row marginBottom="10px">
                                        <Budget summary="0.00" />
                                    </Row>
                                </Column>
                            </ColumnBlockCell>
                        </AsideBlock>
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
