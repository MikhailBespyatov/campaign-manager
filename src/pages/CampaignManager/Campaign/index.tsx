import { Summary } from 'components/common/features/Summary';
import { CampaignTable } from 'components/common/tables/CampaignTable';
import { Section } from 'components/common/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { Pagination } from 'components/Layouts/Pagination';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import React from 'react';

export const Campaign = () => (
    <MainLayout>
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
    </MainLayout>
);
