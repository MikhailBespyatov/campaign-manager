import React, { ChangeEvent } from 'react';
import { StyledToggleButton } from './styles';
import { Disabled } from 'types';

export interface ToggleButtonProps extends Disabled {
    value?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleButton = ({ value, onChange, disabled }: ToggleButtonProps) => (
    <StyledToggleButton checked={value} disabled={disabled} type="checkbox" onChange={onChange} />
);
