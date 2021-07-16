import axios from './axios';

export const getItemById = (data: WOM.CampaignGetRequest) =>
    axios<WOM.CampaignDetailResponse>({
        url: '/campaign/get',
        data
    });

export const getItems = (data: WOM.CampaignsQueryRequest) =>
    axios<WOM.CampaignsQueryResponse>({
        url: '/campaign/query',
        data
    });

export const getStatisticsItems = (data: WOM.CampaignStatisticsQueryRequest) =>
    axios<WOM.CampaignStatisticsQueryResponse>({
        url: '/campaign/query-statistics',
        data
    });

export const upsertItem = (data: WOM.CampaignUpsertRequest) =>
    axios<WOM.CampaignDetailResponse>({
        url: '/campaign/upsert',
        data: {
            ...data,
            schedule: {
                ...data.schedule,
                isEnabled: true
            }
        }
    });

export const getItemsByContentId = (data: WOM.CampaignsContentRequest) =>
    axios<WOM.CampaignDetailResponse[]>({
        url: '/campaign/query-by-content',
        data
    });

export const getMerchantQuery = (data: WOM.CampaignMerchantQueryRequest) =>
    axios<WOM.CampaignMerchantQueryResponse>({
        url: '/campaign/merchant/query',
        data
    });
