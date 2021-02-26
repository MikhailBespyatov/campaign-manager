import { Loader } from 'components/common/Loader';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { VideosFilterLayout } from 'components/Layouts/filterLayouts/VideosFilterLayout';
import { useStore } from 'effector-react';
import { noContentMessage } from 'pages/CampaignManager/Discover/constants';
import { CardCatalogGrid } from 'pages/CampaignManager/Discover/styles';
import React from 'react';
import { campaignContentStores } from 'stores/campaignContent';

export const Discover = () => {
    const { items, totalRecords } = useStore(campaignContentStores.items);
    // const visibleCreateCampaign = useStore(campaignContentStores.visibleCreateCampaign);
    const loading = useStore(campaignContentStores.initialLoading);

    return (
        <CampaignManagerLayout>
            {/*{visibleCreateCampaign && <CreateCampaignManager />}*/}
            <VideosFilterLayout loading={loading} totalRecords={totalRecords}>
                {loading ? (
                    <Section>
                        <Loader />
                    </Section>
                ) : (
                    <CardCatalogGrid>
                        {items?.length
                            ? items.map(item => <VideoCard key={item.womContentId} {...item} />)
                            : noContentMessage}
                    </CardCatalogGrid>
                )}
            </VideosFilterLayout>
        </CampaignManagerLayout>
    );
};
