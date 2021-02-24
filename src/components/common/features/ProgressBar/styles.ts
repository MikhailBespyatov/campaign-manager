import styled, { css } from 'styled-components';
import { blue, flexStart } from 'constants/styles';
import {
    activePointBackgroundColor,
    donePointItemBackgroundColor,
    donePointItemBorderColor,
    donePointItemDiameter,
    donePointItemLeft,
    donePointItemTop,
    inactivePointBackgroundColor,
    linePointItemHeight,
    linePointItemTop,
    pointItemDiameter,
    pointItemLeft,
    pointItemTop,
    progressBarHorizontalPadding,
    progressBarItemLineHeight
} from 'components/common/features/ProgressBar/constants';
import { Active } from 'types';
import doneIcon from 'assets/img/greenDoneIcon.svg';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { Span } from 'components/common/typography/Span';

export const Wrapper = styled(ContentWrapper)`
    overflow: hidden;
    width: 100%;
`;

export const ProgressBarList = styled.ul`
    list-style-type: none;
    ${flexStart};
    width: 100%;
    justify-content: space-around;
    position: relative;
    &:after {
        content: '';
        height: ${linePointItemHeight};
        width: 200px;
        display: block;
        position: absolute;
        background-color: ${inactivePointBackgroundColor};
        top: ${linePointItemTop};
        right: -${progressBarHorizontalPadding};
    }
`;

interface ProgressBarItemProps extends Active {
    lineHeight?: string;
    done?: boolean;
}

const donePoint = css`
    visibility: visible;
    background: url(${doneIcon}) ${donePointItemBackgroundColor} 6px;
    background-repeat: no-repeat;
    border: 1px solid ${donePointItemBorderColor};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
    width: ${donePointItemDiameter};
    height: ${donePointItemDiameter};
    top: ${donePointItemTop};
    left: ${donePointItemLeft};
    z-index: 4;
`;

export const ItemSpan = styled(Span)`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: ${progressBarItemLineHeight};
    opacity: 0.3;
`;

export const ProgressBarItem = styled.li<ProgressBarItemProps>`
    position: relative;

    ${ItemSpan} {
        ${({ done, active }) => (done || active) && 'opacity: 1;'}
        ${({ active }) => active && `color: ${blue};`}
    }

    &:before {
        content: '';
        height: ${pointItemDiameter};
        width: ${pointItemDiameter};
        background-color: ${activePointBackgroundColor};
        border: 1px solid ${inactivePointBackgroundColor};
        ${({ active }) => !active && 'visibility: hidden;'};
        display: block;
        border-radius: 50%;
        position: absolute;
        left: ${pointItemLeft};
        top: ${pointItemTop};
        z-index: 1;

        ${({ done }) => done && donePoint}
    }

    &:after {
        content: '';
        height: ${linePointItemHeight};
        width: 1000px;
        display: block;
        position: absolute;
        background-color: ${({ active }) => (active ? activePointBackgroundColor : inactivePointBackgroundColor)};
        ${({ active }) => active && 'z-index: 2;'};
        top: ${linePointItemTop};
        right: 50%;

        ${({ done }) =>
            done &&
            css`
                background-color: ${donePointItemBorderColor};
                z-index: 3;
            `}
    }
`;
