import { LAYOUT_SET_DAYS_SELECT_VALUE } from 'modules/Layout/store/constants';

const initialState = {
  daySelectValue: 7,
};

const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAYOUT_SET_DAYS_SELECT_VALUE:
      return {
        ...state,
        daySelectValue: payload,
      };
    default:
      return state;
  }
};

export default layoutReducer;
