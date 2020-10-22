import { AuthUserRequest, AuthUserResponse, RegisterUserRequest } from 'types';
import axios from './axios';

export const authenticateUser = (data: WOM.OrganizationUserAuthChallengeRequest) =>
    axios<WOM.UserJwtTokenResponse>(
        {
            url: '/organization/user/authenticate',
            data
            // data: { ...data, organizationId: '5ddbdd2efd92595cf6d94dc1' }
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
        url: '/organization/user/membership-invite',
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
    axios<WOM.UserJwtTokenResponse>(
        {
            url: '/organization/user/membership-accept-invite',
            data
        },
        false
    );

export const sendSecurityCode = (data: WOM.OrganizationUserWantsForgottenPasswordRequest) =>
    axios<WOM.MessageResponseBase>(
        {
            url: '/organization/user/send-forgotten-password-email',
            data
        },
        false
    );

export const resetPasswordAndLoadToken = (data: WOM.OrganizationAuthenticateWithTokenRequest) =>
    axios<AuthUserResponse>(
        {
            url: '/organization/user/authenticate-token',
            data
        },
        false
    );
