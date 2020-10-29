import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { SummaryWomImg } from 'components/common/features/SummaryWomImg';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { walletEffects, walletStores } from 'stores/wallet';
import { Background } from 'types';
import { commaInserter, spaceInserter } from 'utils/usefulFunctions';

interface Props extends Background {}

export const CampaignManagerLayout: FC<Props> = ({ children, background }) => {
    const location = useLocation();
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const organizationId = useStore(organizationsStores.organizationId);
    const usdRate = useStore(walletStores.usdRate);
    const { budgetTotal, budgetSpent, budgetPerDay, budgetRemaining, remainingDuration, campaignsRunning } = useStore(
        organizationsStores.statistics
    );

    const createRoute = globalPrefixUrl + routes.campaignManager.campaign.create;

    const onClick = () => history.push(createRoute);

    useEffect(() => {
        organizationId && organizationsEffects.getStatisticsById(organizationId);
    }, [organizationId]);

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    return (
        <MainLayout
            background={background}
            topBar={
                <TopBarWithButton
                    buttons={
                        location.pathname !== createRoute ? (
                            <RoundedButton onClick={onClick}>Create Campaign</RoundedButton>
                        ) : undefined
                    }
                />
            }
        >
            <Section>
                <Summary
                    subtitle="Campaigns Running"
                    title={campaignsRunning ? commaInserter(campaignsRunning.toString()) : '0'}
                />
                <Summary subtitle="Campaign Budget" title={budgetTotal ? spaceInserter(budgetTotal.toString()) : '0'} />
                <Summary subtitle="Campaign Spent" title={budgetSpent ? commaInserter(budgetSpent.toString()) : '0'} />
                <Summary
                    subtitle="Daily campaign cost"
                    title={budgetPerDay ? commaInserter(budgetPerDay.toString()) : '0'}
                />
                <Summary
                    subtitle="Remaining Budget"
                    title={budgetRemaining ? spaceInserter(budgetRemaining.toString()) : '0'}
                />
                <Summary subtitle="Remaining Duration" title={remainingDuration ? remainingDuration + 'd' : '0'} />
                <SummaryWomImg title={`${usdRate ? usdRate : '0'} $`} />
            </Section>
            {children}
        </MainLayout>
    );
};
