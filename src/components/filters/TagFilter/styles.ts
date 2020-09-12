import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/filters/TagFilter/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

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
