import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreate.module.scss';


const BorderedSection = ({ title, children }) => (
  <div className={classes.borderedSection}>
    <h2 className="mb-4">{title}</h2>
    {children}
  </div>
);

BorderedSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BorderedSection;
