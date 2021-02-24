import React, { useEffect } from 'react';
import { HiddenCheckbox, Label, VisibleCheckbox, Wrapper } from './styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { checkMarkIconHeight, checkMarkIconWidth } from 'components/common/inputs/NewDesign/Checkbox/constants';
import { DefaultValueBoolean, Disabled, OnChangeBoolean } from 'types';
import { Noop } from 'constants/global';
import checkmarkIcon from 'assets/img/checkmark_icon.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { useToggle } from 'hooks/toggle';

export interface CheckboxProps extends DefaultValueBoolean, Disabled, OnChangeBoolean {
    name?: string;
    checked?: boolean;
}

export const Checkbox = ({ defaultValue = false, disabled = false, onChange = Noop, name = 'name' }: CheckboxProps) => {
    const [checked, toggleChecked] = useToggle();

    const onCheckboxChange = () => {
        toggleChecked();
        onChange(!checked);
    };

    useEffect(() => {
        checked !== defaultValue && toggleChecked();
        //for change "checked" only when defaultValue is changed outside
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);

    return (
        <Wrapper>
            <Label>
                <VisibleCheckbox checked={checked} disabled={disabled}>
                    <AbsoluteWrapper bottom="4px" left="4px">
                        <CustomImg
                            alt="Checkbox"
                            height={checkMarkIconHeight}
                            src={checkmarkIcon}
                            width={checkMarkIconWidth}
                        />
                    </AbsoluteWrapper>
                </VisibleCheckbox>
                <HiddenCheckbox checked={checked} disabled={disabled} name={name} onChange={onCheckboxChange} />
            </Label>
        </Wrapper>
    );
};
