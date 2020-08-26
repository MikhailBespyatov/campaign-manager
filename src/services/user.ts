import { AuthUserRequest, AuthUserResponse } from 'types';
import axios from './axios';

export const authenticateUser = (data: AuthUserRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/user/authenticate',
            data
        },
        false
    );
