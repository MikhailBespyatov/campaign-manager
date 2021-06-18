import history from 'BrowserHistory';
import { defaultProductsValues } from 'constants/defaults/products';
import { routes } from 'constants/routes';
import { createEffect, createEvent, createStore, forward } from 'effector';
import { API } from 'services';
import { handleProduct, productForm } from 'stores/forms/productForm';
import { initializeIsFirstStore } from 'stores/initialize/initialize.isFirst.store';
import { loadingEffects } from 'stores/loading';
import { themeStores } from 'stores/theme';

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

const removeProduct = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateInitialLoading();
            await API.products.deleteProductById({ id });
            loadingEffects.updateInitialLoading();
            history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.products.index);

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
            history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.products.index);

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const resetItem = createEvent();

// Set form when get data from endpoint
forward({
    from: getItemById.doneData,
    to: productForm.setForm
});

const item = createStore<WOM.RemoteProductResponse>({})
    .on(getItemById.doneData, (_, newState) => newState)
    .on(resetItem, _ => ({}));
const items = createStore<WOM.RemoteProductsResponse>({})
    .on(getItems.doneData, (_, newState) => newState)
    .on(handleProduct.doneData, (state, newState) => {
        const isIdExists = state.items?.find(item => item.id === newState.id);

        return isIdExists
            ? {
                  ...state,
                  items: [...(state?.items?.map(item => (item.id !== newState.id ? item : newState)) || [])]
              }
            : { ...state, items: [...(state?.items || []), newState] };
    })
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
const productsEffects = {
    getItemById,
    getItems,
    // createProduct: handleProduct,
    updateProduct,
    removeProduct,
    resetItem
};
const productsStores = { item, items, values, isFirst };

export { productsEvents, productsEffects, productsStores };
