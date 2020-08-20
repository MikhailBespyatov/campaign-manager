import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AcceptInviteComponent from 'modules/Auth/AcceptInvite/AcceptInviteComponent';
import acceptInviteValidator from 'modules/Auth/AcceptInvite/acceptInviteValidator';
import { acceptInviteAction } from 'modules/Admin/Users/store/actions';
import errorToastr from 'libs/toastr/errorToastr';


const AcceptInviteContainer = ({ match: { params }, acceptInvite }) => {
  const [invitationCode, setInvitationCode] = React.useState(null);

  React.useEffect(
    () => {
      const { inviteCode } = params;
      setInvitationCode(inviteCode);
    },
    [],
  );

  const acceptInviteAndLogin = React.useCallback(
    async ({ password }) => {
      try {
        await acceptInvite(invitationCode, password);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [invitationCode],
  );
  return (
    <AcceptInviteComponent
      validate={acceptInviteValidator}
      onSubmit={acceptInviteAndLogin}
    />
  );
};

AcceptInviteContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      inviteCode: PropTypes.string,
    }),
  }).isRequired,
  acceptInvite: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { acceptInvite: acceptInviteAction },
)(AcceptInviteContainer);
