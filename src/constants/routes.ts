export const globalPrefix = '';
export const publicPrefix = '/public/';
const publicPrefixUrl = `${publicPrefix}:prefix`;

export const parsePublicUrl = (prefix = 'wom', urlTemplate: string) => publicPrefix + prefix + urlTemplate;

// * with global prefix
const campaignManagerPrefix = globalPrefix + '/campaign_manager';

const campaignPrefix = campaignManagerPrefix + '/campaign';
const discoverPrefix = campaignManagerPrefix + '/discover';

const userAdminPrefix = globalPrefix + '/user_admin';

// * without global prefix
const adminPrefix = '/admin';

const signUpPrefix = '/register';
const walletPrefix = '/create_wallet';
const signInPrefix = '/login';
const passwordResetPrefix = '/password_reset';

// * public urls templates
export const acceptInviteTemplate = '/accept-invite/:inviteCode';
export const acceptOrgInviteTemplate = '/invite-org/:inviteCode';
export const signInIndexTemplate = signInPrefix;
export const passwordResetTemplate = `${signInPrefix}${passwordResetPrefix}`;
export const requestCodeTemplate = `${signInPrefix}${passwordResetPrefix}/security_code`;

export const staticRoutes = {
    wrongPath: '/home',
    signUp: {
        index: signUpPrefix,
        acceptInvite: `${publicPrefixUrl}${acceptInviteTemplate}`,
        acceptOrgInvite: `${publicPrefixUrl}${acceptOrgInviteTemplate}`,
        createAccount: signUpPrefix,
        createWallet: `${signUpPrefix}${walletPrefix}`,
        payment: `${signUpPrefix}${walletPrefix}/payment`,
        success: `${signUpPrefix}${walletPrefix}/success`
    },
    signIn: {
        index: `${publicPrefixUrl}${signInIndexTemplate}`,
        admin: `${publicPrefixUrl}${signInPrefix}/admin`,
        passwordReset: `${publicPrefixUrl}${passwordResetTemplate}`,
        password: `${publicPrefixUrl}${passwordResetPrefix}/password`,
        requestCode: `${publicPrefixUrl}${requestCodeTemplate}`
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
