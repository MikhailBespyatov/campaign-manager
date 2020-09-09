import { Section } from 'components/common/wrappers/FlexWrapper';
import { TagFilter } from 'components/filters/TagFilter';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { Pagination } from 'components/Layouts/Pagination';
import { CardModal } from 'components/modals/CardModal';
import { testArray } from 'pages/CampaignManager/Discover/constants';
import React from 'react';

export const Discover = () => (
    <CampaignManagerLayout>
        <Section alignCenter marginBottom="35px">
            <TagFilter />
        </Section>
        <Section>
            {testArray.map(i => (
                <VideoCard key={i} marginBottom="34px" marginRight="40px" />
            ))}
        </Section>
        <Section justifyCenter>
            <Pagination />
        </Section>
        <CardModal />
    </CampaignManagerLayout>
);
