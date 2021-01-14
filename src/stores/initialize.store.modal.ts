import { combine, createEvent, createStore } from 'effector';

export const initializeGenericStoreModal = <T = void>(initialState: T = {} as T) => {
    const openModal = createEvent<T>();
    const closeModal = createEvent();

    const visible = createStore(false)
        .on(openModal, () => true)
        .on(closeModal, () => false);
    const state = createStore<T>(initialState).on(openModal, (_, newState) => newState);
    const modal = combine({ visible, state });

    return { modal, openModal, closeModal };
};
