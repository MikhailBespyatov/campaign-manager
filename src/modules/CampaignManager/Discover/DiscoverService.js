import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';
import { videoListTransformer } from 'modules/CampaignManager/Discover/transformers';
import statisticsTransformer from 'modules/CampaignManager/components/charts/statisticsTransformer';

const urlPrefix = '';

const DiscoverService = {
  getList: (params) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/campaign-content/query`, {
      ...params,
      returnQueryCount: true,
    },
  ).then(({ items, ...rest }) => ({
    ...rest,
    items: videoListTransformer(items),
  })),

  getSingleVideo: (contentId) => AuthorizedAxiosInstance
    .post(`${urlPrefix}/campaign-content/get`, { contentId }),

  getVideoStatistics: (queryData) => AuthorizedAxiosInstance
    .post(`${urlPrefix}/campaign-content/query-statistics`, {
      ...queryData,
      returnQueryCount: false,
    })
    .then(({ items }) => statisticsTransformer(items)),
};

export default DiscoverService;
