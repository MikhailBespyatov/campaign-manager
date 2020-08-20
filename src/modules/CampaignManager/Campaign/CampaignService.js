import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';
import { campaignsListTransformer, campaignsStatInfoTransformer } from 'modules/CampaignManager/Campaign/transformers';
import statisticsTransformer from 'modules/CampaignManager/components/charts/statisticsTransformer';

const urlPrefix = '';

const CampaignService = {
  getCampaignList: (params) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/campaign/query`, {
      ...params,
      returnQueryCount: true,
    },
  ).then(({ items, ...rest }) => ({
    ...rest,
    items: campaignsListTransformer(items),
  })),

  getSingleCampaign: (params) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/campaign/get`,
    { ...params },
  ),

  getCampaignStatInfo: (organizationId) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization/get-statistics`,
    { organizationId },
  ).then((response) => campaignsStatInfoTransformer(response)),

  getCampaignStatistics: (queryData) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/campaign/query-statistics`,
    {
      ...queryData,
      historicalSets: 1,
      returnQueryCount: false,
    },
  ).then(({ sets }) => statisticsTransformer(sets[0].items)),

  updateCampaign: (data) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/campaign/upsert`,
    data,
  ),
};

export default CampaignService;
