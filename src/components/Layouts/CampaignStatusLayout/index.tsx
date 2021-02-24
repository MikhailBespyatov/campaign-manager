import React, { FC } from 'react';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignTopBar } from 'components/grid/bars/CampaignTopBar';
import { useStore } from 'effector-react';
import { campaignsStores } from 'stores/campaigns';
import { useHistory, useParams } from 'react-router';
import { Status, StatusType } from 'types';
import { themeStores } from 'stores/theme';
import { campaignPrefix } from 'constants/routes';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';

export const CampaignStatusLayout: FC = ({ children }) => {
    const statusRoute = useParams<Status>();
    const campaignStatusCount = useStore(campaignsStores.campaignStatusCount);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const history = useHistory();

    const onChangeStatus = (status: StatusType) => history.push(globalPrefixUrl + `${campaignPrefix}/` + status);

    return (
        <Section>
            <ContentWrapper padding="30px 24px" width="100%">
                <Column width="100%">
                    <MarginWrapper marginBottom="20px">
                        <CampaignTopBar
                            campaignStatusCount={campaignStatusCount}
                            statusRoute={statusRoute}
                            onClick={onChangeStatus}
                        />
                    </MarginWrapper>
                    {children}
                </Column>
            </ContentWrapper>
        </Section>
    );
};
