import {
    wrapperHeight,
    wrapperMarginRight,
    wrapperWidth
} from 'components/common/graphicComponents/ColorPromptLine/constants';
import { black } from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const Wrapper = styled.div<Background>`
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    margin-right: ${wrapperMarginRight};
    background: ${({ background }) => (background ? background : black)};
`;
