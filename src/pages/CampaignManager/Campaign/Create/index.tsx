import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { CreateCampaignLayout } from 'components/Layouts/CreateCampaignLayout';
import { useStore } from 'effector-react';
import { createCampaignStores } from 'stores/createCampaignSteps';
import { createCampaignSteps } from 'pages/CampaignManager/Campaign/Create/constants';

export const Create = () => {
    const currentComponentIndex = useStore(createCampaignStores.stepIndex);
    const CurrentComponent = createCampaignSteps[currentComponentIndex].component;
    // const draftCampaign = useStore(campaignsStores.draftCampaign);

    // useEffect(() => campaignsEvents.setDefaultDraftCampaign(), []);
    // console.log(draftCampaign);

    return (
        <CampaignManagerLayout>
            <CreateCampaignLayout>
                <CurrentComponent />
            </CreateCampaignLayout>
        </CampaignManagerLayout>
    );
};
