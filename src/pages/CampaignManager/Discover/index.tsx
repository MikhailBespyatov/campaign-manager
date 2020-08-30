import { Section } from 'components/common/wrappers/FlexWrapper';
import { TagFilter } from 'components/filters/TagFilter';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { MainLayout } from 'components/Layouts/MainLayout';
import { Pagination } from 'components/Layouts/Pagination';
import { testArray } from 'pages/CampaignManager/Discover/constants';
import React from 'react';

export const Discover = () => (
    <MainLayout>
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
    </MainLayout>
);
