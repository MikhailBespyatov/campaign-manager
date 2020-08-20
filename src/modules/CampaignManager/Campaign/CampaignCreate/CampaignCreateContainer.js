import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import errorToastr from 'libs/toastr/errorToastr';
import {
  channelsSwitchesConfig,
  spokenLanguageSwitchesConfig,
  subtitleLanguageSwitchesConfig,
} from 'modules/CampaignManager/Campaign/CampaignCreate/constants';
import CampaignCreateComponent from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreateComponent';
import CampaignService from 'modules/CampaignManager/Campaign/CampaignService';
import DiscoverService from 'modules/CampaignManager/Discover/DiscoverService';
import { getTomorrow, getFormattedDateString, convertMillisecondsToDays } from 'modules/CampaignManager/helpers';
import { createCampaignFormTransformer } from 'modules/CampaignManager/Campaign/CampaignCreate/transformers';
import successToastr from 'libs/toastr/successToastr';
import routeByName from 'constants/routes';
import { syncSingleCampaignAction } from 'modules/CampaignManager/Campaign/store/actions';

const initialState = {
  contentList: {},
  similarVideoList: [],
  selectedVideoList: [],
  hashTagsFilterValue: [],
  campaignFormValues: {
    watchOverride: false,
    mustWatch: false,
    boostContentValue: 1,
    boostCreatorValue: 1,
    budgetAmount: 0,
    startDate: getTomorrow(),
    dayAmount: 28,
  },
};

// TODO: Need to rework logic in order incapsulate
//  manipulations with video into internal component

class CampaignCreateContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentDidMount() {
    (async () => {
      const { hashTagsFilterValue } = this.state;
      const {
        match: { params: { campaignId } },
        returnStatisticsPeriod,
        syncSingleCampaign,
      } = this.props;

      await this.getVideosForPageInternal(0, hashTagsFilterValue);

      if (campaignId) {
        syncSingleCampaign({ campaignId, returnStatisticsPeriod });
      }
    })();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { campaignFormValues: campaignFormValuesPrev } = prevState;

    if (this.shouldFormReset(prevProps)) {
      const { items: list } = await DiscoverService.getList({
        pageIndex: 0,
        limit: 10,
        tagsAll: [],
      });

      this.setState({
        ...initialState,
        contentList: list,
        similarVideoList: Object.values(list),
      });
    }

    if (this.shouldFormUpdate(prevProps)) {
      this.updateForm(campaignFormValuesPrev);
    }
  }

  async getVideosForPageInternal(pageIndex, filterValue) {
    const { campaignFormValues } = this.state;
    try {
      const { items: list } = await DiscoverService.getList({
        pageIndex,
        limit: 10,
        tagsAll: filterValue,
      });

      if (campaignFormValues.contentIds) {
        const contentListCopy = { ...list };
        campaignFormValues.contentIds.forEach((id) => {
          delete contentListCopy[id];
        });
        this.setState({ similarVideoList: Object.values(contentListCopy) });
      } else {
        this.setState({ similarVideoList: Object.values(list) });
      }
      this.setState({ contentList: list });
    } catch (e) {
      errorToastr(e.message);
    }
  }

  handleTagInputChange = (value) => {
    this.setState({ hashTagsFilterValue: value });
    this.getVideosForPageInternal(0, value);
  };

  handleFormValuesChange = ({ values }) => {
    this.setState((state) => ({
      campaignFormValues: {
        ...state.campaignFormValues,
        ...values,
      },
    }));
  };

  handleSelectedVideosChange = async (contentIds) => {
    if (contentIds.length === 0) {
      this.setState({ selectedVideoList: [] });
    } else {
      try {
        const { items: list } = await DiscoverService.getList({
          pageIndex: 0,
          limit: contentIds.length,
          byContentIds: contentIds,
        });
        this.setState({ selectedVideoList: Object.values(list) });
      } catch (e) {
        errorToastr(e.message);
        return;
      }
    }

    const { contentList } = this.state;
    const contentListCopy = { ...contentList };
    contentIds.forEach((id) => {
      delete contentListCopy[id];
    });
    this.setState({ similarVideoList: Object.values(contentListCopy) });
  };

  saveCampaign = async (formValues) => {
    const {
      history: { push },
      match: { params: { campaignId } },
      organizationId,
    } = this.props;
    const preparedCampaignData = createCampaignFormTransformer(formValues);

    try {
      await CampaignService.updateCampaign({
        ...preparedCampaignData,
        organizationId,
        id: campaignId,
      });
      successToastr('Campaign successfully saved!');
      push(routeByName.campaignManager.campaign.list);
    } catch (e) {
      errorToastr(e.message);
    }
  };

  shouldFormUpdate(prevProps) {
    const { campaign: campaignPrev } = prevProps;
    const {
      match: { params: { campaignId } },
      campaign,
    } = this.props;

    return campaignId && (campaignPrev !== campaign);
  }

  updateForm(campaignFormValuesPrev) {
    const { campaign } = this.props;
    const {
      title,
      contentIds,
      settings: {
        watchOverride,
        mustWatch,
        boostContentValue,
        boostCreatorValue,
      },
      budget: { amount },
      schedule: {
        duration,
        utcToStart,
      },
    } = campaign;

    this.setState({
      campaignFormValues: {
        ...campaignFormValuesPrev,
        title,
        contentIds,
        watchOverride,
        mustWatch,
        boostContentValue,
        boostCreatorValue,
        budgetAmount: amount,
        startDate: getFormattedDateString(utcToStart),
        dayAmount: convertMillisecondsToDays(duration),
      },
    });
    this.handleSelectedVideosChange(contentIds);
  }

  shouldFormReset(prevProps) {
    const { match: { params: { campaignId: campaignIdPrev } } } = prevProps;
    const { match: { params: { campaignId } } } = this.props;
    return (campaignIdPrev && !campaignId);
  }

  render() {
    const {
      similarVideoList,
      selectedVideoList,
      campaignFormValues,
      hashTagsFilterValue,
    } = this.state;

    return (
      <CampaignCreateComponent
        initialFormValues={campaignFormValues}
        hashTagsFilterValue={hashTagsFilterValue}
        onTagInputChange={this.handleTagInputChange}
        similarVideoList={similarVideoList}
        selectedVideoList={selectedVideoList}
        spokenLanguageList={spokenLanguageSwitchesConfig}
        onFormValuesChange={this.handleFormValuesChange}
        subtitleLanguageList={subtitleLanguageSwitchesConfig}
        channelsList={channelsSwitchesConfig}
        onSelectedVideosChange={this.handleSelectedVideosChange}
        onSubmit={this.saveCampaign}
      />
    );
  }
}

CampaignCreateContainer.propTypes = {
  organizationId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      campaignId: PropTypes.string,
    }),
  }).isRequired,
  campaign: PropTypes.shape({
    title: PropTypes.string,
    contentIds: PropTypes.arrayOf(PropTypes.string),
    settings: PropTypes.shape({
      watchOverride: PropTypes.bool,
      mustWatch: PropTypes.bool,
      boostContentValue: PropTypes.number,
      boostCreatorValue: PropTypes.number,
    }),
    budget: PropTypes.shape({
      amount: PropTypes.number,
    }),
    schedule: PropTypes.shape({
      duration: PropTypes.number,
      utcToStart: PropTypes.string,
    }),
  }),
  returnStatisticsPeriod: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  syncSingleCampaign: PropTypes.func.isRequired,
};

CampaignCreateContainer.defaultProps = {
  campaign: undefined,
};

export default connect(
  (
    {
      campaign: { list: campaignList, orgId },
      layout: { daySelectValue },
    },
    { match: { params: { campaignId } } },
  ) => ({
    organizationId: orgId,
    campaign: campaignId && campaignList[campaignId],
    returnStatisticsPeriod: daySelectValue,
  }),
  { syncSingleCampaign: syncSingleCampaignAction },
)(CampaignCreateContainer);
