const forgotPasswordPrefix = '/forgot_password';
const adminPrefix = '/admin';
const campaignPrefix = '/campaign_manager';

export const routes = {
    test: '/components_test_page',
    home: '/',
    signIn: '/sign_in',
    signUp: '/sign_up',
    forgotPassword: {
        index: forgotPasswordPrefix,
        requestCode: `${forgotPasswordPrefix}/request_code`,
        passwordReset: `${forgotPasswordPrefix}/password_reset`
    },
    acceptInvite: '/accept_invite/:inviteCode',
    admin: {
        index: adminPrefix,
        organization: `${adminPrefix}/organization`,
        user: `${adminPrefix}/user`
    },
    campaignManager: {
        index: campaignPrefix,
        dashboard: {
            index: `${campaignPrefix}/dashboard`
        },
        discover: {
            list: `${campaignPrefix}/discover`,
            details: (contentId = ':contentId') => `${campaignPrefix}/discover/${contentId}`
        },
        campaign: {
            list: `${campaignPrefix}/campaign`,
            create: `${campaignPrefix}/campaign/create`,
            details: (campaignId = ':campaignId') => `${campaignPrefix}/campaign/details/${campaignId}`,
            edit: (campaignId = ':campaignId') => `${campaignPrefix}/campaign/edit/${campaignId}`
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
    {
        path: routes.campaignManager.dashboard.index,
        name: 'Dashboard'
    },
    {
        path: routes.campaignManager.discover.list,
        name: 'Discover'
    },
    {
        path: routes.campaignManager.campaign.list,
        name: 'Campaign'
    },
    {
        path: routes.campaignManager.overview.index,
        name: 'Overview'
    }
];

const routeByName = {
    home: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    forgotPassword: {
        index: forgotPasswordPrefix,
        requestCode: `${forgotPasswordPrefix}/request-code`,
        passwordReset: `${forgotPasswordPrefix}/password-reset`
    },
    acceptInvite: '/accept-invite/:inviteCode',
    admin: {
        index: adminPrefix,
        organization: `${adminPrefix}/organization`,
        user: `${adminPrefix}/user`
    },
    campaignManager: {
        index: campaignPrefix,
        dashboard: {
            index: `${campaignPrefix}/dashboard`
        },
        discover: {
            list: `${campaignPrefix}/discover`,
            details: (contentId = ':contentId') => `${campaignPrefix}/discover/${contentId}`
        },
        campaign: {
            list: `${campaignPrefix}/campaign`,
            create: `${campaignPrefix}/campaign/create`,
            details: (campaignId = ':campaignId') => `${campaignPrefix}/campaign/details/${campaignId}`,
            edit: (campaignId = ':campaignId') => `${campaignPrefix}/campaign/edit/${campaignId}`
        }
    },
    static: {
        privacy: '/privacy-policy',
        press: '/press'
    }
};

export default routeByName;
