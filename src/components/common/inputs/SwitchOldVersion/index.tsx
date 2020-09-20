import { Ball, Wrapper } from 'components/common/inputs/SwitchOldVersion/styles';
import { noop } from 'constants/global';
import React, { FC, useEffect, useState } from 'react';

interface Props {
    onChange?: (active: boolean) => void;
    defaultState?: boolean;
}

export const SwitchOldVersion: FC<Props> = ({ onChange = noop, defaultState = false }) => {
    const [value, setValue] = useState(defaultState);

    const onClick = () => setValue(!value);

    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper active={value} onClick={onClick}>
            <Ball active={value} />
        </Wrapper>
    );
};
