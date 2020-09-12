import { routes } from 'constants/routes';
import { GlobalStyle } from 'constants/styles';
import { CampaignManager } from 'pages/CampaignManager';
import { Campaign } from 'pages/CampaignManager/Campaign';
import { Create as CreateCampaign } from 'pages/CampaignManager/Campaign/Create';
import { Dashboard } from 'pages/CampaignManager/Dashboard';
import { Discover } from 'pages/CampaignManager/Discover';
import { Details as DiscoverDetails } from 'pages/CampaignManager/Discover/Details';
import { Overview } from 'pages/CampaignManager/Overview';
import { Test } from 'pages/ComponentsTestPage';
import { SignIn } from 'pages/SignIn';
import { PasswordReset } from 'pages/SignIn/PasswordReset';
import { RequestCode } from 'pages/SignIn/RequestCode';
import { CreateAccount } from 'pages/SignUp/CreateAccount';
import { CreateWallet } from 'pages/SignUp/CreateWallet';
import React from 'react';
import { Redirect, Switch } from 'react-router';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';

const App = () => (
    <>
        <GlobalStyle />
        <Switch>
            <PublicRoute exact component={Test} path={routes.test} />

            <PublicRoute exact component={CreateAccount} path={routes.signUp.createAccount} />
            <PublicRoute exact component={CreateWallet} path={routes.signUp.createWallet} />

            <PublicRoute exact component={SignIn} path={routes.signIn.index} />
            <PublicRoute exact component={RequestCode} path={routes.signIn.requestCode} />
            <PublicRoute exact component={PasswordReset} path={routes.signIn.passwordReset} />

            <PrivateRoute exact component={CampaignManager} path={routes.campaignManager.index} />
            <PrivateRoute exact component={Dashboard} path={routes.campaignManager.dashboard.index} />
            <PrivateRoute exact component={Discover} path={routes.campaignManager.discover.index} />
            <PrivateRoute exact component={DiscoverDetails} path={routes.campaignManager.discover.details} />
            <PrivateRoute exact component={Campaign} path={routes.campaignManager.campaign.index} />
            <PrivateRoute exact component={Overview} path={routes.campaignManager.overview.index} />
            <PrivateRoute exact component={CreateCampaign} path={routes.campaignManager.campaign.create} />

            {/* <PublicRoute exact component={UnderConstruction} path={routes.signUp.createAccount} />
            <PublicRoute exact component={AcceptInviteContainer} path={routes.acceptInvite} /> */}
            {/* <PublicRoute component={ForgotPasswordContainer} path={routes.forgotPassword.index} /> */}
            {/* <PrivateRoute exact component={UnderConstruction} path={routes.static.privacy} />
            <PrivateRoute exact component={UnderConstruction} path={routes.static.press} /> */}
            {/* <PrivateRoute component={CampaignManagerContainer} path={routes.campaignManager.index} /> */}
            {/* <PrivateRoute component={AdminContainer} path={routes.admin.index} /> */}

            <Redirect to={routes.signIn.index} />
        </Switch>
    </>
);

export default App;
