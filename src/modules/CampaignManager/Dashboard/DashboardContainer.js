import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import errorToastr from 'libs/toastr/errorToastr';
import DashboardService from 'modules/CampaignManager/Dashboard/DashboardService';
import DashboardComponent from 'modules/CampaignManager/Dashboard/DashboardComponent';
import { getDateIntervalFromNow } from 'modules/CampaignManager/helpers';


const DashboardContainer = ({ organizationId, daySelectValue }) => {
  const [campaignsData, setCampaignsData] = React.useState(undefined);

  const syncCampaignsInternal = React.useCallback(
    async (dayAmount) => {
      try {
        const datesInterval = getDateIntervalFromNow(dayAmount);
        const data = await DashboardService.getCampaignsData({
          organizationId,
          ...datesInterval,
        });
        setCampaignsData(data);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  React.useEffect(
    () => {
      syncCampaignsInternal(daySelectValue);
    },
    [daySelectValue],
  );
  return (
    <DashboardComponent {...campaignsData} />
  );
};

DashboardContainer.propTypes = {
  organizationId: PropTypes.string.isRequired,
  daySelectValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default connect(
  (
    {
      campaign: { orgId },
      layout: { daySelectValue },
    },
  ) => ({ organizationId: orgId, daySelectValue }),
)(DashboardContainer);
