import { Ball, Wrapper } from 'components/common/inputs/Switch/styles';
import React, { FC, useEffect, useState } from 'react';
import { noop } from '../../../../constants';

interface Props {
    onChange?: (active: boolean) => void;
    defaultState?: boolean;
}

export const Switch: FC<Props> = ({ onChange = noop, defaultState = false }) => {
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
