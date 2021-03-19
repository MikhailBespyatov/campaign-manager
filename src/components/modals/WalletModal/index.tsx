import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { modalEvents, modalStores } from 'stores/modal';
import { walletStores } from 'stores/wallet';
import { Modal, WalletSubtitleSpan, WalletTitleSpan, Wrapper, WalletBalanceSpan, CurrencySpan } from './styles';
import { blue7, tertiaryPadding, white } from 'constants/styles';
import { wrapperVerticalPadding } from 'components/modals/QexWidgetModal/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import closeImg from 'assets/img/add_video.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, FlexGrow, Section, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CopyableField } from 'components/common/features/CopyableField';
import QRCode from 'qrcode';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import { themeStores } from 'stores/theme';
import WOMIcon from 'assets/img/wom-token-logo.png';
import { totalCurrency } from 'utils/usefulFunctions';

export const WalletModal = () => {
    const { visible } = useStore(modalStores.walletModal);
    const walletAddress = useStore(walletStores.walletAddress);
    const walletCreated = useStore(walletStores.walletCreated);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const walletOwner = globalPrefixUrl.replaceAll('/', '');
    const [qrCodeImage, setQRCodeImage] = useState('');
    const [usdRate, eurRate] = useStore(walletStores.rates);
    const walletBalance = useStore(walletStores.walletBalance);

    const USD = totalCurrency(walletBalance, usdRate);
    const EUR = totalCurrency(walletBalance, eurRate);

    const onClose = () => modalEvents.closeWalletModal();

    const generateQR = async (text: string) => {
        const qrcode = await QRCode.toDataURL(text);
        setQRCodeImage(qrcode);
    };

    useNonScrolledBackground(visible);

    useEffect(() => {
        if (!walletAddress) return;
        generateQR(walletAddress);
    }, [walletAddress]);

    return (
        <Wrapper visible={visible}>
            <AbsoluteWrapper right={tertiaryPadding} top={wrapperVerticalPadding} zIndex="5">
                <CustomImg
                    pointer
                    height={addIdImgDiameter}
                    rotate={45}
                    src={closeImg}
                    width={addIdImgDiameter}
                    onClick={onClose}
                />
            </AbsoluteWrapper>
            <Modal>
                <Section justifyCenter marginBottom="27px">
                    <WalletTitleSpan>MY WALLET</WalletTitleSpan>
                </Section>
                <Section justifyCenter marginBottom="40px">
                    <Column alignCenter justifyCenter>
                        <MarginWrapper marginBottom="17px">
                            <WalletSubtitleSpan>BALANCE</WalletSubtitleSpan>
                        </MarginWrapper>
                        <Row alignCenter marginBottom="17px">
                            <MarginWrapper marginRight="12px">
                                <CustomImg height="27px" src={WOMIcon} width="24px" />
                            </MarginWrapper>
                            <WalletBalanceSpan>{walletBalance}</WalletBalanceSpan>
                        </Row>
                        <Row>
                            <Row justifyCenter marginRight="27px">
                                <Row marginRight="3px">
                                    <CurrencySpan color={blue7}>USD</CurrencySpan>
                                </Row>
                                <Row>
                                    <CurrencySpan color={white}>{USD}</CurrencySpan>
                                </Row>
                            </Row>
                            <Row>
                                <Row marginRight="3px">
                                    <CurrencySpan color={blue7}>EUR</CurrencySpan>
                                </Row>
                                <Row>
                                    <CurrencySpan color={white}>{EUR}</CurrencySpan>
                                </Row>
                            </Row>
                        </Row>
                    </Column>
                </Section>
                <Section justifyAround marginBottom="70px">
                    <Column alignCenter>
                        <MarginWrapper marginBottom="20px">
                            <WalletSubtitleSpan>WALLET OWNER</WalletSubtitleSpan>
                        </MarginWrapper>
                        <WalletTitleSpan>{walletOwner}</WalletTitleSpan>
                    </Column>
                    <Column alignCenter>
                        <MarginWrapper marginBottom="20px">
                            <WalletSubtitleSpan>WALLET CREATION DATE</WalletSubtitleSpan>
                        </MarginWrapper>
                        <WalletTitleSpan>{walletCreated}</WalletTitleSpan>
                    </Column>
                </Section>
                <Section justifyCenter marginBottom="64px">
                    <Column alignCenter>
                        <MarginWrapper marginBottom="24px">
                            <WalletTitleSpan>QR CODE</WalletTitleSpan>
                        </MarginWrapper>
                        <CustomImg height="208px" src={qrCodeImage} width="208px" />
                    </Column>
                </Section>
                <FlexGrow alignCenter justifyEnd>
                    <Column alignCenter>
                        <MarginWrapper marginBottom="24px">
                            <WalletTitleSpan>WALLET ADDRESS</WalletTitleSpan>
                        </MarginWrapper>
                        <CopyableField backgroundColor="#576397" color={white} subject={walletAddress} />
                    </Column>
                </FlexGrow>
            </Modal>
        </Wrapper>
    );
};
