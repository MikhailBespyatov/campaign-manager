import { defaultLimit, defaultPage } from './common';

export const defaultCampaignContentValues: WOM.ContentQueryRequest = {
    returnQueryCount: true,
    pageIndex: defaultPage,
    limit: defaultLimit,
    validationResult: 1
};
