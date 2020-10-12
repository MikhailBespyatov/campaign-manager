import history from 'BrowserHistory';
import { CardModal } from 'components/modals/CardModal';
import { routes } from 'constants/routes';
import { GlobalStyle } from 'constants/styles';
import { useStore } from 'effector-react';
import { CreateOrganization } from 'pages/Admin/CreateOrganization';
import { CampaignManager } from 'pages/CampaignManager';
import { Campaign } from 'pages/CampaignManager/Campaign';
import { Create as CreateCampaign } from 'pages/CampaignManager/Campaign/Create';
import { Details as CampaignDetails } from 'pages/CampaignManager/Campaign/Details';
import { Dashboard } from 'pages/CampaignManager/Dashboard';
import { Discover } from 'pages/CampaignManager/Discover';
import { Details as DiscoverDetails } from 'pages/CampaignManager/Discover/Details';
import { Overview } from 'pages/CampaignManager/Overview';
import { Test } from 'pages/ComponentsTestPage';
import { SignIn } from 'pages/SignIn';
import { Admin as SignInAdmin } from 'pages/SignIn/Admin';
// import { Adidas as SignInAdidas } from 'pages/SignIn';
import { PasswordReset } from 'pages/SignIn/PasswordReset';
import { Password as NewPasswordReset } from 'pages/SignIn/PasswordReset/Password';
import { RequestCode } from 'pages/SignIn/PasswordReset/RequestCode';
import { CreateAccount } from 'pages/SignUp';
import { AcceptInvite } from 'pages/SignUp/AcceptInvite';
import { CreateWallet } from 'pages/SignUp/CreateWallet';
import { Payment as CreateWalletPayment } from 'pages/SignUp/CreateWallet/Payment';
import { Success as CreateWalletSuccess } from 'pages/SignUp/CreateWallet/Success';
import { UserAdmin } from 'pages/UserAdmin';
import React, { useEffect } from 'react';
import { Redirect, Router, Switch } from 'react-router';
import { AdminRoute } from 'routes/AdminRoute';
import { CampaignManagerRoute } from 'routes/CampaignManagerRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { UserAdminRoute } from 'routes/UserAdminRoute';
import { themeEvents, themeStores } from 'stores/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
    const theme = useStore(themeStores.theme);

    useEffect(() => {
        themeEvents.setTheme();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CardModal />
            <Router history={history}>
                <Switch>
                    <PublicRoute exact component={Test} path={routes.test} />

                    <PublicRoute exact component={CreateAccount} path={routes.signUp.createAccount} />
                    <PublicRoute
                        exact
                        component={AcceptInvite}
                        path={[routes.signUp.acceptInvite, routes.signUp.acceptOrgInvite]}
                    />
                    <PublicRoute exact component={CreateWallet} path={routes.signUp.createWallet} />
                    <PublicRoute exact component={CreateWalletPayment} path={routes.signUp.payment} />
                    <PublicRoute exact component={CreateWalletSuccess} path={routes.signUp.success} />

                    <PublicRoute exact component={SignIn} path={routes.signIn.index} />
                    <PublicRoute exact component={SignInAdmin} path={routes.signIn.admin} />
                    {/* <PublicRoute exact component={SignInAdidas} path={routes.signIn.adidas} /> */}
                    <PublicRoute exact component={RequestCode} path={routes.signIn.requestCode} />
                    <PublicRoute exact component={PasswordReset} path={routes.signIn.passwordReset} />
                    <PublicRoute exact component={NewPasswordReset} path={routes.signIn.password} />

                    <AdminRoute exact component={CreateOrganization} path={routes.admin.createOrganization} />
                    <UserAdminRoute exact component={UserAdmin} path={routes.userAdmin.index} />

                    <CampaignManagerRoute exact component={CampaignManager} path={routes.campaignManager.index} />
                    <CampaignManagerRoute exact component={Dashboard} path={routes.campaignManager.dashboard.index} />
                    <CampaignManagerRoute exact component={Discover} path={routes.campaignManager.discover.index} />
                    <CampaignManagerRoute
                        exact
                        component={DiscoverDetails}
                        path={routes.campaignManager.discover.details}
                    />
                    <CampaignManagerRoute exact component={Campaign} path={routes.campaignManager.campaign.index} />
                    <CampaignManagerRoute
                        exact
                        component={CampaignDetails}
                        path={routes.campaignManager.campaign.details}
                    />
                    <CampaignManagerRoute exact component={Overview} path={routes.campaignManager.overview.index} />
                    <CampaignManagerRoute
                        exact
                        component={CreateCampaign}
                        path={routes.campaignManager.campaign.create}
                    />

                    <Redirect to={routes.signIn.index} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
