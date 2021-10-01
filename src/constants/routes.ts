import { CampaignRoutesType } from 'types';

export const globalPrefix = '';
export const publicPrefix = '/public/';
const publicPrefixUrl = `${publicPrefix}wom`;
const publicDynamicPrefixUrl = `${publicPrefix}:prefix`;

export const parsePublicUrl = (prefix = 'wom', urlTemplate: string) => publicPrefix + prefix + urlTemplate;

// * with global prefix
const campaignManagerPrefix = globalPrefix + '/campaign_manager';

export const campaignPrefix = campaignManagerPrefix + '/campaign';
const discoverPrefix = campaignManagerPrefix + '/discover';
const channelsPrefix = campaignManagerPrefix + '/channels';
const productsPrefix = campaignManagerPrefix + '/products';

export const channelsEdit = channelsPrefix + '/edit_channels';
export const productsEdit = productsPrefix + '/edit_products';

export const product = productsPrefix + '/product';

const userAdminPrefix = globalPrefix + '/user_admin';

// * without global prefix
const adminPrefix = '/admin';

const signUpPrefix = '/register';
const walletPrefix = '/create_wallet';
export const signInPrefix = '/login';
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
        createAccount: signUpPrefix,
        acceptInvite: `${publicDynamicPrefixUrl}${acceptInviteTemplate}`,
        acceptOrgInvite: `${publicDynamicPrefixUrl}${acceptOrgInviteTemplate}`,
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

export const campaignRoutes = { running: '', paused: '', completed: '', expired: '', draft: '' };

export const parseCampaignRoutes = (routesArray: string[]) => ({
    ...(Object.fromEntries(routesArray.map(status => [status, `${campaignPrefix}/${status}/`])) as CampaignRoutesType),
    ...{
        status: `${campaignPrefix}/:status(${routesArray.join('|')})/`
    }
});

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
            ...parseCampaignRoutes(Object.keys(campaignRoutes)),
            // running: `${campaignPrefix}/running/`,
            // paused: `${campaignPrefix}/paused/`,
            // completed: `${campaignPrefix}/completed/`,
            // expired: `${campaignPrefix}/expired/`,
            // status: `${campaignPrefix}/:status(running|paused|completed|expired)/`,
            indexDetails: `${campaignPrefix}/details/`,
            details: `${campaignPrefix}/details/:campaignId`,
            create: `${campaignPrefix}/create_campaign`,
            edit: `${campaignPrefix}/edit_campaign/:campaignId`
        },
        channels: {
            index: `${channelsPrefix}`,
            create: `${channelsPrefix}/create_channels`,
            edit: `${channelsEdit}/:channelId`,
            help: `${channelsPrefix}/help`
        },
        products: {
            index: `${productsPrefix}`,
            product: `${product}/:productId`,
            create: `${productsPrefix}/create_products`,
            edit: `${productsEdit}/:productId`,
            help: `${productsPrefix}/help`
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
export const resetPasswordPath = routes.signIn.passwordReset;
export const requestCodePath = routes.signIn.requestCode;

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
        path: routes.campaignManager.channels.index,
        name: 'Channels',
        subPages: [
            { path: routes.campaignManager.channels.create, name: 'create' },
            { path: channelsEdit, name: 'edit' }
        ]
    },
    {
        path: routes.campaignManager.products.index,
        name: 'Products',
        subPages: [
            { path: routes.campaignManager.products.create, name: 'create' },
            { path: product, name: 'detail' },
            { path: productsEdit, name: 'edit' }
        ]
    },
    {
        path: routes.userAdmin.index,
        name: 'Users',
        proxy: [1]
    }
];
