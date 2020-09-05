import { hrBackground, hrHeight, hrMarginBottom } from 'components/common/dividers/Hr/constants';
import styled from 'styled-components';

export const Hr = styled.hr`
    width: 100%;
    height: ${hrHeight};
    border: none;
    background: ${hrBackground};
    margin-bottom: ${hrMarginBottom};
`;
