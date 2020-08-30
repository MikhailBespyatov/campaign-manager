import { Label, Radio as HiddenRadio, Span, StyledRadio, Wrapper } from 'components/common/inputs/Radio/styles';
import React from 'react';

interface Props {
    checked: boolean;
    disabled?: boolean;
    onChange?: () => void;
    value?: string;
    name?: string;
}

export const Radio = ({ checked, disabled = false, onChange, value = 'some value', name = 'name' }: Props) => (
    <Wrapper>
        <Label>
            <StyledRadio checked={checked} disabled={disabled} />
            <HiddenRadio checked={checked} disabled={disabled} name={name} onChange={onChange} />
            <Span checked={checked} disabled={disabled}>
                {value}
            </Span>
        </Label>
    </Wrapper>
);
