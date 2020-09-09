import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Main } from 'components/Layouts/CampaignManagerLayout/styles';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router';
import { routes } from '../../../constants';

export const CampaignManagerLayout: FC = ({ children }) => {
    const location = useLocation();
    const history = useHistory();

    const createRoute = routes.campaignManager.campaign.create;

    const onClick = () => history.push(createRoute);

    return (
        <>
            <Header />
            <Main>
                <TopBarWithButton
                    buttons={
                        location.pathname !== createRoute ? (
                            <RoundedButton onClick={onClick}>Create Campaign</RoundedButton>
                        ) : undefined
                    }
                />
                {children}
            </Main>
            <Footer />
        </>
    );
};
