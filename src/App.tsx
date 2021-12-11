import history from 'BrowserHistory';
import { AlertModal } from 'components/modals/AlertModal';
import { AsyncModal } from 'components/modals/AsyncModal';
import { CardModal } from 'components/modals/CardModal';
import { CongratsModal } from 'components/modals/CongratsModal';
import { NotificationModal } from 'components/modals/Notification';
import { PopUpCampaignManager } from 'components/modals/PopUpCamaignManager';
import { QexWidgetModal } from 'components/modals/QexWidgetModal';
import { WalletModal } from 'components/modals/WalletModal';
import { acceptInvitePath, acceptOrgInvitePath, routes, signInPath } from 'constants/routes';
import { GlobalStyle } from 'constants/styles';
import { useStore } from 'effector-react';
import { CampaignManager } from 'pages/CampaignManager';
import { Campaign } from 'pages/CampaignManager/Campaign';
import { Create } from 'pages/CampaignManager/Campaign/Create';
import { Details as CampaignDetails } from 'pages/CampaignManager/Campaign/Details';
import { Channels } from 'pages/CampaignManager/Channels';
import { Channel } from 'pages/CampaignManager/Channels/Channel';
import { CreateChannel } from 'pages/CampaignManager/Channels/Create';
import { EditChannel } from 'pages/CampaignManager/Channels/Edit';
import { HelpChannel } from 'pages/CampaignManager/Channels/Help';
import { Discover } from 'pages/CampaignManager/Discover';
import { Financials } from 'pages/CampaignManager/Financials';
import { Products } from 'pages/CampaignManager/Products';
import { CreateProduct } from 'pages/CampaignManager/Products/Create';
import { EditProduct } from 'pages/CampaignManager/Products/Edit';
import { HelpProduct } from 'pages/CampaignManager/Products/Help';
import { Product } from 'pages/CampaignManager/Products/Product';
import { Home } from 'pages/Home';
import { SignIn } from 'pages/SignIn';
import { PasswordReset } from 'pages/SignIn/PasswordReset';
import { RequestCode } from 'pages/SignIn/PasswordReset/RequestCode';
import { CreateAccount } from 'pages/SignUp';
import { AcceptInvite } from 'pages/SignUp/AcceptInvite';
import { CreateWallet } from 'pages/SignUp/CreateWallet';
import { Payment as CreateWalletPayment } from 'pages/SignUp/CreateWallet/Payment';
import { Success as CreateWalletSuccess } from 'pages/SignUp/CreateWallet/Success';
import { UserAdmin } from 'pages/UserAdmin';
import React from 'react';
import { Redirect, Router, Switch } from 'react-router';
import { CampaignManagerRoute } from 'routes/CampaignManagerRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { UserAdminRoute } from 'routes/UserAdminRoute';
import { themeStores } from 'stores/theme';
import styled, { ThemeProvider } from 'styled-components';
import 'sweetalert2/src/sweetalert2.scss';

const AppWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme: { background } }) => background};
`;

const App = () => {
    // const { access } = useStore(userStores.auth);
    const theme = useStore(themeStores.theme);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    //const globalPrefixPublicUrl = useStore(themeStores.globalPrefixPublicUrl);

    // useEffect(() => {
    //     access === -1 && themeEvents.injectGlobalPrefixPublic();
    //     //console.log('yes');
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useEffect(() => {
    //     themeEvents.injectGlobalPrefixPublic();
    // }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <AppWrapper>
                <NotificationModal />
                <Router history={history}>
                    {/* * public modal */}
                    <CardModal />
                    <QexWidgetModal />
                    <WalletModal />
                    <PopUpCampaignManager />
                    <CongratsModal />
                    <AsyncModal />
                    <AlertModal />
                    <Switch>
                        {/* * public */}
                        <PublicRoute exact component={Home} path={[routes.wrongPath]} />
                        {/* <PublicRoute exact component={Test} path={routes.test} /> */}
                        <PublicRoute exact component={CreateAccount} path={routes.signUp.index} />
                        <PublicRoute
                            exact
                            component={AcceptInvite}
                            path={[routes.signUp.acceptInvite, routes.signUp.acceptOrgInvite]}
                        />
                        <PublicRoute exact component={CreateWallet} path={routes.signUp.createWallet} />
                        <PublicRoute exact component={CreateWalletPayment} path={routes.signUp.payment} />
                        <PublicRoute exact component={CreateWalletSuccess} path={routes.signUp.success} />
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
                            component={Create}
                            path={globalPrefixUrl + routes.campaignManager.campaign.create}
                        />

                        <CampaignManagerRoute
                            exact
                            component={Channels}
                            path={globalPrefixUrl + routes.campaignManager.channels.index}
                        />
                        <CampaignManagerRoute
                            exact
                            component={Channel}
                            path={globalPrefixUrl + routes.campaignManager.channels.channel}
                        />
                        <CampaignManagerRoute
                            exact
                            component={CreateChannel}
                            path={globalPrefixUrl + routes.campaignManager.channels.create}
                        />
                        <CampaignManagerRoute
                            exact
                            component={EditChannel}
                            path={globalPrefixUrl + routes.campaignManager.channels.edit}
                        />

                        <CampaignManagerRoute
                            exact
                            component={Products}
                            path={globalPrefixUrl + routes.campaignManager.products.index}
                        />
                        <CampaignManagerRoute
                            exact
                            component={Product}
                            path={globalPrefixUrl + routes.campaignManager.products.product}
                        />
                        <CampaignManagerRoute
                            exact
                            component={CreateProduct}
                            path={globalPrefixUrl + routes.campaignManager.products.create}
                        />
                        <CampaignManagerRoute
                            exact
                            component={EditProduct}
                            path={globalPrefixUrl + routes.campaignManager.products.edit}
                        />
                        <CampaignManagerRoute
                            exact
                            component={HelpProduct}
                            path={globalPrefixUrl + routes.campaignManager.products.help}
                        />
                        {/* <CampaignManagerRoute
                            exact
                            component={DiscoverDetails}
                            path={globalPrefixUrl + routes.campaignManager.discover.details}
                        /> */}
                        {/*<CampaignManagerRoute*/}
                        {/*    exact*/}
                        {/*    component={Campaign}*/}
                        {/*    path={globalPrefixUrl + routes.campaignManager.campaign.index}*/}
                        {/*/>*/}
                        <Redirect
                            exact
                            path={globalPrefixUrl + routes.campaignManager.campaign.index}
                            to={globalPrefixUrl + routes.campaignManager.campaign.running}
                        />
                        <CampaignManagerRoute
                            exact
                            component={Campaign}
                            path={globalPrefixUrl + routes.campaignManager.campaign.status}
                        />
                        <CampaignManagerRoute
                            exact
                            component={CampaignDetails}
                            path={globalPrefixUrl + routes.campaignManager.campaign.details}
                        />
                        <CampaignManagerRoute
                            exact
                            component={HelpChannel}
                            path={globalPrefixUrl + routes.campaignManager.channels.help}
                        />
                        <CampaignManagerRoute
                            exact
                            component={Financials}
                            path={globalPrefixUrl + routes.campaignManager.financials.index}
                        />
                        {/* <CampaignManagerRoute
                            exact
                            component={DiscoverDetails}
                            path={globalPrefixUrl + routes.campaignManager.discover.details}
                        /> */}
                        {/*<CampaignManagerRoute*/}
                        {/*    exact*/}
                        {/*    component={Campaign}*/}
                        {/*    path={globalPrefixUrl + routes.campaignManager.campaign.index}*/}
                        {/*/>*/}

                        {/* * admin */}
                        <UserAdminRoute exact component={UserAdmin} path={globalPrefixUrl + routes.userAdmin.index} />

                        {/* * error status */}
                        <Redirect to={routes.wrongPath} />
                    </Switch>
                </Router>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;
