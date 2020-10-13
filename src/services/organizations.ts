import axios from './axios';

export const getStatisticsById = (data: WOM.OrganizationStatisticsRequest) =>
    axios<WOM.OrganizationStatisticsResponse>({
        url: '/organization/get-statistics',
        data
    });

export const getItemById = (data: WOM.GetOrganizationRequest) =>
    axios<WOM.OrganizationResponse>({
        url: '/organization/get',
        data
    });
