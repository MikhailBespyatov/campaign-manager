import { createEffect, createEvent, createStore, forward } from 'effector';
import { loadingEffects } from 'stores/loading';
import { API } from 'services';
import { defaultProductsValues } from 'constants/defaults/products';
import { initializeIsFirstStore } from 'stores/initialize/initialize.isFirst.store';

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.products.getProductById({ id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const getItems = createEffect({
    handler: async (values: WOM.QueryRemoteProductsRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.products.getProducts(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const createProduct = createEffect({
    handler: async (values: WOM.CreateRemoteProductRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.products.createProduct(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const removeProduct = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateInitialLoading();
            await API.products.deleteProductById({ id });
            loadingEffects.updateInitialLoading();

            return id;
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const updateProduct = createEffect({
    handler: async (values: WOM.UpdateRemoteProductRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.products.updateProduct(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const resetItem = createEvent();

const item = createStore<WOM.RemoteProductResponse>({})
    .on(getItemById.doneData, (_, newState) => newState)
    .on(resetItem, _ => ({}));
const items = createStore<WOM.RemoteProductsResponse>({})
    .on(getItems.doneData, (_, newState) => newState)
    .on(createProduct.doneData, (state, newState) => ({ ...state, items: [...(state?.items || []), newState] }))
    .on(updateProduct.doneData, (state, newState) => ({
        ...state,
        items: [...(state?.items?.map(item => (item.id !== newState.id ? item : newState)) || [])]
    }))
    .on(removeProduct.doneData, (state, id) => ({
        ...state,
        items: [...(state?.items?.filter(item => item.id !== id) || [])]
    }));

const updateValues = createEvent<Partial<WOM.QueryRemoteProductsRequest>>();
const setDefaultValues = createEvent();
const invokeGetProducts = createEvent();

const values = createStore<WOM.QueryRemoteProductsRequest>(defaultProductsValues)
    .on(invokeGetProducts, state => state)
    .on(updateValues, (state, values) => ({ ...state, ...values }))
    .on(setDefaultValues, _ => defaultProductsValues);

values.watch(invokeGetProducts, values => getItems(values));

forward({
    from: [values],
    to: [getItems]
});

const { isFirst, setIsFirstToFalse, setIsFirstToTrue } = initializeIsFirstStore();

const productsEvents = {
    updateValues,
    setDefaultValues,
    invokeGetProducts,
    setIsFirstToFalse,
    setIsFirstToTrue,
    resetItem
};
const productsEffects = { getItemById, getItems, createProduct, updateProduct, removeProduct };
const productsStores = { item, items, values, isFirst };

export { productsEvents, productsEffects, productsStores };
