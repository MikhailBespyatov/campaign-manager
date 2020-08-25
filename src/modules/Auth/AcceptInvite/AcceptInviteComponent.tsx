import acceptInviteValidator from 'modules/Auth/AcceptInvite/acceptInviteValidator';
import CampaignAuthForm from 'modules/Auth/components/CampaignAuthForm/CampaignAuthForm';
import React from 'react';
import { Field } from 'react-final-form';

export const AcceptInviteComponent = () => (
    <CampaignAuthForm
        formSubtitle="Add your invite code and provide your new password"
        initialValues={''}
        submitBtnText="LOGIN"
        validate={acceptInviteValidator}
        onSubmit={() => {}}
    >
        <Field label="Password" name="password" type="password" />
        <Field noMargin label="Password Repeat" name="confirmPassword" type="password" />
    </CampaignAuthForm>
);
