import organizationLogo from 'assets/img/organization_logo.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { logoDiameter } from 'components/FormComponents/Form/constants';
import { FormWrapper, H1Form, PForm, Wrapper } from 'components/FormComponents/Form/style';
import React, { FC } from 'react';
import { Title, WithSrc } from 'types';
import { defaultImgAlt, noop } from '../../../constants';

interface Props extends Title, WithSrc {
    onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const Form: FC<Props> = ({
    children,
    title = 'Hello @adidas',
    subtitle = 'to discover & manage WOM Content',
    onSubmit = noop,
    src = organizationLogo
}) => (
    <Wrapper>
        <CustomImg alt={defaultImgAlt} borderRadius="14px" height={logoDiameter} src={src} width={logoDiameter} />
        <H1Form>{title}</H1Form>
        <PForm>{subtitle}</PForm>
        <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
    </Wrapper>
);
