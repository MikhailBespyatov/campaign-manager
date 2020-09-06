import { Hr } from 'components/common/dividers/Hr';
import { Summary } from 'components/common/features/Summary';
import { Section } from 'components/common/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import React from 'react';

export const Dashboard = () => (
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
        <Hr />
        Some table
    </MainLayout>
);
