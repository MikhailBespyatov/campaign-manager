import React, { FC } from 'react';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignTopBar } from 'components/grid/bars/CampaignTopBar';

export const CampaignStatusLayout: FC = ({ children }) => (
    <Section>
        <Column width="100%">
            <MarginWrapper marginBottom="20px">
                <CampaignTopBar />
            </MarginWrapper>
            {children}
        </Column>
    </Section>
);
