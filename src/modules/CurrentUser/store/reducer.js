import { CURRENT_USER_SET_USER } from 'modules/CurrentUser/store/constants';
import { AUTH_LOGOUT } from 'modules/Auth/store/constants';

const initialState = null;

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER_SET_USER: {
      return { ...state, ...payload };
    }
    case AUTH_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default currentUserReducer;
