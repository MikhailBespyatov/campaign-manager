import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { CampaignItem } from 'components/common/features/CampaignItem';
import { itemHorizontalPadding, itemVerticalPadding } from 'components/common/features/CampaignItem/constants';
import { Loader } from 'components/dynamic/Loader';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { Status } from 'types';
import { getCampaignStatus, getOrganizationId } from 'utils/usefulFunctions';

export const CampaignContent = () => {
    const { items } = useStore(campaignsStores.items);
    const statusRoute = useParams<Status>();
    const loading = useStore(loadingStores.initialLoading);
    const draftCampaign = useStore(campaignsStores.draftCampaign);

    const campaignData = items?.filter(campaign => getCampaignStatus(campaign) === statusRoute.status);

    const defaultOrganizationId = getOrganizationId();

    useEffect(() => {
        defaultOrganizationId &&
            campaignsEffects.getItems({ organizationId: defaultOrganizationId, limit: 10, pageIndex: 0 });
    }, [defaultOrganizationId]);

    return (
        <Column width="100%">
            {loading ? (
                <Loader size="small" />
            ) : statusRoute.status === 'draft' ? (
                draftCampaign.length ? (
                    draftCampaign.map(({ id, budget, campaignName, videos }) => (
                        <Section key={id} marginBottom="20px">
                            <BorderBlock
                                removeBorderRadius
                                height="100%"
                                marginBottom="0"
                                marginRight="0"
                                paddingBottom={itemHorizontalPadding}
                                paddingRight={itemVerticalPadding}
                                width="100%"
                            >
                                <CampaignItem
                                    key={id}
                                    budget={{ budgetTotal: budget } as WOM.CampaignBudget}
                                    contentIds={videos as string[]}
                                    id={id}
                                    status={statusRoute.status}
                                    title={campaignName}
                                />
                            </BorderBlock>
                        </Section>
                    ))
                ) : (
                    <CampaignEmpty />
                )
            ) : campaignData?.length ? (
                <>
                    {campaignData.map(item => (
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
                                <CampaignItem key={item.id} status={statusRoute.status} {...item} />
                            </BorderBlock>
                        </Section>
                    ))}
                </>
            ) : (
                <CampaignEmpty />
            )}
        </Column>
    );
};
