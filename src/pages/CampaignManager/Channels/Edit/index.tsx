import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { ChannelForm } from 'pages/CampaignManager/Channels/ChannelForm';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { channelFormEvents } from 'stores/forms/channelForm';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { routes } from 'constants/routes';

export const EditChannel = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { eachValid } = useForm(forms.channelForm);

    const onSubmit = () => {
        channelFormEvents.editSubmit();
        history.push(globalPrefixUrl + routes.campaignManager.channels.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout isValid={eachValid} onClickAction={onSubmit}>
                <ChannelForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
