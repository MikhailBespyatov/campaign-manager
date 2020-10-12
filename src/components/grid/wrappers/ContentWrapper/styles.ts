import {
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHorizontalPadding,
    wrapperMarginTop,
    wrapperVerticalPadding
} from 'components/grid/wrappers/ContentWrapper/constants';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    min-width: 100%;
    //border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    //border-radius: ${wrapperBorderRadius};
    //padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    margin-top: ${wrapperMarginTop};
`;
