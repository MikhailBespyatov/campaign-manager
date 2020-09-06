import closeModalImg from 'assets/img/close_modal.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { CampaignContentCard } from 'components/Layouts/Cards/CampaignContentCard';
import { closeModalImgDiameter } from 'components/modals/CardModal/constants';
import { Modal, Wrapper } from 'components/modals/CardModal/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { modalEvents, modalStores } from 'stores/modal';

export const CardModal = () => {
    const { visible } = useStore(modalStores.cardModal);

    const onClose = () => modalEvents.closeCardModal();

    return (
        <Wrapper visible={visible}>
            <Modal>
                <CampaignContentCard
                    buttonTop={
                        <CustomImg
                            pointer
                            height={closeModalImgDiameter}
                            src={closeModalImg}
                            width={closeModalImgDiameter}
                            onClick={onClose}
                        />
                    }
                />
            </Modal>
        </Wrapper>
    );
};
