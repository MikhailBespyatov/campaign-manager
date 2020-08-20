import {
  AUTH_INIT,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from 'modules/Auth/store/constants';

const initialState = {
  inited: false,
  token: null,
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case AUTH_INIT: {
      return { ...state, inited: true, token: payload };
    }
    case AUTH_LOGIN: {
      return { ...state, token: payload };
    }
    case AUTH_LOGOUT: {
      return { ...state, token: null };
    }
    default:
      return state;
  }
};

export default authReducer;
