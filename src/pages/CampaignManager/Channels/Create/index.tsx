import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { routes } from 'constants/routes';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { ChannelForm } from 'pages/CampaignManager/Channels/ChannelForm';
import React from 'react';
import { useHistory } from 'react-router';
import { forms } from 'stores/forms';
import { channelFormEvents } from 'stores/forms/channelForm';
import { themeStores } from 'stores/theme';

export const CreateChannel = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { eachValid } = useForm(forms.channelForm);

    const onSubmit = () => {
        channelFormEvents.addSubmit();
        history.push(globalPrefixUrl + routes.campaignManager.channels.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout isValid={eachValid} page="Channel" onClickAction={onSubmit}>
                <ChannelForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
