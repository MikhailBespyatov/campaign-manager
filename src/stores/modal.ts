import { createEvent, createStore } from 'effector';
import { CardModal } from 'types';

const openCardModal = createEvent<string>();
const closeCardModal = createEvent();

const cardModal = createStore<CardModal>({
    visible: false,
    id: ''
})
    .on(openCardModal, (_, id) => ({
        visible: true,
        id: id
    }))
    .on(closeCardModal, () => ({
        visible: false,
        id: ''
    }));

const modalEvents = { openCardModal, closeCardModal };
const modalStores = { cardModal };

export { modalStores, modalEvents };
