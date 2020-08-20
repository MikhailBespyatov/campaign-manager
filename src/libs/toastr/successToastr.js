import { toastr } from 'react-redux-toastr';
import React from 'react';

class Icon extends React.PureComponent {
  render() {
    return null;
  }
}

const successToastr = (message, options = {}) => {
  toastr.success('Success', message, { icon: (<Icon />), ...options, showCloseButton: false });
};

export default successToastr;
