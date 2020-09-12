import defaultLogo from 'assets/img/form_logo_1.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { logoDiameter } from 'components/FormComponents/Form/constants';
import { FormWrapper, H1Form, PForm, Wrapper } from 'components/FormComponents/Form/style';
import { noop } from 'constants/global';
import React, { FC } from 'react';
import { Title, WithSrc } from 'types';

interface Props extends Title, WithSrc {
    onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const Form: FC<Props> = ({
    children,
    title = 'Hello @adidas',
    subtitle = 'to discover & manage WOM Content',
    onSubmit = noop,
    src = defaultLogo
}) => (
    <Wrapper>
        <CustomImg borderRadius="14px" height={logoDiameter} src={src} width={logoDiameter} />
        <H1Form>{title}</H1Form>
        <PForm>{subtitle}</PForm>
        <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
    </Wrapper>
);
