import {
  CAMPAIGN_SET_CURRENT_PAGE,
  CAMPAIGN_SET_LIST_TO_PAGE,
  CAMPAIGN_SET_STAT_INFO,
  CAMPAIGN_SYNC_ONE,
} from 'modules/CampaignManager/Campaign/store/constants';

const initialState = {
  statInfo: {},
  currentPage: 0,
  totalPages: 0,
  perPage: 10,
  list: {},
  listPerPage: {},
  orgId: '5ddbdd2efd92595cf6d94dc1',
};

const campaignReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_SET_LIST_TO_PAGE:
      return {
        ...state,
        currentPage: payload.pageIndex,
        totalPages: payload.totalPages,
        list: {
          ...state.list,
          ...payload.list,
        },
        listPerPage: { ...state.listPerPage, [payload.pageIndex]: Object.keys(payload.list) },
      };
    case CAMPAIGN_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case CAMPAIGN_SET_STAT_INFO:
      return { ...state, statInfo: payload };
    case CAMPAIGN_SYNC_ONE:
      return {
        ...state,
        list: {
          ...state.list,
          [payload.campaignId]: payload.campaign,
        },
      };
    default:
      return state;
  }
};

export default campaignReducer;
