import DiscoverService from 'modules/CampaignManager/Discover/DiscoverService';
import {
  DISCOVER_SET_CURRENT_PAGE,
  DISCOVER_SET_LIST_TO_PAGE,
  DISCOVER_SYNC_ONE_VIDEO,
} from 'modules/CampaignManager/Discover/store/constants';

export const setVideosToPageAction = (payload) => ({
  type: DISCOVER_SET_LIST_TO_PAGE,
  payload,
});

export const getVideosForPageAction = (page, hashTagsFilterValue) => async (dispatch, getState) => {
  dispatch({
    type: DISCOVER_SET_CURRENT_PAGE,
    payload: page,
  });

  const { discover: { perPage } } = getState();
  const { items, totalPages } = await DiscoverService.getList({
    pageIndex: page,
    limit: perPage,
    tagsAll: hashTagsFilterValue,
  });

  dispatch(setVideosToPageAction({
    page,
    list: items,
    totalPages,
    hashTagsFilterValue,
  }));
};

export const syncSingleVideoAction = (contentId) => async (dispatch) => {
  const content = await DiscoverService.getSingleVideo(contentId);
  dispatch({
    type: DISCOVER_SYNC_ONE_VIDEO,
    payload: { contentId, content },
  });
};
