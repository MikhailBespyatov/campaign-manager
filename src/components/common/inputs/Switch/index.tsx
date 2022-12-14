import { Ball, Wrapper } from 'components/common/inputs/Switch/styles';
import { Noop } from 'constants/global';
import React, { FC, useState } from 'react';

interface Props {
    onChange?: (active: boolean) => void;
    defaultState?: boolean;
}

export const Switch: FC<Props> = ({ onChange = Noop, defaultState = false }) => {
    const [value, setValue] = useState(defaultState);

    const onClick = () => {
        setValue(!value);
        onChange(!value);
    };

    return (
        <Wrapper active={value} onClick={onClick}>
            <Ball active={value} />
        </Wrapper>
    );
};
