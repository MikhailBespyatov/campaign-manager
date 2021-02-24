import React, { useEffect } from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { CreateCampaignLayout } from 'components/Layouts/CreateCampaignLayout';
import { useStore } from 'effector-react';
import { createCampaignStores } from 'stores/createCampaignSteps';
import { createCampaignSteps } from 'pages/CampaignManager/Campaign/Create/constants';
import { campaignsEvents } from 'stores/campaigns';

export const Create = () => {
    const currentComponentIndex = useStore(createCampaignStores.stepIndex);
    const CurrentComponent = createCampaignSteps[currentComponentIndex].component;

    useEffect(() => campaignsEvents.setDefaultDraftCampaign(), []);

    return (
        <CampaignManagerLayout>
            <CreateCampaignLayout>
                <CurrentComponent />
            </CreateCampaignLayout>
        </CampaignManagerLayout>
    );
};
