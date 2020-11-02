import { publicApiKey } from 'components/modals/QexWidgetModal/constants';
import { Modal, Wrapper } from 'components/modals/QexWidgetModal/styles';
import { white } from 'constants/styles';
import { useStore } from 'effector-react';
import { QexWidget, SETTLEMENT_METHOD, THEME } from 'liquid-qex-widget';
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
        <Wrapper visible={visible} onClick={onClose}>
            <Modal>
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
            </Modal>
        </Wrapper>
    );
};
