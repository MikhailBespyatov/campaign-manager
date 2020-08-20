import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import appReducer from 'modules/App/store/reducer';
import authReducer from 'modules/Auth/store/reducer';
import currentUserReducer from 'modules/CurrentUser/store/reducer';
import organizationReducer from 'modules/Admin/Organization/store/reducer';
import usersReducer from 'modules/Admin/Users/store/reducer';
import discoverReducer from 'modules/CampaignManager/Discover/store/reducer';
import campaignReducer from 'modules/CampaignManager/Campaign/store/reducer';
import layoutReducer from 'modules/Layout/store/reducer';


export default function createRootReducer(history) {
  return combineReducers({
    app: appReducer,
    auth: authReducer,
    currentUser: currentUserReducer,
    router: connectRouter(history),
    organization: organizationReducer,
    users: usersReducer,
    discover: discoverReducer,
    campaign: campaignReducer,
    layout: layoutReducer,
    toastr: toastrReducer,
  });
}
