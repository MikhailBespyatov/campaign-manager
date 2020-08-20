import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Discover/VideoDetails/VideoDetails.module.scss';

const ProductInfo = (
  {
    product: {
      brandName,
      tagCategory,
      tagSubCategory,
      item,
    },
  },
) => (
  <div className={`${classes.detailsData} ${classes.productInfo} mb-4`}>
    <div className="d-flex mb-2">
      <span className={`${classes.detailsLabel}`}>Brand</span>
      <span className="font-semi-bold text-ellipsis">{brandName}</span>
    </div>
    <div className="d-flex mb-2">
      <span className={`${classes.detailsLabel}`}>Category</span>
      <span className="font-semi-bold text-ellipsis">{tagCategory}</span>
    </div>
    <div className="d-flex mb-2">
      <span className={`${classes.detailsLabel}`}>Sub-cat</span>
      <span className="font-semi-bold text-ellipsis">{tagSubCategory}</span>
    </div>
    <div className="d-flex mb-2">
      <span className={`${classes.detailsLabel}`}>Item</span>
      <span className="font-semi-bold text-ellipsis">{item}</span>
    </div>
    {/*<div className="d-flex mb-2">*/}
    {/*  <span className={`${classes.detailsLabel}`}>Creator</span>*/}
    {/*  <span className="font-semi-bold">Miles Stone</span>*/}
    {/*</div>*/}
    {/*<div className="d-flex">*/}
    {/*  <span className={`${classes.detailsLabel}`}>Videos</span>*/}
    {/*  <span className="font-semi-bold">10</span>*/}
    {/*</div>*/}
  </div>
);

ProductInfo.propTypes = {
  product: PropTypes.shape({
    brandName: PropTypes.string,
    tagCategory: PropTypes.string,
    tagSubCategory: PropTypes.string,
    item: PropTypes.string,
  }).isRequired,
};

export default ProductInfo;
