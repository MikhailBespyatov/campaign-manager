import React from 'react';
import PropTypes from 'prop-types';
import StatInfo from 'modules/CampaignManager/components/StatInfoBar/StatInfo/StatInfo';
import config from 'modules/CampaignManager/components/StatInfoBar/config';
import classes from './StatInfoBar.module.scss';


const StatInfoBar = ({ statInfoData }) => (
  <div className={` ${classes.root} d-flex justify-content-between w-100 pb-5`}>
    {config.map(({ label, name }) => (
      <StatInfo key={name} content={statInfoData[name]} title={label} />
    ))}
  </div>
);

StatInfoBar.propTypes = {
  statInfoData: PropTypes.shape({}).isRequired,
};

export default StatInfoBar;
