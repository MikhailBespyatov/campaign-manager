export const userRoles = {
    admin: 'Administrator',
    orgAdmin: 'OrganizationAdministrator',
    orgMember: 'OrganizationMember',
    campaignAdmin: 'CampaignAdministrator'
};

export const accessRoles = [
    userRoles.admin,
    userRoles.orgAdmin,
    userRoles.orgMember,
    userRoles.campaignAdmin,
    'Validator'
];

export const accessValues = [0, 1, 2, 3, 4];

export default userRoles;
