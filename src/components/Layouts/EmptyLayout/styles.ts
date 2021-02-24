import styled from 'styled-components';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import emptyArrow from 'assets/img/empty_arrow.svg';

export const EmptyWrapper = styled(Section)`
    background: url(${emptyArrow});
    background-size: 40% 50%;
    background-position: top right -60px;
    background-repeat: no-repeat;
`;
