import { wrapperHeight, wrapperWidth } from 'components/common/inputs/RowHeaderRadio/constants';
import { RadioProps } from 'components/common/inputs/RowHeaderRadio/types';
import styled from 'styled-components';

export const Radio = styled.div<RadioProps>`
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 16px;
    ${({ active, theme: { primaryColor } }) => active && `background-color: ${primaryColor}`}
`;
