import React from 'react';
import { toastr } from 'react-redux-toastr';


class Icon extends React.PureComponent {
  render() {
    return null;
  }
}

const errorToastr = (messages, options = {}) => {
  (Array.isArray(messages) ? messages : [messages]).forEach(
    (text) => toastr.error(
      'Error',
      text,
      {
        icon: (<Icon />),
        ...options,
        showCloseButton: true,
      },
    ),
  );
};

export default errorToastr;
