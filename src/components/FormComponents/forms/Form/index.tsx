import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { logoDiameter } from 'components/FormComponents/forms/Form/constants';
import { FormWrapper, H1Form, PForm, Wrapper } from 'components/FormComponents/forms/Form/styles';
import { noop } from 'constants/global';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { Title, WithSrc } from 'types';

interface Props extends Title, WithSrc {
    onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    subSubtitle?: string;
}

export const Form: FC<Props> = ({
    children,
    title = 'Hello, please enter as User',
    subtitle = 'To discover & manage WOM Content',
    onSubmit = noop,
    src,
    subSubtitle
}) => {
    const { logo } = useStore(themeStores.publicTheme);

    const logoSrc = src ? src : logo;

    return (
        <Wrapper>
            <CustomImg borderRadius="14px" height={logoDiameter} src={logoSrc} />
            <H1Form>{title}</H1Form>
            <PForm>{subtitle}</PForm>
            {subSubtitle && <PForm>{subSubtitle}</PForm>}
            <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
        </Wrapper>
    );
};
