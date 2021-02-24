import { Modal, Wrapper } from './styles';
import { useStore } from 'effector-react';
import React from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { addIdImgDiameter } from 'components/modals/CongratsModal/constants';
import closeImg from 'assets/icons/remove-icon.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { white } from 'constants/styles';

export const AsyncModal = () => {
    const [{ visible, title, content, onOk }] = useStore(modalStores.asyncModalStore);

    const okHandler = () => onOk && onOk();
    const onClose = () => modalEvents.closeAsyncModal();

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
                <Column alignCenter>
                    <MarginWrapper marginBottom="17px">
                        <Span fontSize="24px" fontWeight="400" lineHeight="22px">
                            {title}
                        </Span>
                    </MarginWrapper>
                    <Span alignCenter color="#979797" fontSize="16px" fontWeight="400" lineHeight="22px">
                        {content}
                    </Span>
                    <Row marginTop="56px">
                        <MarginWrapper marginRight="30px">
                            <ManualRoundedButton height="57px" onClick={okHandler}>
                                Delete
                            </ManualRoundedButton>
                        </MarginWrapper>
                        <MarginWrapper>
                            <ManualRoundedButton
                                reverse
                                background={white}
                                height="57px"
                                mainColor={'red'}
                                onClick={onClose}
                            >
                                CANCEL
                            </ManualRoundedButton>
                        </MarginWrapper>
                    </Row>
                </Column>
            </Modal>
        </Wrapper>
    );
};
