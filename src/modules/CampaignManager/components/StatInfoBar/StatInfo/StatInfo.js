import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/components/StatInfoBar/StatInfo/StatInfo.module.scss';


const StatInfo = ({ title, content }) => (
  <div className={classes.wrapper}>
    <div className={classes.content}>{content}</div>
    <div className={classes.title}>
      <span>{title}</span>
    </div>
  </div>
);

StatInfo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

StatInfo.defaultProps = {
  title: '',
  content: '',
};

export default StatInfo;
