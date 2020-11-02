import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { usersEvents } from 'stores/users';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

//const removeItemFromItemsById = createEvent<string>();

// const getItemsByIds = createEffect({
//     handler: async (userIds: string[]) => {
//         try {
//             loadingEffects.updateInitialLoading();
//             const data = await API.userAdmin.getItems({
//                 pageIndex: 0,
//                 limit: 100,
//                 userIds: userIds
//             });
//             loadingEffects.updateInitialLoading();

//             return data ? data : {};
//         } catch {
//             loadingEffects.updateInitialLoading();
//             return {};
//         }
//     }
// });

const removeItemById = createEffect({
    handler: async (id: string) => {
        try {
            updateLoading();
            await API.organizations.manageRoles({
                userId: id,
                permission: 0
            });

            usersEvents.removeItemFromItemsById(id);
            updateLoading();
        } catch {
            updateLoading();
        }
    }
});

// const items = createStore<WOM.UserQueryResponse>({})
//     .on(getItemsByIds.doneData, (_, newState) => newState)
//     .on(removeItemFromItemsById, (state: WOM.UserQueryResponse, id: string) =>
//         id ? { ...state, items: state.items?.filter((item: WOM.GetUserResponse) => item.userId !== id) } : state
//     );

const userAdminEvents = {};
const userAdminEffects = { removeItemById };
const userAdminStores = {};

export { userAdminEffects, userAdminStores, userAdminEvents };
