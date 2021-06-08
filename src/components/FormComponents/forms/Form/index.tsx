import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { logoDiameter } from 'components/FormComponents/forms/Form/constants';
import { FormWrapper, H1Form, PForm, Wrapper } from 'components/FormComponents/forms/Form/styles';
import { Noop } from 'constants/global';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { OffAutoComplete, Title, WithSrc } from 'types';

interface Props extends Title, WithSrc, OffAutoComplete {
    onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    subSubtitle?: string;
    h1MarginBottom?: string;
    customLogo?: string;
    customLogoDiameter?: string;
}

export const Form: FC<Props> = ({
    children,
    title = 'Please fill in the form',
    subtitle,
    onSubmit = Noop,
    src,
    // subSubtitle,
    h1MarginBottom,
    customLogoDiameter,
    customLogo,
    offAutoComplete
}) => {
    const { secondaryLogo } = useStore(themeStores.theme);

    const logoSrc = src ? src : secondaryLogo;

    return (
        <Wrapper>
            <CustomImg height={customLogoDiameter || logoDiameter} src={customLogo || logoSrc} />
            <H1Form marginBottom={h1MarginBottom || (!subtitle && '85px') || ''}>{title}</H1Form>
            {/* <PForm>{subtitle}</PForm> */}
            {subtitle && <PForm>{subtitle}</PForm>}
            <FormWrapper
                autoComplete={offAutoComplete ? 'off' : undefined}
                /*autoComplete="chrome-off"*/ onSubmit={onSubmit}
            >
                {children}
            </FormWrapper>
        </Wrapper>
    );
};
