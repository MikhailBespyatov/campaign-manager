import { wrapperVerticalMargin } from 'components/Layouts/ResultLayouts/CampaignEmpty/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
    margin: ${wrapperVerticalMargin} auto;
`;
