import {
    spanColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/inputs/LanguageSwitch/constants';
import { Ball, Wrapper } from 'components/common/inputs/LanguageSwitch/styles';
import { Span } from 'components/common/typography/Span';
import { Noop } from 'constants/global';
import { white } from 'constants/styles';
import React, { FC, useEffect, useState } from 'react';

interface Props {
    onChange?: (active: boolean) => void;
    defaultState?: boolean;
}

export const LanguageSwitch: FC<Props> = ({ onChange = Noop, children, defaultState = false }) => {
    const [value, setValue] = useState(defaultState);

    const onClick = () => setValue(!value);

    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper active={value} onClick={onClick}>
            <Span
                color={value ? white : spanColor}
                fontSize={spanFontSize}
                fontWeight={spanFontWeight}
                lineHeight={spanLineHeight}
            >
                {children}
            </Span>
            <Ball active={value} />
        </Wrapper>
    );
};
