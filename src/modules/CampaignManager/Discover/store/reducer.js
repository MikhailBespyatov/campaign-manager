import {
  DISCOVER_SET_CURRENT_PAGE,
  DISCOVER_SET_LIST_TO_PAGE,
  DISCOVER_SYNC_ONE_VIDEO,
} from 'modules/CampaignManager/Discover/store/constants';

const initialState = {
  currentPage: 0,
  totalPages: 0,
  perPage: 32,
  list: {},
  listPerPage: {},
  hashTagsFilterValue: [],
};

const discoverReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case DISCOVER_SET_LIST_TO_PAGE:
      return {
        ...state,
        currentPage: payload.page,
        totalPages: payload.totalPages,
        list: {
          ...state.list,
          ...payload.list,
        },
        listPerPage: { ...state.listPerPage, [payload.page]: Object.keys(payload.list) },
        hashTagsFilterValue: payload.hashTagsFilterValue,
      };
    case DISCOVER_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case DISCOVER_SYNC_ONE_VIDEO:
      return {
        ...state,
        list: {
          ...state.list,
          [payload.contentId]: payload.content,
        },
      };
    default:
      return state;
  }
};

export default discoverReducer;
