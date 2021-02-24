import React, { FC, useState } from 'react';
import { CreateCampaignStepsProps, Status, StatusType } from 'types';
import { CampaignFilterLayout } from 'components/Layouts/filterLayouts/CampaignFilterLayout';
import { CampaignTopBar } from 'components/grid/bars/CampaignTopBar';
import { defaultCampaignStatus } from 'constants/defaults';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { itemHorizontalPadding, itemVerticalPadding } from 'components/common/features/CampaignItem/constants';
import { CampaignItem } from 'components/common/features/CampaignItem';
import { campaignMock } from 'pages/CampaignManager/Campaign/Create/Steps/Dates/constants';

export const Dates: FC<CreateCampaignStepsProps> = () => {
    const [activeStatus, setActiveStatus] = useState<Status>({ status: 'running' });
    const onChangeStatus = (status: StatusType) => setActiveStatus({ status });

    //Mock
    const campaignData = campaignMock;
    let campaignStatusStore = { ...defaultCampaignStatus };
    campaignData?.forEach(({ status }) => (campaignStatusStore[status] += 1));

    return (
        <>
            <CampaignFilterLayout>
                <CampaignTopBar
                    campaignStatusCount={campaignStatusStore}
                    statusRoute={activeStatus}
                    withoutStatus={['expired', 'draft']}
                    onClick={onChangeStatus}
                />
                <Column width="100%">
                    {campaignData
                        .filter(({ status }) => status === activeStatus.status)
                        .map(campaign => (
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
                                    <CampaignItem hideShowStatisticButton {...campaign} />
                                </BorderBlock>
                            </Section>
                        ))}
                </Column>
            </CampaignFilterLayout>
        </>
    );
};
