import { createEvent, createStore } from 'effector';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, loading => !loading)
    .on(setLoading, (_, loading) => loading);

const loadingEffects = { updateLoading, setLoading };
const loadingStores = { loading };

export { loadingStores, loadingEffects };
