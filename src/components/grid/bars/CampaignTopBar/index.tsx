import { Row } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';
import { routesArray } from './constants';
import { StyledItem } from './styles';
import { Span } from 'components/common/typography/Span';
import { Status } from 'types';
import { useStore } from 'effector-react';
import { campaignsStores } from 'stores/campaigns';
import { useHistory, useParams } from 'react-router';
import { themeStores } from 'stores/theme';

export const CampaignTopBar = () => {
    const campaignStatusCount = useStore(campaignsStores.campaignStatusCount);
    const statusRoute = useParams<Status>();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const history = useHistory();

    return (
        <Row>
            {routesArray.map(({ name, status, path }) => (
                <StyledItem
                    key={name}
                    active={statusRoute.status === status}
                    onClick={() => history.push(globalPrefixUrl + path)}
                >
                    <Span
                        fontSize="16px"
                        fontWeight="600"
                        lineHeight="20px"
                    >{`(${campaignStatusCount[status]}) ${name}`}</Span>
                </StyledItem>
            ))}
        </Row>
    );
};
