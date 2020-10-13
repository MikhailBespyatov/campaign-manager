import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { Background } from 'types';
import { commaInserter } from 'utils/usefulFunctions';

interface Props extends Background {}

export const CampaignManagerLayout: FC<Props> = ({ children, background }) => {
    const location = useLocation();
    const history = useHistory();
    const { amount, spend, spendPerDay, remaining, remainingDuration, campaignsRunning } = useStore(
        organizationsStores.statistics
    );

    const createRoute = routes.campaignManager.campaign.create;

    const onClick = () => history.push(createRoute);

    useEffect(() => {
        organizationsEffects.getStatisticsById('5ddbdd2efd92595cf6d94dc1');
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
                <Summary subtitle="Campaign Budget" title={amount ? commaInserter(amount.toString()) : '0'} />
                <Summary subtitle="Campaign Spent" title={spend ? commaInserter(spend.toString()) : '0'} />
                <Summary
                    subtitle="Campaign spend per day"
                    title={spendPerDay ? commaInserter(spendPerDay.toString()) : '0'}
                />
                <Summary subtitle="Remaining Budget" title={remaining ? commaInserter(remaining.toString()) : '0'} />
                <Summary subtitle="Remaining Duration" title={remainingDuration ? remainingDuration + 'd' : '0'} />
            </Section>
            {children}
        </MainLayout>
    );
};
