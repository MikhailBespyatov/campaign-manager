import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { FormTextInput } from 'components/common/inputs/NewDesign/TextInput';
import { TitleFormSpan } from 'components/common/typography/TitleFormSpan';
import { FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { routes } from 'constants/routes';
import { lightPink, red, tertiaryBorderRadius } from 'constants/styles';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { inputHorizontalMargin } from 'pages/CampaignManager/Channels/ChannelForm/constants';
import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { channelsEffects } from 'stores/channels';
import { forms } from 'stores/forms';
import { modalEvents } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { getFlexBasisPercent } from 'utils/usefulFunctions';

const { id: channelIdField, name: channelName } = forms.channelForm.fields;

export interface ChannelFormProps {}

interface ParamsProps {
    channelId: string;
}

export const ChannelForm = () => {
    const { reset } = useForm(forms.channelForm);
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const isEditPage = useLocation().pathname !== globalPrefixUrl + routes.campaignManager.channels.create;
    const { channelId } = useParams<ParamsProps>();
    const flexBasisInput = getFlexBasisPercent(2);

    const onClickRemoveButton = () => {
        channelsEffects.removeChannel(channelId);
        history.push(globalPrefixUrl + routes.campaignManager.channels.index);
        modalEvents.closeAsyncModal();
        reset();
    };

    const OnClickConfirmationModal = () => {
        modalEvents.openAsyncModal({
            title: 'Delete Channel',
            content: 'Do you really want delete channel?',
            onOk: onClickRemoveButton
        });
    };

    // const onChangePrivate = (e: ChangeEvent<HTMLInputElement>) => fields.isPrivate.onChange(e.target.checked);

    //Mock
    useEffect(() => {
        isEditPage && channelsEffects.getItemById(channelId);
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContentWrapper padding="40px 80px 75px" width="100%">
            <Section marginBottom="40px">
                <TitleFormSpan>{isEditPage ? 'Edit' : 'Add'} channel</TitleFormSpan>
            </Section>
            {isEditPage ? (
                <Section marginBottom="35px">
                    <FlexGrow flexBasis={flexBasisInput}>
                        <Section marginRight={inputHorizontalMargin}>
                            <FormTextInput required field={channelName} label="Channel Name" />
                        </Section>
                    </FlexGrow>
                    <FlexGrow flexBasis={flexBasisInput}>
                        <Section marginLeft={inputHorizontalMargin}>
                            <FormTextInput disabled field={channelIdField} label="Channel ID" />
                        </Section>
                    </FlexGrow>
                </Section>
            ) : (
                <Section marginBottom="35px">
                    <FormTextInput required field={channelName} label="Channel Name" />
                </Section>
            )}
            {/*<Section>*/}
            {/*    <Row alignCenter>*/}
            {/*        <MarginWrapper marginRight="19px">*/}
            {/*            <ToggleButton value={fields.isPrivate.value} onChange={onChangePrivate} />*/}
            {/*        </MarginWrapper>*/}
            {/*        <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">*/}
            {/*            Make Channel Private*/}
            {/*        </Span>*/}
            {/*    </Row>*/}
            {/*</Section>*/}
            {isEditPage && (
                <Section marginTop="50px">
                    <ManualRoundedButton
                        background={lightPink}
                        borderRadius={tertiaryBorderRadius}
                        mainColor={red}
                        width="223px"
                        onClick={OnClickConfirmationModal}
                    >
                        REMOVE CHANNEL?
                    </ManualRoundedButton>
                </Section>
            )}
        </ContentWrapper>
    );
};
