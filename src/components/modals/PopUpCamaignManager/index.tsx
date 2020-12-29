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
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { campaignContentEvents } from 'stores/campaignContent';
import { closeModalImgDiameter } from 'components/modals/PopUpCamaignManager/constants';
import { NoopClick } from 'types';

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
                                Lorem ipsum dolor sit amet?
                            </Span>
                        </MarginWrapper>
                        <Span alignCenter color="#979797" fontSize="16px" fontWeight="400" lineHeight="22px">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto eius illum mollitia
                            neque qui.
                        </Span>
                        <Row marginTop="56px">
                            <MarginWrapper marginRight="30px">
                                <ManualRoundedButton
                                    reverse
                                    background={white}
                                    height="57px"
                                    mainColor={'red'}
                                    onClick={handleCloseCreateCampaign}
                                >
                                    YES
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <MarginWrapper>
                                <RoundedButton height="57px" onClick={onClose}>
                                    NO
                                </RoundedButton>
                            </MarginWrapper>
                        </Row>
                    </Column>
                    <CloseImgPopUp onClick={onClose} />
                </Modal>
            )}
        </Wrapper>
    );
};
