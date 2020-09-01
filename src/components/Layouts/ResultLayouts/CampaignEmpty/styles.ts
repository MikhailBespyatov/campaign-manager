import { wrapperVerticalMargin } from 'components/Layouts/ResultLayouts/CampaignEmpty/constants';
import styled from 'styled-components';
import { flexCenter } from '../../../../constants';

export const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
    margin: ${wrapperVerticalMargin} auto;
`;
