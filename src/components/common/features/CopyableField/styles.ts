import { Span } from 'components/common/typography/Span';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { ellipsisMixin, white } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor } from 'types';

export const CopyableFieldWrapper = styled(ContentWrapper)<BackgroundColor>`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    overflow: hidden;
`;

export const CopyableFieldSpan = styled(Span)`
    max-width: 350px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    ${ellipsisMixin};
`;
