import { ORGANIZATION_SET_LIST, ORGANIZATION_UPDATE_ONE } from 'modules/Admin/Organization/store/constants';

const initialState = {
  list: {},
  pageIndex: 1,
  limit: 10,
  totalPages: 1,
};

const organizationReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ORGANIZATION_SET_LIST: {
      const { list, pageIndex, totalPages } = payload;
      return {
        ...state,
        list,
        pageIndex,
        totalPages,
      };
    }
    case ORGANIZATION_UPDATE_ONE: {
      return {
        ...state,
        list: {
          ...state.list,
          [payload.organizationId]: payload,
        },
      };
    }
    default:
      return state;
  }
};

export default organizationReducer;
