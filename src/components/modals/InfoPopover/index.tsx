import { Span } from 'components/common/typography/Span';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import {
    calculatePopoverArrowRight,
    calculatePopoverArrowTop,
    calculatePopoverRight,
    calculatePopoverTop
} from 'components/modals/InfoPopover/constants';
import { PopoverAbsoluteWrapper, PopoverArrow } from 'components/modals/InfoPopover/styles';
import { useRefWidthAndHeight } from 'hooks/getRefProperty';
import { useModal } from 'hooks/modal';
import React, { FC, MouseEvent as MouseEventReact, useRef } from 'react';

export interface InfoPopoverProps {
    popoverText: string;
}

export const InfoPopover: FC<InfoPopoverProps> = ({ children, popoverText }) => {
    const { visible, close, open } = useModal();
    const childrenRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const [childrenWidth, childrenHeight] = useRefWidthAndHeight(childrenRef);
    const popoverArrowRight = calculatePopoverArrowRight(childrenWidth);
    const popoverArrowTop = calculatePopoverArrowTop(childrenHeight);
    const popoverRight = calculatePopoverRight(childrenWidth);
    const popoverTop = calculatePopoverTop(childrenHeight);

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
                    <PopoverAbsoluteWrapper ref={popoverRef} right={popoverRight} top={popoverTop}>
                        <Span fontSize="12px" fontWeight="400">
                            {popoverText}
                        </Span>
                    </PopoverAbsoluteWrapper>
                    <PopoverArrow right={popoverArrowRight} top={popoverArrowTop} />
                </>
            )}
            {children}
        </RelativeWrapper>
    );
};
