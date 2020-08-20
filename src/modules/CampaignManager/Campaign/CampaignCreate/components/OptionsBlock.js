import React from 'react';
import { Field } from 'react-final-form';
import SwitchWrapper from 'components/forms/finalFormWrappers/SwitchWrapper';
import IncrementWrapper from 'components/forms/finalFormWrappers/IncrementWrapper';


const OptionsBlock = () => (
  <div className="d-flex flex-wrap">
    <Field
      name="watchOverride"
      type="checkbox"
      label="Watched Override"
      className="mr-4"
      component={SwitchWrapper}
    />
    <Field
      name="mustWatch"
      type="checkbox"
      label="Must Watch"
      className="mr-4"
      component={SwitchWrapper}
    />
    <Field
      name="boostContentValue"
      label="Boost Content"
      className="mr-4"
      minValue={1}
      maxValue={10}
      component={IncrementWrapper}
    />
    <Field
      name="boostCreatorValue"
      label="Boost Creator"
      minValue={1}
      maxValue={10}
      component={IncrementWrapper}
    />
  </div>
);

export default OptionsBlock;
