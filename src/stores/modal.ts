import { createEvent, createStore } from 'effector';
import { CardModal, PopUpCampaignManager } from 'types';
import { initializeGenericStoreModal } from 'stores/initialize.store.modal';
//
// const openCardModal = createEvent<string>();
// const closeCardModal = createEvent();
// //
// const cardModal = createStore<CardModal>({
//     visible: false,
//     id: ''
// })
//     .on(openCardModal, (_, id) => ({
//         visible: true,
//         id: id
//     }))
//     .on(closeCardModal, () => ({
//         visible: false,
//         id: ''
//     }));

const { modal: cardModal, closeModal: closeCardModal, openModal: openCardModal } = initializeGenericStoreModal<
    CardModal
>({ id: '' });

// const openQexWidgetModal = createEvent();
// const closeQexWidgetModal = createEvent();
//
// const qexWidgetModal = createStore<QexWidgetModal>({
//     visible: false
// })
//     .on(openQexWidgetModal, () => ({
//         visible: true
//     }))
//     .on(closeQexWidgetModal, () => ({
//         visible: false
//     }));

const {
    modal: qexWidgetModal,
    closeModal: closeQexWidgetModal,
    openModal: openQexWidgetModal
} = initializeGenericStoreModal();

const openPopUpCampaignManager = createEvent<PopUpCampaignManager>();
const closePopUpCampaignManager = createEvent();

const popUpCampaignManager = createStore<PopUpCampaignManager>({
    visible: false,
    popUp: 'info'
})
    .on(openPopUpCampaignManager, (popUpState, state) => {
        if (state.popUp === 'info') {
            const isSecondOpenPopUp = localStorage.getItem('isFirstOpenPopUp');
            if (!isSecondOpenPopUp) {
                localStorage.setItem('isFirstOpenPopUp', 'true');
                return state;
            } else {
                return popUpState;
            }
        }

        if (state.popUp === 'discard') {
            return state;
        }
    })
    .on(closePopUpCampaignManager, popUp => ({
        ...popUp,
        visible: false
    }));

const modalEvents = {
    openCardModal,
    closeCardModal,
    openQexWidgetModal,
    closeQexWidgetModal,
    openPopUpCampaignManager,
    closePopUpCampaignManager
};
const modalStores = { cardModal, qexWidgetModal, popUpCampaignManager };

export { modalStores, modalEvents };
