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
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
            <Summary marginBottom="20px" marginRight="20px" subtitle="Campaigns Running" title="20.000" />
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
