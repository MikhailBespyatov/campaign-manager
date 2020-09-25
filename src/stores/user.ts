import { userStorageName } from 'constants/global';
import { errorDataMessage, incorrectOrgIdMessage, notEntryAllowedMessage } from 'constants/messages';
import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { Auth, AuthUserRequest, AuthUserResponse, InviteRequestProps, RegisterUserRequest } from 'types';
import { giveAccess, objectIsEmpty } from 'utils/usefulFunctions';

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

const loadAdminToken = createEffect({
    handler: async (values: AuthUserRequest) => {
        try {
            loadingEffects.setLoading(true);
            const data = await API.user.authenticateAdmin(values);
            loadingEffects.setLoading(false);

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.setLoading(false);
            return {};
        }
    }
});

const inviteUser = createEffect({
    handler: async ({ values, setErrors }: InviteRequestProps) => {
        try {
            loadingEffects.setLoading(true);
            await API.user.inviteUser(values);
            loadingEffects.setLoading(false);
        } catch {
            loadingEffects.setLoading(false);
            setErrors({
                organizationId: incorrectOrgIdMessage
            });
        }
    }
});

const createUserAndLoadToken = createEffect({
    handler: async (values: RegisterUserRequest) => {
        try {
            loadingEffects.setLoading(true);
            const data = await API.user.createUser(values);
            loadingEffects.setLoading(false);

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.setLoading(false);
            return {};
        }
    }
});

const acceptInvitationAndLoadToken = createEffect({
    handler: async (values: WOM.UserAcceptInviteCampaignAccountRequest) => {
        try {
            loadingEffects.setLoading(true);
            const data = await API.user.acceptInvitation(values);
            loadingEffects.setLoading(false);

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.setLoading(false);
            return {};
        }
    }
});

const setToken = createEvent<AuthUserResponse>();

const user = createStore<AuthUserResponse>(JSON.parse(localStorage.getItem(userStorageName) || '{}'))
    .on(
        [
            loadToken.doneData,
            createUserAndLoadToken.doneData,
            loadAdminToken.doneData,
            acceptInvitationAndLoadToken.doneData
        ],
        (_, user) => user
    )
    .on(logout, () => {
        localStorage.removeItem(userStorageName);
        return {};
    })
    .on(setToken, (_, token) => token);

user.watch(state =>
    objectIsEmpty(state)
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
    objectIsEmpty(userStore)
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

const userEvents = { logout, setAuth };
const userEffects = { loadToken, createUserAndLoadToken, loadAdminToken, inviteUser, acceptInvitationAndLoadToken };
const userStores = { user, auth };

export { userEffects, userStores, userEvents };
