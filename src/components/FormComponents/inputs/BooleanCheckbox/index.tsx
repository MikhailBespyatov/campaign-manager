import { polylinePoints, viewBoxSizes } from 'components/FormComponents/inputs/BooleanCheckbox/constants';
import {
    Checkbox as HiddenCheckbox,
    Icon,
    Label,
    StyledCheckbox,
    Wrapper
} from 'components/FormComponents/inputs/BooleanCheckbox/styles';
import { Noop } from 'constants/global';
import React, { useState } from 'react';
import { DefaultChecked, Disabled } from 'types';

interface Props extends DefaultChecked, Disabled {
    onChange?: (checked: boolean) => void;
    name?: string;
}

export const BooleanCheckbox = ({
    defaultChecked = false,
    disabled = false,
    onChange = Noop,
    name = 'name'
}: Props) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onCheckboxChange = () => {
        setChecked(!checked);
        onChange(!checked);
    };

    return (
        <Wrapper>
            <Label>
                <StyledCheckbox checked={checked} disabled={disabled}>
                    <Icon viewBox={viewBoxSizes}>
                        <polyline points={polylinePoints} />
                    </Icon>
                </StyledCheckbox>
                <HiddenCheckbox checked={checked} disabled={disabled} name={name} onChange={onCheckboxChange} />
            </Label>
        </Wrapper>
    );
};
