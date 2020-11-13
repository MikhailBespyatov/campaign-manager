import closeImg from 'assets/img/add_video.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ExternalTextLink } from 'components/common/links/ExternalTextLink';
import { QexWidgetDisclaimerSpan } from 'components/common/typography/special';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import { publicApiKey, wrapperVerticalPadding } from 'components/modals/QexWidgetModal/constants';
import { Modal, Wrapper } from 'components/modals/QexWidgetModal/styles';
import { tertiaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { QexWidget, SETTLEMENT_METHOD, THEME } from 'liquid-qex-widget';
import { legalDisclaimerHref } from 'pages/Home/constants';
import React, { useEffect } from 'react';
import { modalEvents, modalStores } from 'stores/modal';
import { walletStores } from 'stores/wallet';

const body = document.body;

export const QexWidgetModal = () => {
    const { visible } = useStore(modalStores.qexWidgetModal);
    const walletAddress = useStore(walletStores.walletAddress);

    const onClose = () => modalEvents.closeQexWidgetModal();

    useEffect(() => {
        visible ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
    }, [visible]);

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
                <Section justifyCenter>
                    {visible && (
                        <QexWidget
                            config={{
                                theme: THEME.LIGHT,
                                payout_settlement: {
                                    method: SETTLEMENT_METHOD.BLOCKCHAIN_TRANSFER,
                                    currency: 'WOM',
                                    input_parameters: {
                                        account_key: {
                                            type: 'WALLET_ADDRESS',
                                            value: walletAddress
                                        }
                                    }
                                },
                                public_api_key: publicApiKey,
                                custom_styles: {
                                    'cs-base': {
                                        color: white
                                    }
                                }
                            }}
                            style={{
                                width: '100%'
                            }}
                            onError={errors => {
                                console.log('Transaction Failed', errors);
                            }}
                            onStepTransition={stepTransition => {
                                console.log(
                                    `Step transition. Old Step: ${stepTransition.old_step}, New step: ${stepTransition.new_step}`,
                                    stepTransition
                                );
                            }}
                            onSuccess={transaction => {
                                console.log('Transaction Complete', transaction);
                            }}
                        />
                    )}
                </Section>
                <QexWidgetDisclaimerSpan>
                    The Liquid QEX application is provided by our partner exchange platform, Liquid. The Liquid QEX is
                    not available to to purchasers in the USA and certain other jurisdictions. By clicking the "Buy with
                    Visa" or "Quick Exchange" button, you agree that you will be contracting directly with the operator
                    of the Liquid.com exchange platform and will be bound by the terms and conditions as set out at
                    liquid.com. For further information, please read the WOM&ensp;
                    <ExternalTextLink color={white} href={legalDisclaimerHref} target="_blank">
                        Legal Disclaimer
                    </ExternalTextLink>
                    .
                </QexWidgetDisclaimerSpan>
            </Modal>
        </Wrapper>
    );
};
