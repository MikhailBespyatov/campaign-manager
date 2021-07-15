import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { ellipsisMixin, grey12, grey13, grey14 } from 'constants/styles';
import styled from 'styled-components';
import { AbsoluteLocation, Pointer } from 'types';
import { arrowBorder, selectorWrapperHorizontalPadding } from './constants';

export const SelectorWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${grey12};
    border: 1px solid ${grey13};
    border-radius: 32px;
    padding: 0 ${selectorWrapperHorizontalPadding};
    cursor: pointer;
`;

interface Ellipsis {
    ellipsis?: boolean;
}

export const TitleSpan = styled.span<Ellipsis>`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    white-space: nowrap;
    ${({ ellipsis }) => ellipsis && ellipsisMixin};
`;

interface SelectorBorderWrapper extends Pointer {}

export const SelectorBorderWrapper = styled(ContentWrapper)<SelectorBorderWrapper>`
    border: 1px solid ${grey14};
    ${({ pointer }) => pointer && 'cursor: pointer;'};
`;

export const ItemsWrapper = styled(SelectorBorderWrapper)<Pick<AbsoluteLocation, 'left'>>`
    position: relative;
    height: fit-content;
    max-height: 60vh;
    overflow-y: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :before,
    :after {
        content: '';
        position: absolute;
        left: ${({ left }) => left || '20px'};
        top: -20px;
        border: ${arrowBorder} solid transparent;
        border-bottom: ${arrowBorder} solid ${grey14};
    }
    :after {
        border-bottom: ${arrowBorder} solid white;
        top: -19px;
    }
`;

export const SelectorItemSpan = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
`;

export const CheckboxItem = styled.input``;
