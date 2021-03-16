import { Span } from 'components/common/typography/Span';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import {
    calculatePopoverArrowLeft,
    calculatePopoverArrowTop,
    calculatePopoverLeft,
    calculatePopoverTop
} from 'components/modals/LogOutPopover/constants';
import { PopoverAbsoluteWrapper, PopoverArrow } from 'components/modals/LogOutPopover/styles';
import { red } from 'constants/styles';
import { useCloseClick } from 'hooks/closeClick';
import { useRefWidthAndHeight } from 'hooks/getRefProperty';
import { useModal } from 'hooks/modal';
import React, { FC, MouseEvent as MouseEventReact, useRef } from 'react';
import { userEvents } from 'stores/user';

export interface LogOutPopoverProps {}

export const LogOutPopover: FC<LogOutPopoverProps> = ({ children }) => {
    const { visible, close, open } = useModal();
    const childrenRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const childrenProperty = useRefWidthAndHeight(childrenRef);
    const childrenWidth = childrenProperty[0] + 'px';
    const childrenHeight = childrenProperty[1] + 'px';
    const popoverArrowLeft = calculatePopoverArrowLeft(childrenWidth);
    const popoverArrowTop = calculatePopoverArrowTop(childrenHeight);
    const popoverLeft = calculatePopoverLeft(childrenWidth, '95px');
    const popoverTop = calculatePopoverTop(childrenHeight);

    const openPopover = (e: MouseEventReact<HTMLDivElement>) => {
        e.stopPropagation();
        !visible && open();
    };

    const onClick = () => userEvents.logout();

    useCloseClick(childrenRef, close, visible);

    return (
        <RelativeWrapper ref={childrenRef} height="auto" width="fit-content" onClick={openPopover}>
            {visible && (
                <>
                    <PopoverAbsoluteWrapper ref={popoverRef} left={popoverLeft} top={popoverTop}>
                        <ClickableWrapper height="100%" width="100%" onClick={onClick}>
                            <Span noWrap color={red} fontSize="12px">
                                Log Out
                            </Span>
                        </ClickableWrapper>
                    </PopoverAbsoluteWrapper>
                    <PopoverArrow left={popoverArrowLeft} top={popoverArrowTop} />
                </>
            )}
            {children}
        </RelativeWrapper>
    );
};
