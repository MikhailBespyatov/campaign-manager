import { CURRENT_USER_SET_USER } from 'modules/CurrentUser/store/constants';
import CurrentUserService from 'modules/CurrentUser/CurrentUserService';


export const setCurrentUserAction = (user) => ({
  type: CURRENT_USER_SET_USER,
  payload: user,
});

export const syncCurrentUserAction = () => async (dispatch) => {
  const user = await CurrentUserService.getCurrentUser();
  dispatch(setCurrentUserAction(user));
};
