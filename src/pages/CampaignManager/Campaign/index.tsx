import { Summary } from 'components/common/features/Summary';
import { CampaignTable } from 'components/common/tables/CampaignTable';
import { Section } from 'components/common/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { Pagination } from 'components/Layouts/Pagination';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import React from 'react';

export const Campaign = () => (
    <CampaignManagerLayout>
        <Section>
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="25" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Budget" title="20,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign Spent" title="12,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaign spend per day" title="1,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Budget" title="10,000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Remaining Duration" title="12d" />
        </Section>
        <Section>
            <CampaignTable />
        </Section>
        <Section justifyCenter>
            <Pagination />
        </Section>
        <CampaignEmpty />
    </CampaignManagerLayout>
);
