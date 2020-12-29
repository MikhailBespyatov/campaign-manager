import React, { useEffect } from 'react';
import { Status } from 'types';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { useStore } from 'effector-react';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { getCampaignStatus, getOrganizationId } from 'utils/usefulFunctions';
import { Loader } from 'components/common/Loader';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import { CampaignItem } from 'components/common/features/CampaignItem';
import { useParams } from 'react-router';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { itemHorizontalPadding, itemVerticalPadding } from 'components/common/features/CampaignItem/constants';

export const CampaignContent = () => {
    const { items } = useStore(campaignsStores.items);
    const statusRoute = useParams<Status>();
    const loading = useStore(loadingStores.initialLoading);

    const defaultOrganizationId = getOrganizationId();

    useEffect(() => {
        defaultOrganizationId &&
            campaignsEffects.getItems({ organizationId: defaultOrganizationId, limit: 10, pageIndex: 0 });
    }, [defaultOrganizationId]);

    return (
        <Column width="100%">
            {loading ? (
                <Loader />
            ) : items?.length ? (
                <>
                    {items.map(item => {
                        const status = getCampaignStatus(item);
                        if (statusRoute.status === status)
                            return (
                                <Section key={item.id} marginBottom="20px">
                                    <BorderBlock
                                        removeBorderRadius
                                        height="100%"
                                        marginBottom="0"
                                        marginRight="0"
                                        paddingBottom={itemHorizontalPadding}
                                        paddingRight={itemVerticalPadding}
                                        width="100%"
                                    >
                                        <CampaignItem key={item.id} status={status} {...item} />
                                    </BorderBlock>
                                </Section>
                            );
                        else return null;
                    })}
                </>
            ) : (
                <CampaignEmpty />
            )}
        </Column>
    );
};
