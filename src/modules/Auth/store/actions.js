import AuthService from 'modules/Auth/AuthService';
import {
  AUTH_INIT,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from 'modules/Auth/store/constants';
import { setCurrentUserAction, syncCurrentUserAction } from 'modules/CurrentUser/store/actions';
import errorToastr from 'libs/toastr/errorToastr';


export const initAuthAction = () => async (dispatch) => {
  if (AuthService.hasToken()) {
    try {
      await dispatch(syncCurrentUserAction());
    } catch (e) {
      errorToastr('Current user sync failed');
    }
  }
  dispatch({
    type: AUTH_INIT,
    payload: AuthService.getToken(),
  });
};

export const saveUserAndSignIn = ({ user, token }) => (dispatch) => {
  AuthService.setToken(token);
  dispatch(setCurrentUserAction(user));
  dispatch({
    type: AUTH_LOGIN,
    payload: token,
  });
};

export const signInAction = (formValues) => async (dispatch) => {
  const userJwtTokenResponse = await AuthService.login(formValues);
  dispatch(saveUserAndSignIn(userJwtTokenResponse));
};

export const resetPasswordAction = ({ email, password, confirmationToken }) => async (dispatch) => {
  const userJwtTokenResponse = await AuthService.resetPassword({
    email,
    password,
    confirmationToken,
  });
  dispatch(saveUserAndSignIn(userJwtTokenResponse));
};

export const logoutAction = () => async (dispatch) => {
  AuthService.logout();
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const sendSecurityCodeAction = (email) => async () => {
  await AuthService.sendSecurityCode(email);
};
