import closeImg from 'assets/icons/remove-icon.svg';
import womLogo from 'assets/img/wom_logo_.svg';
import history from 'BrowserHistory';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import {
    closeIconDiameter,
    imagesZIndex,
    modalWidth,
    womLogoHeight,
    womLogoWidth
} from 'components/modals/CongratsModal/constants';
import { defaultFontWeight } from 'constants/defaults';
import { routes } from 'constants/routes';
import { grey17, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import React from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { Modal, Triangle, Wrapper } from './styles';

export const CongratsModal = () => {
    const { visible } = useStore(modalStores.congratsModal);

    const onClose = () => {
        modalEvents.closeCongratsModal();
        history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.campaign.running);
    };

    useNonScrolledBackground(visible);

    return (
        <Wrapper visible={visible}>
            <Modal>
                <AbsoluteWrapper right="0px" top="0px" width="100%" zIndex={imagesZIndex}>
                    <Column alignCenter marginTop="40px">
                        <CustomImg height={womLogoHeight} src={womLogo} width={womLogoWidth} />
                        <MarginWrapper marginTop="15px">
                            <Span
                                alignCenter
                                color={white}
                                fontSize="16px"
                                fontWeight={defaultFontWeight}
                                lineHeight="24px"
                            >
                                Campaign Manager
                            </Span>
                        </MarginWrapper>
                    </Column>
                </AbsoluteWrapper>

                <AbsoluteWrapper right="40px" top="30px" zIndex={imagesZIndex}>
                    <CustomImg
                        pointer
                        height={closeIconDiameter}
                        src={closeImg}
                        width={closeIconDiameter}
                        onClick={onClose}
                    />
                </AbsoluteWrapper>
                <Triangle />
                <ContentWrapper height="190px" padding="0px 20px" width={modalWidth}>
                    <Section justifyCenter height="100%">
                        <Column alignCenter>
                            <Row marginBottom="15px" marginTop="10px">
                                <Span alignCenter fontSize="24px" fontWeight={defaultFontWeight}>
                                    CONGRATS!
                                </Span>
                            </Row>
                            <Row marginBottom="50px">
                                <Span alignCenter color={grey17} fontSize="17px" fontWeight="400">
                                    Your campaign is now live
                                </Span>
                            </Row>
                            <ManualRoundedButton fontWeight="700" width="198px" onClick={onClose}>
                                DONE
                            </ManualRoundedButton>
                        </Column>
                    </Section>
                </ContentWrapper>
            </Modal>
        </Wrapper>
    );
};
