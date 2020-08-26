// import { acceptInviteAction } from 'modules/Admin/Users/store/actions';
import { AcceptInviteComponent } from 'modules/Auth/AcceptInvite/AcceptInviteComponent';
// import acceptInviteValidator from 'modules/Auth/AcceptInvite/acceptInviteValidator';
import React from 'react';
import { useParams } from 'react-router';

export const AcceptInviteContainer = () => {
    const { inviteCode } = useParams();

    // const acceptInviteAndLogin = React.useCallback(
    //     async ({ password }) => {
    //         try {
    //             await acceptInvite(invitationCode, password);
    //         } catch (e) {
    //             errorToastr(e.message);
    //         }
    //     },
    //     [invitationCode]
    // );

    return <AcceptInviteComponent />;
};
