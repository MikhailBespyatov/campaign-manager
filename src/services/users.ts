import axios from './axios';

export const getItemById = (data: WOM.GetUserRequest) =>
    axios<WOM.GetUserResponse>({
        url: '/user/get',
        data
    });

export const getOrganizationItems = (id: string) =>
    axios<WOM.OrganizationQueryUsersResponse>({
        url: '/organization/user/query',
        data: {
            organizationId: id
        }
    });
