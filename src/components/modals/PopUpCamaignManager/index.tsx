import { Modal, Wrapper } from 'components/modals/PopUpCamaignManager/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { UniversalWrapper } from 'components/grid/wrappers/UniversalWrapperDeprecated';
import { SelectVideoBlock } from 'components/common/blocks/SelectVideoBlock';
import closeModalImg from 'assets/img/close_modal.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { white } from 'constants/styles';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { campaignContentEvents } from 'stores/campaignContent';
import { closeModalImgDiameter } from 'components/modals/PopUpCamaignManager/constants';
import { NoopClick } from 'types';
import { campaignsEvents } from 'stores/campaigns';
import { formValues } from 'components/FormComponents/forms/CreateCampaignForm/constants';

interface CloseImgPopUpProps extends NoopClick {}

const CloseImgPopUp: FC<CloseImgPopUpProps> = ({ onClick }) => (
    <AbsoluteWrapper right={closeModalImgDiameter} top={closeModalImgDiameter}>
        <CustomImg pointer src={closeModalImg} onClick={onClick} />
    </AbsoluteWrapper>
);

export const PopUpCampaignManager = () => {
    const { visible, popUp } = useStore(modalStores.popUpCampaignManager);
    const onClose = () => modalEvents.closePopUpCampaignManager();
    const handleCloseCreateCampaign = () => {
        campaignContentEvents.setVisibleCreateCampaign(false);
        campaignsEvents.setFieldCreateCampaignForm(formValues);
        campaignsEvents.clearContentIds();
        onClose();
    };
    return (
        <Wrapper visible={visible}>
            {popUp === 'info' && (
                <Modal backgroundColor="#F2F2F2">
                    <UniversalWrapper height="600px">
                        <SelectVideoBlock />
                    </UniversalWrapper>
                    <CloseImgPopUp onClick={onClose} />
                </Modal>
            )}
            {popUp === 'discard' && (
                <Modal backgroundColor={white}>
                    <Column alignCenter height="300px">
                        <MarginWrapper marginBottom="17px" marginTop="50px">
                            <Span fontSize="24px" fontWeight="400" lineHeight="22px">
                                READY TO CREATE YOUR CAMPAIGN?
                            </Span>
                        </MarginWrapper>
                        <Span alignCenter color="#979797" fontSize="16px" fontWeight="400" lineHeight="22px">
                            Once you create your campaign you can set a budget, select more videos and get started.
                        </Span>
                        <Row marginTop="56px">
                            <MarginWrapper marginRight="30px">
                                <ManualRoundedButton height="57px" onClick={onClose}>
                                    CONTINUE
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <MarginWrapper>
                                <ManualRoundedButton
                                    reverse
                                    background={white}
                                    height="57px"
                                    mainColor={'red'}
                                    onClick={handleCloseCreateCampaign}
                                >
                                    CANCEL
                                </ManualRoundedButton>
                            </MarginWrapper>
                        </Row>
                    </Column>
                    <CloseImgPopUp onClick={onClose} />
                </Modal>
            )}
        </Wrapper>
    );
};
