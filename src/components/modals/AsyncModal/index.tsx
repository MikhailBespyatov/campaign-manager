import closeImg from 'assets/icons/remove-icon.svg';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import {
    buttonHeight,
    buttonWidth,
    imagesZIndex,
    modalWidth,
    textFontSizeContent,
    textFontSizeDefault,
    textFontWeightBold,
    textFontWeightRegular,
    textLineHeight,
    textMarginRight
} from 'components/modals/AsyncModal/constants';
import { closeIconDiameter } from 'components/modals/CongratsModal/constants';
import { black, grey18, quaternaryBorderRadius, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import React from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { Modal, Wrapper } from './styles';

export const AsyncModal = () => {
    const { visible, title, content, onOk, closeText, okText } = useStore(modalStores.asyncModal);

    const okHandler = () => onOk && onOk();
    const onClose = () => modalEvents.closeAsyncModal();

    useNonScrolledBackground(visible);

    return (
        <Wrapper visible={visible}>
            <Modal>
                <AbsoluteWrapper right="34px" top="16px" zIndex={imagesZIndex}>
                    <CustomImg
                        pointer
                        height={closeIconDiameter}
                        src={closeImg}
                        width={closeIconDiameter}
                        onClick={onClose}
                    />
                </AbsoluteWrapper>
                <ContentWrapper height="190px" justify="space-between" padding="16px 34px 22px 25px" width={modalWidth}>
                    <Column>
                        <Row marginRight={textMarginRight}>
                            <Span
                                fontSize={textFontSizeDefault}
                                fontWeight={textFontWeightBold}
                                lineHeight={textLineHeight}
                            >
                                {title}
                            </Span>
                        </Row>
                        <Row marginRight={textMarginRight} marginTop="7px">
                            <Span
                                color={grey18}
                                fontSize={textFontSizeContent}
                                fontWeight={textFontWeightRegular}
                                lineHeight={textLineHeight}
                            >
                                {content}
                            </Span>
                        </Row>
                    </Column>
                    <Section justifyEnd>
                        <MarginWrapper marginRight="20px">
                            <ManualRoundedButton
                                background={white}
                                borderRadius={quaternaryBorderRadius}
                                fontSize={textFontSizeDefault}
                                fontWeight={textFontWeightRegular}
                                height={buttonHeight}
                                mainColor={black}
                                minWidth={buttonWidth}
                                onClick={onClose}
                            >
                                {closeText}
                            </ManualRoundedButton>
                        </MarginWrapper>

                        <ManualRoundedButton
                            borderRadius={quaternaryBorderRadius}
                            fontSize={textFontSizeDefault}
                            fontWeight={textFontWeightRegular}
                            height={buttonHeight}
                            minWidth={buttonWidth}
                            onClick={okHandler}
                        >
                            {okText}
                        </ManualRoundedButton>
                    </Section>
                </ContentWrapper>
            </Modal>
        </Wrapper>
    );
};
