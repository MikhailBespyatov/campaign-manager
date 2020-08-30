import UnderConstruction from 'components/staticPages/UnderConstruction';
import AdminContainer from 'modules/Admin/AdminContainer';
import { AcceptInviteContainer } from 'modules/Auth/AcceptInvite/AcceptInviteContainer';
import ForgotPasswordContainer from 'modules/Auth/ForgotPassword/ForgotPasswordContainer';
import CampaignManagerContainer from 'modules/CampaignManager/CampaignManagerContainer';
import { BaseLayout } from 'modules/Layout/BaseLayout';
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
        <BaseLayout>
            <Switch>
                <PublicRoute exact component={Test} path={routes.test} />
                <PublicRoute exact component={SignIn} path={routes.signIn} />
                <PublicRoute exact component={UnderConstruction} path={routes.signUp} />
                <PublicRoute exact component={AcceptInviteContainer} path={routes.acceptInvite} />
                <PublicRoute component={ForgotPasswordContainer} path={routes.forgotPassword.index} />
                <PrivateRoute exact component={UnderConstruction} path={routes.static.privacy} />
                <PrivateRoute exact component={UnderConstruction} path={routes.static.press} />
                <PrivateRoute component={CampaignManagerContainer} path={routes.campaignManager.index} />
                <PrivateRoute component={AdminContainer} path={routes.admin.index} />
                <Redirect to={routes.signIn} />
            </Switch>
        </BaseLayout>
    </>
);

export default App;
