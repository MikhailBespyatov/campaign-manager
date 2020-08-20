import { APP_INITED } from 'modules/App/store/constants';
import { initAuthAction } from 'modules/Auth/store/actions';


export const initAppAction = () => async (dispatch) => {
  await dispatch(initAuthAction());
  dispatch({
    type: APP_INITED,
  });
};
