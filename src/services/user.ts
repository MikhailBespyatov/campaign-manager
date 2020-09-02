import { AuthUserRequest, AuthUserResponse } from 'types';
import axios from './axios';

export const authenticateUser = (data: AuthUserRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/validation-user/authenticate',
            data
        },
        false
    );
