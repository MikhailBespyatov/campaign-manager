import checkmarkIcon from 'assets/img/checkmark_icon.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { checkMarkIconHeight, checkMarkIconWidth } from 'components/common/inputs/NewDesign/Checkbox/constants';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop } from 'constants/global';
import { primaryColor } from 'constants/styles';
import { useToggle } from 'hooks/toggle';
import React, { useEffect } from 'react';
import { DefaultValueBoolean, Disabled, OnChangeBoolean } from 'types';
import { HiddenCheckbox, Label, VisibleCheckbox, Wrapper } from './styles';

export interface CheckboxProps extends DefaultValueBoolean, Disabled, OnChangeBoolean {
    name?: string;
    checked?: boolean;
    label?: string;
}

export const Checkbox = ({
    defaultValue = false,
    disabled = false,
    onChange = Noop,
    name = 'name',
    label
}: CheckboxProps) => {
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
                {label && (
                    <MarginWrapper marginLeft="8px">
                        <Span pointer color={primaryColor} fontSize="12px" lineHeight="15px">
                            {label}
                        </Span>
                    </MarginWrapper>
                )}
            </Label>
        </Wrapper>
    );
};
