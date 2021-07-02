import { Column } from 'components/grid/wrappers/FlexWrapper';
import { wrapperVerticalMargin } from 'components/Layouts/ResultLayouts/CampaignEmpty/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const CampaignEmptyWrapper = styled(Column)`
    width: 100%;
    ${flexCenter};
    margin: ${wrapperVerticalMargin} auto;
`;
