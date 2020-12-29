import { defaultLimit, defaultPage } from './common';

export const defaultCampaignContentValues: WOM.ContentQueryRequest = {
    returnQueryCount: true,
    pageIndex: defaultPage,
    limit: defaultLimit,
    validationResult: 1
};

export const defaultCampaignStatusStore = { running: 0, paused: 0, completed: 0, expired: 0 };
