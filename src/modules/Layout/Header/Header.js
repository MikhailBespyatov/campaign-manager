import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import avatarPlaceholder from 'assets/img/avatar-placeholder.webp';
import { logoutAction } from 'modules/Auth/store/actions';
import classes from './Header.module.scss';


const Header = (
  {
    currentUser,
    currentUserName,
    isAdmin,
    logout,
  },
) => {
  if (!currentUser) {
    return null;
  }

  return (
    <div className={`${classes.header} d-flex align-items-center justify-content-between px-4`}>
      <span>{isAdmin ? 'WOM Admin' : 'Campaign manager'}</span>
      <div className="d-flex">
        <div className="text-right mr-2">
          <span className="d-block">{currentUserName}</span>
          <button
            type="button"
            className={classes.logoutBtn}
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <div className={classes.userAvatar}>
          <img src={avatarPlaceholder} className="w-100 h-100 object-fit-cover" alt="User avatar" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.shape({}),
  currentUserName: PropTypes.string,
  isAdmin: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentUser: undefined,
  currentUserName: undefined,
  isAdmin: false,
};

export default connect(
  ({ currentUser }) => ({
    currentUser,
    currentUserName: currentUser && currentUser.fullName,
    isAdmin: currentUser && currentUser.isAdmin,
  }),
  { logout: logoutAction },
)(Header);
