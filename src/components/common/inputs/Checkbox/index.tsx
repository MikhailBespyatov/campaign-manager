import {
    Checkbox as HiddenCheckbox,
    Icon,
    Label,
    Span,
    StyledCheckbox,
    Wrapper
} from 'components/common/inputs/Checkbox/styles';
import React from 'react';

interface Props {
    checked: boolean;
    disabled?: boolean;
    onChange?: () => void;
    value?: string;
    name?: string;
}

export const Checkbox = ({ checked, disabled = false, onChange, value = 'some value', name = 'name' }: Props) => (
    <Wrapper>
        <Label>
            <StyledCheckbox checked={checked} disabled={disabled}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <HiddenCheckbox checked={checked} disabled={disabled} name={name} onChange={onChange} />
            <Span checked={checked} disabled={disabled}>
                {value}
            </Span>
        </Label>
    </Wrapper>
);
