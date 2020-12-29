import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { SummaryWomImg } from 'components/common/features/SummaryWomImg';
import { SummaryWomLogoImg } from 'components/common/features/SummaryWomLogoImg';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { numbersAfterDotWom } from 'constants/global';
import { routes } from 'constants/routes';
import { primaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { modalEvents } from 'stores/modal';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { walletEffects, walletStores } from 'stores/wallet';
import { Background } from 'types';
import { currencyToStandardForm, removeLastNulls, spaceInserter } from 'utils/usefulFunctions';
import { DropDownBlock } from 'components/common/blocks/DropDownBlock';
import { campaignContentEvents } from 'stores/campaignContent';

interface Props extends Background {}

export const CampaignManagerLayout: FC<Props> = ({ children, background }) => {
    // const location = useLocation();
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const organizationId = useStore(organizationsStores.organizationId);
    const { walletId } = useStore(organizationsStores.item);
    const usdRate = useStore(walletStores.usdRate);
    const walletBalance = useStore(walletStores.walletBalance);
    const { budgetTotal, budgetSpent, budgetPerDay, budgetRemaining, campaignsRunning } = useStore(
        organizationsStores.statistics
    );

    const createRoute = globalPrefixUrl + routes.campaignManager.discover.index;
    const goToCreateCampaign = () => {
        history.push(createRoute);
        campaignContentEvents.setVisibleCreateCampaign(true);
        modalEvents.openPopUpCampaignManager({
            visible: true,
            popUp: 'info'
        });
    };
    const onWomBuy = () => modalEvents.openQexWidgetModal();

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
                        <Row marginBottom="0">
                            <Column marginRight={primaryPadding}>
                                <RoundedButton onClick={onWomBuy}>BUY WOM</RoundedButton>
                            </Column>
                            <RoundedButton onClick={goToCreateCampaign}>CREATE CAMPAIGN</RoundedButton>
                        </Row>
                    }
                />
            }
        >
            {' '}
            <DropDownBlock title="Overall Budget">
                <Section marginBottom={'0'}>
                    <Summary
                        subtitle="Campaigns Running"
                        title={campaignsRunning ? spaceInserter(campaignsRunning.toString()) : '0'}
                    />
                    <Summary
                        subtitle="Campaign Budget"
                        title={budgetTotal ? currencyToStandardForm(budgetTotal) : '0'}
                    />
                    <Summary
                        subtitle="Campaign Spent"
                        title={budgetSpent ? currencyToStandardForm(budgetSpent) : '0'}
                    />
                    <Summary
                        subtitle="Campaign Spend (Daily)"
                        title={budgetPerDay ? currencyToStandardForm(budgetPerDay) : '0'}
                    />
                    <SummaryWomLogoImg
                        subtitle="Remaining Budget"
                        title={budgetRemaining ? currencyToStandardForm(budgetRemaining) : '0'}
                    />
                    {/* <Summary subtitle="Remaining Duration" title={remainingDuration ? remainingDuration + 'd' : '0'} /> */}
                    <SummaryWomImg title={`$ ${usdRate ? removeLastNulls(Number(usdRate)) : '0'}`} />
                    <Summary
                        subtitle="Organization balance"
                        title={removeLastNulls(Number(walletBalance.toFixed(numbersAfterDotWom)))}
                    />
                </Section>
            </DropDownBlock>
            {children}
        </MainLayout>
    );
};
