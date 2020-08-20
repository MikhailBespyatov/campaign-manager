import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Discover/VideoDetails/VideoDetails.module.scss';


const QualityScore = ({ authenticity, creativity, positivity }) => (
  <div className="mb-4">
    <h2 className="mb-2">Authenticator</h2>
    <div className="d-flex">
      <div className="d-flex mr-2">
        <span className={`${classes.detailsLabel} mr-1`}>A</span>
        <span className="font-semi-bold">{authenticity.toFixed(1)}</span>
      </div>
      <div className="d-flex mr-2">
        <span className={`${classes.detailsLabel} mr-1`}>C</span>
        <span className="font-semi-bold">{creativity.toFixed(1)}</span>
      </div>
      <div className="d-flex">
        <span className={`${classes.detailsLabel} mr-1`}>P</span>
        <span className="font-semi-bold">{positivity.toFixed(1)}</span>
      </div>
    </div>
  </div>
);

QualityScore.propTypes = {
  authenticity: PropTypes.number.isRequired,
  creativity: PropTypes.number.isRequired,
  positivity: PropTypes.number.isRequired,
};

export default QualityScore;
