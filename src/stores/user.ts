import history from 'BrowserHistory';
import { InviteRequestProps } from 'components/FormComponents/forms/InviteForm/types';
import { Noop, themeStorageName, userStorageName } from 'constants/global';
import {
    errorDataMessage,
    incorrectOrgIdMessage,
    notEntryAllowedMessage,
    wrongInviteCodeMessage
} from 'constants/messages';
import { requestCodePath } from 'constants/routes';
import { createEffect, createEvent, createStore } from 'effector';
import connectLocalStorage from 'effector-localstorage';
import { ResetPasswordRequestProps } from 'pages/SignIn/PasswordReset/RequestCode/types';
import { SecurityCodeRequestProps } from 'pages/SignIn/PasswordReset/types';
import { AcceptInviteRequestProps } from 'pages/SignUp/AcceptInvite/types';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { organizationsEvents, organizationsStores } from 'stores/organizations';
import { themeEvents } from 'stores/theme';
import Swal from 'sweetalert2';
import { Auth, AuthUserRequest, RegisterUserRequest } from 'types';
import { getOrganizationId, giveAccess, objectIsEmpty } from 'utils/usefulFunctions';

const logout = createEvent();
const setAuth = createEvent<Auth>();

const counterLocalStorage = connectLocalStorage(userStorageName).onError(err => console.log(err));

const loadToken = createEffect({
    handler: async ({ values, setErrors = Noop }: AuthUserRequest) => {
        try {
            loadingEffects.updateLoading();

            const data = await API.user.authenticateUser({
                ...values
                // organizationId: themeStores.organizationIdForLogin.getState()
            });
            const prefix = data.user?.organizationTitle || '';
            loadingEffects.updateLoading();

            themeEvents.setGlobalPrefix(prefix);
            localStorage.setItem(themeStorageName, JSON.stringify({ prefix }));
            //localStorage.setItem(userStorageName, JSON.stringify(data));
            //organizationsEvents.setOrganizationId(data?.user?.organizationId || '');
            return data;
        } catch ({ data }) {
            loadingEffects.updateLoading();

            setErrors({
                email: data?.message,
                password: data?.message
            });
            // return {};
        }
    }
});

const loadAdminToken = createEffect({
    handler: async ({ values, setErrors = Noop }: AuthUserRequest) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.user.authenticateAdmin({ ...values });
            loadingEffects.updateLoading();

            //localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch ({ data }) {
            loadingEffects.updateLoading();
            setErrors({
                email: data?.message,
                password: data?.message
            });
            // return {};
        }
    }
});

const inviteUser = createEffect({
    handler: async ({ values, setErrors }: InviteRequestProps) => {
        try {
            loadingEffects.updateLoading();
            await API.user.inviteUser(values);
            loadingEffects.updateLoading();

            Swal.fire('Success!', 'User was invited!', 'success');
        } catch {
            loadingEffects.updateLoading();
            Swal.fire('Error!', 'Something went wrong!', 'error');
            setErrors({
                organizationId: incorrectOrgIdMessage
            });
        }
    }
});

const removeUserByEmail = createEffect({
    handler: async (email: string) => {
        try {
            loadingEffects.updateLoading();
            await API.user.inviteUser({
                organizationId: organizationsStores.organizationId.getState(),
                invitations: [
                    {
                        email: email,
                        permission: 0
                    }
                ]
            });
            loadingEffects.updateLoading();
        } catch {
            loadingEffects.updateLoading();
        }
    }
});

const setEmail = createEvent<string>();
const currentEmailForPasswordReset = createStore<string>('').on(setEmail, (_, newState) => newState);

const sendSecurityCode = createEffect({
    handler: async ({ values, setErrors = Noop }: SecurityCodeRequestProps) => {
        try {
            setEmail(values.email);
            loadingEffects.updateLoading();
            const { isSuccess } = await API.user.sendSecurityCode({
                ...values
                // organizationId: themeStores.organizationIdForLogin.getState()
            });
            loadingEffects.updateLoading();

            isSuccess && history.push(requestCodePath);
        } catch (ex) {
            setEmail('');
            loadingEffects.updateLoading();
            setErrors({
                email: ex.data?.message
                //email: errorDataMessage
            });
        }
    }
});

const acceptInvitationAndLoadToken = createEffect({
    handler: async ({ values, setErrors }: AcceptInviteRequestProps) => {
        try {
            loadingEffects.updateLoading();
            // const prefix = getPublicTheme() || '';
            const data = await API.user.acceptInvitation(values);
            const prefix = data.user?.organizationTitle || '';
            //const { title } = await API.organizations.getItemById({ organizationId: data?.user?.organizationId || '' });
            loadingEffects.updateLoading();

            //const prefix = getPublicTheme() || '';
            themeEvents.setGlobalPrefix(prefix);
            localStorage.setItem(themeStorageName, JSON.stringify({ prefix }));
            //localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch (errors) {
            loadingEffects.updateLoading();
            setErrors({
                inviteCode: wrongInviteCodeMessage
            });
            return {};
        }
    }
});

const resetPasswordAndLoadToken = createEffect({
    handler: async ({ values, setErrors }: ResetPasswordRequestProps) => {
        try {
            loadingEffects.updateLoading();

            const data = await API.user.resetPasswordAndLoadToken({
                ...values
            });
            const prefix = data.user?.organizationTitle || '';
            loadingEffects.updateLoading();

            setEmail('');
            themeEvents.setGlobalPrefix(prefix);
            localStorage.setItem(themeStorageName, JSON.stringify({ prefix }));
            //localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.updateLoading();
            setErrors({
                confirmationToken: wrongInviteCodeMessage
            });
            return {};
        }
    }
});

const createUserAndLoadToken = createEffect({
    handler: async (values: RegisterUserRequest) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.user.createUser(values);
            loadingEffects.updateLoading();

            //localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const setToken = createEvent<WOM.UserJwtTokenResponse>();

const user = createStore<WOM.UserJwtTokenResponse>(counterLocalStorage.init(0))
    .on(
        [
            loadToken.doneData,
            createUserAndLoadToken.doneData,
            loadAdminToken.doneData,
            acceptInvitationAndLoadToken.doneData,
            resetPasswordAndLoadToken.doneData
        ],
        (_, user) => user
    )
    .on(logout, () => {
        //localStorage.removeItem(userStorageName);
        localStorage.removeItem(themeStorageName);
        // themeEvents.setGlobalPublicPrefix(themeStores.globalPrefix.getState().prefix || '');
        return {};
    })
    .on(setToken, (_, token) => token);

user.watch(counterLocalStorage);
user.watch(state => {
    if (!objectIsEmpty(state)) {
        organizationsEvents.setOrganizationId(getOrganizationId());
        // const { prefix }: { prefix?: string } = JSON.parse(localStorage.getItem(userStorageName) || '{}');
        // themeEvents.setGlobalPrefix(prefix || '');
        // themeEvents.injectGlobalPrefixPublic();
    }
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
          });
});

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
//auth.watch(state => console.log(state));

const userEvents = { logout, setAuth };
const userEffects = {
    loadToken,
    createUserAndLoadToken,
    loadAdminToken,
    inviteUser,
    acceptInvitationAndLoadToken,
    resetPasswordAndLoadToken,
    sendSecurityCode,
    removeUserByEmail
};
const userStores = { user, auth, currentEmailForPasswordReset };

export { userEffects, userStores, userEvents };
