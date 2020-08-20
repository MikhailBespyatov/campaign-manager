import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CampaignDetailsComponent from 'modules/CampaignManager/Campaign/CampaignDetails/CampaignDetailsComponent';
import { syncSingleCampaignAction } from 'modules/CampaignManager/Campaign/store/actions';
import errorToastr from 'libs/toastr/errorToastr';
import CampaignService from 'modules/CampaignManager/Campaign/CampaignService';
import { getDateIntervalFromNow } from 'modules/CampaignManager/helpers';

const CampaignDetailsContainer = (
  {
    match: { params },
    campaign,
    syncSingleCampaign,
    daySelectValue,
  },
) => {
  const [campaignStatistics, setCampaignStatistics] = React.useState(undefined);

  const syncCampaignInternal = React.useCallback(
    async (returnStatisticsPeriod) => {
      const { campaignId } = params;
      try {
        await syncSingleCampaign({ campaignId, returnStatisticsPeriod });
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  const getCampaignStatistics = React.useCallback(
    async (amount) => {
      const { campaignId } = params;

      try {
        const datesInterval = getDateIntervalFromNow(amount);
        const statistics = await CampaignService.getCampaignStatistics({
          campaignId,
          ...datesInterval,
        });
        setCampaignStatistics(statistics);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  React.useEffect(
    () => {
      syncCampaignInternal(daySelectValue);
      getCampaignStatistics(daySelectValue);
    },
    [daySelectValue],
  );

  return (
    <CampaignDetailsComponent
      campaign={campaign}
      statistics={campaignStatistics}
      campaignId={params.campaignId}
    />
  );
};

CampaignDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      campaignId: PropTypes.string,
    }),
  }).isRequired,
  campaign: PropTypes.shape({}),
  daySelectValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  syncSingleCampaign: PropTypes.func.isRequired,
};

CampaignDetailsContainer.defaultProps = {
  campaign: undefined,
};

export default connect(
  (
    {
      campaign: { list },
      layout: { daySelectValue },
    },
    { match: { params: { campaignId } } },
  ) => ({
    campaign: list[campaignId],
    daySelectValue,
  }),
  { syncSingleCampaign: syncSingleCampaignAction },
)(CampaignDetailsContainer);
