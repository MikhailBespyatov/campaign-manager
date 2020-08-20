import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import classes from 'components/ui/NavBar/NavBar.module.scss';


const NavBar = ({ linksConfig }) => (
  <div>
    {linksConfig.map(({ title, route }, index) => (
      <NavLink
        key={route}
        to={route}
        className={clsx(
          classes.navLink,
          'font-semi-bold',
          'cursor-pointer',
          { 'mr-4': index !== (linksConfig.length - 1) },
        )}
        activeClassName={classes.active}
      >
        {title}
      </NavLink>
    ))}
  </div>
);

NavBar.propTypes = {
  linksConfig: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NavBar;
