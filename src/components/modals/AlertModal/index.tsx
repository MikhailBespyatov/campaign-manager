import errorIcon from 'assets/icons/error_icon.svg';
import successIcon from 'assets/icons/success_icon.svg';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { ImageWrapper } from 'components/modals/AlertModal/styles';
import React from 'react';
//import { WithError } from 'types';

export interface AlertModalProps extends State {
    iconSrc?: string;
    message: string;
    infoMessage: string;
}

export interface State {
    state: 'error' | 'success';
}

export const AlertModal = ({ message, infoMessage, state }: AlertModalProps) => (
    // const message = state === 'success' ? successMessage : errorMessage;
    // const infoMessage = state === 'success' ? successInfoMessage : errorInfoMessage;

    // const { visible, close, open } = useModal();
    // const openPopover = (e: MouseEventReact<HTMLDivElement>) => {
    //     e.stopPropagation();
    //     !visible && open();
    // };
    // const onClick = () => userEvents.logout();
    // useCloseClick(childrenRef, close, visible);

    <ContentWrapper borderRadius="20px" height="320px" padding="33px 80px 52px" width="580px">
        <Column alignCenter noWrap>
            <ImageWrapper state={state}>
                <CustomImg
                    alt="Status icon"
                    height="20px"
                    src={state === 'error' ? errorIcon : successIcon}
                    width="25px"
                />
            </ImageWrapper>
            <Section justifyCenter>
                <Span alignCenter fontSize="19px" fontWeight="700" lineHeight="46px">
                    {message}
                </Span>
            </Section>
            <Section justifyCenter marginBottom="44px">
                <Span alignCenter uppercase fontSize="12px" fontWeight="500" lineHeight="20px">
                    {infoMessage}
                </Span>
            </Section>
            <ManualRoundedButton minWidth="282px" onClick={() => {}}>
                OKAY
            </ManualRoundedButton>
        </Column>
    </ContentWrapper>
);
