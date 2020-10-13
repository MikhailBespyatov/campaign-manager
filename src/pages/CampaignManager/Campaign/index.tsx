import { CampaignTable } from 'components/common/tables/CampaignTable';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import React from 'react';

export const Campaign = () => (
    <CampaignManagerLayout>
        <Section>
            <CampaignTable />
        </Section>
        {/* <Section justifyCenter>
            <Pagination />
        </Section> */}
        {/* <CampaignEmpty /> */}
    </CampaignManagerLayout>
);
