import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoDetailsComponent from 'modules/CampaignManager/Discover/VideoDetails/VideoDetailsComponent';
import { syncSingleVideoAction } from 'modules/CampaignManager/Discover/store/actions';
import DiscoverService from 'modules/CampaignManager/Discover/DiscoverService';
import errorToastr from 'libs/toastr/errorToastr';
import { getDateIntervalFromNow } from 'modules/CampaignManager/helpers';


const VideoDetailsContainer = (
  {
    history,
    match: { params },
    content,
    daySelectValue,
    syncSingleVideo,
  },
) => {
  const [contentStatistics, setContentStatistics] = React.useState(undefined);

  const syncVideoInternal = React.useCallback(
    async () => {
      const { contentId } = params;
      try {
        await syncSingleVideo(contentId);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  React.useEffect(
    () => {
      syncVideoInternal();
    },
    [],
  );

  const getVideoStatistics = React.useCallback(
    async (amount) => {
      const { contentId } = params;

      try {
        const datesInterval = getDateIntervalFromNow(amount);
        const statistics = await DiscoverService.getVideoStatistics({
          contentId,
          ...datesInterval,
        });
        setContentStatistics(statistics);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  React.useEffect(
    () => {
      getVideoStatistics(daySelectValue);
    },
    [daySelectValue],
  );

  const goBack = React.useCallback(
    () => {
      history.goBack();
    },
    [],
  );

  return (
    <VideoDetailsComponent
      content={content}
      statistics={contentStatistics}
      onBack={goBack}
    />
  );
};

VideoDetailsContainer.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      contentId: PropTypes.string,
    }),
  }).isRequired,
  content: PropTypes.shape({}),
  daySelectValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  syncSingleVideo: PropTypes.func.isRequired,
};

VideoDetailsContainer.defaultProps = {
  content: undefined,
};

export default connect(
  (
    {
      discover: { list },
      layout: { daySelectValue },
    },
    { match: { params: { contentId } } },
  ) => ({
    content: list[contentId],
    daySelectValue,
  }),
  { syncSingleVideo: syncSingleVideoAction },
)(VideoDetailsContainer);
