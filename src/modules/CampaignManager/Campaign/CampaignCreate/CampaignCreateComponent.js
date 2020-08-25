import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, FormSpy } from 'react-final-form';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import TagInput from 'constants/ui/TagInput/TagInput';
import BorderedSection from 'modules/CampaignManager/Campaign/CampaignCreate/components/BorderedSection';
import LanguageSwitchBar from 'modules/CampaignManager/Campaign/CampaignCreate/components/LanguageSwitchBar';
import ContentSelectWrapper from 'components/forms/finalFormWrappers/ContentSelectWrapper';
import FinancialsBlock from 'modules/CampaignManager/Campaign/CampaignCreate/components/FinancialsBlock';
import ChannelsSwitchBar from 'modules/CampaignManager/Campaign/CampaignCreate/components/ChannelsSwitchBar';
import OptionsBlock from 'modules/CampaignManager/Campaign/CampaignCreate/components/OptionsBlock';
import HashTagsBlock from 'modules/CampaignManager/Campaign/CampaignCreate/components/HashTagsBlock';
import BudgetBlock from 'modules/CampaignManager/Campaign/CampaignCreate/components/BudgetBlock';
import classes from './CampaignCreate.module.scss';


const CampaignCreateComponent = (
  {
    initialFormValues, formValidate, hashTagsFilterValue,
    onTagInputChange, similarVideoList, selectedVideoList,
    onSelectedVideosChange, spokenLanguageList, onFormValuesChange,
    subtitleLanguageList, channelsList, onSubmit,
  },
) => (
  <Form
    initialValues={initialFormValues}
    validate={formValidate}
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} noValidate>
        <FormSpy subscription={{ values: true }} onChange={onFormValuesChange} />
        <div className="d-flex align-items-center mt-4 mb-2">
          <h1 className={classes.filterLabel}>Campaign</h1>
          <div className={classes.campaignTitleWrapper}>
            <Field
              noMargin
              name="title"
              component={TextInputWrapper}
            />
          </div>
        </div>
        <TagInput
          label="Hashtag Filter"
          value={hashTagsFilterValue}
          onChange={onTagInputChange}
          classes={{
            root: 'mb-2',
            label: `${classes.filterLabel}`,
          }}
        />
        <LanguageSwitchBar
          name="spokenLanguage"
          switchList={spokenLanguageList}
          title="Spoken Language"
          className="mb-1"
        />
        <LanguageSwitchBar
          name="subtitleLanguage"
          switchList={subtitleLanguageList}
          title="Subtitle Language"
          className="mb-2"
        />
        <Field
          name="contentIds"
          similarVideoList={similarVideoList}
          selectedVideoList={selectedVideoList}
          onSelectedVideosChange={onSelectedVideosChange}
          component={ContentSelectWrapper}
        />
        <div className="d-flex mb-4">
          <FinancialsBlock />
          <div className="flex-fill overflow-auto">
            <BorderedSection title="Channels">
              <div className="overflow-auto">
                <ChannelsSwitchBar channelsList={channelsList} />
              </div>
            </BorderedSection>
            <BorderedSection title="Options">
              <OptionsBlock />
            </BorderedSection>
            <BorderedSection title="Hashtags">
              <HashTagsBlock />
            </BorderedSection>
          </div>
        </div>
        <BudgetBlock />
      </form>
    )}
  />
);

CampaignCreateComponent.propTypes = {
  initialFormValues: PropTypes.shape({}).isRequired,
  hashTagsFilterValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  similarVideoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedVideoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  spokenLanguageList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subtitleLanguageList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  channelsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onTagInputChange: PropTypes.func.isRequired,
  onSelectedVideosChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formValidate: PropTypes.func,
};

CampaignCreateComponent.defaultProps = {
  formValidate: undefined,
};

export default CampaignCreateComponent;
