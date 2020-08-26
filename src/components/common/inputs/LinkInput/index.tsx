import errorImg from 'assets/img/error.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { absoluteIconRight, absoluteIconTop, iconDiameter } from 'components/common/inputs/LinkInput/constants';
import { ErrorSpan, InputWrapper, Label, StyledInput, Wrapper } from 'components/common/inputs/LinkInput/styles';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import React, { ChangeEvent } from 'react';
import { defaultAlt } from '../../../../constants';

interface Props {
    error: string;
    value: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
    label: string;
    name: string;
    type?: string;
    disabled?: boolean;
}

export const LinkInput = ({ error, value, onChange, label, name, type = name, disabled = false }: Props) => (
    <Wrapper>
        <Label error={!!error}>{label}</Label>
        <InputWrapper disabled={disabled} error={!!error}>
            <StyledInput disabled={disabled} name={name} type={type} value={value} onChange={onChange} />
            {error && (
                <AbsoluteWrapper right={absoluteIconRight} top={absoluteIconTop}>
                    <CustomImg alt={defaultAlt} height={iconDiameter} src={errorImg} width={iconDiameter} />
                </AbsoluteWrapper>
            )}
        </InputWrapper>
        {<ErrorSpan>{error}</ErrorSpan>}
    </Wrapper>
);
