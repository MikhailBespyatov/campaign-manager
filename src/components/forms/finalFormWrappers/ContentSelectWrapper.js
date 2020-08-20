import React from 'react';
import PropTypes from 'prop-types';
import ContentSelect from 'modules/CampaignManager/Campaign/CampaignCreate/components/ContentSelect';


const ContentSelectWrapper = ({ input, ...rest }) => (
  <ContentSelect
    {...input}
    {...rest}
  />
);

ContentSelectWrapper.propTypes = {
  input: PropTypes.shape({}).isRequired,
};

export default ContentSelectWrapper;
