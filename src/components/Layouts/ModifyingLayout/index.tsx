import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop as NoopClick } from 'constants/global';
import { routes } from 'constants/routes';
import {
    lightPink,
    primaryButtonDiameter,
    primaryColor,
    primaryMargin,
    red,
    tertiaryBorderRadius
} from 'constants/styles';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { Wrapper } from 'pages/CampaignManager/Channels/ChannelForm/styles';
import React, { FC } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { channelsEffects } from 'stores/channels';
import { forms } from 'stores/forms';
import { modalEvents } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { IsValid, Noop } from 'types';

interface ParamsProps {
    channelId: string;
}

export interface ModifyingLayoutProps extends IsValid {
    onClickAction?: Noop;
    withoutAction?: boolean;
}

export const ModifyingLayout: FC<ModifyingLayoutProps> = ({
    isValid,
    withoutAction,
    onClickAction = NoopClick,
    children
}) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const { channelId } = useParams<ParamsProps>();
    const { reset } = useForm(forms.channelForm);
    const isEditPage = pathname.indexOf('edit') !== -1;

    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    const onClickBackButton = () => history.goBack();
    const onClickAddButton = () => onClickAction();

    const onClickRemoveButton = () => {
        channelsEffects.removeChannel(channelId);
        history.push(globalPrefixUrl + routes.campaignManager.channels.index);
        modalEvents.closeAsyncModal();
        reset();
    };

    const OnClickConfirmationModal = () => {
        modalEvents.openAsyncModal({
            title: 'Delete Channel',
            content: 'Do you really want to delete channel?',
            onOk: onClickRemoveButton
        });
    };

    return (
        <>
            <Section marginBottom={primaryMargin} marginTop="50px">
                <Wrapper>
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

                    <Section alignCenter marginBottom="25px" marginTop={isEditPage ? '20px' : '50px'}>
                        {!withoutAction && (
                            <MarginWrapper marginRight="15px">
                                <ManualRoundedButton
                                    borderRadius={tertiaryBorderRadius}
                                    disabled={!isValid}
                                    fontSize="16px"
                                    fontWeight="400"
                                    height={primaryButtonDiameter}
                                    minWidth="65px"
                                    //width="136px"
                                    onClick={onClickAddButton}
                                >
                                    {isEditPage ? 'Save Channel' : 'Add Channel'}
                                </ManualRoundedButton>
                            </MarginWrapper>
                        )}
                        {isEditPage && (
                            <MarginWrapper marginRight="15px">
                                <ManualRoundedButton
                                    background={lightPink}
                                    borderRadius={tertiaryBorderRadius}
                                    fontSize="16px"
                                    fontWeight="400"
                                    height={primaryButtonDiameter}
                                    mainColor={red}
                                    minWidth="65px"
                                    // width="223px"
                                    onClick={OnClickConfirmationModal}
                                >
                                    Remove Channel
                                </ManualRoundedButton>
                            </MarginWrapper>
                        )}

                        <ManualRoundedButton
                            background="transparent"
                            borderRadius={tertiaryBorderRadius}
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
