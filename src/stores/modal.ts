import { combine, createEvent, createStore } from 'effector';
import { initializeGenericStoreModal } from 'stores/initialize/initialize.store.modal';
import { CardModal, Noop, PopUpCampaignManager, StrictTitle } from 'types';

export interface AsyncModal extends StrictTitle {
    visible?: boolean;
    content: string;
    onOk?: Noop;
    closeText?: string;
    okText?: string;
}

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

const {
    modal: congratsModal,
    closeModal: closeCongratsModal,
    openModal: openCongratsModal
} = initializeGenericStoreModal();

const { modal: walletModal, closeModal: closeWalletModal, openModal: openWalletModal } = initializeGenericStoreModal();

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

const initialAsyncModal: AsyncModal = { visible: false, title: '', content: '', closeText: 'Cancel', okText: 'Submit' };

const openAsyncModal = createEvent<AsyncModal>();
const closeAsyncModal = createEvent();

const asyncModal = createStore<AsyncModal>(initialAsyncModal)
    .on(openAsyncModal, (_, newState) => ({ ...newState, visible: true }))
    .on(closeAsyncModal, () => initialAsyncModal);

const asyncModalStore = combine(asyncModal);

const modalEvents = {
    openCardModal,
    closeCardModal,
    openQexWidgetModal,
    closeQexWidgetModal,
    openPopUpCampaignManager,
    closePopUpCampaignManager,
    closeWalletModal,
    openWalletModal,
    closeCongratsModal,
    openCongratsModal,
    openAsyncModal,
    closeAsyncModal
};
const modalStores = {
    cardModal,
    qexWidgetModal,
    popUpCampaignManager,
    walletModal,
    congratsModal,
    asyncModalStore
};

export { modalStores, modalEvents };
