import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreate.module.scss';
import VideoCard from 'modules/CampaignManager/components/VideoCard/VideoCard';
import PrimaryButton from 'constants/ui/buttons/PrimaryButton';

class ContentSelect extends React.PureComponent {
  addVideo = ({ currentTarget }) => {
    const { value, onChange, onSelectedVideosChange } = this.props;
    const contentId = currentTarget.getAttribute('data-content-id');
    const newValue = [...value, contentId];
    onSelectedVideosChange(newValue);
    onChange(newValue);
  };

  removeVideo = ({ currentTarget }) => {
    const { value, onChange, onSelectedVideosChange } = this.props;
    const contentId = currentTarget.getAttribute('data-content-id');
    const newValue = value.filter((id) => id !== contentId);
    onSelectedVideosChange(newValue);
    onChange(newValue);
  };

  render() {
    const { similarVideoList, selectedVideoList } = this.props;

    return (
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap">
          {selectedVideoList.map((item) => (
            <div key={item.womContentId} className={`${classes.selectedVideoWrapper} mr-4`}>
              <VideoCard
                {...item}
                bordered
                bottomContent={(
                  <div className="text-center mb-2">
                    <PrimaryButton
                      type="button"
                      inline
                      size="sm"
                      data-content-id={item.womContentId}
                      onClick={this.removeVideo}
                    >
                      Remove
                    </PrimaryButton>
                  </div>
                )}
              />
            </div>
          ))}
        </div>
        <div className={`${classes.similarVideoContainer} d-flex flex-nowrap overflow-auto align-items-center mb-4`}>
          {
            // TODO: Need to implement horizontal infinity scroll
            similarVideoList.length > 0 ? similarVideoList.map((item) => (
              <div key={item.womContentId} className={`${classes.similarVideoWrapper} mr-2`}>
                <VideoCard
                  {...item}
                  noMargin
                  bottomContent={(
                    <div className="text-center mb-2">
                      <PrimaryButton
                        type="button"
                        inline
                        size="sm"
                        data-content-id={item.womContentId}
                        onClick={this.addVideo}
                      >
                        + Add
                      </PrimaryButton>
                    </div>
                  )}
                />
              </div>
            )) : (
              <div className={`${classes.emptyVideoList}`}>
                <span className={`${classes.darkGrey} h2`}>No video found, try searching again</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

ContentSelect.propTypes = {
  similarVideoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedVideoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  onSelectedVideosChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContentSelect;
