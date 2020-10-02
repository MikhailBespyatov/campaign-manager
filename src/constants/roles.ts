export const userRoles = {
    admin: 'Administrator',
    orgAdmin: 'OrganizationAdministrator',
    orgMember: 'OrganizationMember',
    campaignAdmin: 'CampaignAdministrator'
};

export const accessRoles = [userRoles.admin, userRoles.orgAdmin, userRoles.orgMember, userRoles.campaignAdmin];

export const accessValues = [0, 1, 2, 3];

export default userRoles;
