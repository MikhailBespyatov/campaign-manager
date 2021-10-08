import { Span } from 'components/common/typography/Span';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { blue, flexCenter, grey20, white } from 'constants/styles';
import styled from 'styled-components';

export const Title = styled(Span)`
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
`;

export const ResetButtonWrapper = styled.div`
    padding-top: 34px;
`;

export const ChartWrapper = styled(Section)`
    position: relative;
    padding-top: 24px;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 33px;
    margin-bottom: 16px;

    background-color: ${white};
`;

export const GroupByWeekWrapper = styled.div`
    ${flexCenter}
    width: 106px;
    height: 40px;

    background: ${white};
    border: 1px solid #d3d5dc;
    box-sizing: border-box;
    border-radius: 38px;

    :hover {
        border-color: ${blue};
        transition: border-color 0.3s;
    }
`;

export const StatsWrapper = styled.div`
    width: 100%;
    padding: 16px;
    margin-bottom: 77px;
    background-color: ${white};
`;

export const StatsItemWrapper = styled(Row)`
    width: 100%;
    padding: 16px;

    :hover {
        background-color: ${grey20};
    }
`;

export const EmptyWrapper = styled.div`
    ${flexCenter}
    width: 100%;
    height: 200px;
`;
