import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'react-final-form';
import SwitchWrapper from 'components/forms/finalFormWrappers/SwitchWrapper';


const ChannelsSwitchBar = ({ channelsList }) => (
  <div className="d-flex flex-nowrap">
    {channelsList.map((
      {
        id, title,
        value: channelValue, points,
      }, index,
    ) => (
      <div key={id} className={clsx({ 'mr-4': index !== (channelsList - 1) })}>
        <h3 className="text-grey mb-2">{title}</h3>
        {points.map(({ title: pointTitle, value: pointValue }) => (
          <Field
            key={pointValue}
            name={channelValue}
            type="checkbox"
            value={pointValue}
            label={pointTitle}
            className="mb-1"
            component={SwitchWrapper}
          />
        ))}
      </div>
    ))}
  </div>
);

ChannelsSwitchBar.propTypes = {
  channelsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ChannelsSwitchBar;
