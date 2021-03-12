import arrowDown from 'assets/icons/arrow_down.svg';
import {
    arrowHeight,
    arrowWidth,
    sortButtonHeight,
    sortButtonWidth
} from 'components/common/buttons/SortSelectorButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { OpacityActiveEffect } from 'components/dynamic/effects/styles';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { useSortToggle } from 'hooks/toggle';
import React from 'react';
import { Active, MarginRightBottom } from 'types';

export interface Props extends MarginRightBottom, Active {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export const SortSelectorButton = ({ onClick }: Props) => {
    const [arrowState, toggleActiveArrow] = useSortToggle();

    const handleClick = () => {
        toggleActiveArrow();
        //onClick();
    };

    return (
        <ClickableWrapper height={sortButtonHeight} width={sortButtonWidth} onClick={handleClick}>
            <Column alignCenter>
                <OpacityActiveEffect active={arrowState === 'top'}>
                    <CustomImg alt="Arrow up" height={arrowHeight} rotate={180} src={arrowDown} width={arrowWidth} />
                </OpacityActiveEffect>

                <OpacityActiveEffect active={arrowState === 'bottom'}>
                    <CustomImg alt="Arrow down" height={arrowHeight} src={arrowDown} width={arrowWidth} />
                </OpacityActiveEffect>
            </Column>
        </ClickableWrapper>
    );
};
