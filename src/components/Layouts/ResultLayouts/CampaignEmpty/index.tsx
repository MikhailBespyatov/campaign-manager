import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Span } from 'components/common/typography/Span';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { Wrapper } from 'components/Layouts/ResultLayouts/CampaignEmpty/styles';
import { routes } from 'constants/routes';
import React from 'react';
import { useHistory } from 'react-router';

export const CampaignEmpty = () => {
    const history = useHistory();

    const onClick = () => history.push(routes.campaignManager.campaign.create);

    return (
        <Section alignCenter justifyCenter>
            <Wrapper>
                <Row marginBottom="25px">
                    <Span color="#0F1642" fontSize="26px" lineHeight="32px">
                        No Campaigns
                    </Span>
                </Row>
                <Row marginBottom="10px">
                    <Span color="#0F1642" fontSize="16" lineHeight="19px">
                        It looks like you haven't created any Campaigns yet
                    </Span>
                </Row>
                <RoundedButton onClick={onClick}>Create Campaign</RoundedButton>
            </Wrapper>
        </Section>
    );
};
