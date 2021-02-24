import styled from 'styled-components';
import { black } from 'constants/styles';

export const LineWrapper = styled.div`
    flex-grow: 1;
`;
export const Line = styled.div`
    width: 100%;
    box-sizing: border-box;
    //display: inline-block;
    height: 1px;
    vertical-align: middle;
    background-color: ${black};
    opacity: 0.2;
`;
