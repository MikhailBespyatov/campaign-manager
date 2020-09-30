import { AuthUserRequest, AuthUserResponse, RegisterUserRequest } from 'types';
import axios from './axios';

export const authenticateUser = (data: AuthUserRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/organization-user/authenticate',
            data
        },
        false
    );

export const authenticateAdmin = (data: AuthUserRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/validation-user/authenticate',
            data
        },
        false
    );

export const inviteUser = (data: WOM.OrganizationSendInvitationsRequest) =>
    axios<WOM.MessageResponseBase>({
        url: '/organization-user/membership-invite',
        data
    });

export const createUser = (data: RegisterUserRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/validation-user/create-account',
            data
        },
        false
    );

export const acceptInvitation = (data: WOM.OrganizationAcceptInviteRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/organization-user/membership-accept-invite',
            data
        },
        false
    );
