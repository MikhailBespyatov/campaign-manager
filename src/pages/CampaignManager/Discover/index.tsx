import { Loader } from 'components/common/Loader';
import { TagFilter } from 'components/filters/TagFilter';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { Pagination } from 'components/Layouts/Pagination';
import { defaultLimit, defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import { noContentMessage } from 'pages/CampaignManager/Discover/constants';
import React, { useEffect } from 'react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { loadingStores } from 'stores/loading';

export const Discover = () => {
    const { items } = useStore(campaignContentStores.items);
    const loading = useStore(loadingStores.initialLoading);

    const onTagsFilterChange: onTagsFilterChangeType = (checked, values) =>
        checked
            ? campaignContentEvents.updateAndRemoveValues({
                  removeValues: ['tagsAll'],
                  updateValues: {
                      tagsAny: values,
                      pageIndex: defaultPage,
                      limit: defaultLimit
                  }
              })
            : campaignContentEvents.updateAndRemoveValues({
                  removeValues: ['tagsAny'],
                  updateValues: {
                      tagsAll: values,
                      pageIndex: defaultPage,
                      limit: defaultLimit
                  }
              });

    useEffect(() => {
        campaignContentEvents.setDefaultValues();
    }, []);

    return (
        <CampaignManagerLayout>
            <TagFilter onChange={onTagsFilterChange} />
            {loading ? (
                <Section>
                    <Loader />
                </Section>
            ) : (
                <Section>
                    {items?.length ? items.map(item => <VideoCard key={item.id} {...item} />) : noContentMessage}
                </Section>
            )}
            <Section justifyCenter>{!loading && <Pagination />}</Section>
        </CampaignManagerLayout>
    );
};
