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

export const getIdentity = (data: WOM.OrganizationIdentityRequest) =>
    axios<WOM.OrganizationIdentityResponse>({
        url: '/organization/get-identity',
        data
    });

export const createOrganization = (data: WOM.CreateOrganizationRequest) =>
    axios<WOM.OrganizationResponse>({
        url: '/organization/create',
        data
    });

// export const getUsersByOrganizationId = (data: WOM.OrganizationQueryUsersRequest) =>
//     axios<WOM.OrganizationQueryUsersResponse>({
//         url: '/organization/user/query',
//         data
//     });
