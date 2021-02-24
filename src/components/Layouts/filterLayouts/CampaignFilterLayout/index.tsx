import React, { FC } from 'react';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { primaryPadding } from 'constants/styles';
import { DatePickerBetween } from 'components/common/inputs/DatePicker';

export interface CampaignFilterLayoutProps {}

export const CampaignFilterLayout: FC<CampaignFilterLayoutProps> = ({ children }) => (
    <>
        <Section>
            <ContentWrapper padding="24px 106px 30px" width="100%">
                <Section justifyCenter>
                    <DatePickerBetween
                        defaultDateFrom={new Date().toISOString()}
                        defaultDateTo={new Date().toISOString()}
                        height="60px"
                        marginBottom={primaryPadding}
                        title={['START OF CAMPAIGN', 'END OF CAMPAIGN']}
                        titleType="outer"
                        width="500px"
                        // onChange={onDatesBetweenChange}
                    />
                </Section>
            </ContentWrapper>
        </Section>
        <Section marginTop="8px">
            <ContentWrapper padding="40px 25px 50px" width="100%">
                {children}
            </ContentWrapper>
        </Section>
    </>
);
