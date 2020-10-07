const signUpPrefix = '/register';
const walletPrefix = '/create_wallet';
const signInPrefix = '/login';
const adidasPrefix = '/adidas';
const passwordResetPrefix = '/password_reset';

const campaignPrefix = '/campaign_manager';
const userAdminPrefix = '/user_admin';

const adminPrefix = '/admin';

export const routes = {
    test: '/components_test_page',
    home: `${campaignPrefix}/dashboard`,
    signUp: {
        index: signUpPrefix,
        acceptInvite: '/accept-invite/:inviteCode',
        acceptOrgInvite: '/invite-org/:inviteCode',
        createAccount: signUpPrefix,
        createWallet: `${signUpPrefix}${walletPrefix}`,
        payment: `${signUpPrefix}${walletPrefix}/payment`,
        success: `${signUpPrefix}${walletPrefix}/success`
    },
    signIn: {
        index: signInPrefix,
        admin: `${signInPrefix}/admin`,
        adidas: `${signInPrefix}${adidasPrefix}`,
        passwordReset: `${signInPrefix}${adidasPrefix}${passwordResetPrefix}`,
        password: `${signInPrefix}${adidasPrefix}${passwordResetPrefix}/password`,
        requestCode: `${signInPrefix}${adidasPrefix}${passwordResetPrefix}/security_code`
    },
    userAdmin: {
        index: userAdminPrefix
    },
    admin: {
        //index: adminPrefix,
        createOrganization: `${adminPrefix}/create_organization`
        //user: `${adminPrefix}/user`
    },
    campaignManager: {
        index: campaignPrefix,
        dashboard: {
            index: `${campaignPrefix}/dashboard`
        },
        discover: {
            index: `${campaignPrefix}/discover`,
            details: `${campaignPrefix}/discover/:discoverId`
        },
        campaign: {
            index: `${campaignPrefix}/campaign`,
            details: `${campaignPrefix}/campaign/:campaignId`,
            create: `${campaignPrefix}/create_campaign`,
            edit: `${campaignPrefix}/edit_campaign/:campaignId`
        },
        overview: {
            index: `${campaignPrefix}/overview`
        }
    },
    static: {
        privacy: '/privacy_policy',
        press: '/press'
    }
};

export const routesArray = [
    // {
    //     path: routes.campaignManager.dashboard.index,
    //     name: 'Dashboard'
    // },
    {
        path: routes.campaignManager.discover.index,
        name: 'Discover'
    },
    {
        path: routes.campaignManager.campaign.index,
        name: 'Campaign'
    }
    // ,{
    //     path: routes.campaignManager.overview.index,
    //     name: 'Overview'
    // }
];
