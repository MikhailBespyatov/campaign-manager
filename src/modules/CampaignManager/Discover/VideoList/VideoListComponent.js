import React from 'react';
import PropTypes from 'prop-types';
import Row from 'reactstrap/es/Row';
import Col from 'reactstrap/es/Col';
import { Link } from 'react-router-dom';
import VideoCard from 'modules/CampaignManager/components/VideoCard/VideoCard';
import PaginationPanel from 'components/ui/PaginationPanel/PaginationPanel';
import routeByName from 'constants/routes';
import TagInput from 'components/ui/TagInput/TagInput';
import classes from './VideoList.module.scss';


const VideoListComponent = (
  {
    list, onInputChange, hashTagsFilterValue,
    page, totalPages, onChangePage,
  },
) => (
  <>
    <TagInput
      value={hashTagsFilterValue}
      onChange={onInputChange}
      classes={{
        root: 'mb-4',
        label: 'mr-4',
      }}
    />
    <div className="d-flex justify-content-center">
      <div className={classes.videoContainer}>
        {list.length > 0 ? (
          <Row>
            {list.map((item) => (
              <Col key={item.womContentId} sm={6} md={4} lg={3}>
                <VideoCard
                  {...item}
                  bottomContent={(
                    <div className="d-flex justify-content-end">
                      <Link
                        className={classes.linkToDetails}
                        to={routeByName.campaignManager.discover.details(item.womContentId)}
                      >
                        Details
                      </Link>
                    </div>
                  )}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="py-5 text-center">
            <span className="h2">No video found, try searching again</span>
          </div>
        )}
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <PaginationPanel
        currentPage={page}
        totalPages={totalPages}
        onChange={onChangePage}
      />
    </div>
  </>
);

VideoListComponent.propTypes = {
  // Current page number
  page: PropTypes.number.isRequired,
  // List for current page
  list: PropTypes.arrayOf(PropTypes.shape({})),
  totalPages: PropTypes.number.isRequired,
  hashTagsFilterValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

VideoListComponent.defaultProps = {
  list: [],
};

export default VideoListComponent;
