import React from 'react';
import { useStore } from 'effector-react';
import { modalEvents, modalStores } from 'stores/modal';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import closeImg from 'assets/icons/remove-icon.svg';
import congratsLogo from 'assets/img/congrats_icon.svg';
import { Modal, Wrapper } from './styles';
import { addIdImgDiameter } from './constants';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { Span } from 'components/common/typography/Span';
import { grey4 } from 'constants/styles';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';

export interface CongratsModalProps {}

export const CongratsModal = () => {
    const { visible } = useStore(modalStores.congratsModal);

    const onClose = () => modalEvents.closeCongratsModal();

    useNonScrolledBackground(visible);

    return (
        <Wrapper visible={visible}>
            <Modal>
                <AbsoluteWrapper right="40px" top="30px" zIndex="5">
                    <CustomImg
                        pointer
                        height={addIdImgDiameter}
                        src={closeImg}
                        width={addIdImgDiameter}
                        onClick={onClose}
                    />
                </AbsoluteWrapper>
                <Section justifyCenter height="100%">
                    <Column alignCenter>
                        <CustomImg height="200px" rotate={30} src={congratsLogo} />
                        <Row marginBottom="15px" marginTop="20px">
                            <Span alignCenter fontSize="18px" fontWeight="400" lineHeight="22px">
                                CONGRATS!
                            </Span>
                        </Row>
                        <Row marginBottom="14px">
                            <Span alignCenter color={grey4} fontSize="14px" fontWeight="400" lineHeight="22px">
                                Camplaing is live
                            </Span>
                        </Row>
                        <ManualRoundedButton height="48px" width="198px">
                            DONE
                        </ManualRoundedButton>
                    </Column>
                </Section>
            </Modal>
        </Wrapper>
    );
};
