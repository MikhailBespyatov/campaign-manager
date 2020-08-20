import {
  USERS_REMOVE, USERS_SET_CURRENT_PAGE,
  USERS_SET_LIST_TO_PAGE, USERS_SYNC_ONE,
} from 'modules/Admin/Users/store/constants';
import UsersService from 'modules/Admin/Users/UsersService';
import RequestError from 'errors/RequestError';
import OrganizationService from 'modules/Admin/Organization/OrganizationService';
import { saveUserAndSignIn } from 'modules/Auth/store/actions';

export const setUsersToPageAction = (payload) => ({
  type: USERS_SET_LIST_TO_PAGE,
  payload,
});

export const getUsersForPageAction = (page, textSearch) => async (dispatch, getState) => {
  dispatch({
    type: USERS_SET_CURRENT_PAGE,
    payload: page,
  });
  const { users: { perPage, orgId } } = getState();

  const { items, totalPages } = await UsersService.getList({
    organizationId: orgId,
    pageIndex: page,
    limit: perPage,
    textSearch,
  });

  const organization = await OrganizationService.getOrganizationById(orgId);

  dispatch(setUsersToPageAction({
    page,
    list: items,
    totalPages,
    organization,
    textSearch,
  }));
};

export const updateUsersForCurrentPageAction = () => async (dispatch, getState) => {
  const { users: { currentPage } } = getState();

  await dispatch(getUsersForPageAction(currentPage));
};

/**
 * Creates user in database, but with password reset requirements
 * @param orgId
 * @param formData
 * @returns {Function}
 */

export const sendInviteToOrgAction = (orgId, formData) => async (dispatch) => {
  await UsersService.inviteToOrg(orgId, formData);

  await dispatch(updateUsersForCurrentPageAction());
};

export const acceptInviteAction = (inviteCode, password) => async (dispatch) => {
  const userJwtTokenResponse = await UsersService.acceptInvite(inviteCode, password);
  dispatch(saveUserAndSignIn(userJwtTokenResponse));
};

export const syncSingleUserAction = (orgId, userId) => async (dispatch) => {
  dispatch({
    type: USERS_SYNC_ONE,
    payload: {
      userId,
      user: await UsersService.getSingleUser(userId),
      organization: await OrganizationService.getOrganizationById(orgId),
    },
  });
};

export const sendPasswordResetEmailAction = (userId) => async (dispatch, getState) => {
  const { users: { list: { [userId]: user } } } = getState();

  if (!user) {
    throw new RequestError({ message: 'Something wend wrong' });
  }

  const { email } = user;

  await UsersService.sendPasswordResetEmail(email);
};

export const makeUserAdminAction = (userId) => async (dispatch, getState) => {
  const {
    users: {
      list: { [userId]: user },
      orgId,
    },
  } = getState();

  if (!user) {
    throw new RequestError({ message: 'Something wend wrong' });
  }

  await UsersService.makeUserAdmin(orgId, userId);
  await dispatch(syncSingleUserAction(orgId, userId));
};

export const makeUserMemberAction = (userId) => async (dispatch, getState) => {
  const {
    users: {
      list: { [userId]: user },
      orgId,
    },
  } = getState();

  if (!user) {
    throw new RequestError({ message: 'Something wend wrong' });
  }

  await UsersService.makeUserMember(orgId, userId);
  await dispatch(syncSingleUserAction(orgId, userId));
};

export const removeUserFromOrgAction = (userId) => async (dispatch, getState) => {
  const {
    users: {
      list: { [userId]: user },
      orgId,
    },
  } = getState();

  if (!user) {
    throw new RequestError({ message: 'Something went wrong' });
  }

  await UsersService.removeUserFromOrg(orgId, userId);
  await dispatch(updateUsersForCurrentPageAction());

  dispatch({
    type: USERS_REMOVE,
    payload: userId,
  });
};

export default {
  setAdminUsersToPageAction: setUsersToPageAction,
};
