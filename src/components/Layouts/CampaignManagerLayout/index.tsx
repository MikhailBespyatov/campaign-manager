import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { MainLayout } from 'components/Layouts/MainLayout';
import { routes } from 'constants/routes';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Background } from 'types';

interface Props extends Background {}

export const CampaignManagerLayout: FC<Props> = ({ children, background }) => {
    const location = useLocation();
    const history = useHistory();

    const createRoute = routes.campaignManager.campaign.create;

    const onClick = () => history.push(createRoute);

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
            {children}
        </MainLayout>
    );
};
