import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from 'modules/Layout/Header/Header';
import ContentWrapper from 'modules/Layout/ContentWrapper/ContentWrapper';
import Footer from 'modules/Layout/Footer/Footer';


const BaseLayout = ({ isGuest, children }) => {
  if (isGuest) return (children);
  return (
    <div className="flex-fill d-flex flex-column">
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isGuest: PropTypes.bool.isRequired,
};

export default connect(
  ({ currentUser }) => ({ isGuest: !currentUser }),
)(BaseLayout);
