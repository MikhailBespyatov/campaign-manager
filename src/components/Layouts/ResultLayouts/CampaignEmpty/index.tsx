import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { titleMarginBottom } from 'components/Layouts/ResultLayouts/CampaignEmpty/constants';
import { CampaignEmptyWrapper } from 'components/Layouts/ResultLayouts/CampaignEmpty/styles';
import { routes } from 'constants/routes';
import { black, grey4 } from 'constants/styles';
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
            <ManualRoundedButton height="44px" onClick={onClick}>
                CREATE CAMPAIGN
            </ManualRoundedButton>
            <Row marginBottom={titleMarginBottom} marginTop={titleMarginBottom}>
                <Span uppercase color={black} fontSize="18px" fontWeight="700" lineHeight="22px">
                    No Campaigns
                </Span>
            </Row>
            <Row>
                <Span color={grey4} fontSize="13" fontWeight="400" letterSpacing="1px" lineHeight="19px">
                    Its look like you haven’t created any campaigns yet
                </Span>
            </Row>
        </CampaignEmptyWrapper>
    );
};
