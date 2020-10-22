export const globalPrefix = '';
export const adidasPrefix = '/adidas';

const signUpPrefix = '/register';
const walletPrefix = '/create_wallet';
const signInPrefix = '/login';

const campaignManagerPrefix = globalPrefix + '/campaign_manager';

const campaignPrefix = campaignManagerPrefix + '/campaign';
const discoverPrefix = campaignManagerPrefix + '/discover';

const userAdminPrefix = globalPrefix + '/user_admin';

const adminPrefix = '/admin';

// * without global prefix
const passwordResetPrefix = '/password_reset';

export const staticRoutes = {
    wrongPath: '/home',
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
        passwordReset: `${signInPrefix}${passwordResetPrefix}`,
        password: `${passwordResetPrefix}/password`,
        requestCode: `${signInPrefix}${passwordResetPrefix}/security_code`
    },
    admin: {
        createOrganization: `${adminPrefix}/create_organization`
    },
    static: {
        privacy: '/privacy_policy',
        press: '/press'
    }
};

export const dynamicRoutes = {
    home: `${campaignManagerPrefix}`,
    userAdmin: {
        index: userAdminPrefix
    },
    campaignManager: {
        index: campaignManagerPrefix,
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
        }
    }
};

export const routes = {
    ...staticRoutes,
    ...dynamicRoutes
    // test: '/components_test_page',
    // home: `${campaignManagerPrefix}/dashboard`,
    // signUp: {
    //     index: signUpPrefix,
    //     acceptInvite: globalPrefix + '/accept-invite/:inviteCode',
    //     acceptOrgInvite: globalPrefix + '/invite-org/:inviteCode',
    //     createAccount: signUpPrefix,
    //     createWallet: `${signUpPrefix}${walletPrefix}`,
    //     payment: `${signUpPrefix}${walletPrefix}/payment`,
    //     success: `${signUpPrefix}${walletPrefix}/success`
    // },
    // signIn: {
    //     index: signInPrefix,
    //     admin: `${signInPrefix}/admin`,
    //     passwordReset: `${signInPrefix}${passwordResetPrefix}`,
    //     password: `${signInPrefix}${passwordResetPrefix}/password`,
    //     requestCode: `${signInPrefix}${passwordResetPrefix}/security_code`
    // },
    // userAdmin: {
    //     index: userAdminPrefix
    // },
    // admin: {
    //     //index: adminPrefix,
    //     createOrganization: `${adminPrefix}/create_organization`
    //     //user: `${adminPrefix}/user`
    // },
    // campaignManager: {
    //     index: campaignManagerPrefix,
    //     dashboard: {
    //         index: `${campaignPrefix}/dashboard`
    //     },
    //     discover: {
    //         index: `${discoverPrefix}`,
    //         indexDetails: `${discoverPrefix}/details/`,
    //         details: `${discoverPrefix}/details/:discoverId`
    //     },
    //     campaign: {
    //         index: `${campaignPrefix}`,
    //         indexDetails: `${campaignPrefix}/details/`,
    //         details: `${campaignPrefix}/details/:campaignId`,
    //         create: `${campaignPrefix}/create_campaign`,
    //         edit: `${campaignPrefix}/edit_campaign/:campaignId`
    //     },
    //     overview: {
    //         index: `${campaignPrefix}/overview`
    //     }
    // },
    // static: {
    //     privacy: '/privacy_policy',
    //     press: '/press'
    // }
};

export const acceptOrgInvitePath = routes.signUp.acceptOrgInvite;
export const acceptInvitePath = routes.signUp.acceptInvite;
export const signInPath = routes.signIn.index;

export const routesArray = [
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
];
