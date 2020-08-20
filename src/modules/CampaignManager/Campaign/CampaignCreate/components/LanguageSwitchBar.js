import React from 'react';
import PropTypes from 'prop-types';
import classes from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreate.module.scss';
import { Field } from 'react-final-form';
import SwitchWrapper from 'components/forms/finalFormWrappers/SwitchWrapper';


const LanguageSwitchBar = (
  {
    className, name,
    title, switchList,
  },
) => (
  <div className={`d-flex align-items-center ${className}`}>
    <div className={`${classes.filterLabel} ${classes.darkGrey}`}>
      <h2>{title}</h2>
    </div>
    <div className="d-flex">
      {switchList.map(({ title: switchTitle, value }) => (
        <Field
          key={value}
          name={name}
          type="checkbox"
          value={value}
          internalText={switchTitle}
          className="mr-4"
          component={SwitchWrapper}
        />
      ))}
    </div>
  </div>
);

LanguageSwitchBar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  switchList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

LanguageSwitchBar.defaultProps = {
  className: '',
};

export default LanguageSwitchBar;
