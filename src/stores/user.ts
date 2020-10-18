import history from 'BrowserHistory';
import { InviteRequestProps } from 'components/FormComponents/forms/InviteForm/types';
import { noop, userStorageName } from 'constants/global';
import {
    errorDataMessage,
    incorrectOrgIdMessage,
    notEntryAllowedMessage,
    wrongInviteCodeMessage
} from 'constants/messages';
import { routes } from 'constants/routes';
import { createEffect, createEvent, createStore } from 'effector';
import { ResetPasswordRequestProps } from 'pages/SignIn/PasswordReset/RequestCode/types';
import { SecurityCodeRequestProps } from 'pages/SignIn/PasswordReset/types';
import { AcceptInviteRequestProps } from 'pages/SignUp/AcceptInvite/types';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { organizationsEvents, organizationsStores } from 'stores/organizations';
import { themeEvents } from 'stores/theme';
import { Auth, AuthUserRequest, AuthUserResponse, RegisterUserRequest } from 'types';
import { getOrganizationId, giveAccess, objectIsEmpty } from 'utils/usefulFunctions';

const logout = createEvent();
const setAuth = createEvent<Auth>();

const loadToken = createEffect({
    handler: async (values: AuthUserRequest) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.user.authenticateUser(values);
            loadingEffects.updateLoading();

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const loadAdminToken = createEffect({
    handler: async (values: AuthUserRequest) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.user.authenticateAdmin(values);
            loadingEffects.updateLoading();

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const inviteUser = createEffect({
    handler: async ({ values, setErrors }: InviteRequestProps) => {
        try {
            loadingEffects.updateLoading();
            await API.user.inviteUser(values);
            loadingEffects.updateLoading();
        } catch {
            loadingEffects.updateLoading();
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
    handler: async ({ values, setErrors = noop }: SecurityCodeRequestProps) => {
        try {
            setEmail(values.email);
            loadingEffects.updateLoading();
            await API.user.sendSecurityCode({ ...values, organizationId: '5ddbdd2efd92595cf6d94dc1' });
            loadingEffects.updateLoading();

            history.push(routes.signIn.requestCode);
        } catch {
            setEmail('');
            loadingEffects.updateLoading();
            setErrors({
                email: errorDataMessage
            });
        }
    }
});

const acceptInvitationAndLoadToken = createEffect({
    handler: async ({ values, setErrors }: AcceptInviteRequestProps) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.user.acceptInvitation(values);
            loadingEffects.updateLoading();

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
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
            console.log('ye');
            loadingEffects.updateLoading();
            const data = await API.user.resetPasswordAndLoadToken({
                ...values,
                organizationId: '5ddbdd2efd92595cf6d94dc1'
            });
            loadingEffects.updateLoading();

            setEmail('');
            localStorage.setItem(userStorageName, JSON.stringify(data));
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

            localStorage.setItem(userStorageName, JSON.stringify(data));
            return data;
        } catch {
            loadingEffects.updateLoading();
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
            acceptInvitationAndLoadToken.doneData,
            resetPasswordAndLoadToken.doneData
        ],
        (_, user) => user
    )
    .on(logout, () => {
        localStorage.removeItem(userStorageName);
        return {};
    })
    .on(setToken, (_, token) => token);

user.watch(state => {
    if (!objectIsEmpty(state)) {
        const organizationId = getOrganizationId();
        organizationsEvents.setOrganizationId(organizationId);
        themeEvents.setGlobalPrefix(organizationId === '5ddbdd2efd92595cf6d94dc1' ? 'adidas' : 'base');
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
