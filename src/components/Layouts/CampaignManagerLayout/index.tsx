import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { ContentText } from 'components/Layouts/CampaignManagerLayout/styles';
import { MainLayout } from 'components/Layouts/MainLayout';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { modalEvents } from 'stores/modal';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { walletEffects } from 'stores/wallet';
import { Background } from 'types';
import { topBarButtonMarginRight } from './constants';

interface Props extends Background {}

export const CampaignManagerLayout: FC<Props> = ({ children, background }) => {
    // const location = useLocation();
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const organizationId = useStore(organizationsStores.organizationId);
    const { walletId, origin } = useStore(organizationsStores.item);
    // const usdRate = useStore(walletStores.usdRate);
    // const walletBalance = useStore(walletStores.walletBalance);
    // const { budgetTotal, budgetSpent, budgetPerDay, budgetRemaining, campaignsRunning } = useStore(
    //     organizationsStores.statistics
    // );
    //const { buyWOMButtonBackgroundColor, buyWOMButtonTextColor } = useStore(themeStores.theme);
    const isShopify = origin === 'shopify';
    const goToCreateCampaign = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.create);
    const onWomBuy = () => modalEvents.openQexWidgetModal();
    const onWalletOpen = () => modalEvents.openWalletModal();

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    useEffect(() => {
        if (organizationId) {
            organizationsEffects.getStatisticsById(organizationId);
            organizationsEffects.getItemById(organizationId);
        }
    }, [organizationId]);

    useEffect(() => {
        //console.log(walletId);
        walletId && walletEffects.getItemById(walletId);
    }, [walletId]);

    return (
        <MainLayout
            background={background}
            topBar={
                <TopBarWithButton
                    buttons={
                        <Row alignCenter marginBottom="0">
                            <Column marginRight={topBarButtonMarginRight}>
                                <ClickableWrapper width="fit-content" onClick={onWalletOpen}>
                                    <ContentText noWrap>MY WALLET</ContentText>
                                </ClickableWrapper>
                            </Column>
                            {!isShopify && (
                                <Column marginRight={topBarButtonMarginRight}>
                                    <ClickableWrapper width="fit-content" onClick={onWomBuy}>
                                        <ContentText noWrap>BUY WOM</ContentText>
                                    </ClickableWrapper>
                                </Column>
                            )}
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
            {' '}
            {/*<DropDownBlock title="Overall Budget">*/}
            {/*    <Section marginBottom={'0'}>*/}
            {/*        <Summary*/}
            {/*            subtitle="Campaigns Running"*/}
            {/*            title={campaignsRunning ? spaceInserter(campaignsRunning.toString()) : '0'}*/}
            {/*        />*/}
            {/*        <Summary*/}
            {/*            subtitle="Campaign Budget"*/}
            {/*            title={budgetTotal ? currencyToStandardForm(budgetTotal) : '0'}*/}
            {/*        />*/}
            {/*        <Summary*/}
            {/*            subtitle="Campaign Spent"*/}
            {/*            title={budgetSpent ? currencyToStandardForm(budgetSpent) : '0'}*/}
            {/*        />*/}
            {/*        <Summary*/}
            {/*            subtitle="Campaign Spend (Daily)"*/}
            {/*            title={budgetPerDay ? currencyToStandardForm(budgetPerDay) : '0'}*/}
            {/*        />*/}
            {/*        <SummaryWomLogoImg*/}
            {/*            subtitle="Remaining Budget"*/}
            {/*            title={budgetRemaining ? currencyToStandardForm(budgetRemaining) : '0'}*/}
            {/*        />*/}
            {/*        /!* <Summary subtitle="Remaining Duration" title={remainingDuration ? remainingDuration + 'd' : '0'} /> *!/*/}
            {/*        <SummaryWomImg title={`$ ${usdRate ? removeLastNulls(Number(usdRate)) : '0'}`} />*/}
            {/*        <Summary*/}
            {/*            subtitle="Organization balance"*/}
            {/*            title={removeLastNulls(Number(walletBalance.toFixed(numbersAfterDotWom)))}*/}
            {/*        />*/}
            {/*    </Section>*/}
            {/*</DropDownBlock>*/}
            {children}
        </MainLayout>
    );
};
