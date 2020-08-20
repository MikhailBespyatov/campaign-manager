import {
  USERS_REMOVE, USERS_SET_CURRENT_PAGE,
  USERS_SET_LIST_TO_PAGE, USERS_SYNC_ONE,
} from 'modules/Admin/Users/store/constants';

const initialState = {
  currentPage: 0,
  totalPages: 0,
  perPage: 10,
  list: {},
  listPerPage: {},
  orgId: '5ddbdd2efd92595cf6d94dc1',
  organization: undefined,
  textSearch: undefined,
};

const usersReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case USERS_SET_LIST_TO_PAGE:
      return {
        ...state,
        currentPage: payload.page,
        totalPages: payload.totalPages,
        list: {
          ...state.list,
          ...payload.list,
        },
        listPerPage: { ...state.listPerPage, [payload.page]: Object.keys(payload.list) },
        organization: payload.organization,
        textSearch: payload.textSearch,
      };
    case USERS_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case USERS_SYNC_ONE:
      return {
        ...state,
        list: {
          ...state.list,
          [payload.userId]: payload.user,
        },
        organization: payload.organization,
      };
    case USERS_REMOVE:
      const newList = { ...state.list };

      // userId received as payload
      delete newList[payload];

      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default usersReducer;
