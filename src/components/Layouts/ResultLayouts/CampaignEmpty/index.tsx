import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { titleMarginBottom } from 'components/Layouts/ResultLayouts/CampaignEmpty/constants';
import { CampaignEmptyWrapper } from 'components/Layouts/ResultLayouts/CampaignEmpty/styles';
import { routes } from 'constants/routes';
import { primaryColor } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { useHistory } from 'react-router';
import { themeStores } from 'stores/theme';

export const CampaignEmpty = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    const onClick = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.create);

    return (
        <CampaignEmptyWrapper>
            <Row marginBottom={titleMarginBottom}>
                <Span color={primaryColor} fontSize="26px" lineHeight="32px">
                    No Campaigns
                </Span>
            </Row>
            <Row marginBottom={titleMarginBottom}>
                <Span color={primaryColor} fontSize="16" lineHeight="19px">
                    It looks like you haven't created any Campaigns yet
                </Span>
            </Row>
            <ManualRoundedButton height="44px" onClick={onClick}>
                CREATE CAMPAIGN
            </ManualRoundedButton>
        </CampaignEmptyWrapper>
    );
};
