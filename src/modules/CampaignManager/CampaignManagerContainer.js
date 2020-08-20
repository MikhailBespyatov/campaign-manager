import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import NavBar from 'components/ui/NavBar/NavBar';
import routeByName from 'constants/routes';
import { dayAmountSelectOptions, navLinksConfig } from 'modules/CampaignManager/constants';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import DiscoverContainer from 'modules/CampaignManager/Discover/DiscoverContainer';
import CampaignContainer from 'modules/CampaignManager/Campaign/CampaignContainer';
import { Link } from 'react-router-dom';
import DashboardContainer from 'modules/CampaignManager/Dashboard/DashboardContainer';
import SelectInput from 'components/forms/inputs/SelectInput/SelectInput';
import { setDaysAmountValueAction } from 'modules/Layout/store/actions';
import classes from './CampaignManager.module.scss';


const CampaignManagerContainer = ({ daySelectValue, setDaysAmountValue }) => {
  const handleDaySelectChange = React.useCallback(
    ({ currentTarget }) => {
      setDaysAmountValue(currentTarget.value);
    },
    [],
  );

  return (
    <>
      <div className="mb-4 d-flex justify-content-between">
        <NavBar linksConfig={navLinksConfig} />
        <div className="d-flex">
          <div className={`${classes.dayAmountSelect} mr-4`}>
            <SelectInput
              noMargin
              outlined
              options={dayAmountSelectOptions}
              onChange={handleDaySelectChange}
              value={daySelectValue}
            />
          </div>
          <PrimaryButton
            className={classes.createCampaignBtn}
            component={Link}
            to={routeByName.campaignManager.campaign.create}
          >
            + Create Campaign
          </PrimaryButton>
        </div>
      </div>
      <Switch>
        <Redirect
          exact
          from={routeByName.campaignManager.index}
          to={routeByName.campaignManager.dashboard.index}
        />
        <Route
          path={routeByName.campaignManager.dashboard.index}
          component={DashboardContainer}
        />
        <Route
          path={routeByName.campaignManager.discover.list}
          component={DiscoverContainer}
        />
        <Route
          path={routeByName.campaignManager.campaign.list}
          component={CampaignContainer}
        />
      </Switch>
    </>
  );
};

CampaignManagerContainer.propTypes = {
  daySelectValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setDaysAmountValue: PropTypes.func.isRequired,
};

export default connect(
  ({ layout: { daySelectValue } }) => ({ daySelectValue }),
  { setDaysAmountValue: setDaysAmountValueAction },
)(CampaignManagerContainer);
