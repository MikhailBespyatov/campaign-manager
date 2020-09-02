import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { Auth, AuthUserRequest, AuthUserResponse } from 'types';
import { giveAccess } from 'utils/usefulFunctions';
import { errorDataMessage, notEntryAllowedMessage, userStorageName } from '../constants';

//const updateLoading = createEvent();
const logout = createEvent();
const setAuth = createEvent<Auth>();

const loadToken = createEffect({
    handler: async (values: AuthUserRequest) => {
        try {
            loadingEffects.setLoading(true);
            const data = await API.user.authenticateUser(values);
            loadingEffects.setLoading(false);

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.setLoading(false);
            return {};
        }
    }
});

//const loading = createStore<boolean>(false).on(updateLoading, loading => !loading);

const user = createStore<AuthUserResponse>(JSON.parse(localStorage.getItem(userStorageName) || '{}'))
    .on(loadToken.doneData, (_, user) => user)
    .on(logout, () => {
        localStorage.removeItem(userStorageName);
        return {};
    });

user.watch(state =>
    state === {}
        ? setAuth({
              access: -1,
              authDenyReason: errorDataMessage
          })
        : giveAccess(state) !== -1
        ? setAuth({
              access: giveAccess(state),
              authDenyReason: ''
          })
        : setAuth({
              access: -1,
              authDenyReason: notEntryAllowedMessage
          })
);

const userStore = user.getState();
const auth = createStore<Auth>(
    userStore === {}
        ? {
              access: -1,
              authDenyReason: errorDataMessage
          }
        : giveAccess(userStore) !== -1
        ? {
              access: giveAccess(userStore),
              authDenyReason: ''
          }
        : {
              access: -1,
              authDenyReason: notEntryAllowedMessage
          }
).on(setAuth, (_, auth) => auth);

const userEvents = { logout };
const userEffects = { loadToken };
const userStores = { user, auth };

export { userEffects, userStores, userEvents };
