import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { FormTextInput } from 'components/common/inputs/NewDesign/TextInput';
import { Span } from 'components/common/typography/Span';
import { TableSubSpan } from 'components/common/typography/TableSubSpan';
import { TitleFormSpan } from 'components/common/typography/TitleFormSpan';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize } from 'constants/defaults';
import { routes } from 'constants/routes';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { inputHorizontalMargin } from 'pages/CampaignManager/Channels/ChannelForm/constants';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { channelsEffects } from 'stores/channels';
import { forms } from 'stores/forms';
import { themeStores } from 'stores/theme';

const { /*id: channelIdField,*/ name: channelName, isPrivate } = forms.channelForm.fields;

export interface ChannelFormProps {}

interface ParamsProps {
    channelId: string;
}

export const ChannelForm = () => {
    const { reset } = useForm(forms.channelForm);
    const isPrivateState = forms.channelForm.fields.isPrivate.$value;
    //const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const isEditPage = useLocation().pathname !== globalPrefixUrl + routes.campaignManager.channels.create;
    const { channelId } = useParams<ParamsProps>();

    //const flexBasisInput = getFlexBasisPercent(2);

    // const onClickRemoveButton = () => {
    //     channelsEffects.removeChannel(channelId);
    //     history.push(globalPrefixUrl + routes.campaignManager.channels.index);
    //     modalEvents.closeAsyncModal();
    //     reset();
    // };

    // const OnClickConfirmationModal = () => {
    //     modalEvents.openAsyncModal({
    //         title: 'Delete Channel',
    //         content: 'Do you really want delete channel?',
    //         onOk: onClickRemoveButton
    //     });
    // };

    //console.log('isPrivateState', isPrivateState.getState());

    const onChangePrivate = (isChecked: boolean) => isPrivate.onChange(isChecked);

    //Mock
    useEffect(() => {
        isEditPage && channelsEffects.getItemById(channelId);
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // <Wrapper>
        <>
            <Section marginBottom="25px">
                <TitleFormSpan>{isEditPage ? 'Edit' : 'Add New'} Channel</TitleFormSpan>
            </Section>
            {isEditPage ? (
                <>
                    <Section marginBottom="22px" marginRight={inputHorizontalMargin}>
                        <FormTextInput
                            required
                            field={channelName}
                            label="Channel Name"
                            placeholder="Type channel name here..."
                        />
                    </Section>
                    <Section marginBottom="8px">
                        <TableSubSpan>Channel ID</TableSubSpan>
                    </Section>
                    <Row marginBottom="25px">
                        <TableSubSpan color="#73799C">{channelId}</TableSubSpan>
                    </Row>

                    {/* <Section marginBottom="30px">
                        <FormTextInput disabled field={channelIdField} label="Channel ID" />
                    </Section> */}
                </>
            ) : (
                <Section marginBottom="33px">
                    <FormTextInput
                        required
                        field={channelName}
                        label="Channel Name"
                        placeholder="Type channel name here..."
                    />
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

            <Section>
                <Row alignCenter>
                    <MarginWrapper marginRight="19px">
                        <Checkbox defaultValue={isPrivateState.getState()} onChange={onChangePrivate} />
                    </MarginWrapper>
                    <Span fontSize={defaultFontSize} fontWeight="400" lineHeight="17px">
                        Make Channel Private
                    </Span>
                </Row>
            </Section>
            {/* {isEditPage && (
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
            )} */}
            {/* </Wrapper> */}
        </>
    );
};
