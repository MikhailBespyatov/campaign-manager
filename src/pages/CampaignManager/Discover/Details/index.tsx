import backModalImg from 'assets/img/back.svg';
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
                        <Column marginRight="20px">
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
                            <Row>some graphics</Row>
                        </Column>
                    </Row>
                </OverflowAutoWrapper>
            </ContentWrapper>
        </MainLayout>
    );
};
