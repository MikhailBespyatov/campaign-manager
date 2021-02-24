import { Row } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';
import { routesArray } from './constants';
import { StyledItem } from './styles';
import { Span } from 'components/common/typography/Span';
import { Status, StatusType } from 'types';
import { defaultCampaignStatus } from 'constants/defaults';

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
