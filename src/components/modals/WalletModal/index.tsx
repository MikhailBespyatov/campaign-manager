import closeImg from 'assets/img/add_video.svg';
import bithumbLogo from 'assets/img/logo-bithumb.svg';
import gateIoLogo from 'assets/img/logo-gateio.svg';
import kuCoinLogo from 'assets/img/logo-kucoin.svg';
import liquidLogo from 'assets/img/logo-liquid.svg';
import WOMIcon from 'assets/img/wom-token-logo.png';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ExternalLink } from 'components/common/links/ExternalLink';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import { wrapperVerticalPadding } from 'components/modals/QexWidgetModal/constants';
import {
    bithumbLogoHeight,
    bithumbLogoWidth,
    bithumHref,
    gateIoHref,
    gateIoLogoHeight,
    gateIoLogoWidth,
    kuCoinHref,
    kuCoinLogoHeight,
    kuCoinLogoWidth,
    liquidHref,
    liquidLogoHeight,
    liquidLogoWidth,
    marginMSize,
    marginSSize,
    marginXSSize,
    qrCodeImageDiameter
} from 'components/modals/WalletModal/constants';
import { blue7, blue9, tertiaryMargin, tertiaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { useNonScrolledBackground } from 'hooks/nonScrolledBackground';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { walletStores } from 'stores/wallet';
import { totalCurrency } from 'utils/usefulFunctions';
import {
    CurrencySpan,
    Modal,
    WalletBalanceSpan,
    WalletHeaderSpan,
    WalletSubtitleSpan,
    WalletTitleSpan,
    Wrapper
} from './styles';

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
                <Section justifyCenter marginBottom={tertiaryMargin}>
                    <WalletHeaderSpan>MY WALLET</WalletHeaderSpan>
                </Section>
                <Section justifyCenter marginBottom="24px">
                    <Column alignCenter justifyCenter>
                        <MarginWrapper marginBottom={marginSSize}>
                            <WalletSubtitleSpan>BALANCE</WalletSubtitleSpan>
                        </MarginWrapper>
                        <Row alignCenter marginBottom={marginSSize}>
                            <MarginWrapper marginRight="12px">
                                <CustomImg height="20px" src={WOMIcon} width="19px" />
                            </MarginWrapper>
                            <WalletBalanceSpan>{walletBalance}</WalletBalanceSpan>
                        </Row>
                        <Row>
                            <Row justifyCenter marginRight="37px">
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
                <Section justifyCenter marginBottom={tertiaryMargin}>
                    <Row justifyBetween width="450px">
                        <Column alignCenter>
                            <MarginWrapper marginBottom={marginSSize}>
                                <WalletSubtitleSpan>WALLET OWNER</WalletSubtitleSpan>
                            </MarginWrapper>
                            <WalletHeaderSpan>@{walletOwner}</WalletHeaderSpan>
                        </Column>
                        <Column alignCenter>
                            <MarginWrapper marginBottom={marginSSize}>
                                <WalletSubtitleSpan>WALLET CREATION DATE</WalletSubtitleSpan>
                            </MarginWrapper>
                            <WalletHeaderSpan>{walletCreated}</WalletHeaderSpan>
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

                        <MarginWrapper marginBottom="15px" marginTop="30px">
                            <WalletTitleSpan>GET WOM</WalletTitleSpan>
                        </MarginWrapper>
                        <ContentWrapper borderRadius="0px 0px 8px 8px" width="100%">
                            <Section alignCenter justifyCenter>
                                <Row alignCenter justifyBetween height="42px" width="400px">
                                    <ExternalLink href={bithumHref} target="_blank">
                                        <CustomImg
                                            height={bithumbLogoHeight}
                                            src={bithumbLogo}
                                            width={bithumbLogoWidth}
                                        />
                                    </ExternalLink>

                                    <ExternalLink href={gateIoHref} target="_blank">
                                        <CustomImg height={gateIoLogoHeight} src={gateIoLogo} width={gateIoLogoWidth} />
                                    </ExternalLink>

                                    <ExternalLink href={liquidHref} target="_blank">
                                        <CustomImg height={liquidLogoHeight} src={liquidLogo} width={liquidLogoWidth} />
                                    </ExternalLink>

                                    <ExternalLink href={kuCoinHref} target="_blank">
                                        <CustomImg height={kuCoinLogoHeight} src={kuCoinLogo} width={kuCoinLogoWidth} />
                                    </ExternalLink>
                                </Row>
                            </Section>
                        </ContentWrapper>
                    </Column>
                </Section>
            </Modal>
        </Wrapper>
    );
};
