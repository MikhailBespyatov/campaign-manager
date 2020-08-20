import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routeByName from 'constants/routes';
import TextButton from 'components/ui/buttons/TextButton';
import classes from './Footer.module.scss';


const Footer = () => (
  <div className="text-white py-2 mb-3">
    <div className={`${classes.root} d-flex flex-column align-items-center`}>
      <div className={`${classes.logoPlaceholder} mb-3`} />
      <div className="mb-2">
        <TextButton
          className="mr-4"
          noPadding
          inline
          inverted
          component={Link}
          to={routeByName.static.privacy}
        >
          PRIVACY POLICY
        </TextButton>
        <TextButton
          noPadding
          inline
          inverted
          component={Link}
          to={routeByName.static.press}
        >
          PRESS
        </TextButton>
      </div>
      <p className={`${classes.bottomText} m-0 text-center`}>
        © WOM Token Ltd. All Rights reserved <br/>
        RISK DISCLAIMER: The information contained on this website is not investment advice.
        Investing in token sales is a high-risk endeavor and one for which <br/>
        we strongly advise you to consult with your registered investment advisor.
      </p>
    </div>
  </div>
);

export default Footer;
