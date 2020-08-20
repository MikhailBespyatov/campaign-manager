import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';
import { usersListTransformer } from 'modules/Admin/Users/transformers';
import { userPermissions } from 'modules/Admin/Users/contants';
import BaseAxiosInstance from 'libs/axiosInstances/BaseAxiosInstance';
import userTransformer from 'modules/Users/userTransformer';

const urlPrefix = '';

const UsersService = {
  getList: (params) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization-user/query`, {
      ...params,
      returnQueryCount: true,
    },
  ).then(({ items, ...rest }) => ({
    ...rest,
    items: usersListTransformer(items),
  })),

  getSingleUser: (userId) => AuthorizedAxiosInstance
    .post(`${urlPrefix}/user/get`, { userId })
    .then((user) => userTransformer(user)),

  inviteToOrg: (orgId, userData) => AuthorizedAxiosInstance
    .post(
      `${urlPrefix}/organization-user/membership-invite`, {
        organizationId: orgId,
        invitations: [userData],
      },
    ),

  sendPasswordResetEmail: (email) => AuthorizedAxiosInstance
    .post(
      `${urlPrefix}/organization-user/send-forgotten-password-email`,
      { email },
    ),

  acceptInvite: (inviteCode, password) => BaseAxiosInstance.post(
    `${urlPrefix}/organization-user/membership-accept-invite`,
    {
      inviteCode,
      password,
    },
  ).then(({ token, user }) => ({
    token,
    user: userTransformer(user),
  })),

  makeUserAdmin: (orgId, userId) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization-user/membership-modify`,
    {
      organizationId: orgId,
      userId,
      permission: userPermissions.admin,
    },
  ),
  makeUserMember: (orgId, userId) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization-user/membership-modify`,
    {
      organizationId: orgId,
      userId,
      permission: userPermissions.member,
    },
  ),

  removeUserFromOrg: (orgId, userId) => AuthorizedAxiosInstance.post(
    `${urlPrefix}/organization-user/membership-modify`,
    {
      organizationId: orgId,
      userId,
      permission: userPermissions.none,
    },
  ),

};

export default UsersService;
