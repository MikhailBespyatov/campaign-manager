import { InternalLink } from 'components/common/links/InternalLink';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { routes } from 'constants/routes';
import { white } from 'constants/styles';
import React from 'react';

export const FormSignUpLink = () => (
    <MarginWrapper marginLeft="auto" marginRight="auto" marginTop="20px">
        <InternalLink color={white} fontSize="18px" fontWeight="500" lineHeight="22px" to={routes.signUp.index}>
            New here ? Create an Account now!
        </InternalLink>
    </MarginWrapper>
);
