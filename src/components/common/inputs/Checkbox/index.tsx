import { polylinePoints, viewBoxSizes } from 'components/common/inputs/Checkbox/constants';
import {
    Checkbox as HiddenCheckbox,
    Icon,
    Label,
    Span,
    StyledCheckbox,
    Wrapper
} from 'components/common/inputs/Checkbox/styles';
import { noop } from 'constants/global';
import React, { useEffect, useState } from 'react';
import { DefaultChecked, Disabled } from 'types';

interface Props extends DefaultChecked, Disabled {
    onChange?: (value: string, checked: boolean) => void;
    value: string;
    name?: string;
}

export const Checkbox = ({
    defaultChecked = false,
    disabled = false,
    onChange = noop,
    name = 'name',
    value
}: Props) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onCheckboxChange = () => setChecked(!checked);

    useEffect(() => {
        onChange(value, checked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    return (
        <Wrapper>
            <Label>
                <StyledCheckbox checked={checked} disabled={disabled}>
                    <Icon viewBox={viewBoxSizes}>
                        <polyline points={polylinePoints} />
                    </Icon>
                </StyledCheckbox>
                <HiddenCheckbox checked={checked} disabled={disabled} name={name} onChange={onCheckboxChange} />
                <Span checked={checked} disabled={disabled}>
                    {value}
                </Span>
            </Label>
        </Wrapper>
    );
};
