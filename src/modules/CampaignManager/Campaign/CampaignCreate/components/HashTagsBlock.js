import React from 'react';
import { Field } from 'react-final-form';
import IncrementWrapper from 'components/forms/finalFormWrappers/IncrementWrapper';


const HashTagsBlock = () => (
  <div className="d-flex flex-wrap">
    <Field
      name="adidas"
      label="#ADIDAS"
      className="mr-4 mb-2"
      hashTag
      minValue={1}
      maxValue={10}
      component={IncrementWrapper}
    />
    <Field
      name="sportShoe"
      label="#SPORTSHOE"
      className="mr-4 mb-2"
      hashTag
      minValue={1}
      maxValue={10}
      component={IncrementWrapper}
    />
    <Field
      name="streetWear"
      label="#STREETWEAR"
      className="mb-2"
      hashTag
      minValue={1}
      maxValue={10}
      component={IncrementWrapper}
    />
  </div>
);

export default HashTagsBlock;
