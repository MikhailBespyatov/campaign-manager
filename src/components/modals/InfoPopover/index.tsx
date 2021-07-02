import { Span } from 'components/common/typography/Span';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import {
    calculatePopoverArrowRight,
    calculatePopoverArrowTop,
    calculatePopoverShift,
    calculatePopoverTop,
    PopoverType
} from 'components/modals/InfoPopover/constants';
import { PopoverAbsoluteWrapper, PopoverArrow } from 'components/modals/InfoPopover/styles';
import { useRefWidthAndHeight } from 'hooks/getRefProperty';
import { useModal } from 'hooks/modal';
import React, { FC, MouseEvent as MouseEventReact, useRef } from 'react';
import { BackgroundColor, Sizes } from 'types';

export interface InfoPopoverProps extends BackgroundColor, Pick<Sizes, 'width'> {
    popoverText: string;
    type?: PopoverType;
}

export const InfoPopover: FC<InfoPopoverProps> = ({ children, popoverText, backgroundColor, width, type = 'left' }) => {
    const { visible, close, open } = useModal();
    const childrenRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const [childrenWidth, childrenHeight] = useRefWidthAndHeight(childrenRef);
    const popoverArrowRight = calculatePopoverArrowRight(childrenWidth);
    const popoverArrowTop = calculatePopoverArrowTop(childrenHeight);

    const popoverTop = calculatePopoverTop(childrenHeight);
    const popoverHorizontalPosition = calculatePopoverShift(childrenWidth);

    const togglePopover = (e: MouseEventReact<HTMLDivElement>) => {
        e.stopPropagation();
        !visible ? open() : close();
    };

    return (
        <RelativeWrapper
            ref={childrenRef}
            height="auto"
            width="fit-content"
            onMouseLeave={togglePopover}
            onMouseOver={togglePopover}
        >
            {visible && (
                <>
                    <PopoverAbsoluteWrapper
                        ref={popoverRef}
                        backgroundColor={backgroundColor}
                        horizontalPosition={popoverHorizontalPosition}
                        top={popoverTop}
                        type={type}
                        width={width}
                    >
                        <Span fontSize="12px" fontWeight="400">
                            {popoverText}
                        </Span>
                    </PopoverAbsoluteWrapper>
                    <PopoverArrow borderColor={backgroundColor} right={popoverArrowRight} top={popoverArrowTop} />
                </>
            )}
            {children}
        </RelativeWrapper>
    );
};
