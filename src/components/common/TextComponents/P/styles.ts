import { pMargin } from 'components/common/TextComponents/P/constants';
import styled from 'styled-components';
import { grey1 } from '../../../../constants';

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.133333px;
    color: ${grey1};
    margin: 0;
    margin-right: ${pMargin};
    margin-bottom: ${pMargin};
`;
