import { Row } from 'components/grid/wrappers/FlexWrapper';
import { defaultCampaignStatus } from 'constants/defaults';
import React from 'react';
import { Status, StatusType } from 'types';
import { routesArray } from './constants';
import { HoveredSpan, StyledItem } from './styles';

interface Props {
    campaignStatusCount: typeof defaultCampaignStatus;
    statusRoute: Status;
    onClick: (status: StatusType) => void;
    withoutStatus?: StatusType[];
}

export const CampaignTopBar = ({ campaignStatusCount, statusRoute, onClick, withoutStatus }: Props) => {
    const viewRoutes = routesArray.filter(({ status }) => !withoutStatus?.includes(status));

    return (
        <Row>
            {viewRoutes.map(({ name, status }) => (
                <StyledItem key={name} active={statusRoute.status === status} onClick={() => onClick(status)}>
                    <HoveredSpan>{`(${campaignStatusCount[status]}) ${name}`}</HoveredSpan>
                </StyledItem>
            ))}
        </Row>
    );
};
