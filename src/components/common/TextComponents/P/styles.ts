import { secondaryColor } from 'constants/styles';
import styled from 'styled-components';
import { TextProperties } from 'types';

export const P = styled.p<TextProperties>`
    ${({ noWrap }) => (noWrap ? 'white-space: nowrap' : '')};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${({ color }) => (color ? color : secondaryColor)};
    margin: 0;
`;
