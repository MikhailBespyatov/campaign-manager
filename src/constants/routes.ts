export const adidasGlobalPrefix = '/adidas';

const signUpPrefix = adidasGlobalPrefix + '/register';
const walletPrefix = adidasGlobalPrefix + '/create_wallet';
const signInPrefix = adidasGlobalPrefix + '/login';
const adidasPrefix = adidasGlobalPrefix + '/adidas';

const campaignManagerPrefix = adidasGlobalPrefix + '/campaign_manager';

const campaignPrefix = campaignManagerPrefix + '/campaign';
const discoverPrefix = campaignManagerPrefix + '/discover';

const userAdminPrefix = adidasGlobalPrefix + '/user_admin';

const adminPrefix = adidasGlobalPrefix + '/admin';

// * without global prefix
const passwordResetPrefix = '/password_reset';

export const routes = {
    test: '/components_test_page',
    home: `${campaignManagerPrefix}/dashboard`,
    signUp: {
        index: signUpPrefix,
        acceptInvite: adidasGlobalPrefix + '/accept-invite/:inviteCode',
        acceptOrgInvite: adidasGlobalPrefix + '/invite-org/:inviteCode',
        createAccount: signUpPrefix,
        createWallet: `${signUpPrefix}${walletPrefix}`,
        payment: `${signUpPrefix}${walletPrefix}/payment`,
        success: `${signUpPrefix}${walletPrefix}/success`
    },
    signIn: {
        index: signInPrefix,
        admin: `${signInPrefix}/admin`,
        adidas: `${signInPrefix}${adidasPrefix}`,
        passwordReset: `${signInPrefix}${passwordResetPrefix}`,
        password: `${signInPrefix}${passwordResetPrefix}/password`,
        requestCode: `${signInPrefix}${passwordResetPrefix}/security_code`
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
        index: campaignManagerPrefix,
        dashboard: {
            index: `${campaignPrefix}/dashboard`
        },
        discover: {
            index: `${discoverPrefix}`,
            indexDetails: `${discoverPrefix}/details/`,
            details: `${discoverPrefix}/details/:discoverId`
        },
        campaign: {
            index: `${campaignPrefix}`,
            indexDetails: `${campaignPrefix}/details/`,
            details: `${campaignPrefix}/details/:campaignId`,
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
        name: 'Discover',
        subPages: [{ path: routes.campaignManager.discover.indexDetails, name: 'details' }]
    },
    {
        path: routes.campaignManager.campaign.index,
        name: 'Campaign',
        subPages: [
            { path: routes.campaignManager.campaign.create, name: 'create' },
            { path: routes.campaignManager.campaign.indexDetails, name: 'details' }
        ]
    },
    {
        path: routes.userAdmin.index,
        name: 'Users',
        proxy: [1]
    }
    // ,{
    //     path: routes.campaignManager.overview.index,
    //     name: 'Overview'
    // }
];
