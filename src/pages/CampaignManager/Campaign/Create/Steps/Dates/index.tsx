import React, { FC, useEffect, useState } from 'react';
import { CreateCampaignStepsProps, Status, StatusType } from 'types';
import { CampaignDatesLayout } from 'components/Layouts/filterLayouts/CampaignFilterLayout';
import { CampaignTopBar } from 'components/grid/bars/CampaignTopBar';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { itemHorizontalPadding, itemVerticalPadding } from 'components/common/features/CampaignItem/constants';
import { CampaignItem } from 'components/common/features/CampaignItem';
import { useStore } from 'effector-react';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { getCampaignStatus, getOrganizationId } from 'utils/usefulFunctions';
import { EmptySearchResult } from 'components/Layouts/EmptySearchResult';

export const Dates: FC<CreateCampaignStepsProps> = () => {
    const [activeStatus, setActiveStatus] = useState<Status>({ status: 'running' });
    const onChangeStatus = (status: StatusType) => setActiveStatus({ status });
    const campaignStatusCount = useStore(campaignsStores.campaignStatusCount);
    const { items } = useStore(campaignsStores.items);

    const campaignData = items?.filter(campaign => getCampaignStatus(campaign) === activeStatus.status);

    const defaultOrganizationId = getOrganizationId();

    useEffect(() => {
        defaultOrganizationId &&
            campaignsEffects.getItems({ organizationId: defaultOrganizationId, limit: 10, pageIndex: 0 });
    }, [defaultOrganizationId]);

    //Mock
    // const campaignData = campaignMock;
    // let campaignStatusStore = { ...defaultCampaignStatus };
    // campaignData?.forEach(({ status }) => (campaignStatusStore[status] += 1));

    return (
        <>
            <CampaignDatesLayout>
                <CampaignTopBar
                    campaignStatusCount={campaignStatusCount}
                    statusRoute={activeStatus}
                    withoutStatus={['expired', 'draft']}
                    onClick={onChangeStatus}
                />
                <Column width="100%">
                    {campaignData?.length ? (
                        campaignData.map(campaign => (
                            <Section key={campaign.id} marginBottom="20px">
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
                                        hideShowStatisticButton
                                        status={getCampaignStatus(campaign)}
                                        {...campaign}
                                    />
                                </BorderBlock>
                            </Section>
                        ))
                    ) : (
                        <Section justifyCenter marginTop="20px">
                            <EmptySearchResult title="Sorry! No result found" />
                        </Section>
                    )}
                </Column>
            </CampaignDatesLayout>
        </>
    );
};
