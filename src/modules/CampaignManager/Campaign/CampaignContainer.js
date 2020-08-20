import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import routeByName from 'constants/routes';
import CampaignListContainer from 'modules/CampaignManager/Campaign/CampaignList/CampaignListContainer';
import CampaignDetailsContainer from 'modules/CampaignManager/Campaign/CampaignDetails/CampaignDetailsContainer';
import CampaignCreateContainer from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreateContainer';
import StatInfoBar from 'modules/CampaignManager/components/StatInfoBar/StatInfoBar';
import { getCampaignStatInfoAction } from 'modules/CampaignManager/Campaign/store/actions';
import errorToastr from 'libs/toastr/errorToastr';


const CampaignContainer = ({ statInfo, getCampaignStatInfo }) => {
  const getCampaignStatInfoInternal = React.useCallback(
    async () => {
      try {
        getCampaignStatInfo();
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  React.useEffect(() => {
    getCampaignStatInfoInternal();
  }, []);

  return (
    <>
      <StatInfoBar statInfoData={statInfo} />
      <Switch>
        <Route
          exact
          path={routeByName.campaignManager.campaign.list}
          component={CampaignListContainer}
        />
        <Route
          exact
          path={routeByName.campaignManager.campaign.details()}
          component={CampaignDetailsContainer}
        />
        <Route
          exact
          path={routeByName.campaignManager.campaign.create}
          component={CampaignCreateContainer}
        />
        <Route
          exact
          path={routeByName.campaignManager.campaign.edit()}
          component={CampaignCreateContainer}
        />
      </Switch>
    </>
  );
};

CampaignContainer.propTypes = {
  statInfo: PropTypes.shape({}).isRequired,
  getCampaignStatInfo: PropTypes.func.isRequired,
};

export default connect(
  ({ campaign: { statInfo } }) => ({ statInfo }),
  { getCampaignStatInfo: getCampaignStatInfoAction },
)(CampaignContainer);
