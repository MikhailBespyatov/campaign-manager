import React from 'react';
import PropTypes from 'prop-types';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import VideoCard from 'modules/CampaignManager/components/VideoCard/VideoCard';
import ProductInfo from 'modules/CampaignManager/Discover/VideoDetails/components/ProductInfo';
import HashTagBlock from 'modules/CampaignManager/Discover/VideoDetails/components/HashTagBlock';
import QualityScore from 'modules/CampaignManager/Discover/VideoDetails/components/QualityScore';
import EngagementBlock from 'modules/CampaignManager/Discover/VideoDetails/components/EngagementBlock';
import LineChart from 'modules/CampaignManager/components/charts/LineChart';
import classes from './VideoDetails.module.scss';


const VideoDetailsComponent = ({ content, statistics, onBack }) => {
  if (!content) return null;

  return (
    <div className={`${classes.contentWrapper} p-4`}>
      <div className="d-flex mb-4">
        <div
          onClick={onBack}
          className={`${classes.goBackBtn} d-flex justify-content-center align-items-center mr-4 cursor-pointer`}
        >
          <SpriteIcon name="prev-icon" />
        </div>
        <div className={classes.promoteBtn}>
          <PrimaryButton>Promote +</PrimaryButton>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className={`${classes.videoContainer} mr-4`}>
          <ProductInfo product={content.products[0]} />
          <VideoCard {...content} />
          <HashTagBlock tags={content.tags} />
        </div>
        <div className={`${classes.engagementContainer} mr-4`}>
          <QualityScore {...content.womQualityScore} />
          <EngagementBlock {...content.engagement} />
          <div className="mb-4">
            <h2 className="mb-2">In-Use</h2>
            <span>{content.inCampaignUse ? 'YEAY' : '-'}</span>
          </div>
          <div className="mb-4">
            <h2 className="mb-2">In-Promotion</h2>
            <span>{content.inCampaignPromotionUse ? 'TRUE' : 'FALSE'}</span>
          </div>
        </div>
        {statistics && (
          <div className="flex-fill">
            <LineChart dataset={statistics.views} />
            <LineChart dataset={statistics.likes} />
            <LineChart dataset={statistics.saves} />
            <LineChart dataset={statistics.clicks} />
            <LineChart dataset={statistics.buys} />
          </div>
        )}
      </div>
    </div>
  );
};

VideoDetailsComponent.propTypes = {
  content: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
    products: PropTypes.arrayOf(PropTypes.shape({})),
    womQualityScore: PropTypes.shape({}),
    engagement: PropTypes.shape({}),
    inCampaignUse: PropTypes.bool.isRequired,
    inCampaignPromotionUse: PropTypes.bool.isRequired,
  }),
  statistics: PropTypes.shape({
    views: PropTypes.shape({}),
    likes: PropTypes.shape({}),
    saves: PropTypes.shape({}),
    clicks: PropTypes.shape({}),
    buys: PropTypes.shape({}),
  }),
  onBack: PropTypes.func.isRequired,
};

VideoDetailsComponent.defaultProps = {
  content: undefined,
  statistics: undefined,
};

export default VideoDetailsComponent;
