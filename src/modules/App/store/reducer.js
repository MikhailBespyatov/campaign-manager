import { APP_INITED } from 'modules/App/store/constants';

const initialState = {
  inited: false,
};

// eslint-disable-next-line no-unused-vars
const appReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case APP_INITED: {
      return { ...state, inited: true };
    }
    default:
      return state;
  }
};

export default appReducer;
