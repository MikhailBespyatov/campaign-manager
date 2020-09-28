import { Loader } from 'components/common/Loader';
import { TagFilter } from 'components/filters/TagFilter';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { Pagination } from 'components/Layouts/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { loadingStores } from 'stores/loading';

export const Discover = () => {
    const items = useStore(campaignContentStores.items);
    const loading = useStore(loadingStores.initialLoading);

    useEffect(() => {
        campaignContentEffects.getItems({
            limit: 100,
            pageIndex: 0
        });
    }, []);

    return (
        <CampaignManagerLayout>
            <Section alignCenter marginBottom="35px">
                <TagFilter />
            </Section>
            {loading ? (
                <Section>
                    <Loader />
                </Section>
            ) : (
                <Section>
                    {/* {console.log(items)} */}
                    {items?.length ? items.map(item => <VideoCard key={item.womContentId} {...item} />) : 'no videos'}
                </Section>
            )}
            <Section justifyCenter>{!loading && <Pagination />}</Section>
            {/* <CardModal /> */}
        </CampaignManagerLayout>
    );
};
