import { Span } from 'components/common/typography/Span';
import {
    spanColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/Layouts/CampaignManagerLayout/constants';
import styled from 'styled-components';

export const ContentText = styled(Span)`
    color: ${spanColor};
    font-size: ${spanFontSize};
    font-weight: ${spanFontWeight};
    line-height: ${spanLineHeight};
`;
