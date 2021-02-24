import { defaultLimit, defaultPage } from 'constants/defaults/common';

export const defaultProductsValues: WOM.QueryRemoteProductsRequest = {
    pageIndex: defaultPage,
    limit: defaultLimit,
    returnQueryCount: true
};
