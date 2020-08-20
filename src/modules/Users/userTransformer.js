import userRoles from 'constants/userRoles';

const hasRole = (roles, role) => roles
  .map((item) => item.toLowerCase())
  .includes(role.toLowerCase());

const userTransformer = (user) => ({
  ...user,
  isAdmin: hasRole(user.roles, userRoles.admin),
  isOrgAdmin: hasRole(user.roles, userRoles.orgAdmin),
  isOrgMember: hasRole(user.roles, userRoles.orgMember),
  isCampaignAdmin: hasRole(user.roles, userRoles.campaignAdmin),
});

export default userTransformer;
