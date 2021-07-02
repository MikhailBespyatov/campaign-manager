import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop as NoopClick } from 'constants/global';
import { routes } from 'constants/routes';
import { lightPink, primaryButtonDiameter, primaryColor, primaryMargin, red } from 'constants/styles';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { Wrapper } from 'pages/CampaignManager/Channels/ChannelForm/styles';
import React, { FC } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { channelsEffects } from 'stores/channels';
import { forms } from 'stores/forms';
import { modalEvents } from 'stores/modal';
import { productsEffects } from 'stores/products';
import { themeStores } from 'stores/theme';
import { IsValid, Noop, Sizes } from 'types';

interface ParamsProps {
    channelId: string;
    productId: string;
}

export interface ModifyingLayoutProps extends IsValid, Pick<Sizes, 'width'> {
    onClickAction?: Noop;
    withoutAction?: boolean;
    page: 'Channel' | 'Product';
}

export const ModifyingLayout: FC<ModifyingLayoutProps> = ({
    isValid,
    withoutAction,
    onClickAction = NoopClick,
    page,
    width,
    children
}) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const { channelId, productId } = useParams<ParamsProps>();

    const { reset } = useForm(forms.channelForm);
    const isEditPage = pathname.indexOf('edit') !== -1;

    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    const buttonMarginTop = isEditPage ? '20px' : page === 'Product' ? '25px' : '50px';

    const onClickBackButton = () => history.goBack();
    const onClickAddButton = () => onClickAction();

    const onRemoveChannelButtonClick = () => {
        channelsEffects.removeChannel(channelId);
        history.push(globalPrefixUrl + routes.campaignManager.channels.index);
        modalEvents.closeAsyncModal();
        reset();
    };
    const onRemoveProductButtonClick = () => {
        productsEffects.removeProduct(productId);
        history.push(globalPrefixUrl + routes.campaignManager.products.index);
        modalEvents.closeAsyncModal();
        reset();
    };

    const OnClickConfirmationModal = () => {
        if (page === 'Channel') {
            modalEvents.openAsyncModal({
                title: 'Delete Channel',
                content: 'Do you really want to delete channel?',
                okText: 'Ok',
                onOk: onRemoveChannelButtonClick
            });
        }

        if (page === 'Product') {
            modalEvents.openAsyncModal({
                title: 'Delete Product',
                content: 'Do you really want delete product?',
                okText: 'Ok',
                onOk: onRemoveProductButtonClick
            });
        }
    };

    return (
        <>
            <Section marginBottom={primaryMargin} marginTop="50px">
                <Wrapper width={width}>
                    {/* <ContentWrapper padding="18px 40px" width="100%"> */}
                    {/* <Section justifyBetween>
                        <Row>
                            <SimpleButton backgroundColor={white} color={primaryColor} onClick={onClickBackButton}>
                                BACK
                            </SimpleButton>
                        </Row>
                        {!withoutAction && (
                            <ManualRoundedButton
                                disabled={!isValid}
                                height="29px"
                                minWidth="97px"
                                onClick={onClickAddButton}
                            >
                                {isEditPage ? 'Edit' : 'Add'}
                            </ManualRoundedButton>
                        )}
                    </Section> */}
                    <Section>{children}</Section>

                    <Section alignCenter marginBottom="25px" marginTop={buttonMarginTop}>
                        {!withoutAction && (
                            <MarginWrapper marginRight="15px">
                                <ManualRoundedButton
                                    borderRadius="4px"
                                    disabled={!isValid}
                                    fontSize="16px"
                                    fontWeight="400"
                                    height={primaryButtonDiameter}
                                    minWidth="65px"
                                    //width="136px"
                                    onClick={onClickAddButton}
                                >
                                    {isEditPage ? `Save ${page}` : `Add ${page}`}
                                </ManualRoundedButton>
                            </MarginWrapper>
                        )}
                        {isEditPage && (
                            <MarginWrapper marginRight="15px">
                                <ManualRoundedButton
                                    background={lightPink}
                                    borderRadius="4px"
                                    fontSize="16px"
                                    fontWeight="400"
                                    height={primaryButtonDiameter}
                                    mainColor={red}
                                    minWidth="65px"
                                    // width="223px"
                                    onClick={OnClickConfirmationModal}
                                >
                                    Remove {page}
                                </ManualRoundedButton>
                            </MarginWrapper>
                        )}

                        <ManualRoundedButton
                            background="transparent"
                            borderRadius="4px"
                            fontSize="16px"
                            fontWeight="400"
                            height={primaryButtonDiameter}
                            mainColor={primaryColor}
                            minWidth="65px"
                            //width="136px"
                            onClick={onClickBackButton}
                        >
                            Back
                        </ManualRoundedButton>
                    </Section>
                </Wrapper>
                {/* </ContentWrapper> */}
            </Section>
            {/* <Section>{children}</Section> */}
        </>
    );
};
