import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Discover/VideoDetails/VideoDetails.module.scss';


const EngagementBlock = (
  {
    views, viewsD1Percentage, viewsD2Percentage, viewsD3Percentage, viewsD4Percentage,
    likes, likesPercentage, ratings, ratingsPercentage,
    saves, savesPercentage, shares, sharesPercentage,
    clicks, clicksPercentage, buys, buysPercentage,
  },
) => (
  <>
    <div className="mb-4">
      <h2 className="mb-2">Viewers</h2>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Views</span>
        <span className="font-semi-bold">{views}</span>
      </div>
      <div className={`${classes.fontSizeSmall} d-flex justify-content-between mb-1`}>
        <span className={`${classes.detailsLabel}`}>{'<25%'}</span>
        <span>{`${viewsD1Percentage.toFixed()}%`}</span>
      </div>
      <div className={`${classes.fontSizeSmall} d-flex justify-content-between mb-1`}>
        <span className={`${classes.detailsLabel}`}>25 - 50%</span>
        <span>{`${viewsD2Percentage.toFixed()}%`}</span>
      </div>
      <div className={`${classes.fontSizeSmall} d-flex justify-content-between mb-1`}>
        <span className={`${classes.detailsLabel}`}>50 - 75%</span>
        <span>{`${viewsD3Percentage.toFixed()}%`}</span>
      </div>
      <div className={`${classes.fontSizeSmall} d-flex justify-content-between mb-1`}>
        <span className={`${classes.detailsLabel}`}>75%+</span>
        <span>{`${viewsD4Percentage.toFixed()}%`}</span>
      </div>
    </div>
    <div className="mb-4">
      <h2 className="mb-2">Engagement</h2>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Like</span>
        <div>
          <span className="font-semi-bold mr-1">{likes}</span>
          <span className={classes.fontSizeSmall}>
            ({likesPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Save</span>
        <div>
          <span className="font-semi-bold mr-1">{saves}</span>
          <span className={classes.fontSizeSmall}>
            ({savesPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Share</span>
        <div>
          <span className="font-semi-bold mr-1">{shares}</span>
          <span className={classes.fontSizeSmall}>
            ({sharesPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Rate</span>
        <div>
          <span className="font-semi-bold mr-1">{ratings}</span>
          <span className={classes.fontSizeSmall}>
            ({ratingsPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Click</span>
        <div>
          <span className="font-semi-bold mr-1">{clicks}</span>
          <span className={classes.fontSizeSmall}>
            ({clicksPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span className={`${classes.detailsLabel}`}>Buy</span>
        <div>
          <span className="font-semi-bold mr-1">{buys}</span>
          <span className={classes.fontSizeSmall}>
            ({buysPercentage.toFixed(1)}%)
          </span>
        </div>
      </div>
    </div>
  </>
);

EngagementBlock.propTypes = {
  views: PropTypes.number.isRequired,
  viewsD1Percentage: PropTypes.number.isRequired,
  viewsD2Percentage: PropTypes.number.isRequired,
  viewsD3Percentage: PropTypes.number.isRequired,
  viewsD4Percentage: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  likesPercentage: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
  ratingsPercentage: PropTypes.number.isRequired,
  saves: PropTypes.number.isRequired,
  savesPercentage: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  sharesPercentage: PropTypes.number.isRequired,
  clicks: PropTypes.number.isRequired,
  clicksPercentage: PropTypes.number.isRequired,
  buys: PropTypes.number.isRequired,
  buysPercentage: PropTypes.number.isRequired,
};

export default EngagementBlock;
