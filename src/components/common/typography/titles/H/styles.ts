import { h1Margin, h2Margin, h3Margin, h4Margin } from 'components/common/typography/titles/H/constants';
import { grey1, secondaryColor } from 'constants/styles';
import styled from 'styled-components';

export const H1 = styled.h1`
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.25px;
    color: ${grey1};
    margin: 0;
    margin-right: ${h1Margin};
    margin-bottom: ${h1Margin};
`;

export const H2 = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.2px;
    color: ${grey1};
    margin: 0;
    margin-right: ${h2Margin};
    margin-bottom: ${h2Margin};
`;

export const H3 = styled.h1`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: ${secondaryColor};
    margin: 0;
    // margin-right: ${h3Margin};
    // margin-bottom: ${h3Margin};
`;

export const H4 = styled.h1`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.15px;
    color: ${grey1};
    margin: 0;
    margin-right: ${h4Margin};
    margin-bottom: ${h4Margin};
`;
