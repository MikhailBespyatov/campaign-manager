import React, { FC } from 'react';
import { DefaultValueBoolean, Disabled, OnChangeBoolean } from 'types';
import { ItemSelectorWrapper, ItemSpan } from './styles';
import checkedIcon from 'assets/img/checked_blue.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Noop } from 'constants/global';

export interface RadioProps extends DefaultValueBoolean, Disabled, OnChangeBoolean {}

export const Radio: FC<RadioProps> = ({ children, defaultValue, disabled, onChange = Noop }) => {
    const onClick = () => onChange(!defaultValue);

    return (
        <ItemSelectorWrapper alignCenter justifyBetween checked={defaultValue} onClick={onClick}>
            <ItemSpan>{children}</ItemSpan>
            {defaultValue && <CustomImg height="6px" src={checkedIcon} width="11px" />}
        </ItemSelectorWrapper>
    );
};
