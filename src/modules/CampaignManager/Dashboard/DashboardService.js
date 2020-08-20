import statisticsTransformer from 'modules/CampaignManager/components/charts/statisticsTransformer';
import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';

const urlPrefix = '';

const DashboardService = {
  getCampaignsData: (params) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization/query-statistics`,
    {
      ...params,
      historicalSets: 1,
      returnQueryCount: false,
    },
  ).then(({ deltaStatistics, sets}) => ({
    deltaStatistics,
    summary: sets[0].summary,
    statistics: statisticsTransformer(sets[0].items),
  })),
};

export default DashboardService;
