import { createEvent, createStore } from 'effector';
import { CardModal, QexWidgetModal } from 'types';

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

const openQexWidgetModal = createEvent();
const closeQexWidgetModal = createEvent();

const qexWidgetModal = createStore<QexWidgetModal>({
    visible: false
})
    .on(openQexWidgetModal, () => ({
        visible: true
    }))
    .on(closeQexWidgetModal, () => ({
        visible: false
    }));

const modalEvents = { openCardModal, closeCardModal, openQexWidgetModal, closeQexWidgetModal };
const modalStores = { cardModal, qexWidgetModal };

export { modalStores, modalEvents };
