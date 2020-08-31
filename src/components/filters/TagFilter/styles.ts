import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/filters/TagFilter/constants';
import styled from 'styled-components';
import { flexCenter } from '../../../constants';

export const Wrapper = styled.div`
    width: ${wrapperWidth};
    ${flexCenter};
    justify-content: flex-start;
    flex-direction: row;
    min-height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
`;
