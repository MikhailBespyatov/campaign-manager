import history from 'BrowserHistory';
import { CardModal } from 'components/modals/CardModal';
import { acceptInvitePath, acceptOrgInvitePath, routes, signInPath } from 'constants/routes';
import { GlobalStyle } from 'constants/styles';
import { useStore } from 'effector-react';
import { CampaignManager } from 'pages/CampaignManager';
import { Campaign } from 'pages/CampaignManager/Campaign';
import { Create as CreateCampaign } from 'pages/CampaignManager/Campaign/Create';
import { Details as CampaignDetails } from 'pages/CampaignManager/Campaign/Details';
import { Discover } from 'pages/CampaignManager/Discover';
import { Details as DiscoverDetails } from 'pages/CampaignManager/Discover/Details';
import { Home } from 'pages/Home';
import { SignIn } from 'pages/SignIn';
import { PasswordReset } from 'pages/SignIn/PasswordReset';
import { RequestCode } from 'pages/SignIn/PasswordReset/RequestCode';
import { AcceptInvite } from 'pages/SignUp/AcceptInvite';
import { CreateWallet } from 'pages/SignUp/CreateWallet';
import { Payment as CreateWalletPayment } from 'pages/SignUp/CreateWallet/Payment';
import { Success as CreateWalletSuccess } from 'pages/SignUp/CreateWallet/Success';
import { UserAdmin } from 'pages/UserAdmin';
import React, { useEffect } from 'react';
import { Redirect, Router, Switch } from 'react-router';
import { CampaignManagerRoute } from 'routes/CampaignManagerRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { UserAdminRoute } from 'routes/UserAdminRoute';
import { themeEvents, themeStores } from 'stores/theme';
import { userStores } from 'stores/user';
import styled, { ThemeProvider } from 'styled-components';

const AppWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: ${({ theme: { background } }) => background};
`;

const App = () => {
    const { access } = useStore(userStores.auth);
    const theme = useStore(themeStores.theme);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    //const globalPrefixPublicUrl = useStore(themeStores.globalPrefixPublicUrl);

    useEffect(() => {
        access === -1 && themeEvents.injectGlobalPrefixPublic();
        //console.log('yes');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     themeEvents.injectGlobalPrefixPublic();
    // }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppWrapper>
                <Router history={history}>
                    <CardModal />
                    <Switch>
                        <PublicRoute exact component={Home} path={[routes.wrongPath]} />
                        {/* <PublicRoute exact component={Test} path={routes.test} /> */}

                        {/* <PublicRoute exact component={CreateAccount} path={routes.signUp.createAccount} /> */}
                        <PublicRoute
                            exact
                            component={AcceptInvite}
                            path={[routes.signUp.acceptInvite, routes.signUp.acceptOrgInvite]}
                        />
                        <PublicRoute exact component={CreateWallet} path={routes.signUp.createWallet} />
                        <PublicRoute exact component={CreateWalletPayment} path={routes.signUp.payment} />
                        <PublicRoute exact component={CreateWalletSuccess} path={routes.signUp.success} />

                        {/* <PublicRoute exact component={CreateAccount} path={routes.signUp.createAccount} /> */}
                        <PublicRoute
                            exact
                            component={AcceptInvite}
                            // path={[
                            //     ...mergeElementsWithString(companyNameUrls, acceptInvitePath),
                            //     ...mergeElementsWithString(companyNameUrls, acceptOrgInvitePath)
                            // ]}
                            path={[acceptInvitePath, acceptOrgInvitePath]}
                        />
                        <PublicRoute exact component={CreateWallet} path={routes.signUp.createWallet} />
                        <PublicRoute exact component={CreateWalletPayment} path={routes.signUp.payment} />
                        <PublicRoute exact component={CreateWalletSuccess} path={routes.signUp.success} />

                        <PublicRoute exact component={SignIn} path={signInPath} />
                        {/* <PublicRoute exact component={SignInAdmin} path={routes.signIn.admin} /> */}
                        {/* <PublicRoute exact component={SignInAdidas} path={routes.signIn.adidas} /> */}
                        <PublicRoute exact component={RequestCode} path={routes.signIn.requestCode} />
                        <PublicRoute exact component={PasswordReset} path={routes.signIn.passwordReset} />
                        {/* <PublicRoute exact component={NewPasswordReset} path={routes.signIn.password} /> */}

                        {/* <AdminRoute exact component={CreateOrganization} path={routes.admin.createOrganization} /> */}

                        <UserAdminRoute exact component={UserAdmin} path={globalPrefixUrl + routes.userAdmin.index} />

                        <CampaignManagerRoute
                            exact
                            component={CampaignManager}
                            path={globalPrefixUrl + routes.campaignManager.index}
                        />
                        {/* <CampaignManagerRoute exact component={Dashboard} path={routes.campaignManager.dashboard.index} /> */}
                        <CampaignManagerRoute
                            exact
                            component={Discover}
                            path={globalPrefixUrl + routes.campaignManager.discover.index}
                        />
                        <CampaignManagerRoute
                            exact
                            component={DiscoverDetails}
                            path={globalPrefixUrl + routes.campaignManager.discover.details}
                        />
                        <CampaignManagerRoute
                            exact
                            component={Campaign}
                            path={globalPrefixUrl + routes.campaignManager.campaign.index}
                        />
                        <CampaignManagerRoute
                            exact
                            component={CampaignDetails}
                            path={globalPrefixUrl + routes.campaignManager.campaign.details}
                        />
                        <CampaignManagerRoute
                            exact
                            component={CreateCampaign}
                            path={globalPrefixUrl + routes.campaignManager.campaign.create}
                        />
                        {/* <CampaignManagerRoute exact component={Overview} path={routes.campaignManager.overview.index} /> */}
                        <Redirect to={routes.wrongPath} />
                    </Switch>
                </Router>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
