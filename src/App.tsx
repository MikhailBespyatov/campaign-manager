import UnderConstruction from 'components/staticPages/UnderConstruction';
import AdminContainer from 'modules/Admin/AdminContainer';
import { AcceptInviteContainer } from 'modules/Auth/AcceptInvite/AcceptInviteContainer';
import ForgotPasswordContainer from 'modules/Auth/ForgotPassword/ForgotPasswordContainer';
import { CampaignManager } from 'pages/CampaignManager';
import { Dashboard } from 'pages/CampaignManager/Dashboard';
import { Discover } from 'pages/CampaignManager/Discover';
import { Test } from 'pages/ComponentsTestPage';
import { SignIn } from 'pages/SignIn';
import React from 'react';
import { Redirect, Switch } from 'react-router';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { GlobalStyle, routes } from './constants';

const App = () => (
    <>
        <GlobalStyle />
        <Switch>
            <PublicRoute exact component={Test} path={routes.test} />
            <PublicRoute exact component={SignIn} path={routes.signIn} />
            <PublicRoute exact component={CampaignManager} path={routes.campaignManager.index} />
            <PublicRoute exact component={Dashboard} path={routes.campaignManager.dashboard.index} />
            <PublicRoute exact component={Discover} path={routes.campaignManager.discover.list} />

            <PublicRoute exact component={UnderConstruction} path={routes.signUp} />
            <PublicRoute exact component={AcceptInviteContainer} path={routes.acceptInvite} />
            <PublicRoute component={ForgotPasswordContainer} path={routes.forgotPassword.index} />
            <PrivateRoute exact component={UnderConstruction} path={routes.static.privacy} />
            <PrivateRoute exact component={UnderConstruction} path={routes.static.press} />
            {/* <PrivateRoute component={CampaignManagerContainer} path={routes.campaignManager.index} /> */}
            <PrivateRoute component={AdminContainer} path={routes.admin.index} />
            <Redirect to={routes.signIn} />
        </Switch>
    </>
);

export default App;
