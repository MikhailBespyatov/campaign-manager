import {
    Ball,
    HiddenCheckbox,
    Label,
    StyledCheckbox,
    Wrapper
} from 'components/common/inputs/BooleanCircleCheckbox/styles';
import { noop } from 'constants/global';
import React, { useState } from 'react';
import { BooleanCheckbox } from 'types';

interface Props extends BooleanCheckbox {}

export const BooleanCircleCheckbox = ({ defaultChecked = false, disabled = false, onChange = noop, name }: Props) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onCheckboxChange = () => {
        setChecked(!checked);
        onChange(checked);
    };

    return (
        <Wrapper>
            <Label>
                <StyledCheckbox checked={checked} disabled={disabled}>
                    <Ball />
                </StyledCheckbox>
                <HiddenCheckbox checked={checked} disabled={disabled} name={name} onChange={onCheckboxChange} />
            </Label>
        </Wrapper>
    );
};
