import errorIcon from 'assets/icons/error_icon.svg';
import successIcon from 'assets/icons/success_icon.svg';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { FixedWrapper } from 'components/grid/wrappers/FixedWrapper';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { ImageWrapper, ImageWrapperProps, ModalWrapper } from 'components/modals/AlertModal/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { createAlertModal } from 'stores/initialize/initialize.store.modal';
//import { WithError } from 'types';

export interface AlertModalProps extends Pick<ImageWrapperProps, 'type'> {
    // iconSrc?: string;
    title: string;
    subTitle: string;
}

export const AlertModal = () => {
    const {
        visible,
        state: { type, title, subTitle }
    } = useStore(createAlertModal.modal);

    const okHandler = () => createAlertModal.closeModal();

    if (!visible) return null;

    return (
        <FixedWrapper center backgroundColor="rgba(0,0,0,0.55)" zIndex="100">
            <ModalWrapper>
                <Column alignCenter noWrap>
                    <ImageWrapper type={type}>
                        <CustomImg
                            alt="Status icon"
                            height="20px"
                            src={type === 'error' ? errorIcon : successIcon}
                            width="25px"
                        />
                    </ImageWrapper>
                    <Section justifyCenter>
                        <Span alignCenter fontSize="19px" fontWeight="700" lineHeight="46px">
                            {title}
                        </Span>
                    </Section>
                    <Section justifyCenter marginBottom="44px">
                        <Span alignCenter uppercase fontSize="12px" fontWeight="500" lineHeight="20px">
                            {subTitle}
                        </Span>
                    </Section>
                    <ManualRoundedButton minWidth="282px" onClick={okHandler}>
                        OKAY
                    </ManualRoundedButton>
                </Column>
            </ModalWrapper>
        </FixedWrapper>
    );
};
