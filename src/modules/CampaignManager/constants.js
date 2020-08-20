import routeByName from 'constants/routes';

export const navLinksConfig = [
  {
    title: 'Dashboard',
    route: routeByName.campaignManager.dashboard.index,
  },
  {
    title: 'Discover',
    route: routeByName.campaignManager.discover.list,
  },
  {
    title: 'Campaign',
    route: routeByName.campaignManager.campaign.list,
  },
];

export const dayAmountSelectOptions = [
  {
    title: '7 Days',
    value: 7,
  },
  {
    title: '14 Days',
    value: 14,
  },
  {
    title: '28 Days',
    value: 28,
  },
  {
    title: '90 Days',
    value: 90,
  },
];
