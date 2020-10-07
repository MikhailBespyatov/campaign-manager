export const adidasGlobalPrefix = '/adidas';

const signUpPrefix = adidasGlobalPrefix + '/register';
const walletPrefix = adidasGlobalPrefix + '/create_wallet';
const signInPrefix = adidasGlobalPrefix + '/login';
const adidasPrefix = adidasGlobalPrefix + '/adidas';
const passwordResetPrefix = adidasGlobalPrefix + '/password_reset';

const campaignPrefix = adidasGlobalPrefix + '/campaign_manager';
const userAdminPrefix = adidasGlobalPrefix + '/user_admin';

const adminPrefix = adidasGlobalPrefix + '/admin';

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
