import arrowDown from 'assets/icons/arrow_down.svg';
import { arrowHeight, arrowWidth } from 'components/common/buttons/SortSelectorButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { OpacityActiveEffect } from 'components/dynamic/effects/styles';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { useSortToggle } from 'hooks/toggle';
import React from 'react';
import { Active, MarginRightBottom } from 'types';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';

export interface Props extends MarginRightBottom, Active {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    children: string;
}

export const SortSelectorButton = ({ onClick, children }: Props) => {
    const [arrowState, toggleActiveArrow] = useSortToggle();

    const handleClick = () => {
        toggleActiveArrow();
        //onClick();
    };

    return (
        <ClickableWrapper width="100%" onClick={handleClick}>
            <Row alignCenter noWrap>
                <Column alignCenter>
                    <OpacityActiveEffect active={arrowState === 'top'}>
                        <CustomImg
                            alt="Arrow up"
                            height={arrowHeight}
                            rotate={180}
                            src={arrowDown}
                            width={arrowWidth}
                        />
                    </OpacityActiveEffect>

                    <OpacityActiveEffect active={arrowState === 'bottom'}>
                        <CustomImg alt="Arrow down" height={arrowHeight} src={arrowDown} width={arrowWidth} />
                    </OpacityActiveEffect>
                </Column>
                <MarginWrapper marginLeft="5px">{children}</MarginWrapper>
            </Row>
        </ClickableWrapper>
    );
};
