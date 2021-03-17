import styled from 'styled-components';
import { headerHorizontalMargin } from 'components/grid/Header/constants';

export const VersionSpan = styled.span`
    position: absolute;
    right: ${headerHorizontalMargin};
    top: 2px;
    color: #ccc;
    font-size: 11px;
    box-sizing: border-box;
    padding-right: 5px;
    text-align: right;
`;
