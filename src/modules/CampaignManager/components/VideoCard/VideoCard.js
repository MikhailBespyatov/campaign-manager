import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Hls from 'hls.js/dist/hls';
import brandIcon from 'assets/img/brand-icon.png';
import categoryIcon from 'assets/img/category-icon.png';
import subCategoryIcon from 'assets/img/sub-category-icon.png';
import productNameIcon from 'assets/img/product-name-icon.png';
import classes from 'modules/CampaignManager/components/VideoCard/VideoCard.module.scss';
import BitmapIcon from 'components/icons/BitmapIcon/BitmapIcon';

const initialState = {
  hlsInstance: null,
  loading: false,
  videoReady: false,
  cursorOnVideo: false,
};

class VideoCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.videoRef = React.createRef();
    this.state = { ...initialState };
  }

  componentDidMount() {
    const { streamDetails: { hlsUrl } } = this.props;
    const { current: videoRef } = this.videoRef;

    if (!videoRef) {
      return;
    }

    if (videoRef.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.src = hlsUrl;
      this.setState({ loading: true });
      this.videoRef.addEventListener('loadedmetadata', this.videoReadyListener);
    } else if (Hls.isSupported()) {
      const hlsInstance = new Hls();
      this.setState({ hlsInstance });
    }
  }

  handleMouseEnter = () => {
    const { streamDetails: { hlsUrl } } = this.props;
    const { hlsInstance, loading, videoReady } = this.state;
    this.setState({ cursorOnVideo: true });

    if (hlsInstance && !loading && !videoReady) {
      this.setState({ loading: true });
      hlsInstance.loadSource(hlsUrl);
      hlsInstance.attachMedia(this.videoRef.current);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, this.manifestParsedListener);
    } else if (this.videoRef.current.canPlayType('application/vnd.apple.mpegurl') && videoReady) {
      this.videoRef.current.play();
    } else if (hlsInstance && !loading && videoReady) {
      this.videoRef.current.play();
    }
  };

  handleMouseLeave = () => {
    this.setState({ cursorOnVideo: false });
    this.videoRef.current.pause();
  };

  manifestParsedListener = () => {
    const { cursorOnVideo } = this.state;
    this.setState({
      loading: false,
      videoReady: true,
    });
    if (cursorOnVideo) {
      this.videoRef.current.play();
    }
  };

  videoReadyListener = () => {
    this.setState({
      loading: false,
      videoReady: true,
    });
  };

  render() {
    const {
      bordered, noMargin,
      bottomContent, title, products,
      streamDetails: { screenGrabUrl },
      womQualityScore: { authenticity, creativity, positivity },
      engagement: {
        views, likesPercentage, savesPercentage,
        clicksPercentage, buysPercentage, finalTotal,
      },
    } = this.props;

    return (
      <div
        ref={this.containerRef}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={clsx(
          classes.root,
          'text-white',
          {
            [classes.bordered]: bordered,
            'mb-4': !noMargin,
          },
        )}
      >
        <video
          ref={this.videoRef}
          loop
          muted
          poster={screenGrabUrl}
          preload="metadata"
          className={`${classes.content} ${classes.video} object-fit-cover`}
          alt={`${title} video`}
        />
        <div className={`${classes.content} ${classes.info} d-flex flex-column`}>
          <div className="flex-fill">
            <div className={`${classes.womMetrics} d-flex flex-wrap p-2`}>
              <div className="mr-2">
                <span role="img">&#x1F607;</span>
                {' '}
                <span>{authenticity.toFixed(1)}</span>
              </div>
              <div className="mr-2">
                <span role="img">&#x1F929;</span>
                {' '}
                <span>{creativity.toFixed(1)}</span>
              </div>
              <div>
                <span role="img">&#x1F525;</span>
                {' '}
                <span>{positivity.toFixed(1)}</span>
              </div>
            </div>
            <div className="text-small px-2">
              {`V: ${views} L: ${likesPercentage.toFixed()}% S: ${savesPercentage.toFixed()}% C: ${clicksPercentage.toFixed()}% B: ${buysPercentage.toFixed()}% (${finalTotal.toFixed()})`}
            </div>
          </div>
          <div className="font-semi-bold px-2 mb-4">
            {products[0].tagBrand && (
              <div className="d-flex align-items-center mb-1">
                <BitmapIcon src={brandIcon} className="mr-2" />
                <span className="text-ellipsis">{products[0].tagBrand}</span>
              </div>
            )}
            {products[0].tagCategory && (
              <div className="d-flex align-items-center mb-1">
                <BitmapIcon src={categoryIcon} className="mr-2" />
                <span className="text-ellipsis">{products[0].tagCategory}</span>
              </div>
            )}
            {products[0].tagSubCategory && (
              <div className="d-flex align-items-center mb-1">
                <BitmapIcon src={subCategoryIcon} className="mr-2" />
                <span className="text-ellipsis">{products[0].tagSubCategory}</span>
              </div>
            )}
            {products[0].item && (
              <div className="d-flex align-items-center">
                <BitmapIcon src={productNameIcon} className="mr-2" />
                <span className="text-ellipsis">{products[0].item}</span>
              </div>
            )}
          </div>
          <div className="px-2 mb-2 text-small text-ellipsis">{title}</div>
          {bottomContent}
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {
  bordered: PropTypes.bool,
  noMargin: PropTypes.bool,
  bottomContent: PropTypes.node,
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    tagBrand: PropTypes.string,
    tagCategory: PropTypes.string,
    tagSubCategory: PropTypes.string,
    item: PropTypes.string,
  })).isRequired,
  streamDetails: PropTypes.shape({
    screenGrabUrl: PropTypes.string,
    hlsUrl: PropTypes.string,
  }).isRequired,
  womQualityScore: PropTypes.shape({
    authenticity: PropTypes.number,
    creativity: PropTypes.number,
    positivity: PropTypes.number,
  }).isRequired,
  engagement: PropTypes.shape({
    views: PropTypes.number,
    likesPercentage: PropTypes.number,
    savesPercentage: PropTypes.number,
    clicksPercentage: PropTypes.number,
    buysPercentage: PropTypes.number,
    finalTotal: PropTypes.number,
  }).isRequired,
};

VideoCard.defaultProps = {
  bordered: false,
  noMargin: false,
  bottomContent: undefined,
};

export default VideoCard;
