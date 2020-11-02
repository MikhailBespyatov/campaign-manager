import { CreateCampaignForm } from 'components/FormComponents/forms/CreateCampaignForm';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { formGrey2 } from 'constants/styles';
import React from 'react';

// const BudgetSpan: FC = ({ children }) => (
//     <Span color={secondaryColor} fontSize="12px" lineHeight="20px" opacity={0.4}>
//         {children}
//     </Span>
// );

// const DarkBudgetSpan: FC = ({ children }) => (
//     <Span color={secondaryColor} fontSize="16px" lineHeight="24px">
//         {children}
//     </Span>
// );

// const FilterSpan: FC = ({ children }) => (
//     <Span color="#6B6B6B" fontSize="26px" lineHeight="32px">
//         {children}
//     </Span>
// );

// const OptionSpan: FC = ({ children }) => (
//     <Span color="#0F1642" fontSize="24px" fontWeight="normal" lineHeight="29px">
//         {children}
//     </Span>
// );

// const TitleSpan: FC = ({ children }) => (
//     <Span color="#0F1642" fontSize="50px" fontWeight="bold" lineHeight="61px">
//         {children}
//     </Span>
// );

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
    <CampaignManagerLayout background={formGrey2}>
        {/* <Section marginBottom="0">
            <Summary subtitle="Campaigns Running" title="20.000" />
            <Summary subtitle="Campaigns Running" title="20.000" />
            <Summary subtitle="Campaigns Running" title="20.000" />
            <Summary subtitle="Campaigns Running" title="20.000" />
            <Summary subtitle="Campaigns Running" title="20.000" />
            <Summary subtitle="Campaigns Running" title="20.000" />
        </Section> */}
        <Section>
            {/* <Column marginRight={tertiaryPadding}> */}
            {/* <CustomImg height="410px" src={cardModalImg} width="258px" /> */}
            {/* <CreateCampaignCard marginBottom={primaryPadding} marginRight="0" /> */}
            {/* <Row marginBottom={primaryPadding}>
                    <AsideBlock title="Budget">
                        <ColumnBlockCell padding={asideBlockPadding}>
                            <Section noWrap marginBottom="0">
                                <Column justifyCenter width="50%">
                                    <Row marginBottom="7px">
                                        <BudgetSpan>Estimated cost per sale</BudgetSpan>
                                    </Row>
                                    <Row alignCenter marginBottom="0">
                                        <Column marginRight="5px">
                                            <DarkBudgetSpan>0.03</DarkBudgetSpan>
                                        </Column>
                                        <CustomImg height="17px" src={womImg} width="20px" />
                                    </Row>
                                </Column>
                                <Column justifyCenter width="50%">
                                    <Row marginBottom="27px">
                                        <BudgetSpan>Confidence</BudgetSpan>
                                    </Row>
                                    <DarkBudgetSpan>85%</DarkBudgetSpan>
                                </Column>
                            </Section>
                        </ColumnBlockCell>
                        <ColumnBlockCell padding={asideBlockPadding}>
                            <Column>
                                <Row marginBottom={primaryPadding}>
                                    <BudgetSpan>Campaign budget</BudgetSpan>
                                </Row>
                                <Row marginBottom={secondaryPadding}>
                                    <Budget summary="0.00" />
                                </Row>
                            </Column>
                        </ColumnBlockCell>
                    </AsideBlock>
                </Row> */}
            {/* </Column> */}
            <Column>
                <CreateCampaignForm />

                {/* <Row marginBottom={primaryPadding}>
                    <Block title="Similar Campaigns">
                        <RowBlockCell padding={primaryPadding}>
                            <Row marginBottom="0">
                                <SimilarCampaignCard marginBottom="0" />
                                <SimilarCampaignCard marginBottom="0" />
                                <SimilarCampaignCard marginBottom="0" />
                                <SimilarCampaignCard marginBottom="0" />
                            </Row>
                        </RowBlockCell>
                    </Block>
                </Row> */}
                {/* <Row marginBottom={primaryPadding}>
                    <HighlightedTitleBlock title="Similar Campaigns">
                        <ColumnBlockCell>
                            <RowBlockCell padding={primaryPadding}>
                                <Column>
                                    <Row>
                                        <Search />
                                    </Row>
                                    <Section noWrap>
                                        <Column width="50%">
                                            <Row>
                                                <P>Recomended</P>
                                            </Row>
                                            <Row marginBottom={tertiaryPadding}>
                                                <AddableTag>Adidas</AddableTag>
                                            </Row>
                                            <Row marginBottom={tertiaryPadding}>
                                                <AddableTag>Adidas</AddableTag>
                                            </Row>
                                        </Column>
                                        <Column width="50%">
                                            <Row>
                                                <P>Compatible</P>
                                            </Row>
                                            <Row marginBottom={tertiaryPadding}>
                                                <AddableTag>Adidas</AddableTag>
                                            </Row>
                                            <Row marginBottom={tertiaryPadding}>
                                                <AddableTag>Adidas</AddableTag>
                                            </Row>
                                        </Column>
                                    </Section>
                                </Column>
                            </RowBlockCell>
                            <RowBlockCell padding={primaryPadding}>
                                <Column marginBottom="auto">
                                    <Section marginTop="26px">
                                        <P>Watched Override</P>
                                        <MarginWrapper marginLeft="auto">
                                            <Switch />
                                        </MarginWrapper>
                                    </Section>
                                    <Section>
                                        <P>Must Watch</P>
                                        <MarginWrapper marginLeft="auto">
                                            <Switch />
                                        </MarginWrapper>
                                    </Section>
                                    <Section>
                                        <P>Boost Content</P>
                                        <MarginWrapper marginLeft="40px">
                                            <NumberCounter />
                                        </MarginWrapper>
                                    </Section>
                                </Column>
                            </RowBlockCell>
                            <RowBlockCell padding={primaryPadding}>
                                <Column marginBottom="auto">
                                    <Section marginTop="26px">
                                        <P>Boost Creator</P>
                                        <MarginWrapper marginLeft="auto">
                                            <NumberCounter />
                                        </MarginWrapper>
                                    </Section>
                                    <Section>
                                        <P>Hashtag #Adidas</P>
                                        <MarginWrapper marginLeft="auto">
                                            <NumberCounter />
                                        </MarginWrapper>
                                    </Section>
                                    <Section>
                                        <P>Hashtag #Sports...</P>
                                        <MarginWrapper marginLeft="40px">
                                            <NumberCounter />
                                        </MarginWrapper>
                                    </Section>
                                </Column>
                            </RowBlockCell>
                        </ColumnBlockCell>
                    </HighlightedTitleBlock>
                </Row> */}
            </Column>
        </Section>
    </CampaignManagerLayout>
);

/* <Hr marginBottom="17px" />
        <Section marginBottom="20px">
            <TitleSpan>Campaign</TitleSpan>
        </Section> */

/* <Row alignCenter noWrap marginBottom="25px">
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
                </Row> */

/* <Row marginBottom="0">
                    <Column>
                        <Row alignCenter noWrap height={TagFilterHeight} marginBottom="28px">
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
                </Row> */
