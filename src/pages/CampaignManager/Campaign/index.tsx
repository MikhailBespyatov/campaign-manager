import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import React from 'react';
import { CampaignContent } from 'components/common/features/CampaignContent';
import { CampaignStatusLayout } from 'components/Layouts/CampaignStatusLayout';

export const Campaign = () => (
    <CampaignManagerLayout>
        <CampaignStatusLayout>
            <CampaignContent />
            {/*<CampaignTable />*/}
        </CampaignStatusLayout>
        {/* <Section justifyCenter>
            <Pagination />
        </Section> */}
        {/* <CampaignEmpty /> */}
    </CampaignManagerLayout>
);
