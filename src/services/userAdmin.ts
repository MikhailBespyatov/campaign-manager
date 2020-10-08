import axios from './axios';

export const getItems = (data: WOM.UserQueryRequest) =>
    axios<WOM.UserQueryResponse>({
        url: '/user-admin/query',
        data
    });

export const manageRoles = (data: WOM.UserRoleChangeRequest) =>
    axios<WOM.MessageResponseBase>({
        url: '/user-admin/manage-role',
        data
    });
