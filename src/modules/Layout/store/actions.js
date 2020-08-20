import { LAYOUT_SET_DAYS_SELECT_VALUE } from 'modules/Layout/store/constants';

export const setDaysAmountValueAction = (payload) => ({
  type: LAYOUT_SET_DAYS_SELECT_VALUE,
  payload,
});
