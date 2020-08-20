import CampaignService from 'modules/CampaignManager/Campaign/CampaignService';
import {
  CAMPAIGN_SET_CURRENT_PAGE,
  CAMPAIGN_SET_LIST_TO_PAGE,
  CAMPAIGN_SET_STAT_INFO,
  CAMPAIGN_SYNC_ONE,
} from 'modules/CampaignManager/Campaign/store/constants';

export const getCampaignsForPageAction = (
  pageIndex,
  returnStatisticsPeriod,
) => async (dispatch, getState) => {
  dispatch({
    type: CAMPAIGN_SET_CURRENT_PAGE,
    payload: pageIndex,
  });

  const { campaign: { perPage, orgId } } = getState();
  const { totalPages, items: list } = await CampaignService.getCampaignList({
    pageIndex,
    returnStatisticsPeriod,
    historicalSets: 1,
    limit: perPage,
    organizationId: orgId,
  });

  dispatch({
    type: CAMPAIGN_SET_LIST_TO_PAGE,
    payload: { list, totalPages, pageIndex },
  });
};

export const getCampaignStatInfoAction = () => async (dispatch, getState) => {
  const { campaign: { orgId } } = getState();

  dispatch({
    type: CAMPAIGN_SET_STAT_INFO,
    payload: await CampaignService.getCampaignStatInfo(orgId),
  });
};

export const syncSingleCampaignAction = (
  {
    campaignId,
    returnStatisticsPeriod,
  },
) => async (dispatch) => {
  const campaign = await CampaignService.getSingleCampaign({
    campaignId,
    returnStatisticsPeriod,
  });

  dispatch({
    type: CAMPAIGN_SYNC_ONE,
    payload: { campaignId, campaign },
  });
};
