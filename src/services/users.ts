import axios from './axios';

export const getItemById = (data: WOM.GetUserRequest) =>
    axios<WOM.GetUserResponse>({
        url: '/user/get',
        data
    });
