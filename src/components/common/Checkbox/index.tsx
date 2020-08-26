import {
    Checkbox as HiddenCheckbox,
    Icon,
    Label,
    Span,
    StyledCheckbox,
    Wrapper
} from 'components/common/Checkbox/styles';
import React from 'react';

interface Props {
    checked: boolean;
    disabled?: boolean;
    onChange?: () => void;
    label?: string;
}

export const Checkbox = ({ checked, disabled = false, onChange, label = 'some label' }: Props) => (
    <Wrapper>
        <Label>
            <StyledCheckbox checked={checked} disabled={disabled}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <HiddenCheckbox checked={checked} disabled={disabled} onChange={onChange} />
            <Span checked={checked} disabled={disabled}>
                {label}
            </Span>
        </Label>
    </Wrapper>
);
