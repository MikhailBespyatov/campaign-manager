import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoListComponent from 'modules/CampaignManager/Discover/VideoList/VideoListComponent';
import { getVideosForPageAction } from 'modules/CampaignManager/Discover/store/actions';
import errorToastr from 'libs/toastr/errorToastr';


class VideoListContainer extends React.PureComponent {
  componentDidMount() {
    const { currentPage, hashTagsFilterValue } = this.props;
    this.getVideosForPageInternal(currentPage, hashTagsFilterValue);
  }

  onInputChange = (filterValue) => {
    this.getVideosForPageInternal(0, filterValue);
  };

  onChangePage = (pageIndex) => {
    const { hashTagsFilterValue } = this.props;
    this.getVideosForPageInternal(pageIndex, hashTagsFilterValue);
  };

  async getVideosForPageInternal(pageParam, filterValue) {
    const { getVideosForPage } = this.props;
    try {
      await getVideosForPage(pageParam, filterValue);
    } catch (e) {
      errorToastr(e.message);
    }
  }

  getPageList() {
    const { currentPage, list, listPerPage } = this.props;
    if (listPerPage[currentPage]) {
      return listPerPage[currentPage].map((videoId) => list[videoId]);
    }
    return [];
  }

  render() {
    const { hashTagsFilterValue, currentPage, totalPages } = this.props;
    return (
      <VideoListComponent
        hashTagsFilterValue={hashTagsFilterValue}
        page={currentPage}
        totalPages={totalPages}
        onChangePage={this.onChangePage}
        onInputChange={this.onInputChange}
        list={this.getPageList()}
      />
    );
  }
}

VideoListContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  list: PropTypes.shape({}).isRequired,
  listPerPage: PropTypes.shape({}).isRequired,
  hashTagsFilterValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  getVideosForPage: PropTypes.func.isRequired,
};

export default connect(
  ({ discover }) => discover,
  { getVideosForPage: getVideosForPageAction },
)(VideoListContainer);
