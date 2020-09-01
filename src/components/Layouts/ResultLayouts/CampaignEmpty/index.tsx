import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Span } from 'components/common/TextComponents/Span';
import { Row, Section } from 'components/common/wrappers/FlexWrapper';
import { Wrapper } from 'components/Layouts/ResultLayouts/CampaignEmpty/styles';
import React from 'react';

export const CampaignEmpty = () => (
    <Section alignCenter justifyCenter>
        <Wrapper>
            <Row marginBottom="25px">
                <Span color="#0F1642" fontSize="26px" lineHeight="32px">
                    No Campaigns
                </Span>
            </Row>
            <Row marginBottom="10px">
                <Span color="#0F1642" fontSize="16" lineHeight="19px">
                    No Campaigns
                </Span>
            </Row>
            <RoundedButton>Create Campaign</RoundedButton>
        </Wrapper>
    </Section>
);
