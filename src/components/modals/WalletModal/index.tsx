import closeImg from 'assets/img/add_video.svg';
import WOMIcon from 'assets/img/wom-token-logo.png';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import { wrapperVerticalPadding } from 'components/modals/QexWidgetModal/constants';
import { marginMSize, marginSSize, marginXSSize, qrCodeImageDiameter } from 'components/modals/WalletModal/constants';
import { blue7, blue9, tertiaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { walletStores } from 'stores/wallet';
import { totalCurrency } from 'utils/usefulFunctions';
import { CurrencySpan, Modal, WalletBalanceSpan, WalletSubtitleSpan, WalletTitleSpan, Wrapper } from './styles';

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
                <Section justifyCenter marginBottom={marginMSize}>
                    <WalletTitleSpan>MY WALLET</WalletTitleSpan>
                </Section>
                <Section justifyCenter marginBottom="20px">
                    <Column alignCenter justifyCenter>
                        <MarginWrapper marginBottom={marginSSize}>
                            <WalletSubtitleSpan>BALANCE</WalletSubtitleSpan>
                        </MarginWrapper>
                        <Row alignCenter marginBottom={marginSSize}>
                            <MarginWrapper marginRight="12px">
                                <CustomImg height="19px" src={WOMIcon} width="17px" />
                            </MarginWrapper>
                            <WalletBalanceSpan>{walletBalance}</WalletBalanceSpan>
                        </Row>
                        <Row>
                            <Row justifyCenter marginRight="27px">
                                <Row marginRight={marginXSSize}>
                                    <CurrencySpan color={blue7}>USD</CurrencySpan>
                                </Row>
                                <Row>
                                    <CurrencySpan color={white}>{USD}</CurrencySpan>
                                </Row>
                            </Row>
                            <Row>
                                <Row marginRight={marginXSSize}>
                                    <CurrencySpan color={blue7}>EUR</CurrencySpan>
                                </Row>
                                <Row>
                                    <CurrencySpan color={white}>{EUR}</CurrencySpan>
                                </Row>
                            </Row>
                        </Row>
                    </Column>
                </Section>
                <Section justifyCenter>
                    <Row justifyBetween width="450px">
                        <Column alignCenter>
                            <MarginWrapper marginBottom={marginSSize}>
                                <WalletSubtitleSpan>WALLET OWNER</WalletSubtitleSpan>
                            </MarginWrapper>
                            <WalletTitleSpan>{walletOwner}</WalletTitleSpan>
                        </Column>
                        <Column alignCenter>
                            <MarginWrapper marginBottom={marginSSize}>
                                <WalletSubtitleSpan>WALLET CREATION DATE</WalletSubtitleSpan>
                            </MarginWrapper>
                            <WalletTitleSpan>{walletCreated}</WalletTitleSpan>
                        </Column>
                    </Row>
                </Section>
                <Section justifyCenter>
                    <Column alignCenter width="100%">
                        <MarginWrapper marginBottom={marginSSize}>
                            <WalletTitleSpan>QR CODE</WalletTitleSpan>
                        </MarginWrapper>
                        <CustomImg height={qrCodeImageDiameter} src={qrCodeImage} width={qrCodeImageDiameter} />
                        <MarginWrapper marginBottom="10px" marginTop={marginMSize}>
                            <WalletTitleSpan>WALLET ADDRESS</WalletTitleSpan>
                        </MarginWrapper>
                        <CopyableField backgroundColor={blue9} color={white} subject={walletAddress} />
                    </Column>
                </Section>
            </Modal>
        </Wrapper>
    );
};
