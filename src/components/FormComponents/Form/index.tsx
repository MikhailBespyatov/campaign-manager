import organizationLogo from 'assets/img/organization_logo.svg';
import { logoDiameter } from 'components/FormComponents/Form/constants';
import { CustomImgForm, FormWrapper, H1Form, PForm, Wrapper } from 'components/FormComponents/Form/style';
import React, { FC } from 'react';
import { defaultImgAlt } from '../../../constants';

interface Props {
    title?: string;
    subtitle?: string;
}

export const Form: FC<Props> = ({
    children,
    title = 'Hello @adidas',
    subtitle = 'to discover & manage WOM Content'
}) => (
    <Wrapper>
        <CustomImgForm alt={defaultImgAlt} height={logoDiameter} src={organizationLogo} width={logoDiameter} />
        <H1Form>{title}</H1Form>
        <PForm>{subtitle}</PForm>
        <FormWrapper>{children}</FormWrapper>
    </Wrapper>
);
