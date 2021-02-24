import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const removeItemFromItemsById = createEvent<string>();

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.users.getItemById({ userId: id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const getOrganizationItemsById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.users.getOrganizationItems(id);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const item = createStore<WOM.GetUserResponse | {}>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.OrganizationQueryUsersResponse>({})
    .on(getOrganizationItemsById.doneData, (_, newState) => newState)
    .on(removeItemFromItemsById, (state: WOM.OrganizationQueryUsersResponse, id: string) =>
        id ? { ...state, items: state.items?.filter((item: WOM.GetUserResponse) => item.userId !== id) } : state
    );

const usersEvents = { removeItemFromItemsById };
const usersEffects = { getItemById, getOrganizationItemsById };
const usersStores = { item, items, loading };

export { usersEffects, usersStores, usersEvents };
