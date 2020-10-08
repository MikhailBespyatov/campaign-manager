import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const removeItemFromItemsById = createEvent<string>();

const getItemsByIds = createEffect({
    handler: async (userIds: string[]) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.userAdmin.getItems({
                pageIndex: 0,
                limit: 100,
                userIds: userIds
            });
            loadingEffects.updateInitialLoading();

            return data ? data : {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const removeItemById = createEffect({
    handler: async (id: string) => {
        try {
            updateLoading();
            const { isSuccess } = await API.userAdmin.manageRoles({
                userId: id,
                remove: true
            });
            isSuccess && removeItemFromItemsById(id);
            updateLoading();
        } catch {
            updateLoading();
        }
    }
});

const items = createStore<WOM.UserQueryResponse>({})
    .on(getItemsByIds.doneData, (_, newState) => newState)
    .on(removeItemFromItemsById, (state: WOM.UserQueryResponse, id: string) =>
        id ? { ...state, items: state.items?.filter((item: WOM.GetUserResponse) => item.userId !== id) } : state
    );

const userAdminEvents = {};
const userAdminEffects = { getItemsByIds, removeItemById };
const userAdminStores = { items, loading };

export { userAdminEffects, userAdminStores, userAdminEvents };
