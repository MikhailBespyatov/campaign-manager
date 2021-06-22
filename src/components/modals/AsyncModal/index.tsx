import closeImg from 'assets/icons/remove-icon.svg';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { buttonHeight, textFontSize, textFontWeight, textLineHeight } from 'components/modals/AsyncModal/constants';
import { closeIconDiameter } from 'components/modals/CongratsModal/constants';
import { white } from 'constants/styles';
import { useStore } from 'effector-react';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import React from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { Modal, Wrapper } from './styles';

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
                        height={closeIconDiameter}
                        src={closeImg}
                        width={closeIconDiameter}
                        onClick={onClose}
                    />
                </AbsoluteWrapper>
                <Column alignCenter>
                    <MarginWrapper marginBottom="17px">
                        <Span fontSize="24px" fontWeight={textFontWeight} lineHeight={textLineHeight}>
                            {title}
                        </Span>
                    </MarginWrapper>
                    <Span
                        alignCenter
                        color="#979797"
                        fontSize={textFontSize}
                        fontWeight={textFontWeight}
                        lineHeight={textLineHeight}
                    >
                        {content}
                    </Span>
                    <Row marginTop="56px">
                        <MarginWrapper marginRight="30px">
                            <ManualRoundedButton
                                fontSize={textFontSize}
                                fontWeight={textFontWeight}
                                height={buttonHeight}
                                onClick={okHandler}
                            >
                                Delete
                            </ManualRoundedButton>
                        </MarginWrapper>
                        <MarginWrapper>
                            <ManualRoundedButton
                                reverse
                                background={white}
                                fontSize={textFontSize}
                                fontWeight={textFontWeight}
                                height={buttonHeight}
                                mainColor={'red'}
                                onClick={onClose}
                            >
                                Cancel
                            </ManualRoundedButton>
                        </MarginWrapper>
                    </Row>
                </Column>
            </Modal>
        </Wrapper>
    );
};
