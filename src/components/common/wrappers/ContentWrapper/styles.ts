import {
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/common/wrappers/ContentWrapper/constants';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    min-width: 100%;
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    border-radius: ${wrapperBorderRadius};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
`;