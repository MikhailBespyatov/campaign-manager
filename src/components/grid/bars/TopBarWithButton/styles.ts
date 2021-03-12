import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperVerticalPadding
} from 'components/grid/bars/TopBarWithButton/constants';
import { flexStart, pageHorizontalPadding } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexStart};
    align-items: center;
    width: 100%;
    height: ${wrapperHeight};
    border-top-left-radius: ${wrapperBorderRadius};
    border-top-right-radius: ${wrapperBorderRadius};
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${pageHorizontalPadding};
    //padding-bottom: 0;
`;
