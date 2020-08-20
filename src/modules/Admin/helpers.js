import routeByName from 'constants/routes';

const navLinksConfig = {
  organization: {
    title: 'Organization',
    route: routeByName.admin.organization,
  },
  user: {
    title: 'User',
    route: routeByName.admin.user,
  },
};

export const getNavLinksByRole = ({ isAdmin, isOrgAdmin }) => {
  const { organization, user } = navLinksConfig;
  if (isAdmin) {
    return [organization, user];
  }

  if (isOrgAdmin) {
    return [user];
  }

  return [];
};
