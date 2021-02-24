import { createEvent, createStore, Store, Event } from 'effector';

export const initialToggleStore: () => [Store<boolean>, Event<boolean>] = () => {
    const setToggle = createEvent<boolean>();
    const toggle = createStore(false).on(setToggle, (_, state) => state);
    return [toggle, setToggle];
};
