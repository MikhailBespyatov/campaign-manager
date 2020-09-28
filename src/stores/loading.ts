import { createEvent, createStore } from 'effector';

const updateInitialLoading = createEvent();
const setInitialLoading = createEvent<boolean>();

const initialLoading = createStore<boolean>(false)
    .on(updateInitialLoading, state => !state)
    .on(setInitialLoading, (_, newState) => newState);

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const loadingEvents = { setLoading, setInitialLoading };
const loadingEffects = { updateLoading, updateInitialLoading };
const loadingStores = { loading, initialLoading };

export { loadingStores, loadingEffects, loadingEvents };
