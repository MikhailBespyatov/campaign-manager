import step2Img from 'assets/img/step_2.png';
import step3Img from 'assets/img/step_3.png';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { useStore } from 'effector-react';
import {
    contentWrapperBorderRadius,
    contentWrapperMarginBottom,
    contentWrapperMarginTop,
    contentWrapperPadding
} from 'pages/CampaignManager/Channels/Help/constants';
import {
    Description,
    NodeDescription,
    StepDescription,
    StepText,
    Title
} from 'pages/CampaignManager/Channels/Help/styles';
import React, { useEffect } from 'react';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { userStores } from 'stores/user';

export const HelpChannel = () => {
    const { user } = useStore(userStores.user);
    const { origin } = useStore(organizationsStores.item);
    const organizationId = typeof user?.organizationId === 'string' ? user.organizationId : '';
    console.log(origin);
    useEffect(() => {
        organizationsEffects.getItemById(organizationId);
    }, [organizationId]);

    return (
        <MainLayout>
            <Row alignCenter justifyCenter height="100%" margin="0 auto" width="876px">
                <ContentWrapper
                    borderRadius={contentWrapperBorderRadius}
                    marginBottom={contentWrapperMarginBottom}
                    marginTop={contentWrapperMarginTop}
                    minHeight="1000px"
                    padding={contentWrapperPadding}
                >
                    {origin === 'shopify' ? (
                        <>
                            <Title>How to add channels in shopify</Title>
                            <MarginWrapper marginBottom="70px">
                                <Description>
                                    The following instructions shows how to add a channel to a page in shopify so as to
                                    allow you to show any products videos that you like.
                                </Description>
                            </MarginWrapper>

                            <StepText>Step 1</StepText>
                            <MarginWrapper marginBottom="50px">
                                <StepDescription>Within Shopify, create a new page.</StepDescription>
                            </MarginWrapper>

                            <StepText>Step 2</StepText>
                            <MarginWrapper marginBottom="24px">
                                <StepDescription>Change the display to HTML using the {`<>`} button</StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="50px">
                                <CustomImg alt="Step 2 description" height="245px" src={step2Img} width="297px" />
                            </MarginWrapper>

                            <StepText>Step 3</StepText>
                            <MarginWrapper marginBottom="58px">
                                <StepDescription>Copy Embedded Link from the copy icon</StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="75px">
                                <CustomImg alt="Step 3 description" height="88px" src={step3Img} width="423px" />
                            </MarginWrapper>

                            <StepText>Step 4</StepText>
                            <MarginWrapper marginBottom="37px">
                                <StepDescription>
                                    Paste the code into the form and click the {`<>`} button again
                                </StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="37px">
                                <CustomImg alt="Step 2 description" height="245px" src={step2Img} width="297px" />
                            </MarginWrapper>

                            <StepText>Step 4</StepText>
                            <MarginWrapper marginBottom="76px">
                                <StepDescription>
                                    Add any additional content you require, save the page and include the page in your
                                    navigation
                                </StepDescription>
                            </MarginWrapper>

                            <NodeDescription>
                                NOTE :- You must create a campaign using the Campangin Manager to select content for the
                                channels viewer.
                            </NodeDescription>
                        </>
                    ) : (
                        <>
                            <Title>How to add channels to your website</Title>
                            <MarginWrapper marginBottom="70px">
                                <Description>
                                    The following instructions shows how to add a channel to a page on your website so
                                    as to allow you to show any products videos that you like.
                                </Description>
                            </MarginWrapper>
                        </>
                    )}
                </ContentWrapper>
            </Row>
        </MainLayout>
    );
};
