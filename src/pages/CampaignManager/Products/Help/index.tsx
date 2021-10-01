import nonShopifyStep1Img from 'assets/img/non-shopify_product_step_1.svg';
import nonShopifyStep2Img1 from 'assets/img/non-shopify_product_step_2_1.svg';
import nonShopifyStep2Img2 from 'assets/img/non-shopify_product_step_2_2.svg';
import nonShopifyStep2Img3 from 'assets/img/non-shopify_product_step_2_3.svg';
import shopifyDescriptionImg from 'assets/img/shopify_product_description.png';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { ContentText } from 'components/Layouts/CampaignManagerLayout/styles';
import { MainLayout } from 'components/Layouts/MainLayout';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import {
    contentWrapperBorderRadius,
    contentWrapperMarginBottom,
    contentWrapperMarginTop,
    contentWrapperPadding
} from 'pages/CampaignManager/Channels/Help/constants';
import { Description, StepDescription, StepText, Tag, Title } from 'pages/CampaignManager/Channels/Help/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { modalEvents } from 'stores/modal';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { userStores } from 'stores/user';

export const HelpProduct = () => {
    const { user } = useStore(userStores.user);
    const { origin } = useStore(organizationsStores.item);
    const organizationId = typeof user?.organizationId === 'string' ? user.organizationId : '';
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    useEffect(() => {
        organizationsEffects.getItemById(organizationId);
    }, [organizationId]);

    const goToCreateCampaign = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.create);
    const onWomBuy = () => modalEvents.openQexWidgetModal();
    const onWalletOpen = () => modalEvents.openWalletModal();

    return (
        <MainLayout
            topBar={
                <TopBarWithButton
                    buttons={
                        <Row alignCenter marginBottom="0">
                            <Column marginRight="25px">
                                <ClickableWrapper width="fit-content" onClick={onWalletOpen}>
                                    <ContentText noWrap>MY WALLET</ContentText>
                                </ClickableWrapper>
                            </Column>
                            <Column marginRight="25px">
                                <ClickableWrapper width="fit-content" onClick={onWomBuy}>
                                    <ContentText noWrap>BUY WOM</ContentText>
                                </ClickableWrapper>
                            </Column>
                            <Column>
                                <ManualRoundedButton
                                    height="44px"
                                    minWidth="150px"
                                    width="150px"
                                    onClick={goToCreateCampaign}
                                >
                                    CREATE CAMPAIGN
                                </ManualRoundedButton>
                            </Column>
                        </Row>
                    }
                />
            }
        >
            <Row alignCenter justifyCenter height="100%" margin="0 auto" width="876px">
                <ContentWrapper
                    borderRadius={contentWrapperBorderRadius}
                    marginBottom={contentWrapperMarginBottom}
                    marginTop={contentWrapperMarginTop}
                    padding={contentWrapperPadding}
                >
                    {origin === 'shopify' ? (
                        <>
                            <Title>Control Products in Shopify Admin Panel</Title>
                            <MarginWrapper marginBottom="24px">
                                <StepDescription>
                                    You can control if you want to show the product viewer for a product in the shopify
                                    admin panel
                                </StepDescription>
                            </MarginWrapper>

                            <MarginWrapper marginBottom="50px">
                                <CustomImg alt="Description" height="335px" src={shopifyDescriptionImg} width="671px" />
                            </MarginWrapper>
                        </>
                    ) : (
                        <>
                            <Title>How to add PRODUCT VIEWER to your website</Title>
                            <MarginWrapper marginBottom="54px">
                                <Description>
                                    The following instructions shows how to add a channel to a page on your website so
                                    as to allow you to show any products videos that you like.
                                </Description>
                            </MarginWrapper>

                            <StepText>Step 1</StepText>
                            <MarginWrapper marginBottom="24px">
                                <StepDescription>
                                    Go to the channels place, select a channel, and copy the configuration
                                </StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="50px">
                                <CustomImg
                                    alt="Step 1 description"
                                    height="227px"
                                    src={nonShopifyStep1Img}
                                    width="671px"
                                />
                            </MarginWrapper>

                            <StepText>Step 2</StepText>
                            <MarginWrapper marginBottom="33px">
                                <StepDescription>
                                    After copiying the configuration, paste the copied content onto your website
                                </StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="13px">
                                <StepDescription>
                                    Goes in the tag <Tag>Head</Tag> on the website
                                </StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="37px">
                                <CustomImg
                                    alt="Step 2 description first image"
                                    height="227px"
                                    src={nonShopifyStep2Img1}
                                    width="671px"
                                />
                            </MarginWrapper>
                            <MarginWrapper marginBottom="13px">
                                <StepDescription>Goes on the page of the website</StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="38px">
                                <CustomImg
                                    alt="Step 2 description second image"
                                    height="371px"
                                    src={nonShopifyStep2Img2}
                                    width="671px"
                                />
                            </MarginWrapper>
                            <MarginWrapper marginBottom="13px">
                                <StepDescription>
                                    A place where the product viewer is going to be rendered
                                </StepDescription>
                            </MarginWrapper>
                            <MarginWrapper marginBottom="38px">
                                <CustomImg
                                    alt="Step 2 description second image"
                                    height="149px"
                                    src={nonShopifyStep2Img3}
                                    width="671px"
                                />
                            </MarginWrapper>
                        </>
                    )}
                </ContentWrapper>
            </Row>
        </MainLayout>
    );
};
